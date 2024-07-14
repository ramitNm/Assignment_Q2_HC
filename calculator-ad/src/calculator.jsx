import React, { useState } from 'react';
import { FaCalculator, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';
import './calculator.css';

const CalculatorAd = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [emi, setEmi] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);

  const calculateEMI = (principal, rate, months) => {
    const monthlyRate = rate / (12 * 100);
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return emi.toFixed(2);
  };

  const handleCalculate = () => {
    const emi = calculateEMI(parseFloat(principal), parseFloat(rate), parseInt(months));
    setEmi(emi);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-4">
      {showCalculator ? (
        <div className="ad-container bg-blue-700 text-white p-6 rounded-lg shadow-lg w-full max-w-md border-2 border-blue-300 mx-auto">
          <div className="text-center mb-4">
            <FaCalculator className="mx-auto text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Loan EMI Calculator</h2>
            <div className="mb-4">
              <label className="block text-left mb-1">Principal Amount:</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="w-full px-3 py-2 border rounded text-white bg-black"
                placeholder="Enter Principal Amount"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Annual Interest Rate (%):</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full px-3 py-2 border rounded text-white bg-black"
                placeholder="Enter Interest Rate"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Duration (Months):</label>
              <input
                type="number"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="w-full px-3 py-2 border rounded text-white bg-black"
                placeholder="Enter Duration"
              />
            </div>
            <button
              onClick={handleCalculate}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Calculate EMI
            </button>
            {emi && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold flex items-center justify-center">
                  Your EMI: <FaRupeeSign className="ml-2" /> {emi}
                </h3>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center mx-auto">
          <FaCheckCircle className="mx-auto text-6xl mb-4 text-green-500" />
          <h1 className="text-3xl font-bold text-white mb-6">Want to take a loan?</h1>
          <p className="text-white mb-4">Calculate your Equated Monthly Installment (EMI) before taking a loan.</p>
          <button
            onClick={() => setShowCalculator(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Calculate EMI
          </button>
        </div>
      )}
    </div>
  );
};

export default CalculatorAd;
