import './App.css';
import Header from '../Header/Header';
import { Component } from 'react';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import Loading from '../Loading/Loading';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getAllProducts, updateFavorite } from '../../apiCalls';

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
        setTimeout(() => {
          this.setState({ products: fetchedProducts });
        }, 2000);
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  addFavorite = ({id}) => {
    const newFavoriteIndex = this.state.products.findIndex(product => id === product.id);
    let updatedState = [...this.state.products];
    updatedState[newFavoriteIndex].favorite = !updatedState[newFavoriteIndex].favorite;
    this.setState({ products: updatedState })
  }

  productRender = () => {
    if (this.state.products.length > 0) {
      return (
        <ProductsContainer products={this.state.products} addFavorite={this.addFavorite} />
      )
    } else {
      return (
        <Loading />
      )
    }
  }

  render = () => {
    return (
      <Router>
        <main className='main-flex'>
          <Aside />
          <Header />
          {this.productRender()}
        </main>
      </Router>
    )
  }
};

export default App;