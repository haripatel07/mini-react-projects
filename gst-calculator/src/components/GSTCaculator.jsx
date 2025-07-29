import React, { useState, useEffect } from 'react';
import '../styles/GSTCalculator.css'; 

function GSTCalculator() {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('18'); // Default to 18%
  const [calculationType, setCalculationType] = useState('exclusive'); // 'exclusive' or 'inclusive'

  const [gstAmount, setGstAmount] = useState('0.00');
  const [netAmount, setNetAmount] = useState('0.00');
  const [grossAmount, setGrossAmount] = useState('0.00');

  useEffect(() => {
    const parsedAmount = parseFloat(amount);
    const parsedGstRate = parseFloat(gstRate);

    // Invalid results
    if (isNaN(parsedAmount) || parsedAmount < 0) {
      setGstAmount('0.00');
      setNetAmount('0.00');
      setGrossAmount('0.00');
      return;
    }

    // If GST rate is invalid, treat it as 0% for calculation
    const effectiveGstRate = (isNaN(parsedGstRate) || parsedGstRate < 0) ? 0 : parsedGstRate;

    let calculatedGstAmount;
    let calculatedNetAmount;
    let calculatedGrossAmount;

    if (calculationType === 'exclusive') {
      calculatedNetAmount = parsedAmount;
      calculatedGstAmount = (parsedAmount * effectiveGstRate) / 100;
      calculatedGrossAmount = parsedAmount + calculatedGstAmount;
    } else { // 'inclusive'
      calculatedGrossAmount = parsedAmount;
      calculatedNetAmount = parsedAmount / (1 + (effectiveGstRate / 100));
      calculatedGstAmount = parsedAmount - calculatedNetAmount;
    }

    setGstAmount(calculatedGstAmount.toFixed(2));
    setNetAmount(calculatedNetAmount.toFixed(2));
    setGrossAmount(calculatedGrossAmount.toFixed(2));

  }, [amount, gstRate, calculationType]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleGstRateChange = (e) => {
    setGstRate(e.target.value);
  };

  const handleCalculationTypeChange = (type) => {
    setCalculationType(type);
  };

  return (
    <div className="gst-calculator-card">
      <h1 className="card-title">GST Calculator</h1>

      
      <div className="calculation-type-selector">
        <button
          className={`selector-button ${calculationType === 'exclusive' ? 'active' : ''}`}
          onClick={() => handleCalculationTypeChange('exclusive')}
        >
          Amount exclusive of GST
        </button>
        <button
          className={`selector-button ${calculationType === 'inclusive' ? 'active' : ''}`}
          onClick={() => handleCalculationTypeChange('inclusive')}
        >
          Amount inclusive of GST
        </button>
      </div>

      {/* Input Fields */}
      <div className="input-group">
        <label htmlFor="amount" className="input-label">Amount (₹)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter Amount"
          min="0"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label htmlFor="gstRate" className="input-label">GST Rate (%)</label>
        <div className="custom-select-wrapper">
          <select
            id="gstRate"
            value={gstRate}
            onChange={handleGstRateChange}
            className="input-field custom-select"
          >
            <option value="0">0% (Exempted)</option>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>

      <div className="results-display">
        <div className="result-item">
          <span className="result-label">Net Amount:</span>
          <span className="result-value">₹{netAmount}</span>
        </div>
        <div className="result-item">
          <span className="result-label">GST Amount ({gstRate}%):</span>
          <span className="result-value">₹{gstAmount}</span>
        </div>
        <div className="result-item total-row">
          <span className="result-label total-label">Gross Amount:</span>
          <span className="result-value total-value">₹{grossAmount}</span>
        </div>
      </div>
    </div>
  );
}

export default GSTCalculator;