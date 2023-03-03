import Image from "next/image";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={classes.container}>
      <Image src="/images/logo.png" />

      <nav></nav>
    </header>
  );
};

export default Navbar;
