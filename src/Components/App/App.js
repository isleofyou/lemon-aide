import './App.css';
import Header from '../Header/Header';
import { Component } from 'react';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products = [],
      error: null
    };
  }

  render() {
    return (
    <main>
      <Header/>
    </main>
  )}
};

export default App;