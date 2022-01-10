import { Component } from 'react';
import { getAllProducts, updateFavorite } from '../../apiCalls';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import Error from '../Error/Error';
import './App.css';

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
        const fetchedProducts = data[0];
        this.setState({ products: fetchedProducts });
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

        this.setState({ products: updatedProducts });
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
      <>
        <Header />  
        <Routes>
          <Route path ='/' element={ 
            <main className='main-page'>
              <ProductsContainer 
                products={this.state.products} 
                addFavorite={this.addFavorite} 
              />
            </main>
          }
          />
          <Route path='/favorites' element ={
            <main>  
              <ProductsContainer 
                products={this.state.products.filter(product => product.favorite)} 
                addFavorite={this.addFavorite} 
              />
            </main>
          }
          />
        </Routes>
      </>
    );
  }
};

export default App;