import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, totalMinutes: 0 });

  useEffect(() => {
    const startDate = new Date("2024-12-27T00:00:00");

    const update = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const totalMinutes = Math.floor(diff / 60000);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setElapsed({ days, hours, minutes, seconds, totalMinutes });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-rose rounded-2xl p-6 text-center max-w-md mx-auto">
      <p className="text-sm text-muted-foreground mb-2 font-body">
        Time since I fell in love with you ❤️
      </p>
      <div className="grid grid-cols-4 gap-3 mb-3">
        {[
          { value: elapsed.days, label: "Days" },
          { value: elapsed.hours, label: "Hours" },
          { value: elapsed.minutes, label: "Min" },
          { value: elapsed.seconds, label: "Sec" },
        ].map((item) => (
          <div key={item.label} className="glass rounded-xl p-3">
            <div className="text-2xl md:text-3xl font-bold text-primary font-display">
              {item.value}
            </div>
            <div className="text-xs text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        That's <span className="text-primary font-semibold">{elapsed.totalMinutes.toLocaleString()}</span> minutes of loving you 💕
      </p>
    </div>
  );
};

export default CountdownTimer;
