import Image from 'next/image';
import classes from './Navbar.module.scss';
import Link from 'next/link';
import { Cart, Menu } from '../icons';

import { Kumbh_Sans } from 'next/font/google';
import classNames from 'classnames';
import { usePopoverStore } from '@/store/popover';
import { Popover } from '@/components';
import { useEffect, useRef, useState } from 'react';
import { useCartStore } from '@/store/cart';
import MobileNavigation from './MobileNavigation';
const kumbh = Kumbh_Sans({ subsets: ['latin'] });

function debounce(
  fn: (...args: any[]) => void,
  wait: number
): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null;
  return (...args: any[]) => {
    const later = () => {
      clearTimeout(timeout!);
      fn(...args);
    };
    clearTimeout(timeout!);
    timeout = setTimeout(later, wait);
  };
}

const Navbar = () => {
  const popoverStore = usePopoverStore();
  const cartStore = useCartStore();
  const [open, setOpen] = useState(false);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const cartRefPopover = useRef<HTMLDivElement>(null);

  return (
    <header className={classNames([classes.container, kumbh.className])}>
      <div className={classes['logo-nav-wrapper']}>
        <button
          onClick={() => setOpen(!open)}
          className={classes['menu-button']}
          aria-label='menu'
        >
          <Menu />
        </button>
        <Image src='/images/logo.svg' width={137.5} height={20} alt='logo' />

        <nav className={classes.navigation}>
          <ul className={classes['navigation__list']}>
            <li className={classes['navigation__item']}>
              <Link className={classes['navigation__link']} href='#'>
                Collections
              </Link>
            </li>

            <li className={classes['navigation__item']}>
              <Link className={classes['navigation__link']} href='#'>
                Men
              </Link>
            </li>

            <li className={classes['navigation__item']}>
              <Link className={classes['navigation__link']} href='#'>
                Women
              </Link>
            </li>

            <li className={classes['navigation__item']}>
              <Link className={classes['navigation__link']} href='#'>
                About
              </Link>
            </li>

            <li className={classes['navigation__item']}>
              <Link className={classes['navigation__link']} href='#'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {open && <MobileNavigation />}
      </div>

      <div className={classes.info}>
        <button
          className={classes['cart-button']}
          onClick={() => popoverStore.open()}
          aria-label='cart'
          ref={cartButtonRef}
        >
          <div className={classes['cart-button__container']}>
            <Cart width={22} height={20} className={classes['cart-icon']} />
            {cartStore.quantity > 0 && (
              <span className={classes['cart-count-circle']}>
                {cartStore.quantity}
              </span>
            )}
          </div>
        </button>

        <Image
          height={50}
          width={50}
          src='/images/image-avatar.png'
          alt='avatar'
          className={classes['avatar-desktop']}
        />

        <Image
          height={24}
          width={24}
          src='/images/image-avatar.png'
          alt='avatar'
          className={classes['avatar-mobile']}
        />

        {popoverStore.isOpen && <Popover ref={cartRefPopover} />}
      </div>
    </header>
  );
};

export default Navbar;
