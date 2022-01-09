import ProductCard from '../ProductCard/ProductCard';
import './ProductsContainer.css';
import Loading from '../Loading/Loading';

const ProductsContainer = ({ products, addFavorite }) => {
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
    products.length ? 
      <main className="products-container">
        {productCards}
      </main> 
    :
      <Loading />
  );
}

export default ProductsContainer;