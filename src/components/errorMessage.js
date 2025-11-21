export function errorMessage ({ message }) {
    const alert = document.createElement('div');
    alert.textContent = `Ошибка: ${message}`;
    return alert;
}