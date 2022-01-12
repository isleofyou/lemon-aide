import React from 'react';
import './CartDropdown.css';
import OutfitItemCard from '../OutfitItemCard/OutfitItemCard';
import * as AiIcons from 'react-icons/ai';

const CartDropdown = ({ toggleCart, outfitItems, deleteItemFromOutfit, addOutfit, products, outfits }) => {
  const selectedOutfitItemIds = Object.values(outfitItems).filter(item => item !== null);
  const matchingProducts = products.filter(product => selectedOutfitItemIds.includes(product.id));

  const outfitItemCards = matchingProducts.map(product => {
    return <OutfitItemCard 
            key={product.id}
            name={product.name}
            color={product.color}
            img_url={product.img_url}
            category={product.category}
            deleteItemFromOutfit={deleteItemFromOutfit}
          />
  });

  const validateCart = () => {
    const categoriesInCart = matchingProducts.map(product => product.category);
    return categoriesInCart.includes('top') && categoriesInCart.includes('bottom');
  }

  const checkForExistingOutfit = () => {
    const existingOutfit = outfits.find(outfit => {
      const topMatches = outfitItems.top_id === outfit.top_id;
      const bottomMatches = outfitItems.bottom_id === outfit.bottom_id;
      const accessoryMatches = outfitItems.accessory_id === outfit.accessory_id;
      return topMatches && bottomMatches && accessoryMatches;
    });
    return existingOutfit !== undefined;
  }

  const handleSaveOutfit = () => {
    if (validateCart() && !checkForExistingOutfit()) {
      addOutfit();
      toggleCart();
    }
  }

  return (
    <div className='cart-dropdown'>
      <div className='exit-button-container'>

        <AiIcons.AiOutlineCloseCircle className='exit-dropdown-button' onClick={() => toggleCart()}/>
      </div>
      {outfitItemCards}
      <div className='create-outfit-button-container'>
        <button 
          className='create-outfit-button'
          onClick={() => handleSaveOutfit()}
        >
        Save Outfit
        </button>
      </div>
      {
        !validateCart() &&
        <p className='missing-items' >Both a top and bottom are required.</p>
      }
      {
        checkForExistingOutfit() &&
        <p>This outfit already exists.</p>
      }
    </div>
  );
}

export default CartDropdown;
