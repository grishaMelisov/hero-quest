import type { QuestItem } from '../../types';
import Button from '../ui/Button';
import clsx from 'clsx';

interface QuestCardProps {
  quest: QuestItem;
  className?: string;
  variant?: 'default' | 'special';
  onComplete?: () => void;
}

const badge = {
  available: { label: 'Доступен', className: 'bg-brand text-text-primary' },
  completed: {
    label: 'Выполнен',
    className: 'bg-bg-card-special text-text-quest-special-title',
  },
};

const variantConfig = {
  default: {
    card: 'bg-bg-card border border-border rounded-lg',
    badge: '',
    title: 'text-text-primary',
    desc: 'text-text-secondary',
    btn: '',
    color: 'secondary' as const,
  },
  special: {
    card: 'bg-bg-card-special rounded-none',
    badge: 'shadow-quest-special',
    title: 'text-text-quest-special-title',
    desc: 'text-text-quest-special-desc',
    btn: 'shadow-quest-special',
    color: 'primary' as const,
  },
} as const;

export default function QuestCard({
  quest,
  className = '',
  variant = 'default',
  onComplete,
}: QuestCardProps) {
  const { title, description, status, buttonText } = quest;
  const { label, className: badgeClass } = badge[status];
  const v = variantConfig[variant];

  return (
    <div className={clsx('overflow-hidden flex flex-col', v.card, className)}>
      <div className='flex flex-col gap-3 px-6 pb-6 flex-1'>
        <span
          className={clsx('self-start px-2 py-0.5 text-quest-badge', badgeClass, v.badge)}
        >
          {label}
        </span>
        <h3 className={clsx('text-block-title', v.title)}>{title}</h3>
        <p className={clsx('text-block-desc flex-1 whitespace-pre-wrap', v.desc)}>
          {description}
        </p>
        {status !== 'completed' && (
          <Button
            variant='filled'
            color={v.color}
            fullWidth
            className={v.btn}
            onClick={onComplete}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}
