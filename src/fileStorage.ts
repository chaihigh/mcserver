import * as fs from 'fs';
import * as path from 'path';

interface PersistedState<T> {
  data: T[];
  nextId: number;
}

export class FileStorage<T extends { id: number }> {
  private filePath: string;
  data: T[];
  nextId: number;

  constructor(relativePath: string) {
    this.filePath = path.resolve(__dirname, relativePath);
    const state = this.load();
    this.data = state.data;
    this.nextId = state.nextId;
  }

  private load(): PersistedState<T> {
    try {
      const raw = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(raw);
    } catch {
      return {data: [], nextId: 1};
    }
  }

  private save() {
    const state: PersistedState<T> = {data: this.data, nextId: this.nextId};
    fs.mkdirSync(path.dirname(this.filePath), {recursive: true});
    fs.writeFileSync(this.filePath, JSON.stringify(state, null, 2), 'utf-8');
  }

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
    this.save();
  }

  update(id: number, data: Partial<Omit<T, 'id'>> & { id: never }) {
    this.data = this.data.map(d => d.id === id ? ({...d, ...data}) : d);
    this.save();
  }

  create(data: Omit<T, 'id'>): T {
    const id = this.nextId++;
    const entry: T = {...data, id} as T;
    this.data.push(entry);
    this.save();
    return entry;
  }

  delete(id: number): T | undefined {
    const data = this.getById(id);
    if (!data) return undefined;
    this.data = this.data.filter(d => d.id !== id);
    this.save();
    return data;
  }

  clear() {
    this.data = [];
    this.save();
  }
}
