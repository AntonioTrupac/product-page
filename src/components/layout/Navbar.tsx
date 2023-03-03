import Image from "next/image";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import { Cart } from "../icons";

const Navbar = () => {
  return (
    <header className={classes.container}>
      <div className={classes["logo-nav-wrapper"]}>
        <Image src="/images/logo.svg" width={137.5} height={20} alt="logo" />

        <nav className={classes.navigation}>
          <ul className={classes["navigation--list"]}>
            <li className={classes["navigation--item"]}>
              <Link className={classes["navigation--link"]} href="#">
                Collections
              </Link>
            </li>

            <li className={classes["navigation--item"]}>
              <Link className={classes["navigation--link"]} href="#">
                Men
              </Link>
            </li>

            <li className={classes["navigation--item"]}>
              <Link className={classes["navigation--link"]} href="#">
                Women
              </Link>
            </li>

            <li className={classes["navigation--item"]}>
              <Link className={classes["navigation--link"]} href="#">
                About
              </Link>
            </li>

            <li className={classes["navigation--item"]}>
              <Link className={classes["navigation--link"]} href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.info}>
        <button className={classes["cart-button"]}>
          <Cart width={22} height={20} className={classes["cart-icon"]} />
        </button>

        <Image
          height={50}
          width={50}
          src="/images/image-avatar.png"
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Navbar;
