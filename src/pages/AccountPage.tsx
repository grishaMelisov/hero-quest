import { useState } from 'react';
import FortuneWheel from '../components/fortune/FortuneWheel';
import QuestCard from '../components/quests/QuestCard';
import QuestGrid from '../components/quests/QuestGrid';
import CloseIcon from '@icons/close.svg?react';
import type { QuestItem } from '../types';
import { quests } from '../data/quests';

const specialQuest: QuestItem = {
  id: 'share-hiro',
  title: 'Расскажи о Hiro',
  description: `Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас. \nПришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно! \nЧем больше охват, тем длиннее подарок!`,
  status: 'available',
  buttonText: 'Отправить ссылки',
};

export default function AccountPage() {
  const [questStatuses, setQuestStatuses] = useState<
    Record<string, QuestItem['status']>
  >(() => Object.fromEntries(quests.map((q) => [q.id, q.status])));
  const [dayStreak, setDayStreak] = useState(1);
  const [timerExpiresAt, setTimerExpiresAt] = useState<number | null>(null);

  const allQuestsCompleted = quests.every(
    (q) => questStatuses[q.id] === 'completed'
  );

  const handleQuestComplete = (id: string) =>
    setQuestStatuses((prev) => ({ ...prev, [id]: 'completed' }));

  const handleSpinComplete = () => {
    setDayStreak((prev) => Math.min(prev + 1, 7));
    setTimerExpiresAt(Date.now() + 24 * 60 * 60 * 1000);
  };

  const handleTimerExpire = () => {
    setTimerExpiresAt(null);
    setQuestStatuses(Object.fromEntries(quests.map((q) => [q.id, 'available'])));
  };

  return (
    <>
      <div className='flex w-full mb-8 items-center justify-between'>
        <p className='text-section-title'>Квесты</p>
        <button onClick={() => {}} className='cursor-pointer text-white'>
          <CloseIcon />
        </button>
      </div>

      <div className='flex md:flex-row flex-col w-full mb-8 items-center justify-center gap-6'>
        <FortuneWheel
          allQuestsCompleted={allQuestsCompleted}
          dayStreak={dayStreak}
          onSpinComplete={handleSpinComplete}
          timerExpiresAt={timerExpiresAt}
          onTimerExpire={handleTimerExpire}
        />
        <QuestCard variant='special' quest={specialQuest} className='w-full' />
      </div>
      <QuestGrid
        questStatuses={questStatuses}
        onQuestComplete={handleQuestComplete}
      />
    </>
  );
}
