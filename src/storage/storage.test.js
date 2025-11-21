import { addPlant, loadPlants, updatePlant } from './storage.js';

test('addPlant adds a plant with id', () => {
    addPlant({ name: 'Lavander', birthDate: '2025-06-26' });

    const plants = loadPlants();
    const last = plants[plants.length - 1];

    expect(last).toHaveProperty('id');
    expect(last.name).toBe('Lavander');
});

test('updatePlant updates name and birthDate correctly', () => {
    const initialPlant = addPlant({ name: 'Lavander', birthDate: '2025-06-26' });

    updatePlant({ id: initialPlant.id, name: 'Basil', birthDate: '2025-06-01' });

    const plants = loadPlants();
    const updated = plants.find(p => p.id === initialPlant.id);

    expect(updated.name).toBe('Basil');
    expect(updated.birthDate).toBe('2025-06-01');
});