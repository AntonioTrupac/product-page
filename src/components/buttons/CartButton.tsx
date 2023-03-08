import { Cart } from "../icons";
import classes from "./CartButton.module.scss";

const CartButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={classes["cart-button"]} {...props}>
      <Cart width={17.5} height={16} />
      <span>Add to cart</span>
    </button>
  );
};

export default CartButton;
