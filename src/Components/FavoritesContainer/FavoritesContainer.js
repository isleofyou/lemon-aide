import ProductCard from '../ProductCard/ProductCard';
import './FavoritesContainer.css';
import brokenHeart from '../../assets/broken-heart.png';

const FavoritesContainer = ({ products, addFavorite }) => {
  const productCards = products.map(product => {
    return (
      <ProductCard 
        key={product.id}
        id={product.id}
        name={product.name}
        color={product.color}
        img_url={product.img_url}
        category={product.category}
        favorite={product.favorite}
        addFavorite={addFavorite}
      />
    );
  });

  return (
    productCards.length ? 
      <main className="favorites-container">
        {productCards}
      </main> 
    : <div className="no-favorites">
        <img className="heart-picture" src={brokenHeart} alt="broken heart" />
        <h3>Add favorites to see them here.</h3>
      </div>
    
  );
}

export default FavoritesContainer;