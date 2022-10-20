import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newArray = [...counters];
    const elIndex = newArray.findIndex((c) => c.id === id);
    newArray[elIndex].value += 1;
    setCounters(newArray);
  };

  const handleDecrement = (id) => {
    const newArray = [...counters];
    const elIndex = newArray.findIndex((c) => c.id === id);
    newArray[elIndex].value -= 1;
    setCounters(newArray);
  };

  return (
    <div className="m-2">
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </div>
  );
};

export default CountersList;
