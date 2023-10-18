// plopfile.js

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

const workspaces = ["components", "core", "utilities"];
const generators = ["component", "package"];

const defaultOutDirs = {
  component: "components",
  package: "utilities",
};

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setHelper("capitalize", (text) => {
    return capitalize(camelCase(text));
  });
  plop.setHelper("camelCase", (text) => {
    return camelCase(text);
  });

  generators.forEach((gen) => {
    plop.setGenerator(gen, {
      description: `Generates a ${gen}`,
      prompts: [
        {
          type: "input",
          name: `${gen}Name`,
          message: `Enter ${gen} name:`,

          validate: (value) => {
            if (!value) {
              return `${gen} name is required`;
            }

            // check is case is correct
            if (value !== value.toLowerCase()) {
              return `${gen} name must be in lowercase`;
            }

            // cannot have spaces
            if (value.includes(" ")) {
              return `${gen} name cannot have spaces`;
            }

            return true;
          },
        },
        {
          type: "input",
          name: "description",
          message: `The description of this ${gen}:`,
        },
        {
          type: "list",
          name: "outDir",
          message: `where should this ${gen} live?`,
          default: defaultOutDirs[gen],
          choices: workspaces,
          validate: (value) => {
            if (!value) {
              return `outDir is required`;
            }

            return true;
          },
        },
      ],
      actions(answers) {
        const actions = [];

        if (!answers) return actions;

        const { description, outDir } = answers;
        const generatorName = answers[`${gen}Name`] ?? "";

        const data = {
          [`${gen}Name`]: generatorName,
          description,
          outDir,
        };

        actions.push({
          type: "addMany",
          templateFiles: `plop/${gen}/**`,
          destination: `./packages/{{outDir}}/{{dashCase ${gen}Name}}`,
          base: `plop/${gen}`,
          data,
          abortOnFail: true,
        });

        return actions;
      },
    });
  });
};
