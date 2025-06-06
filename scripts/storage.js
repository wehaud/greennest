const STORAGE_KEY = "plants";

export function savePlants(plants) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
}

export function loadPlants() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function addPlant(newPlant) {
    const plants = loadPlants();
    plants.push(newPlant);
    savePlants(plants);
    return plants;
}