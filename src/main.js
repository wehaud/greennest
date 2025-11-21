import '@assets/styles/style.css';
import { render } from '@services/render';
import {
  addPlant,
  deletePlant,
  loadPlants,
  updatePlant,
} from '@storage/storage';
import { toggleFormVisibility } from '@storage/uiState';

let plantToUpdate = null;

render(loadPlants(), plantToUpdate, {
  onEdit: handleEdit,
  onUpdate: handleUpdate,
  onSubmit: handleSubmit,
  onDelete: handleDelete,
});

function handleAdd(plant) {
  addPlant(plant);
  toggleFormVisibility(false);
  render(loadPlants(), plantToUpdate, {
    onEdit: handleEdit,
    onUpdate: handleUpdate,
    onSubmit: handleSubmit,
    onDelete: handleDelete,
  });
}

function handleEdit(plant) {
  plantToUpdate = plant;
  toggleFormVisibility(true);

  render(loadPlants(), plantToUpdate, {
    onEdit: handleEdit,
    onUpdate: handleUpdate,
    onSubmit: handleSubmit,
    onDelete: handleDelete,
  });
}

function handleUpdate(updatedPlant) {
  const existingPlant = loadPlants().find(
    (plant) => plant.id === updatedPlant.id
  );

  if (!existingPlant) {
    throw new Error(`Такого растения нет`);
  }

  const updated = {
    ...existingPlant,
    ...updatedPlant,
  };

  updatePlant(updated);
  plantToUpdate = null;
  toggleFormVisibility(false);

  render(loadPlants(), plantToUpdate, {
    onEdit: handleEdit,
    onUpdate: handleUpdate,
    onSubmit: handleSubmit,
    onDelete: handleDelete,
  });
}

function handleSubmit(plant) {
  if (plant?.id) {
    handleUpdate(plant);
  } else {
    handleAdd(plant);
  }
}

function handleDelete(id) {
  deletePlant(id);
  render(loadPlants(), plantToUpdate, {
    onEdit: handleEdit,
    onUpdate: handleUpdate,
    onSubmit: handleSubmit,
    onDelete: handleDelete,
  });
}
