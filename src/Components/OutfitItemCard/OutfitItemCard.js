import '../OutfitItemCard/OutfitItemCard.css';

const OutfitItemCard = ({ name, color, img_url, category, deleteItemFromOutfit }) => {
  return (
    <article>
      <img 
        className='outfit-item-image'
        src={img_url}
        alt={color + ` ` + name }
      />
      <h2 className="outfit-item-name">
          {name}
        </h2>
      <h2 className="outfit-item-color">
        {color}
      </h2>
      <button
        className='remove-item-card'
        onClick={() => deleteItemFromOutfit(category)}
      >
      X
      </button>
    </article>

  );

}

export default OutfitItemCard;