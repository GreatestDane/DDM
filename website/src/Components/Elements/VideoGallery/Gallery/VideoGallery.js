import React, { Component } from 'react';
import './VideoGallery.css';

class VideoGallery extends Component {

    state = {
        joes: <img src='/images/joe.jpg' className='images' alt='Live at Joes'></img>,
        crab: <img src='/images/background.jpg' className='images' alt='test'></img>
    }

    render() {
        return (
            <div id="flex-container">
                <div id='fuck'>WHAT THE HOLY FUCK</div>
               {this.state.joes}
               {this.state.joes}
               {/* <img classname='images' src='/images/joe.jpg'></img> */}
            </div>
        )
    }
}

export default VideoGallery;