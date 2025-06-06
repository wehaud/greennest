export function createPlantCard(plant) {
    const card = document.createElement("div");
    card.className = "plant-card";

    const title = document.createElement("h3");
    title.textContent = plant.name;

    const birthDate = document.createElement("p");
    birthDate.textContent = `Посажено: ${plant.birthDate}`;

    const menu = document.createElement("button");
    menu.textContent = "";
    menu.onClick = () => {
        //render menu
    };

    card.append(title, birthDate, menu);
    return card;
}