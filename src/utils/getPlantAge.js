import { declOfNum } from './getRightWord';

export function getPlantAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  today.setHours(0, 0, 0, 0);
  birth.setHours(0, 0, 0, 0);

  const diffTime = today - birth;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const dayWord = declOfNum(diffDays, ['день', 'дня', 'дней']);
  return `${diffDays} ${dayWord}`;
}
