import React, { useState } from 'react';
import Papa from 'papaparse';
import '../App.css';

function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true, // Parse numbers as numbers, not strings
      complete: (result) => {
        setData(result.data);
      },
    });
  };



// Date fromat
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString(); 
  }

  return (
    <div className="table-container">
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      {data.length ? (
        <table className="table">
          <thead>
            <tr>
               <th>Date & Time</th>
              <th>measure_type</th>
              <th>measure_float</th>
              <th>brand</th>
              <th>serial_number</th>
              <th>establishment_id</th>
              <th>establishment_name</th>
              <th>establishment_city</th>
              <th>establishment_address</th>
              <th>establishment_latitude</th>
              <th>establishment_longitude</th>
              <th>room_id</th>
              <th>room_name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{formatTimestamp(row['@timestamp'])}</td>
                <td>{row.measure_type}</td>
                <td>{row.measure_float}</td>
                <td>{row.brand}</td>
                <td>{row.serial_number}</td>
                <td>{row.establishment_id}</td>
                <td>{row.establishment_name}</td>
                <td>{row.establishment_city}</td>
                <td>{row.establishment_address}</td>
                <td>{row.establishment_latitude}</td>
                <td>{row.establishment_longitude}</td>
                <td>{row.room_id}</td>
                <td>{row.room_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <br /> <br />
    </div>
  );
}

export default App;
