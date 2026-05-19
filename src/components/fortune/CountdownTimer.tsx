import { useEffect, useRef, useState } from 'react';

interface CountdownTimerProps {
  expiresAt: number;
  onExpire: () => void;
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function DigitBox({ char }: { char: string }) {
  return (
    <div className='flex w-10 h-15 items-center justify-center border border-border-timer text-timer rounded-sm text-text-primary '>
      {char}
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const str = pad(value);
  return (
    <div className='flex flex-col items-center gap-1'>
      <div className='flex gap-1'>
        <DigitBox char={str[0]} />
        <DigitBox char={str[1]} />
      </div>
      <span className='text-block-desc text-text-secondary'>{label}</span>
    </div>
  );
}

export default function CountdownTimer({
  expiresAt,
  onExpire,
}: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, expiresAt - Date.now())
  );
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    const tick = () => {
      const r = Math.max(0, expiresAt - Date.now());
      setRemaining(r);

      if (r <= 0) {
        onExpireRef.current();
        return true;
      }

      return false;
    };

    if (tick()) {
      return;
    }

    const id = setInterval(() => {
      if (tick()) {
        clearInterval(id);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [expiresAt]);

  const totalSeconds = Math.floor(remaining / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  return (
    <div className='flex self-start gap-2' style={{ width: 283 }}>
      <TimeUnit value={h} label='Часы' />
      <span className='text-text-primary text-2xl font-bold self-start mt-4.5'>
        :
      </span>
      <TimeUnit value={m} label='Минуты' />
      <span className='text-text-primary text-2xl font-bold self-start mt-4.5'>
        :
      </span>
      <TimeUnit value={s} label='Секунды' />
    </div>
  );
}
