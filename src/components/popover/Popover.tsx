import { useCartStore } from '@/store/cart';
import classes from './Popover.module.scss';
import { LineBreak } from '@/components';
import classNames from 'classnames';
import CartItem from '../CartItem';

const Popover = () => {
  const store = useCartStore();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes['wrapper__title']}>Cart</h1>

      <LineBreak />

      <div
        className={
          store.items.length > 0
            ? classes['wrapper__content']
            : classNames(
                classes['wrapper__content'],
                classes['wrapper__content--center']
              )
        }
      >
        {store.items.length > 0 ? (
          store.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              quantity={store.quantity}
              total={store.total}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Popover;
