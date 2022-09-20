import React, { useState } from "react";

type CounterProps = {
  count: number;
  children: any;
};

function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.count);

  const decrement = () => count > 0 && setCount(count - 1);
  const increment = () => setCount(count + 1);
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
      {props.children}
    </div>
  );
}

export default Counter;
