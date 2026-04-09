export interface QuestItem {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'completed';
  buttonText: string;
  buttonIcon?: string;
}

export interface DrumItem {
  id: string;
  label: 'СКИДКА' | 'БЕСПЛАТНЫЕ' | 'ПОПРОБУЙТЕ';
  value: string;
  imageUrl?: string;
}
