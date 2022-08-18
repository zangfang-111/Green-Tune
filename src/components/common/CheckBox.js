const CheckBox = ({ label, value, onChange }) => (
  <label className='checkbox'>
    <input
      type='checkbox'
      defaultChecked={value}
      onChange={() => onChange()}
      data-testid='checkbox' />
    <p>{label}</p>
  </label>
);

export default CheckBox;
