import React from 'react';
import styles from './App.css';
import Header from './Header';
import Menu from './Menu';
import Locations from './Locations';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: Locations.town};
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Menu location={this.state.location}/>
      </div>
    );
  }
}
