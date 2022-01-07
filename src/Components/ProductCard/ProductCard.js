import "../ProductCard/ProductCard.css";

const ProductCard = ({ id, name, color, img_url, category, favorite }) => {
  return (
    <article className="product-card">
      <div className="product-card-container">
        <img 
          className="product-image"
          src={img_url} 
          alt={color + ` ` + name }
        />
        <p className="product-name">
          {name}
        </p>
      </div>
    </article>
  )
}

export default ProductCard;