import { useState } from 'react'
import axios from 'axios'
import BillCalculator from './components/BillCalculator'
import './App.css'

function App() {
  const [apiResponse, setApiResponse] = useState(null)
  const [error, setError] = useState(null)

  const handleCalculate = async (units, state) => {
    try {
      setError(null)
      const response = await axios.post('/api/billing/calculate', {
        units: parseFloat(units),
        state: state
      })
      setApiResponse(response.data)
    } catch (err) {
      setError(err.message || 'Failed to calculate bill')
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>⚡ UrjaSense</h1>
        <p>Smart Energy Usage & Bill Calculator</p>
      </header>

      <main className="app-main">
        <BillCalculator onCalculate={handleCalculate} />
        {error && <div className="error-box">{error}</div>}
        {apiResponse && (
          <div className="result-box">
            <h2>Billing Summary</h2>
            <p><strong>Units:</strong> {apiResponse.units} kWh</p>
            <p><strong>State:</strong> {apiResponse.state}</p>
            <p className="bill-amount"><strong>Amount:</strong> ₹{apiResponse.amount.toFixed(2)}</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>UrjaSense v0.0.1 | India Energy Tracker</p>
      </footer>
    </div>
  )
}

export default App
