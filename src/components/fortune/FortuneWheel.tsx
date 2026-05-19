import { useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { drumItems } from '../../data/drumItems';
import DrumCard from './DrumCard';
import Button from '../ui/Button';
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

export default function FortuneWheel() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const spin = async () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setActiveIndex(null);

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

    setActiveIndex(winnerIndex);
    setIsSpinning(false);

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
          <FortuneIcon className='h-16 w-16' />
        </div>

        {/* Барабан */}
        <div ref={containerRef} className='w-full'>
          <motion.div className='flex gap-2' animate={controls} initial={{ x: 0 }}>
            {extended.map((item, i) => (
              <DrumCard
                key={`${item.id}-${i}`}
                item={item}
                isActive={
                  activeIndex !== null && i % drumItems.length === activeIndex
                }
              />
            ))}
          </motion.div>
        </div>

        {/* Кнопка */}
        <Button
          fullWidth
          variant='filled'
          icon={<GiftIcon className='h-5 w-5' />}
          iconPosition='right'
          onClick={spin}
          disabled={isSpinning}
        >
          ИСПЫТАТЬ УДАЧУ
        </Button>
        <DayStreak currentDay={1} />
      </div>
    </div>
  );
}
