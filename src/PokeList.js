import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    // state = {  }
    render() { 
        return (
            <ul>
                {this.props.pokedex.map((poke) => {
                    return <PokeItem beast={poke} />
                })}
            </ul>
        );
    }
}
 
export default PokeList;