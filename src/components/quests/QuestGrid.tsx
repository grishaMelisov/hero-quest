import { quests } from '../../data/quests';
import QuestCard from './QuestCard';

export default function QuestGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
}
