import './App.css';
import Header from '../Header/Header';
import { Component } from 'react';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getAllProducts } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      error: null
    };
  }

  componentDidMount = () => {
    const allProducts = getAllProducts();
    
    Promise.all([allProducts])
      .then(data => {
        console.log(data)
        const fetchedProducts = data[0];
        this.setState({ products: fetchedProducts });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render = () => {
    return (
      <Router>
        <main>
          <Aside />
          <Header />
          <ProductsContainer products={this.state.products} />
        </main>
      </Router>
    )
  }
};

export default App;