import ProductCard from '../ProductCard/ProductCard';
import './FavoritesContainer.css';
import Loading from '../Loading/Loading';

const FavoritesContainer = ({ favorites, addFavorite }) => {
  const productCards = favorites.map(product => {
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
    : <Loading />
  );
}

export default FavoritesContainer;