import ProductCard from '../ProductCard/ProductCard';
import './ProductsContainer.css';
import Loading from '../Loading/Loading';
import brokenHeart from '../../assets/broken-heart.png';
import { useLocation } from 'react-router-dom';

const ProductsContainer = ({ products, addFavorite }) => {
  let location = useLocation();
  console.log('location 1', location);
  //if location.pathname === "/" => render usual w/Loading component
  //if location.pathname === "/api/v1/favorites" => render w/broken heart div
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
    location.pathname === "/" ?
      productCards.length ?
        <main className="products-container">
          {productCards}
        </main> 
      : <Loading />
    : 
      productCards.length && products.every(product => product.favorite) ?
        <main className="favorite-products-container">
          {productCards}
        </main> 
    : <div className="no-favorites">
        <img className="heart-picture" src={brokenHeart} alt="broken heart" />
        <h3>Add favorites to see them here.</h3>
      </div>

  );
}

export default ProductsContainer;