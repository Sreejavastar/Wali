import React from 'react';
import "./TransactionPage.css"; // Import your CSS file
import gpay from "../images/gpay.png";
import cred from "../images/cred.svg";
import credit from "../images/credit-card.svg";
import paytm from "../images/paytm.png";
import barcode from "../images/barcode.svg";

const TransactionPage = () => {
  return (
    <div className="transaction-page">
      <div className="payment-options">
        <div className="mobile-payment">
          <h2>Pay here using your mobile</h2>
          <ul>
            <li><img src={gpay} /> GPay</li>
            <li><img src={cred} /> CRED</li>
            <li><img src={paytm} /> Paytm</li>
            <li><img src={credit} /> NetBanking</li>
          </ul>
        </div>
        <div className="checkout-counter">
          <h2>Go to the nearest Checkout counter</h2>
          <div className="barcode-image">
            {/* Display your generated barcode image */}
            <span><small>Scan this in the counter</small></span>
              <img src={barcode} className='barcode'/>
            {/* You can use an <img> tag or another suitable element */}
          </div>
          <div className="amount-to-pay">
            <p>Amount to be paid: $100.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
