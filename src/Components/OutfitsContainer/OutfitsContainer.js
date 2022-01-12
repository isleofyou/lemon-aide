import './OutfitsContainer.css';
import OutfitCard from '../OutfitCard/OutfitCard';

const OutfitsContainer = ({ outfits, products, deleteOutfit }) => {
  const outfitCards = outfits.map(outfit => {
    const topProduct = products.find(product => product.id === outfit.top_id);
    const bottomProduct = products.find(product => product.id === outfit.bottom_id);
    const accessoryProduct = products.find(product => product.id === outfit.accessory_id);

    return (
      <OutfitCard 
        key={outfit.id} 
        id={outfit.id}
        topProduct={topProduct}
        bottomProduct={bottomProduct}
        accessoryProduct={accessoryProduct}
        deleteOutfit={deleteOutfit}
      />
    );
  });

  return (
    <main className='outfits-container'>
      {outfitCards}
    </main>
  );
}

export default OutfitsContainer;