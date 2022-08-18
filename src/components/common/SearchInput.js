import images from '../../assets';

const SearchInput = ({ value, onChange }) => (
  <div className='search-input'>
    <img src={images.SearchIcon} alt='Search - Green Tune' />
    <input
      type='text'
      onChange={e => onChange(e)}
      value={value}
      data-testid='search-input'
    />
  </div>
);

export default SearchInput;
