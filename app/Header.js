import React from 'react';
import styles from './Header.css';
import {PageHeader} from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <PageHeader>Legend of the JavaScript Dragon
            <small> version 0.0.1</small>
          </PageHeader>
        </div>
      </div>
    )
  }
}