import { quests } from '../../data/quests';
import QuestCard from './QuestCard';
import type { QuestItem } from '../../types';

interface QuestGridProps {
  questStatuses: Record<string, QuestItem['status']>;
  onQuestComplete: (id: string) => void;
}

export default function QuestGrid({ questStatuses, onQuestComplete }: QuestGridProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {quests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={{ ...quest, status: questStatuses[quest.id] }}
          onComplete={() => onQuestComplete(quest.id)}
        />
      ))}
    </div>
  );
}
