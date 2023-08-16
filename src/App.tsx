import React, { useState } from "react";
import { useCounter } from "./hooks/useCounter";
import { FlexColumn } from "./components/shared/Flex";
import { Auth } from "./components/static/Auth";


function App() {
  const [counter, increment, decrement] = useCounter(0);

  
  return (
    <FlexColumn 
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      background="grey"
    >
      <FlexColumn 
      width="300px"
      height="auto"
      alignItems="center"
      justifyContent="center"
      background="darkgrey"
      margin="30px"
    >
      <div>
        <p>Counter : {counter}</p>
        <button onClick={()=>decrement()}>Decrement</button>
        <button onClick={()=>increment()}>Increment</button>
      </div>
      </FlexColumn>
      <Auth />
    </FlexColumn>
  );
}

export default App;