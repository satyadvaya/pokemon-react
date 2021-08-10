import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokeItem.css';

class PokeItem extends Component {
    // state = {  }
    render() {
        const { beast } = this.props;
        return (
            <div className='poke-card'>
                <Link to={`/pokemon/${beast._id}`}>
                    <h3>{beast.pokemon}</h3>
                    <div className='pokemon'>
                        <img src={beast.url_image} alt='poke' />
                    </div>
                </Link>
            </div>
        );
    }
}
 
export default PokeItem;