import './App.css';
import Header from '../Header/Header';
import { Component } from 'react';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
=======
import { getAllProducts } from '../../apiCalls';

>>>>>>> 423ad0c2638114879e1fb6bf7b750bf0a6597768
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
<<<<<<< HEAD
    <main>
      <Router>
      <Header/>
      <Aside />
      <Routes>
        
      </Routes>
      </Router>
    </main>
  )}
=======
      <main>
        <Header />
        <ProductsContainer products={this.state.products} />
      </main>
    )
  }
>>>>>>> 423ad0c2638114879e1fb6bf7b750bf0a6597768
};

export default App;