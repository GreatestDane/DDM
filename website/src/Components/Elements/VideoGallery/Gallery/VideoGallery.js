import { React } from 'react';
import './VideoGallery.css';

class VideoGallery extends Component {

    state = {
        joes: '../../../../../public/images/joe.jpg'
    }

    render() {
        return (
            <div id="flex-container">
               <div className="images">{this.state.joes}</div>
            </div>
        )
    }
}