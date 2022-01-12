import React from 'react';
import './CartDropdown.css';
import OutfitItemCard from '../OutfitItemCard/OutfitItemCard';
import * as AiIcons from 'react-icons/ai';

const CartDropdown = ({ toggleCart, outfitItems, deleteItemFromOutfit, addOutfit, products }) => {
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

  return (
    <div className='cart-dropdown'>
      <div className='exit-button-container'>

        <AiIcons.AiOutlineCloseCircle className='exit-dropdown-button' onClick={() => toggleCart()}/>
      </div>
      {outfitItemCards}
      <div className='create-outfit-button-container'>
        <button 
          className='create-outfit-button'
          onClick={() => {
            addOutfit();
            toggleCart();
          }}
        >
        Save Outfit
        </button>
      </div>
    </div>
  );
}

export default CartDropdown;
