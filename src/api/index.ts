import { CharactersApiServiceModule } from './characters';

class ApiService {
  characters: CharactersApiServiceModule;

  constructor() {
    this.characters = new CharactersApiServiceModule();
  }
}

export const api = new ApiService();
