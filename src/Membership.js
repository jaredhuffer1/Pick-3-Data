import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import PaymentForm from './PaymentForm';

function Membership() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedStates, setSelectedStates] = useState([]);
    const [showPayment, setShowPayment] = useState(false); // State variable to track visibility
  
    const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'].map(state => ({ label: state, value: state }));
  
    const handleRegisterSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('https://example.com/api/register', {
          name,
          email,
          password,
          selectedStates,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleJoinNow = () => {
      setShowPayment(true); // Show the payment section
    };
  
    return (
      <div>
        <h2>Become a Member</h2>
        <form onSubmit={handleRegisterSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <label>
            Select Which States You Play Pick 3:
            <Select 
              options={states}
              isMulti
              onChange={selectedOptions => setSelectedStates(selectedOptions)}
            />
          </label>
          <input type="submit" value="Register" />
        </form>
  
        {!showPayment && <button onClick={handleJoinNow}>Join Now!</button>}
        {showPayment && <PaymentForm />}
      </div>
    );
  }
  
  export default Membership;
  