import { Component } from 'react';
import { getAllProducts, updateFavorite, getAllOutfits, addNewOutfit, deleteOutfit } from '../../apiCalls';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import OutfitsContainer from '../OutfitsContainer/OutfitsContainer';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      outfits: [],
      outfitItems: {
        top_id: null, 
        bottom_id: null,
        accessory_id: null
      },
      error: null
    };
  }

  componentDidMount = () => {
    const allProducts = getAllProducts();
    const allOutfits = getAllOutfits();

    Promise.all([allProducts, allOutfits])
      .then(data => {
        const fetchedProducts = data[0];
        const fetchedOutfits = data[1];

        this.setState({ products: fetchedProducts, outfits: fetchedOutfits });
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

  addItemToOutfit = (category, id) => {
    category = category + '_id';
    if (!this.state.outfitItems[category]) {
      const updatedOutfitItems = {...this.state.outfitItems};
      updatedOutfitItems[category] = id;
      this.setState({ outfitItems: updatedOutfitItems });
    }
  }
  
  deleteItemFromOutfit = (category) => {
    category = category + '_id';
    const updatedOutfitItems = {...this.state.outfitItems};
    updatedOutfitItems[category] = null;
    this.setState({ outfitItems: updatedOutfitItems });
  }

  addOutfit = () => {
    return addNewOutfit(this.state.outfitItems)
      .then(data => {
        const updatedOutfits = [...this.state.outfits, data.newOutfit[0]];
        this.setState({ outfits: updatedOutfits, 
          outfitItems: {
            top_id: null, 
            bottom_id: null,
            accessory_id: null
          }
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  deleteOutfit = (id) => {
    return deleteOutfit(id)
      .then(deletedOutfit => {     
        let updatedOutfits = [...this.state.outfits];
        updatedOutfits = updatedOutfits.filter(outfit => outfit.id !== deletedOutfit.id);
        this.setState({ outfits: updatedOutfits });
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
        <Header 
          outfitItems={this.state.outfitItems}
          deleteItemFromOutfit={this.deleteItemFromOutfit}
          addOutfit={this.addOutfit}
          products={this.state.products}
        />  
        <Routes>
          <Route path ='/' element={ 
            <main className='main-page'>
              <ProductsContainer 
                products={this.state.products} 
                addFavorite={this.addFavorite} 
                addItemToOutfit={this.addItemToOutfit}
              />
            </main>
          }
          />
          <Route path='/favorites' element ={
            <main>  
              <ProductsContainer 
                products={this.state.products.filter(product => product.favorite)} 
                addFavorite={this.addFavorite} 
                addItemToOutfit={this.addItemToOutfit}
              />
            </main>
          }
          />
          <Route path='/my-outfits' element={
            <main>
              <OutfitsContainer 
                outfits={this.state.outfits}
                products={this.state.products}
                deleteOutfit={this.deleteOutfit}
              />
            </main>
          }
          />
        </Routes>
        <Footer />
      </>
    );
  }
};

export default App;