import WinFreeIcon from '@icons/cards/win-free.svg?react';

const STREAK_DAYS = 7;
const days = Array.from({ length: STREAK_DAYS }, (_, i) => i + 1);

interface DayStreakProps {
  currentDay?: number;
}

export default function DayStreak({ currentDay = 1 }: DayStreakProps) {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-block-desc text-text-secondary'>
        Крути колесо 7 дней подряд без пропусков и получи на 7-й день гарантированный
        1 день подписки!
      </p>

      <div className='relative flex flex-row items-center border border-border rounded-md px-6 py-4'>
        <div
          className='absolute left-0 top-1/2 -translate-y-1/2 h-4 bg-brand z-0'
          style={{ width: `${(currentDay / STREAK_DAYS) * 100}%` }}
        />

        {days.map((day) => (
          <div key={day} className='relative z-10 flex flex-1 justify-center'>
            {day === STREAK_DAYS ? (
              <div className='flex items-center justify-center'>
                <WinFreeIcon className='absolute w-11 h-11 z-0' aria-hidden='true' />
                <span className='relative z-10 text-day-counter text-white font-semibold'>
                  {day}
                </span>
              </div>
            ) : (
              <span className='text-day-counter text-white font-semibold'>{day}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
