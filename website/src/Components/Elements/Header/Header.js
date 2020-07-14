import React from 'react'; 
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    // const navigationItems = ["Videos", "Lyrics", "Photo Gallery", "Blog"]

    // const listNavItems = navigationItems.map((items) => {
    //     return <li>{items}</li>
    // })

    return(
        <div className="header">
            <div className="header-content">
                <h1>Dane and the Death Machine</h1>
                <ul>     
                   <Link to='/videogallery'> <li>VIDEOS</li> </Link>
                    <li>LYRICS</li>
                    <li>PHOTO GALLERY</li>
                    <li>BLOG</li>
                    <Link to='/'> <li>HOME</li> </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;