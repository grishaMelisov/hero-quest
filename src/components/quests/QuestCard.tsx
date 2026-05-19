import type { QuestItem } from '../../types';
import Button from '../ui/Button';
import clsx from 'clsx';

interface QuestCardProps {
  quest: QuestItem;
  className?: string;
  variant?: 'default' | 'special';
}

const badge = {
  available: { label: 'Доступен', className: 'bg-brand text-text-primary' },
  completed: { label: 'Выполнен', className: 'bg-bg-modal text-text-secondary' },
};

const variantStyles = {
  default: 'bg-bg-card border border-border rounded-lg',
  special: 'bg-bg-card-special rounded-none',
};

const badgeVariantStyles = {
  default: '',
  special: 'shadow-quest-special',
};

const titleVariantStyles = {
  default: 'text-text-primary',
  special: 'text-text-quest-special-title',
};

const descriptionVariantStyles = {
  default: 'text-text-secondary',
  special: 'text-text-quest-special-desc',
};

const buttonVariantStyles = {
  default: '',
  special: 'shadow-quest-special',
};

export default function QuestCard({
  quest,
  className = '',
  variant = 'default',
}: QuestCardProps) {
  const { title, description, status, buttonText } = quest;
  const { label, className: badgeClass } = badge[status];
  const isSpecial = variant === 'special';

  return (
    <div
      className={clsx(
        'overflow-hidden flex flex-col',
        variantStyles[variant],
        className
      )}
    >
      <div className='flex flex-col gap-3 px-6 pb-6 flex-1'>
        <span
          className={clsx(
            'self-start px-2 py-0.5 text-quest-badge',
            badgeClass,
            badgeVariantStyles[variant]
          )}
        >
          {label}
        </span>
        <h3 className={clsx('text-block-title', titleVariantStyles[variant])}>
          {title}
        </h3>
        <p
          className={clsx(
            'text-block-desc flex-1 whitespace-pre-wrap',
            descriptionVariantStyles[variant]
          )}
        >
          {description}
        </p>
        <Button
          variant='filled'
          color={isSpecial ? 'primary' : 'secondary'}
          fullWidth
          className={buttonVariantStyles[variant]}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
