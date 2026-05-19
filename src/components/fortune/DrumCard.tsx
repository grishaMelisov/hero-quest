import type { DrumItem } from '../../types';
import WinDiscountIcon from '@icons/cards/win-discount.svg?react';
import WinFreeIcon from '@icons/cards/win-free.svg?react';
import WinFailIcon from '@icons/cards/win-fail.svg?react';

interface DrumCardProps {
  item: DrumItem;
  isActive?: boolean;
}

const iconMap = {
  'win-discount': WinDiscountIcon,
  'win-free': WinFreeIcon,
  'win-fail': WinFailIcon,
};

export default function DrumCard({ item, isActive = false }: DrumCardProps) {
  const IconComponent = item.imageUrl
    ? iconMap[item.imageUrl as keyof typeof iconMap]
    : null;

  return (
    <div
      className={`relative w-30 h-52 shrink-0 bg-bg-card flex flex-col items-center justify-between py-4 border-2 rounded-md ${
        isActive ? 'border-brand' : 'border-text-secondary'
      }`}
    >
      <span className='text-drum-label text-text-primary text-center px-2'>
        {item.label}
      </span>

      <div className='w-full rounded-md bg-bg-section flex items-center justify-center'>
        {IconComponent && <IconComponent className='w-full h-full' />}
      </div>

      <span className='text-drum-value text-text-primary text-center'>
        {item.value}
      </span>

      {isActive && (
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
      )}
    </div>
  );
}
