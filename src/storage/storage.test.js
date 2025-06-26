import { addPlant, loadPlants } from './storage.js';

test('addPlant adds a plant with id', () => {
    addPlant({ name: 'Lavander', birthDate: '2025-06-26' });

    const plants = loadPlants();
    const last = plants[plants.length - 1];

    expect(last).toHaveProperty('id');
    expect(last.name).toBe('Lavander');
});