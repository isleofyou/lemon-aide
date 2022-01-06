import './App.css';
import Header from '../Header/Header';
import { Component } from 'react/cjs/react.production.min';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <main>
      <Header/>
    </main>
  )}
};

export default App;