import React, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  console.log('最初')
  const [num, setNum] = useState(0);
  const [faseShowFlag, setfaseShowFlage] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setfaseShowFlage(!faseShowFlag)
  };

  useEffect(() => {
    num % 3 === 0 ? faseShowFlag || setfaseShowFlage(true) : faseShowFlag && setfaseShowFlage(false)
  }, [num]);


  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1> <ColorfullMessage color="blue" >お元気ですか</ColorfullMessage>
      <ColorfullMessage color="pink">元気です </ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faseShowFlag && <p>(*'▽')’</p>}
      
    </>
  );
};

export default App;