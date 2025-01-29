import { RS_REACT_SEARCH_TERM } from '@/const/local-storage';

export class LocalStorageService {
  constructor(private readonly key: string) {}

  save(term: string) {
    localStorage.setItem(this.key, term);
  }

  get() {
    return localStorage.getItem(this.key) || undefined;
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}

export const localStorageSearchTermService = new LocalStorageService(
  RS_REACT_SEARCH_TERM
);
