import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton';
import './Toolbar.css';
import Reports from '../../Reports/Reports';
import Dashboard from '../../Dashboard/Dashboard';

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
                    <li><Link className="navLink" to="/">Dashboard</Link></li>
                    <li><Link className="navLink" to="/reports">Reports</Link></li>
                    {/* <li><a href="/">Dashboard</a></li>
                    <li><a href="/reports">Reports</a></li> */}
                </ul>
            </div>
        </nav>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/reports" component={Reports} />
        </Switch>

    </header>
    
);

export default toolbar;