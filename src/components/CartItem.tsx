import { CartItem } from '@/store/cart';
import classes from './CartItem.module.scss';
import Image from 'next/image';

interface CartItemProps {
  item: CartItem;
  quantity: number;
  total: number;
}

const CartItem = ({ item, quantity, total }: CartItemProps) => {
  return (
    <div className={classes.wrapper}>
      <div style={{ display: 'flex' }}>
        <Image
          src='/images/image-product-1-thumbnail.jpg'
          alt='product 1'
          width={50}
          height={50}
          className={classes.thumbnail}
        />

        <div className={classes['wrapper__content']}>
          <h3 className={classes['wrapper__content-title']}>{item.name}</h3>
          <div className={classes['wrapper__content-price']}>
            <p>${item.discountedPrice}</p>
            <p>{quantity}</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
