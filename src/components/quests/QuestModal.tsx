import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC, SVGProps } from 'react';
import type { DrumItem } from '../../types';
import Button from '../ui/Button';

import WinDiscountIcon from '@icons/cards/win-discount.svg?react';
import WinFreeIcon from '@icons/cards/win-free.svg?react';
import WinFailIcon from '@icons/cards/win-fail.svg?react';

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

interface ModalConfig {
  heading: string;
  Icon: SvgComponent;
  description?: string;
}

interface QuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: DrumItem | null;
}

function getModalConfig(item: DrumItem): ModalConfig {
  switch (item.label) {
    case 'СКИДКА':
      return {
        heading: `Поздравляем!\nВы выиграли`,
        Icon: WinDiscountIcon,
        description: 'Активируйте в течение 24 часов',
      };
    case 'БЕСПЛАТНЫЕ':
      return {
        heading: `Поздравляем!\nВы выиграли`,
        Icon: WinFreeIcon,
        description: 'Они уже добавлены к вашей подписке',
      };
    case 'ПОПРОБУЙТЕ':
      return { heading: 'В другой раз повезёт!', Icon: WinFailIcon };
  }
}

export default function QuestModal({ isOpen, onClose, item }: QuestModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const config = item ? getModalConfig(item) : null;

  return (
    <AnimatePresence>
      {isOpen && item && config && (
        <motion.div
          className='fixed inset-0 z-50 bg-black/60 flex items-end md:items-center md:justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Desktop card */}
          <motion.div
            className='hidden md:flex bg-bg-modal border border-border rounded-2xl flex-col items-center justify-between py-8 px-6 w-full max-w-[476px] min-h-[448px]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalContent item={item} config={config} onClose={onClose} />
          </motion.div>

          {/* Mobile card */}
          <motion.div
            className='flex md:hidden bg-bg-modal border border-border rounded-t-xl rounded-b-none flex-col items-center justify-between py-8 px-4 w-full min-h-[448px]'
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalContent item={item} config={config} onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ModalContentProps {
  item: DrumItem;
  config: ModalConfig;
  onClose: () => void;
}

function ModalContent({ item, config, onClose }: ModalContentProps) {
  return (
    <>
      <h2 className='text-text-primary whitespace-pre-wrap text-questmodal-title text-center'>
        {config.heading}
      </h2>

      <div className='flex items-center gap-4 justify-center'>
        <span className='text-text-primary text-drum-label text-xl font-semibold tracking-wider'>
          {item.label}
        </span>
        <config.Icon className='w-24 h-24' aria-hidden='true' />
        <span className='text-text-primary text-2xl font-bold tracking-wide'>
          {item.value}
        </span>
      </div>

      {config.description && (
        <p className='text-block-desc text-text-primary text-center'>
          {config.description}
        </p>
      )}

      <Button variant='filled' fullWidth onClick={onClose}>
        ПРОДОЛЖИТЬ
      </Button>
    </>
  );
}
