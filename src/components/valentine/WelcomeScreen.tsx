import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-6xl mb-6"
        >
          💖
        </motion.div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 leading-tight">
          Welcome my beautiful
          <br />
          <span className="text-glow text-primary">lovely wifeeeee</span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-handwritten text-4xl md:text-6xl lg:text-7xl text-gold"
          >
            Hanumanta
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-muted-foreground text-lg md:text-xl font-body mt-4"
        >
          I made something special just for you 🌹
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mb-10"
      >
        <CountdownTimer />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="bg-glow-gradient text-primary-foreground px-10 py-4 rounded-full text-xl font-semibold shadow-glow animate-pulse-glow font-body"
      >
        👉 Start Our Love Story
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
