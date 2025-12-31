import { useState } from 'react'
import './BillCalculator.css'

function BillCalculator({ onCalculate }) {
  const [units, setUnits] = useState('')
  const [state, setState] = useState('MH')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!units || units <= 0) {
      alert('Please enter valid units')
      return
    }
    setLoading(true)
    await onCalculate(units, state)
    setLoading(false)
  }

  return (
    <div className="calculator-card">
      <h2>Calculate Your Bill</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="units">Power Units (kWh)</label>
          <input
            id="units"
            type="number"
            placeholder="Enter units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">Select State</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            disabled={loading}
          >
            <option value="MH">Maharashtra</option>
            <option value="KA">Karnataka</option>
            <option value="TN">Tamil Nadu</option>
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Calculating...' : 'Calculate Bill'}
        </button>
      </form>
    </div>
  )
}

export default BillCalculator
