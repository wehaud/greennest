import { createPlantCard } from "../components/plantCard.js";
import { loadPlants, deletePlant } from "../storage/storage.js";

export function renderGarden() {
    const gardenContainer = document.querySelector("#garden");
    gardenContainer.innerHTML = "";

    const plants = loadPlants();

    if (plants.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Время посадить наше первое растение 🌷";
        gardenContainer.append(emptyMessage);
        return;
    }

    plants.forEach(plant => {
        const card = createPlantCard(plant, (id) => {
            deletePlant(id);
            renderGarden();
        });
        gardenContainer.appendChild(card);
    });
}