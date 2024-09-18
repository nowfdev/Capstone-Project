import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { CardContext } from "../../contexts/cart-context";
import { useContext } from "react";

const CardDropdown = () => {
  const { cartItems } = useContext(CardContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button>Check out</Button>
    </div>
  );
};

export default CardDropdown;
