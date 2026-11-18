import { useEffect, useState } from 'react';

export interface StoreHoursStatus {
  isOpen: boolean;
  statusTitle: string;
  nextOpeningText: string;
  currentTimeFormatted: string;
  scheduleLine: string;
  closedDayLine: string;
}

const WEEKDAY_MAP: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const OPEN_MINUTES = 18 * 60 + 30; // 18:30
const CLOSE_MINUTES = 23 * 60; // 23:00

export function getStoreHoursStatus(now: Date = new Date()): StoreHoursStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);

  const weekdayStr = parts.find((p) => p.type === 'weekday')?.value ?? 'Tue';
  const hourNum = Number(parts.find((p) => p.type === 'hour')?.value ?? '0') % 24;
  const minuteNum = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');

  const dayOfWeek = WEEKDAY_MAP[weekdayStr] ?? 2;
  const currentMinutes = hourNum * 60 + minuteNum;
  const currentTimeFormatted = `${String(hourNum).padStart(2, '0')}:${String(minuteNum).padStart(
    2,
    '0'
  )}`;

  const isTuesdayToSunday = dayOfWeek !== 1; // 1 = Monday
  const isWithinHours = currentMinutes >= OPEN_MINUTES && currentMinutes < CLOSE_MINUTES;
  const isOpen = isTuesdayToSunday && isWithinHours;

  let statusTitle = 'Aberto agora para pedidos';
  let nextOpeningText = 'Atendimento hoje até as 23:00';

  if (!isTuesdayToSunday) {
    statusTitle = 'O restaurante está fechado hoje (segunda-feira)';
    nextOpeningText = 'Abre amanhã (terça-feira) às 18:30';
  } else if (currentMinutes < OPEN_MINUTES) {
    statusTitle = 'O restaurante ainda não está aberto';
    nextOpeningText = 'Abre hoje às 18:30';
  } else if (currentMinutes >= CLOSE_MINUTES) {
    statusTitle = 'O restaurante já encerrou o atendimento de hoje';
    nextOpeningText =
      dayOfWeek === 0 ? 'Abre terça-feira às 18:30' : 'Abre amanhã às 18:30';
  }

  return {
    isOpen,
    statusTitle,
    nextOpeningText,
    currentTimeFormatted,
    scheduleLine: 'Terça a Domingo · 18:30 às 23:00',
    closedDayLine: 'Segunda-feira · Fechado',
  };
}

export function useStoreHours(): StoreHoursStatus {
  const [status, setStatus] = useState<StoreHoursStatus>(() => getStoreHoursStatus());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStatus(getStoreHoursStatus());
    }, 30000);
    return () => window.clearInterval(interval);
  }, []);

  return status;
}
