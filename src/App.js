// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LotteryData from './LotteryData';
import Membership from './Membership';
import Blog from './Blog';
import PaymentForm from './PaymentForm';
import Home from './Home';
import Header from './Header';
import Profile from './Profile';  // Import your Profile component

function App() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePayButtonClick = () => {
    setShowPaymentForm(true);
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/lottery" element={<LotteryData />} />
        <Route path="/membership" element={<Membership onPayButtonClick={handlePayButtonClick} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/" element={<Home />} />
      </Routes>

      {showPaymentForm && <PaymentForm />}
    </div>
  );
}

export default App;
