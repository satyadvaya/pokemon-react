import React, { Component } from 'react';
import PokeList from './PokeList.js';

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex"
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ data: data.results });
  }

  render() {
    return ( 
      <>
        <h1>Pokemon Characters!</h1>
        <PokeList pokedex={this.state.data} />
      </>
    );
  }
}
 
export default App;