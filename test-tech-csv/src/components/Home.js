import React, { useState } from 'react';
import Data1 from './data1';
import Data2 from './data2';
import Data3 from './data3';

function Home() {
  const [showData1, setShowData1] = useState(false);
  const [showData2, setShowData2] = useState(false);
  const [showData3, setShowData3] = useState(false);

  return (
    <div>
      <h1>Home</h1>
      <h4>Click on the button to display the data</h4>
      <button onClick={() => setShowData1(!showData1)}>Toggle Data1</button>
      <button onClick={() => setShowData2(!showData2)}>Toggle Data2</button>
      <button onClick={() => setShowData3(!showData3)}>Toggle Data3</button>
      {showData1 && <Data1 />}
      {showData2 && <Data2 />}
      {showData3 && <Data3 />}
    </div>
  );
}

export default Home;
