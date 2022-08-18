import Button from './Button';

const ItemCard = ({ item }) => {
  const desc = item.desc.split('\n');

  return (
    <div className='item-card'>
      <div className='item-card__img-wrapper'>
        <img src={item.image} alt='Item Logo - GreenTune' />
      </div>
      <div className='item-card__body'>
        <h3>{item.title}</h3>
        {desc.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </div>
      <div className='item-card__footer'>
        <p className='price'>${item.price}</p>
        <Button name='Add to Cart' />
      </div>
    </div>
  );
}

export default ItemCard;
