import { getPlantAge } from '@utils/getPlantAge.js';
import { errorMessage } from '@components/errorMessage';

export function plantCard(plant, { onEdit, onUpdate, onDelete }) {
  if (!plant) {
    return errorMessage({ message: 'Ошибка параметров.' });
  }
  const card = document.createElement('div');
  card.className = 'plant-card';

  const title = document.createElement('h3');
  title.textContent = plant.name;

  const birthDate = document.createElement('p');
  birthDate.textContent = `Посажено: ${plant.birthDate}`;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Изменить';
  editBtn.onclick = () => {
    onEdit(plant);
  };

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Выкинуть';
  delBtn.addEventListener('click', () => {
    onDelete(plant.id);
  });

  const age = document.createElement('p');
  age.textContent = "Возраст: " + getPlantAge(plant.birthDate);

  card.append(title, birthDate, age, editBtn, delBtn);

  return card;
}
