import { savePlants, loadPlants, addPlant } from "./storage.js";
import { createPlantCard } from "./plantCard.js";

const plants = loadPlants();

const plantForm = document.getElementById("plant-form");
const plantList = document.getElementById("plant-list");

const nameInput = document.getElementById("plant-name");
const birthDateInput = document.getElementById("plant-birth");

renderPlantList(plants);

function renderPlantList(plants) {
    plantList.innerHTML = "";
    plants.forEach(plant => {
        const card = createPlantCard(plant);

        plantList.appendChild(card);
    });
}

plantForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const newPlant = {
        name: nameInput.value,
        birthDate: birthDateInput.value,
    };

    const updatedPlants = addPlant(newPlant);
    renderPlantList(updatedPlants);
    plantForm.reset();
});