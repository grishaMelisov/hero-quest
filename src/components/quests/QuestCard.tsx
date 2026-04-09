import type { QuestItem } from '../../types';
import Button from '../ui/Button';

interface QuestCardProps {
  quest: QuestItem;
}

const badge = {
  available: { label: 'Доступен', className: 'bg-brand text-text-primary' },
  completed: { label: 'Выполнен', className: 'bg-bg-modal text-text-secondary' },
};

export default function QuestCard({ quest }: QuestCardProps) {
  const { title, description, status, buttonText } = quest;
  const { label, className: badgeClass } = badge[status];

  return (
    <div className='bg-bg-card border border-border rounded-lg overflow-hidden flex flex-col'>
      <div className='flex flex-col gap-3 px-6 pb-6 flex-1'>
        <span className={`self-start px-3 py-1 text-xs font-semibold ${badgeClass}`}>
          {label}
        </span>
        <h3 className='text-block-title text-text-primary'>{title}</h3>
        <p className='text-block-desc text-text-secondary flex-1'>{description}</p>
        <Button variant='filled' color='secondary' fullWidth>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
