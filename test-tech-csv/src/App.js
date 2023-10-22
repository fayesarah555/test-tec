
import './App.css';
import Data1 from './components/data1';
import Data2 from './components/data2';
import Data3 from './components/data3';
import DataX from './components/dataX';
function App() {
 
 
  return (
    <div className="table-container">
      <button><Data1/></button>
      <button><Data2/></button>
      <button><Data3/></button>
      <button><DataX/></button>

    </div>
  );
}

export default App;
