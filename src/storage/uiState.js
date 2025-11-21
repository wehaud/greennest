let isFormOpen = false;

export function toggleFormVisibility() {
    isFormOpen = !isFormOpen;
}

export function showForm() {
    isFormOpen = true;
}

export function hideForm() {
    isFormOpen = false;
}

export function getFormvisibility() {
    return isFormOpen;
}