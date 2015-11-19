import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import Locations from './Locations';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1>{this.props.location}</h1>
        <Nav bsStyle="pills" stacked activeKey={this.props.location}>
          <NavItem eventKey={Locations.town} href="#">Town</NavItem>
          <NavItem eventKey={Locations.forest} href="#">Forest</NavItem>
        </Nav>
      </div>
    )
  }
}