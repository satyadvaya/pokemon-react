import React, { Component } from 'react';
import PokeList from './PokeList.js';

class App extends Component {
  state = { data: [], loading: true, query: null };

  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex"
    if (this.state.query) {
      url = url + `?pokemon=${this.state.query}`;
    }
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    setTimeout(() => {
      this.setState({ data: data.results, loading: false });
    }, 1000);
  }

  render() {
    const { loading } = this.state;
    return ( 
      <>
        <h1>Pokemon Characters!</h1>
        {loading && <h3>Patience, Please ...</h3>}
        {!loading && (
          <section>
            <input onChange={this.updateQuery} type='text'></input>
            <button onClick={this.fetchData}>Search!</button>
            <PokeList pokedex={this.state.data} />
          </section>
        )}
      </>
    );
  }
}
 
export default App;