import React, { Component } from 'react';
import './PokeDetail.css';

class PokeDetail extends Component {
    state = {data: {} };
    loadData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ data });
    }

    componentDidMount() {
        this.loadData();
    }

    render() { 
        console.log(this.props.match);
        // const { id } = this.props.match.params;
        const { data } = this.state;
        return (
            <section>
                {/* <h1>{data.pokemon}</h1> */}
                {/* <p>Poke ID: {id}</p> */}
                <div className='poke-detail'>
                    <h2>Name: {data.pokemon}</h2>
                    <img src={data.url_image} alt='poke' />
                    <h3>Shape: {data.shape}</h3>
                    <h3>Attack: {data.attack}</h3>
                    <h3>Defense: {data.defense}</h3>
                    <h3>Height: {data.height}</h3>
                    <h3>Weight: {data.weight}</h3>
                    <h3>hp: {data.hp}</h3>
                </div>
            </section>
        );
    }
}
 
export default PokeDetail;