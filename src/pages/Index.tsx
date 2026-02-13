import { useState } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import FloatingHearts from "@/components/valentine/FloatingHearts";
import HiddenSurprise from "@/components/valentine/HiddenSurprise";
import WelcomeScreen from "@/components/valentine/WelcomeScreen";
import ThemeSelection from "@/components/valentine/ThemeSelection";
import LoveQuiz from "@/components/valentine/LoveQuiz";
import ValentineQuestion from "@/components/valentine/ValentineQuestion";
import LoveContent from "@/components/valentine/LoveContent";
import MemoryGallery from "@/components/valentine/MemoryGallery";
import FinalScreen from "@/components/valentine/FinalScreen";
import MusicPlayer from "@/components/valentine/MusicPlayer";

type Step = "welcome" | "theme" | "quiz" | "valentine" | "content" | "gallery" | "final";

const Index = () => {
  const [step, setStep] = useState<Step>("welcome");
  const [musicStarted, setMusicStarted] = useState(false);

  const handleThemeSelect = () => {
    setMusicStarted(true);
    setStep("quiz");
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-romantic relative overflow-hidden">
        <FloatingHearts />
        <HiddenSurprise />
        {musicStarted && <MusicPlayer />}

        {step === "welcome" && <WelcomeScreen onStart={() => setStep("theme")} />}
        {step === "theme" && <ThemeSelection onSelect={handleThemeSelect} />}
        {step === "quiz" && <LoveQuiz onComplete={() => setStep("valentine")} />}
        {step === "valentine" && <ValentineQuestion onYes={() => setStep("content")} />}
        {step === "content" && <LoveContent onContinue={() => setStep("gallery")} />}
        {step === "gallery" && <MemoryGallery onContinue={() => setStep("final")} />}
        {step === "final" && <FinalScreen />}
      </div>
    </ThemeProvider>
  );
};

export default Index;
