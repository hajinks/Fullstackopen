const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text.toString()}</button>
);

export default Button;
