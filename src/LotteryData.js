import React, { useState } from 'react';
import './LotteryData.css';

const allStates = ['North Carolina', 'South Carolina', 'Virginia', 'Pennsylvania', 'New York', 'Georgia', 'Florida', 'Texas', 'Illinois', 'California', 'Nevada', 'Arizona', 'Indiana', 'Ohio', 'Tennessee'];

function LotteryData() {
  const [selectedState, setSelectedState] = useState('');
  const [lotteryData, setLotteryData] = useState({});
  const [showDeleteButton, setShowDeleteButton] = useState(null);

  const handleStateChange = (state) => {
    setSelectedState(state);
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

  const handleDeleteNumber = (numberToDelete) => {
    setLotteryData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[selectedState] = updatedData[selectedState].filter((number) => number !== numberToDelete);
      return updatedData;
    });
    setShowDeleteButton(null);
  };

  const handleNumberClick = (number) => {
    setShowDeleteButton(number);
  };

  const renderNumberGroups = () => {
    const numbers = lotteryData[selectedState] || [];
    const numberGroups = [];

    for (let i = 0; i < numbers.length; i += 7) {
      const group = numbers.slice(i, i + 7);
      numberGroups.push(group);
    }

    return numberGroups.map((group, index) => (
      <div key={index} className="number-group">
        {group.map((number) => (
          <div key={number} className="number-item">
            <span
              className={`number ${number.startsWith('s-') ? 'strike-through' : ''}`}
              onClick={() => handleNumberClick(number)}
            >
              {number.startsWith('s-') ? number.slice(2) : number}
            </span>
            {(showDeleteButton === number) && 
              <button className="delete-button" onClick={() => handleDeleteNumber(number)}>
                Delete
              </button>
            }
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="lottery-data-container">
      <h1>Number Pool</h1>
      <div className="state-buttons">
        {allStates.map((state) => (
          <button 
            key={state} 
            onClick={() => handleStateChange(state)}
            className={selectedState === state ? "active-state" : ""}
          >
            {state}
          </button>
        ))}
      </div>
      <form className="lottery-data-form" onSubmit={handleDataUpdate}>
        <label htmlFor="data">Enter new data:</label>
        <input type="text" id="data" />
        <button type="submit">Add Data</button>
      </form>
      {selectedState && (
        <div className="lottery-data-results">
          <h2>{selectedState} Numbers:</h2>
          {renderNumberGroups()}
        </div>
      )}
    </div>
  );
}

export default LotteryData;
