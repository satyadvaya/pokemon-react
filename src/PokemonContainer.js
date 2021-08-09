import React, { Component } from 'react';
import PokeList from './PokeList.js';

class PokemonContainer extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc' };
  
  componentDidMount() {
    this.fetchPokemon();
  }
  
  fetchPokemon = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }

    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex"
    let searchParams = new URLSearchParams();

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

    setTimeout(() => {
      this.setState({ data: data.results, loading: false });
    }, 1000);
  }
  
  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  }
  updateSort = (event) => {
    this.setState({ sortOrder: event.target.value });
  }

  render() {
    const { loading, sortOrder } = this.state;
    return ( 
      <>
        <h1>Pokemon Characters!</h1>
        <select defaultValue={sortOrder} onChange={this.updateSort}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <input onChange={this.updateQuery} type='text'></input>
        <button onClick={this.fetchPokemon}>Search!</button>
        {loading && <h3>Patience, Please ...</h3>}
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