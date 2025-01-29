export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export type LiveStatus = 'Dead' | 'Alive' | 'unknown';

export type CharacterLocation = {
  name: string;
  url: string;
};

export type ResourceBase = {
  id: number;
  name: string;
  url: string;
  created: string;
};

export type Endpoints = {
  character: string;
  location: string;
  episode: string;
};

export type BaseFilters = {
  name?: string;
  type?: string;
  species?: string;
  status?: LiveStatus;
  gender?: Gender;
  page?: number;
};

export type LocationFilter = Pick<BaseFilters, 'name' | 'type' | 'page'> & {
  dimension?: string;
};

export type EpisodeFilter = Pick<BaseFilters, 'name' | 'page'> & {
  episode?: string;
};

export type Location = ResourceBase & {
  type: string;
  dimension: string;
  residents: string[];
};

export type Episode = ResourceBase & {
  air_date: string;
  episode: string;
  characters: string[];
};

export type ApiResponse<T> = {
  status: number;
  statusMessage: string;
  data: T;
};

export type Info<T> = {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T;
};
