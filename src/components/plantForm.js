export function createPlantForm(plant = {}, { onSubmit }) {
    const isEdit = plant !== null && plant !== undefined;
    const form = document.createElement("form");
    form.className = "plant-form";

    const nameInput = document.createElement("input");
    nameInput.value = isEdit ? (plant?.name || '') : '';
    nameInput.placeholder = "Имя растения";
    nameInput.required = true;
    nameInput.type = 'text';
    nameInput.name = 'name';

    const birthDateInput = document.createElement("input");
    const today = new Date().toISOString().split('T')[0];
    birthDateInput.value = isEdit ? (plant?.birthDate || '') : today;
    birthDateInput.required = true;
    birthDateInput.type = 'date';

    const submitBtn = document.createElement('button');
    submitBtn.textContent = isEdit ? 'Обновить' : 'Посадить!';
    submitBtn.type = 'submit';

    form.append(nameInput, birthDateInput, submitBtn);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const birthDate = birthDateInput.value;

        if (!name) return alert('У растения должно быть имя');

        onSubmit({ id: plant?.id, name, birthDate });
    });

    return form;
}