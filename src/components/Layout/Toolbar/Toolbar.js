import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo">
                <a href="/">The LOGO</a>
            </div>
            <div className="spacer" />
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">Reports</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;