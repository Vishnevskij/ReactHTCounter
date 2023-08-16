import { useState } from "react";

export const useCounter = (initialValue: any) => {
  const [counter, setCounter] = useState<any>(initialValue);

const increment = () => {
    setCounter(counter + 1);
}

const decrement = () => {
    setCounter(counter - 1);
}
  
 

  return [counter, increment, decrement];
};