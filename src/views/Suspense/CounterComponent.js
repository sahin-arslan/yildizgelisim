/*eslint-disable*/
import React, { useState } from "react";

import Button from "components/CustomButtons/Button.js";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Merhaba Beklerlen Beraber Sayalım Mı?</h1>
      <Button onClick={increaseCounter}>Tıkla</Button>
      <p>Sayaç Değeri: {counter}</p>
    </div>
  );
};

export default CounterComponent;
