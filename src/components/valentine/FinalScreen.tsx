import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const FinalScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center max-w-2xl"
      >
        {/* Floating emojis */}
        <div className="flex justify-center gap-4 text-4xl mb-8">
          {["💖", "🌹", "💕", "✨", "💗"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, delay: i * 0.3, duration: 2 }}
            >
              {e}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6"
        >
          I will always love you
          <br />
          <span className="text-primary text-glow">my love…</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl font-handwritten text-gold text-glow-gold mb-8"
        >
          forever and ever 💖
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mb-8"
        >
          <CountdownTimer />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-muted-foreground font-body text-sm"
        >
          Made with all my love, just for you 🌹
          <br />
          Happy Valentine's Day, Hanumanta 💕
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.location.reload()}
          className="mt-8 glass text-foreground px-6 py-3 rounded-full font-body text-sm"
        >
          🔄 Experience Again
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FinalScreen;
