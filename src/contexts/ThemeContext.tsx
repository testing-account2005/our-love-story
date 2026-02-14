import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type ThemeKey = "movie" | "music" | "spicy" | "cute";

interface ThemeContextValue {
  theme: ThemeKey;
  themeSelected: boolean;
  setTheme: (t: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "movie",
  themeSelected: false,
  setTheme: () => {},
});

const themeVars: Record<ThemeKey, Record<string, string>> = {
  movie: {
    "--background": "215 30% 8%",
    "--foreground": "210 25% 93%",
    "--card": "215 25% 12%",
    "--card-foreground": "210 25% 93%",
    "--primary": "200 60% 50%",
    "--primary-foreground": "210 20% 98%",
    "--secondary": "215 35% 35%",
    "--muted": "215 20% 16%",
    "--muted-foreground": "210 15% 50%",
    "--accent": "200 70% 40%",
    "--accent-foreground": "210 20% 98%",
    "--border": "215 15% 20%",
    "--ring": "200 60% 50%",
    "--rose": "200 60% 50%",
    "--rose-glow": "195 70% 60%",
    "--gold": "210 30% 65%",
  },
  music: {
    "--background": "25 35% 7%",
    "--foreground": "35 20% 95%",
    "--card": "25 30% 11%",
    "--card-foreground": "35 20% 95%",
    "--primary": "35 85% 55%",
    "--primary-foreground": "35 90% 10%",
    "--secondary": "25 60% 45%",
    "--muted": "25 20% 16%",
    "--muted-foreground": "30 15% 55%",
    "--accent": "30 90% 50%",
    "--accent-foreground": "35 90% 10%",
    "--border": "25 15% 18%",
    "--ring": "35 85% 55%",
    "--rose": "35 85% 55%",
    "--rose-glow": "40 90% 65%",
    "--gold": "35 70% 55%",
  },
  spicy: {
    "--background": "350 35% 5%",
    "--foreground": "340 20% 95%",
    "--card": "350 30% 9%",
    "--card-foreground": "340 20% 95%",
    "--primary": "335 100% 55%",
    "--primary-foreground": "340 20% 98%",
    "--secondary": "350 70% 40%",
    "--muted": "350 20% 14%",
    "--muted-foreground": "340 15% 55%",
    "--accent": "330 100% 50%",
    "--accent-foreground": "340 20% 98%",
    "--border": "350 20% 16%",
    "--ring": "335 100% 55%",
    "--rose": "335 100% 55%",
    "--rose-glow": "330 100% 65%",
    "--gold": "350 80% 60%",
  },
  cute: {
    "--background": "330 40% 92%",
    "--foreground": "330 30% 15%",
    "--card": "330 35% 88%",
    "--card-foreground": "330 30% 15%",
    "--primary": "330 70% 55%",
    "--primary-foreground": "330 20% 98%",
    "--secondary": "280 50% 65%",
    "--muted": "330 25% 85%",
    "--muted-foreground": "330 15% 40%",
    "--accent": "300 60% 60%",
    "--accent-foreground": "330 20% 98%",
    "--border": "330 20% 80%",
    "--ring": "330 70% 55%",
    "--rose": "330 70% 55%",
    "--rose-glow": "320 80% 70%",
    "--gold": "40 60% 55%",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeKey>("movie");
  const [themeSelected, setThemeSelected] = useState(false);

  const setTheme = useCallback((t: ThemeKey) => {
    setThemeState(t);
    setThemeSelected(true);
  }, []);

  // Only apply theme CSS vars after a theme has been explicitly selected
  useEffect(() => {
    if (!themeSelected) return;

    const root = document.documentElement;
    const vars = themeVars[theme];
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    const bg = vars["--background"];
    const primary = vars["--primary"];
    root.style.setProperty(
      "--gradient-romantic",
      `linear-gradient(135deg, hsl(${bg}) 0%, hsl(${primary} / 0.15) 50%, hsl(${bg}) 100%)`
    );
    root.style.setProperty(
      "--gradient-glow",
      `linear-gradient(135deg, hsl(${vars["--rose"]}) 0%, hsl(${vars["--accent"]}) 100%)`
    );
  }, [theme, themeSelected]);

  return (
    <ThemeContext.Provider value={{ theme, themeSelected, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
