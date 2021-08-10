import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <header>
                <div>pokedex</div>
                <div className='links'>
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink to='/pokemon'>Pokemon List</NavLink>
                </div>
            </header>
        );
    }
}
 
export default Header;