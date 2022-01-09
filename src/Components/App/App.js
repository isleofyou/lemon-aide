import './App.css';
import Header from '../Header/Header';
import { Component } from 'react';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';

import Error from '../Error/Error';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getAllProducts, updateFavorite, getFavorites } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      error: null,
      favorites: []
    };
  }

  componentDidMount = () => {
    const allProducts = getAllProducts();
    const allFavoriteProducts = getFavorites();
    Promise.all([allProducts, allFavoriteProducts])
      .then(data => {
        const fetchedProducts = data[0];
        const fetchedFavorites = data[1];
        this.setState({ products: fetchedProducts, favorites: fetchedFavorites });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  addFavorite = (id) => {
    return updateFavorite(id)
      .then(updatedProduct => {
        const updatedProducts = this.state.products.map(product => {
          if (product.id === updatedProduct.id) {
            const currentProductInState = product;
            currentProductInState.favorite = updatedProduct.favorite;
            return currentProductInState;
          }
          return product;
        });
        const updatedFavorites = updatedProducts.filter(product => product.favorite);

        this.setState({ products: updatedProducts, favorites: updatedFavorites});
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render = () => {
    return (
      this.state.error !== null ?
        <Error error={this.state.error} />
      :
      <Router>
        <main>
          <Aside showFavorites={this.showFavorites}/>
          <Header />
          <ProductsContainer 
            products={this.state.products} 
            addFavorite={this.addFavorite} 
          />
          <FavoritesContainer 
            favorites={this.state.favorites} 
            addFavorite={this.addFavorite}
          />
        </main>
      </Router>
    )
  }
};

export default App;