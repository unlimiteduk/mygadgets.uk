import { useEffect, useRef, type ReactNode } from 'react';

// Section reveal: 12px rise + fade, 400ms, once at 20% visibility (brief §3.8)
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }
    // Fires when the element's top crosses into the lower 80% of the
    // viewport — the brief's "20% visibility" intent, without breaking
    // on elements taller than the viewport itself.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-visible');
            io.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -20% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
