export function getPlantAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    const diffTime = today - birth;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} дней`;
}