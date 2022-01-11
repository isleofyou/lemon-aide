import { Component } from 'react';
import { getAllProducts, updateFavorite, getAllOutfits, addNewOutfit, deleteOutfit } from '../../apiCalls';
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
          if (product.id === updatedProduct.result.id) {
            const currentProductInState = product;
            currentProductInState.favorite = updatedProduct.result.favorite;
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
  
  //this will need to be passed down as props to the outfitItemsContainer & outfitItemCard where the onClick of X on the outfitItemCard will invoke this method
  deleteItemFromOutfit = (category) => {
    category = category + '_id';
    const updatedOutfitItems = {...this.state.outfitItems};
    updatedOutfitItems[category] = null;
    this.setState({ outfitItems: updatedOutfitItems });
  }

  //this will need to be passed down as props to the outfitItemsContainer where the onClick of the Save Outfit button will run this method and clear our state (outfitCart)
  addOutfit = () => {
    return addNewOutfit(this.state.outfitItems)
      .then(newOutfitId => {
        console.log(`newOutfitId from backend:`, newOutfitId.result.id)
        // console.log(`data.result.id:`, data.result.id)
        //this will return the id of the new outfit
        //will need to setState for the outfits array by adding this to our current state [..this.state.outfits, newOutfit] and the outfitItems back to null
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  //this will need to be passed down as props to the container that holds the outfits (create new outfitsContainer component that will display each outfit via outfitCard)
  deleteOutfit = (id) => {
    return deleteOutfit(id)
      .then(deletedOutfitId => {
        //this will return the id of the deleted outfit
        console.log(`deletedOutfitId from backend:`, deletedOutfitId.result.id)        
        // const updatedOutfitItems = [...this.state.outfits].filter(outfitId => outfitId !== deletedOutfitId);
        //will need to setState for the outfits array
        //this.setState({ outfits: updatedOutfitItems })?
;      })
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
                addItemToOutfit={this.addItemToOutfit}
                addOutfit={this.addOutfit}
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
                addOutfit={this.addOutfit}
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