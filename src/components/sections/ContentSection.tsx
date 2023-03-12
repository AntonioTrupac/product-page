import { useState } from 'react';
import { CounterButtons, CartButton } from '@/components';
import classes from './ContentSection.module.scss';
import { CartItem, useCartStore } from '@/store/cart';

const ContentSection = () => {
  const store = useCartStore();

  const [count, setCount] = useState(0);
  const [item, setItem] = useState({
    id: '1',
    name: 'Fall Limited Edition Sneakers',
    price: 250,
    discount: 50,
    discountedPrice: 125,
    total: 0,
    quantity: 0,
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setItem((prevItem) => ({
      ...prevItem,
      total: prevItem.discountedPrice * (prevItem.quantity + 1),
      quantity: prevItem.quantity + 1,
    }));
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount((prevCount) => prevCount - 1);

    if (count >= 1) {
      setItem((prevItem) => ({
        ...prevItem,
        total: prevItem.discountedPrice * (prevItem.quantity - 1),
        quantity: prevItem.quantity - 1,
      }));
    } else {
      setItem((prevItem) => ({
        ...prevItem,
        total: prevItem.discountedPrice,
        quantity: 0,
      }));
    }
  };

  const handleCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: CartItem
  ) => {
    e.preventDefault();
    store.addItem(item);
    setCount(0);
  };

  return (
    <section className={classes.wrapper}>
      <h1 className=''>Sneaker company</h1>

      <p className={classes['wrapper__title']}>Fall limited edition sneakers</p>

      <p className={classes['wrapper__description']}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className={classes['wrapper__pricing']}>
        <div className={classes['discount-pricing-container']}>
          <p className={classes['discount-pricing-container__discounted']}>
            $125.00
          </p>
          <p className={classes['discount-pricing-container__discount']}>50%</p>
        </div>

        <p className={classes['pricing-container']}>
          <s>$250.00</s>
        </p>
      </div>

      <div className={classes['wrapper__buttons']}>
        <CounterButtons
          count={count}
          increment={increment}
          decrement={decrement}
        />

        <CartButton onClick={(e) => handleCart(e, item)} disabled={count < 1} />
      </div>
    </section>
  );
};

export default ContentSection;
