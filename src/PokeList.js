import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    // state = {  }
    render() { 
        return (
            <div className='poke-list'>
                {this.props.pokedex.map((poke) => {
                    return <PokeItem key={poke.pokemon} beast={poke} />
                })}
            </div>
        );
    }
}
 
export default PokeList;