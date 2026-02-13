import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HiddenSurprise = () => {
  const [revealed, setRevealed] = useState(false);

  const secretLetter = `My Dearest Love,

If you found this hidden heart, it means you truly explored every corner of this little world I made for you. Just like how you explore every corner of my heart.

You are the most amazing person I have ever known. Your strength, your kindness, your beautiful soul — everything about you makes me fall deeper in love each day.

I want you to know that no matter what happens, no matter where life takes us, I will always be here. Loving you. Choosing you. Every single day.

You are my forever, my always, my everything.

I love you more than all the stars in the sky. 💖

Forever Yours ✨`;

  return (
    <>
      {/* Tiny floating heart button */}
      <motion.button
        animate={{
          y: [0, -5, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        onClick={() => setRevealed(true)}
        className="fixed bottom-6 right-6 z-50 text-lg cursor-pointer"
        title="?"
      >
        💗
      </motion.button>

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
                  Secret Letter Unlocked!
                </h3>
              </div>
              <p className="font-handwritten text-xl text-foreground whitespace-pre-line leading-relaxed">
                {secretLetter}
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
