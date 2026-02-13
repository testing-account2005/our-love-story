import { motion } from "framer-motion";
import { themeDescriptions } from "@/data/loveMessages";
import { useTheme, ThemeKey } from "@/contexts/ThemeContext";

interface ThemeSelectionProps {
  onSelect: (theme: string) => void;
}

const themeKeys: ThemeKey[] = ["movie", "music", "spicy", "cute"];

const themeGradients: Record<string, string> = {
  movie: "from-slate-800/80 to-blue-900/80",
  music: "from-orange-900/80 to-amber-800/80",
  spicy: "from-red-900/80 to-pink-900/80",
  cute: "from-pink-300/80 to-purple-300/80",
};

const themeBorderGlow: Record<string, string> = {
  movie: "hover:shadow-[0_0_30px_hsl(210,70%,50%,0.4)]",
  music: "hover:shadow-[0_0_30px_hsl(35,70%,55%,0.4)]",
  spicy: "hover:shadow-[0_0_30px_hsl(340,100%,60%,0.4)]",
  cute: "hover:shadow-[0_0_30px_hsl(300,60%,70%,0.4)]",
};

const ThemeSelection = ({ onSelect }: ThemeSelectionProps) => {
  const { setTheme } = useTheme();

  const handleSelect = (key: ThemeKey) => {
    setTheme(key);
    onSelect(key);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          Choose Our Vibe 🎨
        </h2>
        <p className="text-muted-foreground font-body">Pick a theme for our love story tonight</p>
        <p className="text-xs text-muted-foreground font-body mt-2">🎵 Music will start playing with your choice!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {themeKeys.map((key, index) => {
          const theme = themeDescriptions[key];
          return (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(key)}
              className={`bg-gradient-to-br ${themeGradients[key]} ${themeBorderGlow[key]} glass rounded-2xl p-6 text-left transition-all duration-300 border border-border/30`}
            >
              <div className="text-4xl mb-3">{theme.emoji}</div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {theme.name}
              </h3>
              <p className="text-sm text-primary font-semibold mb-2">{theme.subtitle}</p>
              <p className="text-xs text-muted-foreground">{theme.description}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSelection;
