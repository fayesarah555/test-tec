import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../App.css';

function DataDisplay({ data, searchTerm, handleSearchChange }) {
  // Date format function
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  // Filtrer les données en fonction du terme de recherche
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredData.length ? (
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
            {filteredData.map((row, index) => (
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

function Data({ csvFile }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching CSV file:", csvFile);
      // Charger le fichier CSV spécifié
      const response = await fetch(csvFile);
      console.log("Response:", response);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true
      }).data;
      setData(parsedData);
    };

    fetchData();
  }, [csvFile]);

  return (
    <DataDisplay data={data} searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
  );
}

export default Data;