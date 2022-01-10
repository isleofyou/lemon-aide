import ProductCard from '../ProductCard/ProductCard';
import './ProductsContainer.css';
import Loading from '../Loading/Loading';
import brokenHeart from '../../assets/broken-heart.png';
import { useLocation } from 'react-router-dom';

const ProductsContainer = ({ products, addFavorite }) => {
  let location = useLocation();

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

  if (location.pathname === '/' && !productCards.length) {
    return (
      <Loading />
    );
  } else if (location.pathname === '/favorites' && !productCards.length) {
    return (
      <div className="no-favorites">
        <img 
          className="heart-picture" 
          src={brokenHeart} 
          alt="broken heart" 
        />
        <h3>Add favorites to see them here.</h3>
      </div>
    );
  } else if (productCards.length) {
    return (
      <main className="products-container">
        {productCards}
      </main> 
    );
  }
}

export default ProductsContainer;