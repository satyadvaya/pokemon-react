import React, { Component } from 'react';

class PokeDetail extends Component {
    // state = {  }
    render() { 
        console.log(this.props.match);
        return (
            <section>
                <h1>PokeDetail</h1>
            </section>
        );
    }
}
 
export default PokeDetail;