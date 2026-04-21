import winFreeIcon from '../../assets/icons/cards/win-free.svg';

interface DayStreakProps {
  currentDay?: number;
}

export default function DayStreak({ currentDay = 1 }: DayStreakProps) {
  const days = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className='flex flex-col gap-4'>
      <p className='text-block-desc text-text-secondary'>
        Крути колесо 7 дней подряд без пропусков и получи на 7-й день гарантированный
        1 день подписки!
      </p>

      <div className='relative flex flex-row items-center border border-border rounded-md px-6 py-4'>
        <div
          className='absolute left-0 top-1/2 -translate-y-1/2 h-4 bg-brand z-0'
          style={{ width: `${(currentDay / 7) * 100}%` }}
        />

        {days.map((day) => {
          return (
            <div key={day} className='relative z-10 flex flex-1 justify-center'>
              {day === 7 ? (
                <div className='flex items-center justify-center'>
                  <img src={winFreeIcon} alt='' className='absolute w-11 h-11 z-0' />
                  <span className='relative z-10 text-day-counter text-white font-semibold'>
                    7
                  </span>
                </div>
              ) : (
                <span className='text-day-counter text-white font-semibold'>
                  {day}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
