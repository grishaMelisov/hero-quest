import { useState } from 'react';
import FortuneWheel from '../components/fortune/FortuneWheel';
import QuestCard from '../components/quests/QuestCard';
import QuestGrid from '../components/quests/QuestGrid';
import CloseIcon from '@icons/close.svg?react';
import type { QuestItem } from '../types';

const specialQuest: QuestItem = {
  id: 'share-hiro',
  title: 'Расскажи о Hiro',
  description: `Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас. \nПришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно! \nЧем больше охват, тем длиннее подарок!`,
  status: 'available',
  buttonText: 'Отправить ссылки',
};

export default function AccountPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='flex w-full mb-8 items-center justify-between'>
        <p className='text-section-title'>Квесты</p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='cursor-pointer text-white'
        >
          <CloseIcon />
        </button>
      </div>

      <div className='flex md:flex-row flex-col w-full mb-8 items-center justify-center gap-6'>
        <FortuneWheel />
        <QuestCard variant='special' quest={specialQuest} className='w-full' />
      </div>
      <QuestGrid />
    </>
  );
}
