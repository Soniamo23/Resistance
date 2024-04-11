# React + Colors three

 El código del componente App.tsx que es para la calculadora de resistencias en React
 código integra la lógica de conversión de los códigos de colores de las resistencias a valores numéricos y muestra el resultado en una interfaz gráfica


Primero, importamos React y  useState de la biblioteca de React. useState es un hook que permite añadir el estado de React a componentes funcionales. También importamos.
## Definiciones
Colors: Es un enum que representa los colores disponibles para las bandas de las resistencias y sus respectivos valores numéricos.
Color: Es un alias de tipo que representa las claves del enum Colors. Esto significa que cualquier variable de tipo Color puede tomar valores como 'black', 'brown', etc.
Resistance: Una interfaz que describe la forma de un objeto que contiene un valor numérico y su unidad correspondiente como una cadena.

## APP
El componente App es un componente funcional. Aquí se define un estado bandColors usando useState, que inicialmente se establece en un array de tres 'black', representando el color de cada una de las tres bandas.

## decodedResistorValue:
Calcula el valor de la resistencia basado en los colores seleccionados. Utiliza la lógica del código de colores para resistencias donde las dos primeras bandas determinan los dos dígitos significativos del valor y la tercera banda el multiplicador.
## toResistance:
Convierte el valor calculado en un formato más legible, ajustando las unidades de medida conforme el valor cambia de escala (ohmios, kiloohmios, etc.).


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
