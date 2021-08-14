import React, { Component } from 'react';
import PokeList from './PokeList.js';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class PokemonContainer extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc', page: 1, lastPage: 1 };
  
  componentDidMount() {
    this.fetchPokemon();
  }
  
  fetchPokemon = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }

    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex"
    let searchParams = new URLSearchParams();
    searchParams.set('page', this.state.page);

    if (this.state.query) {
      searchParams.set('pokemon', this.state.query);
    }
    if (this.state.sortOrder) {
      searchParams.set('sort', 'pokemon');
      searchParams.set('direction', this.state.sortOrder);
    }

    url = url + `?${searchParams.toString()}`;
    let response = await fetch(url);
    let data = await response.json();
    const lastPage = Math.ceil(data.count / data.perPage);

    setTimeout(() => {
      this.setState({ data: data.results, loading: false, lastPage });
    }, 1000);
  }
  
  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  }
  updateSort = (event) => {
    this.setState({ sortOrder: event.target.value });
  }

  previousPage = async () => {
    await this.setState({ page: this.state.page -1 });
    this.fetchPokemon();
  }
  nextPage = async () => {
    await this.setState({ page: this.state.page +1 });
    this.fetchPokemon();
  }
  lastPage = async () => {
    await this.setState({ page: this.state.lastPage });
    this.fetchPokemon();
  }

  searchPokemon = async () => {
    await this.setState({ page: 1 });
    this.fetchPokemon();
  }

  render() {
    const { loading, sortOrder } = this.state;
    return (
      <>
        <h1>Pokemon Characters!</h1>
        <div className='search-controls'>
          <select defaultValue={sortOrder} onChange={this.updateSort}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        <input onChange={this.updateQuery} type='text'></input>
        <button onClick={this.searchPokemon}>Search!</button>
        </div>
        <div className='page-controls'>
          {this.state.page > 1 && (
            <button onClick={this.previousPage}>Backward</button>
          )}
          {this.state.page < this.state.lastPage && (
            <>
              <button onClick={this.nextPage}>Forward</button>
              <button onClick={this.lastPage}>End Page</button>
            </>
          )}
        </div>
        {loading && <Loader
          type="Rings" color="#00BFFF" height={80} width={80} //3 secs
        />}
        {!loading && (
          <section>
            <PokeList pokedex={this.state.data} />
          </section>
        )}
      </>
    );
  }
}
 
export default PokemonContainer;