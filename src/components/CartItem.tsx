import { CartItem } from '@/store/cart';
import classes from './CartItem.module.scss';
import Image from 'next/image';
import { Delete } from './icons';

interface CartItemProps {
  item: CartItem;
  quantity: number;
  total: number;
  clearCart: () => void;
}

const CartItem = ({ item, quantity, total, clearCart }: CartItemProps) => {
  console.log(item);

  const handleDelete = () => {
    clearCart();
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <Image
          src='/images/image-product-1-thumbnail.jpg'
          alt='product 1'
          width={50}
          height={49}
          className={classes.thumbnail}
        />

        <div className={classes['wrapper__content']}>
          <h3 className={classes['wrapper__content-title']}>{item.name}</h3>
          <div className={classes['wrapper__content-price']}>
            <p className={classes.discount}>
              ${item.discountedPrice.toFixed(2)} x {quantity}
            </p>
            <p className={classes.total}>${total.toFixed(2)}</p>
          </div>
        </div>

        <button
          className={classes['wrapper__delete-button']}
          onClick={handleDelete}
        >
          <Delete />
        </button>
      </div>

      <button className={classes['wrapper__checkout-button']}>Checkout</button>
    </div>
  );
};

export default CartItem;
