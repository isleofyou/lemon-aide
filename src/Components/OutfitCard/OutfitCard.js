import "../OutfitCard/OutfitCard.css";

const OutfitCard = ({ id, topProduct, bottomProduct, accessoryProduct, deleteOutfit }) => {
  return (
    <article className='outfit-card-container'>
      <div className='outfit-item-info-container'>
        <img 
          className='outfit-item-image'
          src={topProduct.img_url}
          alt={topProduct.color + ` ` + topProduct.name }
        />
        <p className="outfit-item-name">{topProduct.name}</p>
        <p className="outfit-item-color">{topProduct.color}</p>
      </div>

      <div className='outfit-item-info-container'>
        <img 
          className='outfit-item-image'
          src={bottomProduct.img_url}
          alt={bottomProduct.color + ` ` + bottomProduct.name }
        />
        <p className="outfit-item-name">{bottomProduct.name}</p>
        <p className="outfit-item-color">{bottomProduct.color}</p>
      </div>

      {accessoryProduct && (
        <div className='outfit-item-info-container'>
          <img 
            className='outfit-item-image'
            src={accessoryProduct.img_url}
            alt={accessoryProduct.color + ` ` + accessoryProduct.name }
          />
          <p className="outfit-item-name">{accessoryProduct.name}</p>
          <p className="outfit-item-color">{accessoryProduct.color}</p>
        </div>
      )}



      <button
        className='remove-item-card'
        onClick={() => deleteOutfit(id)}
      >
        X
      </button>
    </article>

  );
}

export default OutfitCard;