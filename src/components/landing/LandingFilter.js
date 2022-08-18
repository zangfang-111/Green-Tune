import CheckBox from '../common/CheckBox';

const filterItems = [
  'Probiotic',
  'Cleanses',
  'Immune System',
  'Digestion',
  'Laxative',
  'Liver/Gallbladder',
  'Bone Strengthener',
  'Imflammation',
  'Parasite'
];

function LandingFilter() {
  return (
    <div className='ld-layout__body-filter'>
      {filterItems.map((item, i) => (
        <CheckBox key={i} label={item} />
      ))}
    </div>
  );
}

export default LandingFilter;
