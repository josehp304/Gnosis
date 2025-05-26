import { getAllSaints, getSaintById, getAllSaintIds } from '../data/saints';

describe('Saints Data Functions', () => {
  test('getAllSaints returns all saints', () => {
    const saints = getAllSaints();
    expect(saints).toHaveLength(4);
    expect(saints[0]).toHaveProperty('id');
    expect(saints[0]).toHaveProperty('name');
    expect(saints[0]).toHaveProperty('short');
    expect(saints[0]).toHaveProperty('story');
  });

  test('getSaintById returns correct saint', () => {
    const saint = getSaintById('st-alphonsa');
    expect(saint).toBeDefined();
    expect(saint?.name).toBe('St. Alphonsa');
    expect(saint?.id).toBe('st-alphonsa');
  });

  test('getSaintById returns undefined for non-existent saint', () => {
    const saint = getSaintById('non-existent');
    expect(saint).toBeUndefined();
  });

  test('getAllSaintIds returns all saint IDs', () => {
    const ids = getAllSaintIds();
    expect(ids).toHaveLength(4);
    expect(ids).toContain('st-alphonsa');
    expect(ids).toContain('st-teresa-calcutta');
    expect(ids).toContain('st-francis-assisi');
    expect(ids).toContain('st-joan-arc');
  });

  test('all saints have required properties', () => {
    const saints = getAllSaints();
    saints.forEach(saint => {
      expect(saint.id).toBeTruthy();
      expect(saint.name).toBeTruthy();
      expect(saint.short).toBeTruthy();
      expect(saint.story).toBeTruthy();
      expect(typeof saint.id).toBe('string');
      expect(typeof saint.name).toBe('string');
      expect(typeof saint.short).toBe('string');
      expect(typeof saint.story).toBe('string');
    });
  });
});
