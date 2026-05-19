import type { DrumItem } from '../../types';
import WinDiscountIcon from '@icons/cards/win-discount.svg?react';
import WinFreeIcon from '@icons/cards/win-free.svg?react';
import WinFailIcon from '@icons/cards/win-fail.svg?react';

interface DrumCardProps {
  item: DrumItem;
}

const iconMap = {
  'win-discount': WinDiscountIcon,
  'win-free': WinFreeIcon,
  'win-fail': WinFailIcon,
};

export default function DrumCard({ item }: DrumCardProps) {
  const IconComponent = item.imageUrl
    ? iconMap[item.imageUrl as keyof typeof iconMap]
    : null;

  return (
    <div className='w-30 h-52 shrink-0 bg-bg-card flex flex-col items-center justify-between py-4 border-2 border-text-secondary rounded-md'>
      <span className='text-drum-label text-text-primary text-center px-2'>
        {item.label}
      </span>

      <div className='w-full rounded-md bg-bg-section flex items-center justify-center'>
        {IconComponent && <IconComponent className='w-full h-full' />}
      </div>

      <span className='text-drum-value text-text-primary text-center'>
        {item.value}
      </span>
    </div>
  );
}
