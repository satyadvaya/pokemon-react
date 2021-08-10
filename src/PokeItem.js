import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokeItem extends Component {
    // state = {  }
    render() { 
        return (
            <li>
                <h3>
                    <Link to={`/pokemon/${this.props.beast._id}`}>
                    {this.props.beast.pokemon}
                    </Link>
                </h3>
            </li>
        );
    }
}
 
export default PokeItem;