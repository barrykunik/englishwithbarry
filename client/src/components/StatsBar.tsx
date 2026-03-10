/* ============================================================
   STATS BAR — English With Barry
   Design: Navy background, amber accent numbers
   Shows key trust indicators
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "20", suffix: "+", label: "Anni di esperienza" },
  { value: "100", suffix: "+", label: "Studenti soddisfatti" },
  { value: "2", suffix: "", label: "Metodi esclusivi (T.E.D.)" },
  { value: "5", suffix: "★", label: "Valutazione media" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function StatsBar() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="bg-navy py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-amber mb-1">
                {stat.value}
                <span className="text-amber-light">{stat.suffix}</span>
              </div>
              <div className="font-body text-sm text-white/70 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
