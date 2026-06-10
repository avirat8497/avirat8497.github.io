import { useState, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export function GlowButton({
  children,
  loading = false,
  variant = 'primary',
  className = '',
  onClick,
  disabled,
  ...props
}: GlowButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);

    onClick?.(e);
  };

  if (variant === 'secondary') {
    return (
      <button
        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base border border-[var(--glass-border)] glass-card hover:border-[rgba(0,217,255,0.3)] hover:shadow-[var(--glow-cyan)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
        onClick={handleClick}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          children
        )}
      </button>
    );
  }

  return (
    <button
      className={`glow-btn px-6 py-3 text-white text-base ${className}`}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
        />
      ))}
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Sending...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
