import React, { Component } from 'react';
import Header from '../components/Header';
import Description from '../components/Description';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Description />
      </div>  
    )
  }
}