import React, { useState } from 'react';
import './LotteryData.css';

const allStates = ['North Carolina', 'South Carolina', 'Virginia', 'Pennsylvania', 'New York', 'Georgia', 'Florida', 'Texas', 'Illinois', 'California', 'Nevada', 'Arizona', 'Indiana', 'Ohio', 'Tennessee'].map(state => ({ label: state, value: state }));

function LotteryData() {
  const [selectedState, setSelectedState] = useState(null);
  const [lotteryData, setLotteryData] = useState({});
  const [showDeleteButton, setShowDeleteButton] = useState(null);

  const handleStateChange = (selectedStateOption) => {
    setSelectedState(selectedStateOption);
  };

  const handleDataUpdate = (event) => {
    event.preventDefault();
    const newData = event.target.elements.data.value;
    setLotteryData((prevData) => ({
      ...prevData,
      [selectedState.value]: [...(prevData[selectedState.value] || []), newData],
    }));
    event.target.reset();
  };

  const handleDeleteNumber = (numberToDelete) => {
    setLotteryData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[selectedState.value] = updatedData[selectedState.value].filter((number) => number !== numberToDelete);
      return updatedData;
    });
    setShowDeleteButton(null);
  };

  const handleNumberClick = (number) => {
    setShowDeleteButton(number);
  };

  const renderNumberGroups = () => {
    const numbers = lotteryData[selectedState.value] || [];
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
      <form className="lottery-data-form" onSubmit={handleDataUpdate}>
        <div>
          Select a state: 
          {allStates.map((state) => (
            <button 
              key={state.value} 
              onClick={() => handleStateChange(state)}
              className={selectedState && selectedState.value === state.value ? 'active-state' : ''}
            >
              {state.label}
            </button>
          ))}
        </div>
        <label htmlFor="data">Enter new data:</label>
        <input type="text" id="data" />
        <button type="submit">Add Data</button>
      </form>
      {selectedState && (
        <div className="lottery-data-results">
          <h2>{selectedState.label} Numbers:</h2>
          {renderNumberGroups()}
        </div>
      )}
    </div>
  );
}

export default LotteryData;
