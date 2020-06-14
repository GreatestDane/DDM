import React, { component } from 'react'; 
import './Home.css'; 

class Home extends Component {
    state = {
        message: "Welcome to Dane and the Death Machine"
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}

export default Home; 