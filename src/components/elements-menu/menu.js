import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faDharmachakra} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    return (
        <div className="main_container">
            <nav className="navbar">
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle"/>
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li className="services">Colour
                            <ul className="dropdown">
                                <li><FontAwesomeIcon icon={faCircle} color="blue" size="lg"/></li>
                                <li><FontAwesomeIcon icon={faCircle} color="red" size="lg"/></li>
                                <li><FontAwesomeIcon icon={faCircle} color="white" size="lg"/></li>
                                <li><FontAwesomeIcon icon={faCircle} color="black" size="lg"/></li>
                                <li><FontAwesomeIcon icon={faCircle} color="silver" size="lg"/></li>
                                <li><FontAwesomeIcon icon={faCircle} color="grey" size="lg"/></li>
                            </ul>
                        </li>
                        <li className="wheels">
                            Jantes
                            <ul className="dropdown">
                                <li><FontAwesomeIcon icon={faDharmachakra} size="lg"/></li>
                                <li><FontAwesomeIcon icon={faDharmachakra} size="lg"/></li>
                                <li><FontAwesomeIcon icon={faDharmachakra} size="lg"/></li>
                                <li><FontAwesomeIcon icon={faDharmachakra} size="lg"/></li>
                            </ul>
                        </li>
                        <li>Portes</li>
                        <li>Intérieur</li>
                    </div>
                </ul>
            </nav>

        </div>
    );
};

export default Menu;