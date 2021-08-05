import React, { Component } from 'react';

class PokeItem extends Component {
    // state = {  }
    render() { 
        return (
            <li>
                <h3>{this.props.beast.pokemon}</h3>
            </li>
        );
    }
}
 
export default PokeItem;