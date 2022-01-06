import './App.css';
import Header from '../Header/Header';
import { Component } from 'react/cjs/react.production.min';
import Aside from '../Aside/Aside';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <main>
      <Router>
      <Header/>
      <Aside />
      <Routes>
        
      </Routes>
      </Router>
    </main>
  )}
};

export default App;