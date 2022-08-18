const Button = ({
  classes,
  name,
  onChange = () => console.log()
}) => (
  <button
    className={`gt-button ${classes}`}
    onClick={() => onChange()}
  >
    {name}
  </button>
);

export default Button;
