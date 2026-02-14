import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const surprises = [
  {
    title: "Secret Letter Unlocked! 🔐",
    content: `My Dearest Love,

If you found this hidden heart, it means you truly explored every corner of this little world I made for you. Just like how you explore every corner of my heart.

You are the most amazing person I have ever known. Your strength, your kindness, your beautiful soul — everything about you makes me fall deeper in love each day.

I want you to know that no matter what happens, no matter where life takes us, I will always be here. Loving you. Choosing you. Every single day.

You are my forever, my always, my everything.

I love you more than all the stars in the sky, hanumanta. 💖

Forever Yours ✨`,
  },
  {
    title: "Hidden Love Note! 💌",
    content: `My Beautiful Kittu,

This is a secret just between us. Every time you find this message, I want you to know that somewhere in this world, someone loves you more than anything.

That someone is me. Always has been. Always will be.

You're my sunrise and my sunset, my first thought and my last dream.

I love you hanumanta, forever and always 💕`,
  },
  {
    title: "Surprise Memory! ✨",
    content: `Mere Jaan,

Did you know? Every moment I spend with you feels like magic. Like the universe conspired just to bring us together.

I love the way you laugh, the way you care, the way you make everything brighter just by being you.

You are my greatest adventure, baby girl. And this is just the beginning. 💖`,
  },
];

const HiddenSurprise = () => {
  const [revealed, setRevealed] = useState(false);
  const [sparkleMsg, setSparkleMsg] = useState<string | null>(null);
  const surpriseIdx = useRef(Math.floor(Math.random() * surprises.length));

  // Random sparkle reveals "I love you hanumanta"
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.03) {
        setSparkleMsg("I love you hanumanta ✨");
        setTimeout(() => setSparkleMsg(null), 2500);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = surprises[surpriseIdx.current];

  return (
    <>
      {/* Tiny floating heart button */}
      <motion.button
        animate={{
          y: [0, -5, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        onClick={() => {
          surpriseIdx.current = Math.floor(Math.random() * surprises.length);
          setRevealed(true);
        }}
        className="fixed bottom-6 right-6 z-50 text-lg"
        title="?"
      >
        💗
      </motion.button>

      {/* Random sparkle message */}
      <AnimatePresence>
        {sparkleMsg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 glass-rose rounded-full px-6 py-2 text-sm font-handwritten text-primary text-glow pointer-events-none"
          >
            {sparkleMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/90 backdrop-blur-md"
            onClick={() => setRevealed(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-rose rounded-3xl p-8 md:p-12 max-w-lg w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="text-center mb-4">
                <span className="text-4xl">🔐</span>
                <h3 className="text-xl font-display font-bold text-primary text-glow mt-2">
                  {current.title}
                </h3>
              </div>
              <p className="font-handwritten text-xl text-foreground whitespace-pre-line leading-relaxed">
                {current.content}
              </p>
              <button
                onClick={() => setRevealed(false)}
                className="mt-6 glass text-foreground px-6 py-2 rounded-full font-body text-sm mx-auto block"
              >
                Close 💖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HiddenSurprise;
