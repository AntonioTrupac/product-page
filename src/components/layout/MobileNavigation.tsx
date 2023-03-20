import classes from './Navbar.module.scss';
import Link from 'next/link';

const MobileNavigation = () => {
  return (
    <nav className={classes['mobile-navigation']}>
      <ul className={classes['mobile-navigation__list']}>
        <li className={classes['mobile-navigation__item']}>
          <Link className={classes['mobile-navigation__link']} href='#'>
            Collections
          </Link>
        </li>

        <li className={classes['mobile-navigation__item']}>
          <Link className={classes['mobile-navigation__link']} href='#'>
            Men
          </Link>
        </li>

        <li className={classes['mobile-navigation__item']}>
          <Link className={classes['mobile-navigation__link']} href='#'>
            Women
          </Link>
        </li>

        <li className={classes['mobile-navigation__item']}>
          <Link className={classes['mobile-navigation__link']} href='#'>
            About
          </Link>
        </li>

        <li className={classes['mobile-navigation__item']}>
          <Link className={classes['mobile-navigation__link']} href='#'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
