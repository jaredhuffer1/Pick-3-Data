import React, { useState } from 'react';
import './LotteryData.css';

const allStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

function LotteryData() {
  const [selectedState, setSelectedState] = useState('');
  const [lotteryData, setLotteryData] = useState({});

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDataUpdate = (event) => {
    event.preventDefault();
    const newData = event.target.elements.data.value;
    setLotteryData((prevData) => ({
      ...prevData,
      [selectedState]: [...(prevData[selectedState] || []), newData],
    }));
    event.target.reset();
  };

  return (
    <div className="lottery-data-container">
      <h1>Number Pool</h1>
      <form className="lottery-data-form" onSubmit={handleDataUpdate}>
        <label htmlFor="state-select">Select a state:</label>
        <select id="state-select" value={selectedState} onChange={handleStateChange}>
          <option value="">Select a state</option>
          {allStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <label htmlFor="data">Enter new data:</label>
        <input type="text" id="data" />
        <button type="submit">Add Data</button>
      </form>
      {selectedState && (
        <div className="lottery-data-results">
          <h2>{selectedState} Numbers:</h2>
          <ul>
            {lotteryData[selectedState]?.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LotteryData;
