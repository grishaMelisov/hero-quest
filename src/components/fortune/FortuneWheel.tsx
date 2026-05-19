import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { drumItems } from '../../data/drumItems';
import type { DrumItem } from '../../types';
import DrumCard from './DrumCard';
import Button from '../ui/Button';
import QuestModal from '../quests/QuestModal';
import CountdownTimer from './CountdownTimer';
import ConfettiStars from './ConfettiStars';
import GiftIcon from '@icons/featured-seasonal-and-gifts.svg?react';
import FortuneIcon from '@icons/fortune/fortune-icon.svg?react';
import DayStreak from './DayStreak';

//TODO доделать логику прокрутки - чтото она мне не нравится
const CARD_WIDTH = 120;
const CARD_GAP = 8;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const EXTRA_LOOPS = 6;

// 4 копии для бесконечной ленты
const extended = Array.from({ length: 12 }, () => drumItems).flat();

interface FortuneWheelProps {
  allQuestsCompleted: boolean;
  dayStreak: number;
  onSpinComplete: () => void;
  timerExpiresAt: number | null;
  onTimerExpire: () => void;
}

export default function FortuneWheel({
  allQuestsCompleted,
  dayStreak,
  onSpinComplete,
  timerExpiresAt,
  onTimerExpire,
}: FortuneWheelProps) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winnerItem, setWinnerItem] = useState<DrumItem | null>(null);
  const [confettiOrigin, setConfettiOrigin] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useLayoutEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth ?? 600;
    const center = containerWidth / 2;
    const startIndex = drumItems.length;
    controls.set({ x: center - (startIndex * CARD_STEP + CARD_WIDTH / 2) });
  }, [controls]);

  const spin = async () => {
    if (isSpinning || !allQuestsCompleted) return;
    setIsSpinning(true);

    const containerWidth = containerRef.current?.offsetWidth ?? 600;
    const center = containerWidth / 2;

    // Победитель — случайный индекс из оригинального массива
    const winnerIndex = Math.floor(Math.random() * drumItems.length);

    // Финальная позиция: победитель в 3-й копии (индекс 2*n + winner)
    // чтобы всегда прокручивать вперёд
    const landingExtendedIndex = EXTRA_LOOPS * drumItems.length + winnerIndex;
    const targetX = center - (landingExtendedIndex * CARD_STEP + CARD_WIDTH / 2);

    await controls.start({
      x: targetX,
      transition: {
        duration: 8,
        ease: [0.25, 0.1, 0.05, 1.0],
      },
    });

    if (iconRef.current) {
      const r = iconRef.current.getBoundingClientRect();
      setConfettiOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }

    setIsSpinning(false);
    setWinnerItem(drumItems[winnerIndex]);
    setIsModalOpen(true);
    onSpinComplete();

    // Тихий сброс на эквивалентную позицию в 1-й копии для следующего спина
    const resetExtendedIndex = drumItems.length + winnerIndex;
    const resetX = center - (resetExtendedIndex * CARD_STEP + CARD_WIDTH / 2);
    controls.set({ x: resetX });
  };

  return (
    <div className='w-full overflow-hidden border-2 p-6 border-border rounded-lg'>
      <div className='flex flex-col w-full items-center gap-6'>
        {/* Header */}
        <div className='flex w-full items-center justify-between'>
          <div className='flex flex-col items-left gap-1'>
            <h1 className='text-block-title'>Колесо Фортуны</h1>
            <p className='text-block-desc text-text-secondary'>
              Испытайте удачу раз в день <br /> и выигрывайте бонусы для VPN!
            </p>
          </div>
          <div ref={iconRef} className='shrink-0'>
            <FortuneIcon className='h-16 w-16' />
          </div>
        </div>

        {/* Барабан / Таймер */}
        {timerExpiresAt !== null ? (
          <CountdownTimer expiresAt={timerExpiresAt} onExpire={onTimerExpire} />
        ) : (
          <div ref={containerRef} className='w-full relative'>
            <motion.div className='flex gap-2' animate={controls} initial={{ x: 0 }}>
              {extended.map((item, i) => (
                <DrumCard key={`${item.id}-${i}`} item={item} />
              ))}
            </motion.div>
            {/* Статичный индикатор центра */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-30 h-52 border-2 border-brand rounded-md pointer-events-none z-10'>
              <div
                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: '24px solid var(--color-brand)',
                }}
              />
            </div>
          </div>
        )}

        {/* Кнопка */}
        <Button
          fullWidth
          variant='filled'
          icon={<GiftIcon className='h-5 w-5' />}
          iconPosition='right'
          onClick={spin}
          disabled={isSpinning || !allQuestsCompleted || timerExpiresAt !== null}
        >
          ИСПЫТАТЬ УДАЧУ
        </Button>
        <DayStreak currentDay={dayStreak} />
      </div>

      <QuestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={winnerItem}
      />

      {confettiOrigin && (
        <ConfettiStars
          origin={confettiOrigin}
          onDone={() => setConfettiOrigin(null)}
        />
      )}
    </div>
  );
}
