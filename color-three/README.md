# React + Colores

En este ejercicio es para calcular entre dos diferentes colores el valor de la resistencia que me daria.
## DECLARACION

Se define la función "calculateResistorValue" que acepta un arreglo de tipo strings como parámetro estos representan los colores.
Se define un objeto colorValues que actúa como un diccionario para traducir los colores de las bandas de resistores a sus respectivos valores numéricos. Esto será útil para calcular el valor del resistor.

## APP
Aquí, useState se utiliza para mantener el estado dentro del componente App. Se define un estado para cada color seleccionado
 el valor calculado del resistor y un mensaje de error. El uso de TypeScript permite especificar el tipo de cada estado, por ejemplo, string para los colores y number null para el valor del resistor, donde null puede ser usado para representar la ausencia de un valor calculado.

La función calculateResistorValue se encarga de calcular el valor del resistor basado en los colores seleccionados. Si ambos colores son válidos, calcula el valor del resistor y actualiza el estado correspondiente usando setResistorValue. Si alguno de los colores no es válido, se actualiza el estado de error.



import React, { useState } from 'react';
const colorValues: { [color: string]: number } = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9,
};


