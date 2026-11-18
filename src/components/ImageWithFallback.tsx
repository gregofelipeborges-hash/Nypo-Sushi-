import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackLabel = 'Nypo Sushi',
  loading = 'lazy',
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center bg-[#131317] border border-white/[0.08] overflow-hidden ${className}`}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 20%, rgba(200, 30, 40, 0.22), transparent 55%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05), transparent 45%)',
          }}
        />
        <svg
          viewBox="0 0 48 48"
          className="w-10 h-10 text-[#C81E28] mb-3 relative z-10"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 24h20M24 14v20" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </svg>
        <span className="font-editorial text-lg text-[#F5F3EE] relative z-10">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
