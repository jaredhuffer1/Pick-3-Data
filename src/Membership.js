import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import PaymentForm from './PaymentForm';
import './Membership.css';

function Membership({ onPayButtonClick }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedStates, setSelectedStates] = useState([]);
    const [showPayment, setShowPayment] = useState(false);

    const states = ['Arizona', 'California', 'Florida', 'Georgia', 'Illinois', 'Nevada', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Pennsylvania', 'South Carolina', 'Tennessee', 'Texas', 'Virginia'].map(state => ({ label: state, value: state }));

    const handleRegisterSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('https://example.com/api/register', {
          name,
          email,
          password,
          selectedStates: selectedStates.map(state => state.value),
        });
        console.log(response.data);
        onPayButtonClick();
      } catch (error) {
        console.error(error);
      }
    };

    const handleJoinNow = () => {
      setShowPayment(true);
    };

    const handlePaymentSuccess = () => {
      setShowPayment(false);
    }

    return (
      <div className="container">
        <h1>Membership Info</h1>
        <p>Thank you for visiting the membership page. Here we'll give you an easy breaking down about how to register.</p>
        <p>Here are the states that we provide data for:</p>
        <ol>
          {states.map(state => <li key={state.value}>{state.label}</li>)}
        </ol>
        <p>Data costs: we offer a very basic monthly fee of $10.00</p>
        <p>Broken down you're only paying 33¢'s a day.</p>
        <p>After payment via credit card, you'll be sent your password to unlock the system so you can gain access to the state data you want to play in.</p>
        <p>Understanding the data is simple and there aren't 100's of variables you have to interpret on your own like many other systems on the web.</p>
        <p>On the state data page we provide players with the highest statistical value based on our algorithms....the format is way easier and with our system there is nothing to download to clog your computer.</p>
        <p>We provide the time-consuming data crunching and you reap the rewards.</p>
        <h2>Register For Free</h2>
        <form className="form" onSubmit={handleRegisterSubmit}>
          <label className="label">
            Name:
            <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label className="label">
            Email:
            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label className="label">
            Password:
            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <label className="label">
            Select Which States You Play Pick 3:
            <Select 
              options={states}
              isMulti
              onChange={selectedOptions => setSelectedStates(selectedOptions)}
            />
          </label>
          <input className="input" type="submit" value="Register" />
        </form>

        {!showPayment && <button className="button" onClick={handleJoinNow}>Become a Member!</button>}
        {showPayment && <PaymentForm onSuccess={handlePaymentSuccess}/>}
      </div>
    );
}
export default Membership;
