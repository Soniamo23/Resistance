
import React, { useState } from 'react';
enum Colors {
  black, brown, red, orange, yellow, green, blue, violet, grey, white,
}
type Color = keyof typeof Colors;
const Units = ['ohms', 'kiloohms', 'megaohms', 'gigaohms'];
interface Resistance {
  value: number;
  unit: string;
}
const App: React.FC = () => {
  const [bandColors, setBandColors] = useState<Color[]>(['black', 'black', 'black']);
  const decodedResistorValue = (colors: Color[]): string => {
    const raw = (Colors[colors[0]] * 10 + Colors[colors[1]]) * 10 ** Colors[colors[2]];
    const { value, unit } = toResistance(raw);
    return `${value} ${unit}`;
  };
  const toResistance = (x: number): Resistance => {
    let value = x;
    let unit = 'ohms';
    for (let i = 1; i <= 3 && value >= 1000; i++) {
      value /= 1000;
      unit = Units[i];
    }
    return { value, unit };
  };
  const handleChange = (color: Color, index: number) => {
    const newColors = [...bandColors];
    newColors[index] = color;
    setBandColors(newColors);
  };
  return (
    <div className="App">
      <h1>Calculadora de Resistencia</h1>
      {bandColors.map((color, index) => (
        <select key={index} value={color} onChange={(e) => handleChange(e.target.value as Color, index)}>
          {Object.keys(Colors).filter(k => isNaN(Number(k))).map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      ))}
      <p>Valor de Resistencia: {decodedResistorValue(bandColors)}</p>
    </div>
  );
};

export default App;
