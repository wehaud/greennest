import './assets/styles/style.css'
import { renderGarden } from './services/renderGarden'
import { addPlant } from './storage/storage';

const plantForm = document.getElementById("plant-form");

const nameInput = document.getElementById("plant-name");
const birthDateInput = document.getElementById("plant-birth");

renderGarden();

plantForm.addEventListener("submit", function(e) {
    e.preventDefault();

    addPlant({
        name: nameInput.value,
        birthDate: birthDateInput.value,
    });
    
    renderGarden();
    plantForm.reset();
});