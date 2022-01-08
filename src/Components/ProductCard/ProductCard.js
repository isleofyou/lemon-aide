import "../ProductCard/ProductCard.css";
import heart from '../../assets/transparent-heart.jpeg';
import faveHeart from '../../assets/red-heart.png';

const ProductCard = ({ id, name, color, img_url, category, favorite }) => {
  return (
    <article className="product-card">
      <div className="product-card-container">
        <img 
          alt="favoriting heart"
          src={ favorite ? faveHeart: heart }
          className={ favorite ? "favorite-button": "unfavorite-button" }
          onClick={() => {
            if (favorite) {
              //remove from favorites via id
            } else {
              //add to favorites via id
            }
          }}
        />
        <img 
          className="product-image"
          src={img_url} 
          alt={color + ` ` + name }
        />
        <h2 className="product-name">
          {name}
        </h2>
        <h2 className="product-color">
          {color}
        </h2>
        <button
          className={category}
        >
          Select {category}
        </button>
      </div>
    </article>
  )
}

export default ProductCard;