import { loadPlants, addPlant, deletePlant } from "./storage.js";
import { createPlantCard } from "../components/plantCard.js";

const plantForm = document.getElementById("plant-form");
const plantList = document.getElementById("plant-list");

const nameInput = document.getElementById("plant-name");
const birthDateInput = document.getElementById("plant-birth");

function renderPlants() {
    const plants = loadPlants();

    plantList.innerHTML = "";
    plants.forEach(plant => {
        const card = createPlantCard(plant, (id) => {
            deletePlant(id);
            renderPlants();
        });

        plantList.appendChild(card);
    });
}

renderPlants();

plantForm.addEventListener("submit", function(e) {
    e.preventDefault();

    addPlant({
        name: nameInput.value,
        birthDate: birthDateInput.value,
    });
    
    renderPlants();
    plantForm.reset();
});