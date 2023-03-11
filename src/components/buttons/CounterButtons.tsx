import { Decrement, Increment } from '../icons';
import classes from './CounterButtons.module.scss';

interface CounterButtonsProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterButtons = ({
  count,
  increment,
  decrement,
}: CounterButtonsProps) => {
  return (
    <div className={classes['counter-wrapper']}>
      <button
        onClick={decrement}
        className={classes['counter-wrapper__decrement']}
      >
        <Decrement />
      </button>
      <span className={classes['counter-wrapper__count']}>{count}</span>
      <button
        onClick={increment}
        className={classes['counter-wrapper__increment']}
      >
        <Increment />
      </button>
    </div>
  );
};

export default CounterButtons;
