import { useState, useEffect } from 'react';
import { LegalTab } from './LegalModal';

const CONSENT_KEY = 'nypo_cookie_consent_v1';

interface CookieBannerProps {
  onOpenLegal: (tab: LegalTab) => void;
}

export function CookieBanner({ onOpenLegal }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (!saved) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      // ignore storage failure
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies e privacidade"
      className="fixed bottom-0 inset-x-0 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-md z-30 bg-[#131317]/95 backdrop-blur-md border-t sm:border border-white/[0.12] sm:rounded-sm px-4 py-2.5 sm:p-4 shadow-2xl"
    >
      <div className="flex sm:flex-col items-center sm:items-start justify-between gap-3">
        <p className="text-[11px] sm:text-xs text-[#D4D4D8] leading-snug sm:leading-relaxed">
          <span className="hidden sm:inline">
            Utilizamos cookies essenciais e armazenamento local para manter sua comanda salva de
            acordo com a nossa{' '}
          </span>
          <span className="sm:hidden">Cookies essenciais para sua comanda · </span>
          <button
            type="button"
            onClick={() => onOpenLegal('privacidade')}
            className="text-[#F5F3EE] underline underline-offset-2 hover:text-[#C81E28] transition-colors"
          >
            Política de Privacidade
          </button>
          <span className="hidden sm:inline"> e </span>
          <span className="hidden sm:inline">
            <button
              type="button"
              onClick={() => onOpenLegal('cookies')}
              className="text-[#F5F3EE] underline underline-offset-2 hover:text-[#C81E28] transition-colors"
            >
              Cookies
            </button>
            .
          </span>
        </p>

        <div className="flex items-center gap-2 shrink-0 sm:w-full sm:justify-end">
          <button
            type="button"
            onClick={() => onOpenLegal('cookies')}
            className="hidden sm:inline-flex px-3 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-white border border-white/[0.1] rounded-sm transition-colors whitespace-nowrap"
          >
            Saiba mais
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-3.5 py-1.5 text-xs font-medium bg-[#C81E28] hover:bg-[#DF2631] text-white rounded-sm transition-colors whitespace-nowrap"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
