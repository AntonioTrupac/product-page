import { useCartStore } from '@/store/cart';
import classes from './Popover.module.scss';
import { LineBreak } from '@/components';
import classNames from 'classnames';
import CartItem from '../CartItem';
import React from 'react';

const Popover = React.forwardRef<HTMLDivElement>((_, ref) => {
  const store = useCartStore();

  return (
    <div ref={ref} className={classes.wrapper}>
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
              clearCart={store.clearCart}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
});

Popover.displayName = 'Popover';

export default Popover;
