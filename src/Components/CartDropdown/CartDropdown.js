import React from 'react';
import './CartDropdown.css';
import OutfitItemCard from '../OutfitItemCard/OutfitItemCard';

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
        <button className='dropdown-close-button' onClick={() => toggleCart()}>X</button>
      </div>
      {outfitItemCards}
      <button 
        className='create-outfit-button'
        onClick={() => {
          addOutfit();
        }}
      >
      Save Outfit
      </button>
    </div>
  );
}

export default CartDropdown;
