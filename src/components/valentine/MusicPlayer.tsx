import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme, ThemeKey } from "@/contexts/ThemeContext";

// Simple ambient music using Web Audio API oscillators
const createMelody = (ctx: AudioContext, theme: ThemeKey) => {
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0.08;
  gainNode.connect(ctx.destination);

  const melodies: Record<ThemeKey, number[]> = {
    movie: [261.63, 329.63, 392.00, 349.23, 329.63, 293.66, 261.63, 329.63],
    music: [293.66, 349.23, 440.00, 392.00, 349.23, 329.63, 293.66, 349.23],
    spicy: [329.63, 392.00, 493.88, 440.00, 392.00, 349.23, 329.63, 392.00],
    cute: [523.25, 493.88, 440.00, 392.00, 440.00, 493.88, 523.25, 587.33],
  };

  const notes = melodies[theme];
  let noteIndex = 0;
  let oscillator: OscillatorNode | null = null;

  const playNote = () => {
    if (oscillator) {
      oscillator.stop();
      oscillator.disconnect();
    }

    oscillator = ctx.createOscillator();
    oscillator.type = theme === "cute" ? "triangle" : theme === "spicy" ? "sawtooth" : "sine";
    oscillator.frequency.value = notes[noteIndex % notes.length];

    const noteGain = ctx.createGain();
    noteGain.gain.setValueAtTime(0, ctx.currentTime);
    noteGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.1);
    noteGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.8);

    oscillator.connect(noteGain);
    noteGain.connect(gainNode);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 2);

    noteIndex++;
  };

  const interval = setInterval(playNote, 2000);
  playNote();

  return { gainNode, interval, oscillator };
};

const MusicPlayer = () => {
  const { theme } = useTheme();
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const melodyRef = useRef<{ gainNode: GainNode; interval: NodeJS.Timeout; oscillator: OscillatorNode | null } | null>(null);

  const toggleMusic = () => {
    if (playing) {
      if (melodyRef.current) {
        clearInterval(melodyRef.current.interval);
        melodyRef.current.gainNode.disconnect();
      }
      if (ctxRef.current) {
        ctxRef.current.close();
        ctxRef.current = null;
      }
      melodyRef.current = null;
      setPlaying(false);
    } else {
      const ctx = new AudioContext();
      ctxRef.current = ctx;
      melodyRef.current = createMelody(ctx, theme);
      setPlaying(true);
    }
  };

  // Restart melody when theme changes and music is playing
  useEffect(() => {
    if (playing && ctxRef.current) {
      if (melodyRef.current) {
        clearInterval(melodyRef.current.interval);
        melodyRef.current.gainNode.disconnect();
      }
      melodyRef.current = createMelody(ctxRef.current, theme);
    }
  }, [theme, playing]);

  useEffect(() => {
    return () => {
      if (melodyRef.current) {
        clearInterval(melodyRef.current.interval);
      }
      if (ctxRef.current) {
        ctxRef.current.close();
      }
    };
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleMusic}
      className="fixed top-4 right-4 z-50 glass rounded-full w-12 h-12 flex items-center justify-center text-xl"
      title={playing ? "Pause music" : "Play music"}
    >
      {playing ? (
        <motion.span animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
          🎵
        </motion.span>
      ) : (
        "🔇"
      )}
    </motion.button>
  );
};

export default MusicPlayer;
