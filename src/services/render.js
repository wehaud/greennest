import { plantCard } from '@components/plantCard';
import { createPlantForm } from '@components/plantForm';
import { loadPlants } from '@storage/storage';
import { getFormvisibility, toggleFormVisibility } from '@storage/uiState';

export function render(
  plants,
  plantToUpdate,
  { onEdit, onUpdate, onSubmit, onDelete }
) {
  const plantAddBtn = document.querySelector('.plant-add');
  const gardenContainer = document.querySelector('#garden');
  gardenContainer.innerHTML = '';

  if (loadPlants().length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Время посадить наше первое растение 🌷';
    gardenContainer.append(emptyMessage);
  }

  if (getFormvisibility()) {
    const form = createPlantForm(plantToUpdate, { onSubmit });
    gardenContainer.appendChild(form);
  }

  plantAddBtn.onclick = () => {
    toggleFormVisibility();
    render(plants, plantToUpdate, { onEdit, onUpdate, onSubmit, onDelete });
  };

  plants.forEach((plant) => {
    const card = plantCard(plant, { onEdit, onUpdate, onDelete });
    gardenContainer.appendChild(card);
  });
}
