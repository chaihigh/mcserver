export class Storage<T extends { id: number }> {
  data: T[] = [];
  nextId: number = 1;

  getAll() {
    return this.data;
  }

  getById(id: number) {
    return this.data.find(d => d.id === id);
  }

  find(query: (data: T, id: number) => boolean) {
    return this.data.filter(query);
  }

  replace<ID extends number>(id: ID, data: Omit<T, 'id'> & { id: ID }) {
    this.data = this.data.map(d => d.id === id ? ({...data, id}) : d);
  }

  update(id: number, data: Partial<Omit<T, 'id'>> & { id: never }) {
    this.data = this.data.map(d => d.id === id ? ({...d, ...data}) : d);
  }

  create(data: Omit<T, 'id'>): T {
    const id = this.nextId++;
    const entry: T = {
      ...data,
      id,
    };
    this.data.push(entry);
    return entry;
  }

  delete(id: number): T | undefined {
    const data = this.getById(id);
    if (!data) {
      return undefined;
    }
    this.data = this.data.filter(d => d.id !== id);
    return data;
  }

  clear() {
    this.data = [];
  }
}