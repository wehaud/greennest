import { generateId } from '../utils/utils.js';

const STORAGE_KEY = "plants";

export function addPlant({name, birthDate}) {
    const plants = loadPlants();
    const newPlant = {
        id: generateId(),
        name,
        birthDate,
    }
    plants.push(newPlant);
    savePlants(plants);
}

export function savePlants(plants) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
}

export function loadPlants() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function editPlant() {
    //todo edit
}

export function deletePlant(id) {
    const plants = loadPlants();
    const updatedPlants = plants.filter(plant => plant.id !== id);
    savePlants(updatedPlants);
}