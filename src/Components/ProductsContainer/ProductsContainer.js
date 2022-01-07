import ProductCard from '../ProductCard/ProductCard';

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
    <main className="Products-Container">
      {productCards}
    </main> 
  );
}

export default ProductsContainer;