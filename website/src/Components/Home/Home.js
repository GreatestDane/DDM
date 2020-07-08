import React, { Component } from 'react'; 
import './Home.css'; 

class Home extends Component {
    state = {
        message: "Welcome to Dane and the Death Machine",
        bottomMessage: "What are you doing all the way down here at the bottom?"
    }

    render() {
        return (
            <div>
                {this.state.message}
                <div id="bottom">{this.state.bottomMessage}</div>
            </div>
        )
    }
}

export default Home; 