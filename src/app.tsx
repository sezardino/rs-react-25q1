import { AxiosError } from 'axios';
import { Component } from 'react';
import { api } from './api';
import { Character } from './api/characters/types';
import { Loader } from './components/ui/loader';
import { ResultCard } from './components/ui/result-card';
import { SearchForm } from './components/ui/search-form';
import { localStorageSearchTermService } from './services/local-storage';

type AppState = {
  items: Character[];
  isLoading: boolean;
  error: string | null;
};

export class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
      error: null,
    };
  }

  fetchData = async (searchTerm?: string) => {
    this.setState({ isLoading: true, error: null });

    try {
      const response = await api.characters.list({ name: searchTerm });

      this.setState({ items: response.data.results || [], isLoading: false });

      if (typeof searchTerm === 'string')
        localStorageSearchTermService.save(searchTerm);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError)
        return this.setState({ error: error.message, isLoading: false });

      this.setState({ error: 'Unknown error', isLoading: false });
    }
  };

  componentDidMount() {
    const term = localStorageSearchTermService.get();
    this.fetchData(term);
  }

  handleSearch = (searchTerm: string): void => {
    this.fetchData(searchTerm);
  };

  render() {
    const { items, isLoading, error } = this.state;

    const initialValue = localStorageSearchTermService.get();

    return (
      <main className="container mx-auto px-4 pb-10">
        <SearchForm onSearch={this.handleSearch} initialValue={initialValue} />

        <section className="flex flex-col">
          {isLoading && !error && <Loader className="mt-10 self-center" />}

          {!isLoading && error && (
            <small className="text-red-500 text-2xl mt-10 text-center">
              {error}
            </small>
          )}

          {!!items.length && !isLoading && !error && (
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item) => (
                <li key={item.id}>
                  <ResultCard
                    gender={item.gender}
                    image={item.image}
                    name={item.name}
                    species={item.species}
                    status={item.status}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    );
  }
}
