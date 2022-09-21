import React, { useContext } from "react";
import CounterContext from "../contexts/counterContext";
import { Counter as CounterModel } from "../models/counter";
import Counter from "./Counter";

function Counters() {
  const { counters, handleCounters } = useContext(CounterContext) as {
    counters: Array<CounterModel>;
    handleCounters: any;
  };

  const onDelete = (id: number) => {
    handleCounters([...counters.filter((c) => c.id !== id)]);
  };

  const handleCount = (counter: CounterModel) => {
    handleCounters([
      ...counters.map((c) => (c.id === counter.id ? counter : c)),
    ]);
  };
  return (
    <>
      {counters?.map((counter: CounterModel) => (
        <Counter key={counter.id} counter={{ ...counter, handleCount }}>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            <i className="fa fa-trash "></i>
          </button>
        </Counter>
      ))}
    </>
  );
}

export default Counters;
