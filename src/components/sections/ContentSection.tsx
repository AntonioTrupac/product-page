import { CounterButtons } from "../buttons";
import classes from "./ContentSection.module.scss";

const ContentSection = () => {
  return (
    <section className={classes.wrapper}>
      <h1 className="">Sneaker company</h1>

      <p className={classes["wrapper__title"]}>Fall limited edition sneakers</p>

      <p className={classes["wrapper__description"]}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className={classes["wrapper__pricing"]}>
        <div className={classes["discount-pricing-container"]}>
          <p className={classes["discount-pricing-container__discounted"]}>
            $125.00
          </p>
          <p className={classes["discount-pricing-container__discount"]}>50%</p>
        </div>

        <p className={classes["pricing-container"]}>
          <s>$250.00</s>
        </p>
      </div>

      <CounterButtons />
    </section>
  );
};

export default ContentSection;
