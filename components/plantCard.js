export function createPlantCard(plant, onDelete) {
    const card = document.createElement("div");
    card.className = "plant-card";

    const title = document.createElement("h3");
    title.textContent = plant.name;

    const birthDate = document.createElement("p");
    birthDate.textContent = `Посажено: ${plant.birthDate}`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Выкинуть";
    delBtn.addEventListener('click', () => {
        onDelete(plant.id);
    });

    card.append(title, birthDate, delBtn);
    return card;
}