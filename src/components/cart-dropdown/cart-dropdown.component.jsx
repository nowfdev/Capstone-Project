import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item"></div>
      <Button>Check out</Button>
    </div>
  );
};

export default CardDropdown;
