import './App.css';
import Header from '../Header/Header';
import { Component } from 'react';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import Error from '../Error/Error';
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
    if(this.state.error) {
      return (
        <main>
          <Header />
          <Error errorMessage={this.state.error}></Error>
        </main>
      )
    }
    else {
      return (
        <main>
          <Header />
          <ProductsContainer products={this.state.products} />
        </main>
      )
    }
  }
};

export default App;