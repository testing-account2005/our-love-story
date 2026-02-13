import { motion } from "framer-motion";

const memories = [
  { id: 1, caption: "Our beautiful moments 💕", emoji: "📸" },
  { id: 2, caption: "Together forever 💖", emoji: "🥰" },
  { id: 3, caption: "My favorite person 🌹", emoji: "💑" },
  { id: 4, caption: "Love of my life ✨", emoji: "💗" },
  { id: 5, caption: "Us against the world 💪", emoji: "🌍" },
  { id: 6, caption: "Perfect together 🎉", emoji: "💞" },
];

interface MemoryGalleryProps {
  onContinue: () => void;
}

const MemoryGallery = ({ onContinue }: MemoryGalleryProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-4"
      >
        Our Memory Gallery 📸
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground font-body text-center mb-10"
      >
        Every moment with you is a treasure 💖
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full mb-10">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 40, rotate: Math.random() * 10 - 5 }}
            animate={{ opacity: 1, y: 0, rotate: Math.random() * 6 - 3 }}
            transition={{ delay: index * 0.2, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className="glass-rose rounded-lg overflow-hidden shadow-glow cursor-pointer"
          >
            {/* Polaroid-style frame */}
            <div className="bg-card/80 p-3 pb-8">
              <div className="aspect-square rounded-md flex items-center justify-center bg-muted/30 text-6xl mb-3">
                {memory.emoji}
              </div>
              <p className="text-sm font-handwritten text-foreground text-center">
                {memory.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-sm text-muted-foreground font-body text-center mb-6 italic"
      >
        Upload your real photos here to make it even more special! 📷
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onContinue}
        className="bg-glow-gradient text-primary-foreground px-8 py-4 rounded-full font-body font-semibold shadow-glow text-lg"
      >
        Continue to Forever 💖
      </motion.button>
    </div>
  );
};

export default MemoryGallery;
