import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { CardContext } from "../../contexts/cart-context";
import { useContext } from "react";

const CardDropdown = () => {
  const { cartItems } = useContext(CardContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Check out</Button>
    </div>
  );
};

export default CardDropdown;
