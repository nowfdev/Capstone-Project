import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Fragment, useContext } from "react";

import "./navigation.styles.scss";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign-Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-In
            </Link>
          )}
          <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CardDropdown></CardDropdown>}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
