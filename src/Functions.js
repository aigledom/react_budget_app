export function convertirMoneda(tipoOrigen, tipoDestino, cantidad) {
  // Definir las tasas de conversión
  const tasas = {
    "€": { "€": 1, "£": 0.85, "₹": 89.73, CAD: 1.49 },
    "£": {
      "€": 1.18,
      "£": 1,
      "₹": 105.73,
      CAD: 1.77,
    },
    "₹": {
      "€": 0.011,
      "£": 0.0095,
      "₹": 1,
      CAD: 0.017,
    },
    CAD: {
      "€": 0.67,
      "£": 0.57,
      "₹": 58.43,
      CAD: 1,
    },
  };

  // Verificar si los tipos de moneda son válidos
  if (!(tipoOrigen in tasas) || !(tipoDestino in tasas)) {
    return "Tipo de moneda no válido.";
  }

  // Verificar si la cantidad es un número positivo
  if (isNaN(cantidad) || cantidad <= 0) {
    return "Cantidad no válida.";
  }

  // Realizar la conversión
  const tasaConversion = tasas[tipoOrigen][tipoDestino];
  const cantidadConvertida = cantidad / tasaConversion;
  return cantidadConvertida;
}
