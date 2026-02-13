import { useState } from "react";
import FloatingHearts from "@/components/valentine/FloatingHearts";
import HiddenSurprise from "@/components/valentine/HiddenSurprise";
import WelcomeScreen from "@/components/valentine/WelcomeScreen";
import ThemeSelection from "@/components/valentine/ThemeSelection";
import LoveQuiz from "@/components/valentine/LoveQuiz";
import ValentineQuestion from "@/components/valentine/ValentineQuestion";
import LoveContent from "@/components/valentine/LoveContent";
import FinalScreen from "@/components/valentine/FinalScreen";

type Step = "welcome" | "theme" | "quiz" | "valentine" | "content" | "final";

const Index = () => {
  const [step, setStep] = useState<Step>("welcome");
  const [, setTheme] = useState<string>("movie");

  const handleThemeSelect = (theme: string) => {
    setTheme(theme);
    setStep("quiz");
  };

  return (
    <div className="min-h-screen bg-romantic relative overflow-hidden">
      <FloatingHearts />
      <HiddenSurprise />

      {step === "welcome" && <WelcomeScreen onStart={() => setStep("theme")} />}
      {step === "theme" && <ThemeSelection onSelect={handleThemeSelect} />}
      {step === "quiz" && <LoveQuiz onComplete={() => setStep("valentine")} />}
      {step === "valentine" && <ValentineQuestion onYes={() => setStep("content")} />}
      {step === "content" && <LoveContent onContinue={() => setStep("final")} />}
      {step === "final" && <FinalScreen />}
    </div>
  );
};

export default Index;
