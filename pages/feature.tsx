import React from 'react';
import { useState } from 'react';

const Page = () => {
const[count, setCounter] = useState(0);

function counter(){
  setCounter(count + 1)
}
  return (
    <div>
      <h1>Counter</h1>
      <button
      onClick={counter}
      >counter {count}</button>
    </div>
  );
};

export default Page;
