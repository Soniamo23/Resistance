
import React, { useState } from 'react';
const colorValues: { [color: string]: number } = {
  "black": 0,"brown": 1, "red": 2,"orange": 3,"yellow": 4, "green": 5,"blue": 6,"violet": 7,"grey": 8,"white": 9,
};

function App() {
  const [firstColor, setFirstColor] = useState<string>('');
  const [secondColor, setSecondColor] = useState<string>('');
  const [resistorValue, setResistorValue] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculateResistorValue = () => {
    if (firstColor in colorValues && secondColor in colorValues) {
      const value = colorValues[firstColor] * 10 + colorValues[secondColor];
      setResistorValue(value);
      setError('');
    } else {
      setError('One or both colors not found');
      setResistorValue(null);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    calculateResistorValue();
  };

  return (
    <div className="App">
      <h1>Resistor Color Code Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Color:
          <select value={firstColor} onChange={e => setFirstColor(e.target.value)}>
            <option value="">Select a color</option>
            {Object.keys(colorValues).map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </label>
        <label>
          Second Color:
          <select value={secondColor} onChange={e => setSecondColor(e.target.value)}>
            <option value="">Select a color</option>
            {Object.keys(colorValues).map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </label>
        <button type="submit">Calculate</button>
      </form>
      {resistorValue !== null && <p>Resistor Value: {resistorValue}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
