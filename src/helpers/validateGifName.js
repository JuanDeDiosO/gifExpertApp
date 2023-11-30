/**
 * Verifica y ajusta el nombre de un gif para que no sea mayor de 25 caracteres.
 * @param {string} name El nombre del gif.
 * @returns {string} El nombre ajustado.
 */
export const validateGifName = name => {
  // Verifica si la longitud es menor o igual a 25 caracteres
  if (name.length <= 25) return name

  // Divide el nombre en palabras y elimina la última palabra
  const nuevoNombre = name.split(' ').slice(0, -1).join(' ')

  return nuevoNombre + '...'
}
