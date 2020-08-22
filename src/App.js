import React from 'react';
import Toolbar from './components/Layout/Toolbar/Toolbar';
import SideDrawer from './components/Layout/SideDrawer/SideDrawer';
import Backdrop from './components/Layout/Backdrop/Backdrop';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  
  backdropClickHandler = () => {
    // can be add other functionality such as modal to close it.
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      {sideDrawer}
      {backdrop}
      <main style={{marginTop: '64px'}}>
        <p>This is the page content.</p>
      </main>
      
    </div>
  );
}
}

export default App;
