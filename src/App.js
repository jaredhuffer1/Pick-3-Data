import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LotteryData from './LotteryData';
import Membership from './Membership';
import Blog from './Blog';
import PaymentForm from './PaymentForm';

function App() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePayButtonClick = () => {
    setShowPaymentForm(true);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/lottery">Lottery Data</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lottery" element={<LotteryData />} />
          <Route path="/membership" element={<Membership onPayButtonClick={handlePayButtonClick} />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        {showPaymentForm && <PaymentForm />}
      </div>
    </Router>
  );
}

export default App;
