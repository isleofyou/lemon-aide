import './App.css';
import Header from '../Header/Header';
import { Component } from 'react';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
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
        }, 4000);
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  addFavorite = (id) => {
    return updateFavorite(id)
      .then(data => {
        console.log(data);
        //map over state and update the one data object, assign that variable to state
        this.setState({ products: data});
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
          <ProductsContainer 
            products={this.state.products} 
            addFavorite={this.addFavorite}
          />
        </main>
      </Router>
    )
  }
};

export default App;