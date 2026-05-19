import type { QuestItem } from '../types';

export const quests: QuestItem[] = [
  {
    id: 'review',
    title: 'Оставь отзыв',
    description: 'Поделитесь своим мнением оHiroVPN и получите 3 дня VPN бесплатно!',
    status: 'available',
    buttonText: 'ОСТАВИТЬ ОТЗЫВ',
  },
  {
    id: 'share',
    title: 'Поделиться с друзьями',
    description: 'Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!',
    status: 'available',
    buttonText: 'ПОДЕЛИТЬСЯ',
  },
  {
    id: 'like',
    title: 'Поддержите нас лайками',
    description:
      'Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!',
    status: 'available',
    buttonText: 'ПОДДЕРЖАТЬ',
  },
  {
    id: 'google-maps',
    title: 'Оцени в Google картах',
    description: 'Поделись впечатлением и получи 1 день VPN в подарок!',
    status: 'available',
    buttonText: 'ОЦЕНИТЬ',
  },
  {
    id: 'yandex-maps',
    title: 'Оцени в Яндекс картах',
    description: 'Поделись впечатлением и получи 1 день VPN в подарок!',
    status: 'available',
    buttonText: 'ОЦЕНИТЬ',
  },
  {
    id: 'telegram',
    title: 'Подписаться на TG-канал',
    description:
      'Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!',
    status: 'available',
    buttonText: 'ПОДПИСАТЬСЯ',
  },
];
