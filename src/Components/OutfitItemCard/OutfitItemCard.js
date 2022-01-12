import '../OutfitItemCard/OutfitItemCard.css';
import * as AiIcons from 'react-icons/ai';

const OutfitItemCard = ({ name, color, img_url, category, deleteItemFromOutfit }) => {
  return (
    <article className='outfit-item-container'>
      <img 
        className='outfit-item-image'
        src={img_url}
        alt={color + ` ` + name }
      />
      <div className='outfit-item-info-container'>
        <h2 className="outfit-item-name">
            {name}
          </h2>
        <h2 className="outfit-item-color">
          {color}
        </h2>
      </div>

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



