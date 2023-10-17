
/**
 * La función "mayúscula" toma una cadena como entrada y devuelve la misma cadena con la primera letra
 * en mayúscula.
 * @param str - El parámetro `str` es una cadena que desea poner en mayúscula.
 * @returns La función `mayúscula` devuelve una cadena con el primer carácter en mayúscula.
 */
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * La función camelCase convierte una cadena con guiones o guiones bajos a mayúsculas y minúsculas.
 * @param str - El parámetro `str` es una cadena que representa una oración o frase escrita en
 * kebab-case o Snake_case.
 * @returns La función `camelCase` devuelve una cadena con guiones o guiones bajos convertida a
 * mayúsculas y minúsculas.
 */
const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};