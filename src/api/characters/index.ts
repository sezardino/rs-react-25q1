import axios from 'axios';
import { CharactersRequest, CharactersResponse } from './types';

export class CharactersApiServiceModule {
  list(dto: CharactersRequest) {
    return axios<CharactersResponse>(
      'https://rickandmortyapi.com/api/character',
      {
        method: 'GET',
        params: dto,
      }
    );
  }
}
