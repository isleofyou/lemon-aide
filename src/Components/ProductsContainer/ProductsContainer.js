import ProductCard from '../ProductCard/ProductCard';
import './ProductsContainer.css';

const ProductsContainer = ({ products }) => {
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
      />
    )
  });

  return (
    <main className="products-container">
      {productCards}
    </main> 
  );
}

export default ProductsContainer;