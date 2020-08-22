import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="sideDrawer">
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Reports</a></li>
        </ul>
    </nav>
);

export default sideDrawer;