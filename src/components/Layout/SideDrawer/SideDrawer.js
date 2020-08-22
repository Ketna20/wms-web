import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if(props.show){
        drawerClasses = 'sideDrawer open';
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Reports</a></li>
        </ul>
    </nav>);
};

export default sideDrawer;