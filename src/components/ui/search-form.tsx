import { Component, FormEvent } from 'react';

type SearchProps = {
  onSearch: (value: string) => void;
  initialValue?: string;
};

type SearchState = {
  value: string;
};

const INPUT_NAME = 'search';

export class SearchForm extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { value: props.initialValue || '' };
  }

  handleSearch = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const search = formData.get(INPUT_NAME);

    if (!search) return this.props.onSearch('');

    this.props.onSearch(search.toString().trim());
  };

  render() {
    return (
      <form
        className="flex gap-2 p-4 bg-gray-100 rounded-md"
        onSubmit={this.handleSearch}
      >
        <input
          type="text"
          name={INPUT_NAME}
          defaultValue={this.props.initialValue}
          placeholder="Enter search term"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    );
  }
}
