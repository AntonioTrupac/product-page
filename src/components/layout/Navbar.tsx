import Image from 'next/image';
import classes from './Navbar.module.scss';
import Link from 'next/link';
import { Cart } from '../icons';

import { Kumbh_Sans } from 'next/font/google';
import classNames from 'classnames';
import { usePopoverStore } from '@/store/popover';
import { Popover } from '@/components';
const kumbh = Kumbh_Sans({ subsets: ['latin'] });

const Navbar = () => {
  const popoverStore = usePopoverStore();

  return (
    <header className={classNames([classes.container, kumbh.className])}>
      <div className={classes['logo-nav-wrapper']}>
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
      </div>

      <div className={classes.info}>
        <button
          className={classes['cart-button']}
          onClick={() => popoverStore.open()}
        >
          <Cart width={22} height={20} className={classes['cart-icon']} />
        </button>

        <Image
          height={50}
          width={50}
          src='/images/image-avatar.png'
          alt='avatar'
        />

        {popoverStore.isOpen && <Popover />}
      </div>
    </header>
  );
};

export default Navbar;
