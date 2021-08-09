import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokeList from './PokeList.js';
import PokemonContainer from './PokemonContainer.js';

class App extends Component {

  render() {
    return (
      <section className='app'>
        <BrowserRouter>
          <Switch>
              {/* <Route path='/pokemon/:pokeId' component={PokeDetail} /> */}
              <Route path='/pokemon' component={PokemonContainer} />
              <Route path='/' exact><h2>Welcome to pokedex</h2></Route>
          </Switch>
        </BrowserRouter>
      </section>
    )
  }
}
 
export default App;