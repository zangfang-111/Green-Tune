import ItemCard from '../common/ItemCard';
import { cleanses, products } from './dummy';

function LandingContents() {
  return (
    <div className='ld-layout__body-contents'>
      <div className='ld-layout__body-contents--featured'>
        <h2 className='section-title'>Featured Cleanses</h2>
        <div className='cards-wrapper'>
          {cleanses.map((c, i) => (
            <ItemCard key={i} item={c} />
          ))}
        </div>
      </div>
      <div className='ld-layout__body-contents--products'>
        <h2 className='section-title'>All Products</h2>
        <div className='cards-wrapper'>
          {products.map((p, i) => (
            <ItemCard key={i} item={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingContents;
