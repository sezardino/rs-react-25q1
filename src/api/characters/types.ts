import {
  ResourceBase,
  LiveStatus,
  Gender,
  CharacterLocation,
  BaseFilters,
  Info,
} from '../types';

export type Character = ResourceBase & {
  status: LiveStatus;
  species: string;
  type: string;
  gender: Gender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
};

export type CharactersRequest = BaseFilters;
export type CharactersResponse = Info<Character[]>;
