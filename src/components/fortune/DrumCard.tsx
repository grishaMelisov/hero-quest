import type { DrumItem } from '../../types';

interface DrumCardProps {
  item: DrumItem;
  isActive?: boolean;
}

export default function DrumCard({ item, isActive = false }: DrumCardProps) {
  return (
    <div
      className={`relative w-30 h-52 shrink-0 bg-bg-card flex flex-col items-center justify-between py-4 border-2 rounded-md ${
        isActive ? 'border-brand' : 'border-text-secondary'
      }`}
    >
      <span className='text-drum-label text-text-primary text-center px-2'>
        {item.label}
      </span>

      <div className='w-16 h-16 rounded-md bg-bg-section' />

      <span className='text-drum-value text-text-primary text-center px-2'>
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
