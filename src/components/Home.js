import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    state = {  }

    render() { 
        return ( 
            <React.Fragment>
            <Header />
            <h3 className="home-text">Hello from Home</h3>
            </React.Fragment>
         );
    }
}
 
export default Home;