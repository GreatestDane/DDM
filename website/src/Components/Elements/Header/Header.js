import React from 'react'; 
import './Header.css';

const Header = () => {

    const navigationItems = ["Videos", "Lyrics", "Photo Gallery", "Blog"]

    const listNavItems = navigationItems.map((items) => {
        return <li>{items}</li>
    })

    return(
        <div className="header">
            <div className="header-content">
                <h1>Dane and the Death Machine</h1>
                <ul>     
                    {listNavItems}
                </ul>
            </div>
        </div>
    )
}

export default Header;