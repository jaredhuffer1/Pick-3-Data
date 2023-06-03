import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LotteryData from './LotteryData';
import Membership from './Membership';
import Blog from './Blog';
import PaymentForm from './PaymentForm';
import About from './About';
import Header from './Header';

function App() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePayButtonClick = () => {
    setShowPaymentForm(true);
  };

  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/lottery" element={<LotteryData />} />
          <Route path="/membership" element={<Membership onPayButtonClick={handlePayButtonClick} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {showPaymentForm && <PaymentForm />}
      </div>
    </Router>
  );
}

export default App;
