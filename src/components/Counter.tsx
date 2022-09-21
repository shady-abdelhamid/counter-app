import React, { useState } from "react";
import { Counter as CounterModel } from "../models/counter";

type CounterProps = {
  counter: CounterModel;
  children: any;
};

function Counter({ counter, children }: CounterProps) {
  const [count, setCount] = useState(counter.count);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      counter?.handleCount({ id: counter?.id, count: count - 1 });
    }
  };

  const increment = () => {
    setCount(count + 1);
    counter?.handleCount({ id: counter?.id, count: count + 1 });
  };

  const transformCount = () => (count === 0 ? "Zero" : count);
  const getBadgeClasses = () =>
    `badge m-2 p-2 text-bg-${count === 0 ? "warning" : "primary"}`;

  return (
    <div>
      <button onClick={decrement} className="btn btn-secondary btn-sm">
        <i className="fa fa-minus"></i>
      </button>
      <span className={getBadgeClasses()}>{transformCount()}</span>
      <button onClick={increment} className="btn btn-secondary btn-sm">
        <i className="fa fa-plus"></i>
      </button>
      {children}
    </div>
  );
}

export default Counter;
