import { dirname, join, resolve } from 'path'

/**
 * La función devuelve la ruta absoluta de un valor determinado resolviéndola y uniéndola con el
 * archivo 'package.json'.
 * @param value - El parámetro "valor" es una cadena que representa la ruta del archivo.
 * @returns La ruta absoluta del directorio que contiene el archivo "package.json".
 */
function getAbsolutePath(value) {
  return dirname(resolve(join(value, 'package.json')))
}