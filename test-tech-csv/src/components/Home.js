import React, { useState } from 'react';
import data1 from '../CSV-DATA1.csv'
import data2 from '../CSV-DATA2.csv'
import data3 from '../CSV-DATA3.csv'
import Data from './data1';
import DataX from './dataX';

function Home() {
  const [showData1, setShowData1] = useState(false);
  const [showData2, setShowData2] = useState(false);
  const [showData3, setShowData3] = useState(false);
  const [showData4, setShowData4] = useState(false);

  return (
    <div>
      <h1>HOME
      <img src="https://assets-global.website-files.com/651bc3cb366dfe6f5e34c709/651bf9026f6e865b2f61c37b_logo-pando-2.svg" alt="Logotype de Pando2" class="brix---header-logo"></img>
      </h1>
      <h4>Click the button to display the data</h4>
      <button onClick={() => setShowData1(!showData1)}> Data1</button>
      <button onClick={() => setShowData2(!showData2)}> Data2</button>
      <button onClick={() => setShowData3(!showData3)}> Data3</button>
      <button onClick={() => setShowData4(!showData4)}>  Upload Data</button>
      {showData1 &&  <Data csvFile={data1}/>}
      {showData2 &&  <Data csvFile={data2}/>}
      {showData3 &&  <Data csvFile={data3}/>}
      {showData4 &&  <DataX/>}
     

    </div>
  );
}

export default Home;



