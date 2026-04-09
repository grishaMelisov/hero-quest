import type { QuestItem } from '../types';

export const quests: QuestItem[] = [
  {
    id: 'review',
    title: 'Оставь отзыв',
    description: 'Получи 3 дня VPN',
    status: 'available',
    buttonText: 'ОСТАВИТЬ ОТЗЫВ',
  },
  {
    id: 'share',
    title: 'Поделиться с друзьями',
    description: 'Получи 1 день VPN',
    status: 'available',
    buttonText: 'ПОДЕЛИТЬСЯ',
  },
  {
    id: 'like',
    title: 'Поддержите нас лайками',
    description: 'Получи 2 дня VPN',
    status: 'available',
    buttonText: 'ПОДДЕРЖАТЬ',
  },
  {
    id: 'google-maps',
    title: 'Оцени в Google картах',
    description: 'Получи 1 день VPN',
    status: 'available',
    buttonText: 'ОЦЕНИТЬ',
  },
  {
    id: 'yandex-maps',
    title: 'Оцени в Яндекс картах',
    description: 'Получи 1 день VPN',
    status: 'available',
    buttonText: 'ОЦЕНИТЬ',
  },
  {
    id: 'telegram',
    title: 'Подписаться на TG-канал',
    description: 'Получи 1 день VPN',
    status: 'available',
    buttonText: 'ПОДПИСАТЬСЯ',
  },
];
