import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokeList from './PokeList.js';
import PokemonContainer from './PokemonContainer.js';
import Home from './Home.js';
import Header from './Header.js';
import PokeDetail from './PokeDetail.js';

class App extends Component {

  render() {
    return (
      <section className='app'>
        <BrowserRouter>
          <Header />
          <Switch>
              <Route path='/pokemon/:pokeId' component={PokeDetail} />
              <Route path='/pokemon' component={PokemonContainer} />
              {/* <Route path='/' exact><h2>Welcome to pokedex</h2></Route> */}
              <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </section>
    )
  }
}
 
export default App;