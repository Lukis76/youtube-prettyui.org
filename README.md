# libary components

[![Alt text](https://img.youtube.com/vi/example_code/0.jpg)](https://www.youtube.com/watch?v=example_code)

¡Únete a esta emocionante transmisión en vivo donde te guiaré a través de la creación de una librería de componentes de Next.js con TypeScript y Tailwind CSS desde cero! No solo aprenderás a construir componentes reutilizables, sino que también exploraremos cómo separarlos por espacios de trabajo para una organización impecable. Pero eso no es todo, nuestro objetivo es compartir esta librería con la comunidad, por lo que aprenderemos cómo publicarla en NPM para que cualquiera pueda acceder a estas poderosas herramientas.

Durante esta transmisión, podrás seguir todos los pasos en tiempo real y hacer preguntas en vivo. ¡No te pierdas esta oportunidad para mejorar tus habilidades de desarrollo y contribuir a la comunidad de código abierto!

Visita mi porfolio en RocketDev para más información y formas de contactarme. ¡Esperamos verte en la transmisión en vivo!

## steps

1. creamos carpeta contenedora del proyecto en mi caso se creara en un un espesifica donde coloco todos mis proyectos

```bash
# nos movilizamos a la ruta donde rearemos nuestro pojecto
cd ~/Documents/code/projects
# creamos la carpeta contenedora del projecto
mkdir carteta-contenedora
# nos desplazamos dentro de la carpeta del project
cd ./carteta-contenedora
```

2. inicializamos nuestro proyecto creando nuestro **package.json** y creamos nuestro .gitignore

```bash
pnpm init
```

```json
// package.json

{
  "name": "@prettyui.org",
  "version": "0.0.1",
  "license": "MIT",
  "author": {
    "name": "lucas ruben manoguerra",
    "email": "kiu.manoguerra@gmail.com",
    "url": "https://github.com/Lukis76/prettyui.org",
    "linkedIn": "https://www.linkedin.com/in/lucas-r-manoguerra/",
    "github": "https://github.com/Lukis76",
    "porfolio": "https://rocketdev.vercel.app/es"
  },
  "scripts": {},
  "devDependencies": {
    "@react-types/link": "^3.5.0",
    "@react-types/shared": "^3.21.0",
    "@types/node": "^20.8.2",
    "@types/react": "^18.2.25",
    "@types/react-dom": "^18.2.10",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "eslint": "^8.50.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.1.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-config-ts-lambdas": "^1.2.3",
    "eslint-import-resolver-typescript": "^3.6.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-jest": "^27.4.2",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^5.0.0",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-unused-imports": "^3.0.0",
    "prettier": "^3.0.3",
    "prettier-eslint": "^15.0.1",
    "prettier-eslint-cli": "^7.1.0"
  },
  "peerDependencies": {
    "typescript": "^5"
  },
  "bun": {
    "overrides": {
      "react": "^18",
      "react-dom": "^18"
    }
  },
  "engines": {
    "node": ">=18",
    "pnpm": ">=8"
  },
  "packageManager": "pnpm@8.9.0"
}
```

```json
// .gitignore


# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
node_modules
dist
/dist/pn
/.pnp
.pnp.js

# testing
/coverage
coverage

# next.js
/.next/
.next/
/out/

# production
/build
dist/
storybook-static
/packages/storybook/public/tailwind.css

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env.production

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.yarn-integrity
.idea
.now
dist
esm
examples/**/yarn.lock
examples/**/out
examples/**/.next
packages/**/*.backup
packages/**/*.backup.ts

.vercel

# ignore sitemap
apps/**/sitemap.xml

# turbo
.turbo
packages/**/.turbo

# content layer
.contentlayer

```

3. configuremos nuestro eslint

```json
// .eslintrc.json

{
  "$schema": "https://json.schemastore.org/eslintrc.json",
  "env": {
    "browser": false,
    "es2022": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": [
    "react",
    "unused-imports",
    "import",
    "@typescript-eslint",
    "jsx-a11y",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "no-console": "warn",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "off",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/interactive-supports-focus": "warn",
    "prettier/prettier": "warn",
    "no-unused-vars": "off",
    "unused-imports/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_.*?$"
      }
    ],
    "import/order": [
      "warn",
      {
        "groups": [
          "type",
          "builtin",
          "object",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "~/**",
            "group": "external",
            "position": "after"
          }
        ],
        "newlines-between": "always"
      }
    ],
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        "callbacksLast": true,
        "shorthandFirst": true,
        "noSortAlphabetically": false,
        "reservedFirst": true
      }
    ],
    "padding-line-between-statements": [
      "warn",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"]
      }
    ]
  }
}
```

```json
// .eslintignore

.now/*
.next/*
*.css
.changeset
dist
esm/*
public/*
tests/*
scripts/*
*.config.js
.DS_Store
node_modules
coverage
.next
build
!.storybook
/**/.storybook/**
!.commitlintrc.cjs
!.lintstagedrc.cjs
!jest.config.js
!plopfile.js
!react-shim.js
!tsup.config.ts
apps/docs/preinstall.js
apps/docs/next-redirect.js

```

4. configuramos prettier

```json
// prettierrc.json

{
  "$schema": "https://json.schemastore.org/prettierrc.json",
  "tabWidth": 2,
  "printWidth": 100,
  "semi": true,
  "useTabs": false,
  "singleQuote": false,
  "endOfLine": "auto",
  "arrowParens": "always",
  "trailingComma": "all",
  "bracketSameLine": true,
  "bracketSpacing": true
}
```

```json
// .prettierignore

dist
node_modules
plop
coverage
.changeset
.next
build
scripts
pnpm-lock.yaml
!.storybook
!.commitlintrc.cjs
!.lintstagedrc.cjs
!jest.config.js
!plopfile.js
!react-shim.js
!tsup.config.ts

```

5. ejecutamos el siguiente commando para instalar las dependencias insertadas en nuestro package.json

```bash
pnpm install
```

6. configuramos typescript

```bash
npx tsc --init
```

```json
// tsconfig.json

{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "lib": ["dom", "esnext"],
    "declaration": true,
    "sourceMap": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "strict": true,
    "isolatedModules": true,
    "noFallthroughCasesInSwitch": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "downlevelIteration": true
  },
  "include": ["packages"],
  "exclude": ["**/node_modules", "**/dist"]
}
```

7. utilizaremos storybook para tener un buen seguimiennto y documentacion de nuestros componentes pero antes crearemis la carpeta donde lo ubicaremos

```bash
# creamos la carpeta
mkdir -p packages/storybook
# nos desplazamos a la ubicacion
cd ./packages/storybook
# inicializamos el espacio de trabajo
pnpm init
# instalmos dependencias
pnpm install
```

```json
// package.json

{
  "name": "@prettyui.org/storybook",
  "version": "0.0.1",
  "description": "The react components storybook ",
  "keywords": ["storybook"],
  "author": "example name <examplename@gmail.com>",
  "license": "MIT",
  "main": "src/index.ts",
  "sideEffects": true,
  "files": ["dist"],
  "publishConfig": {
    "access": "public"
  },

  "scripts": {
    "dev": "pnpm storybook dev -p 6006",
    "build": "pnpm storybook build",
    "start": "pnpm dlx http-server storybook-static"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "vite": "^4"
  },
  "tsup": {
    "clean": true,
    "minify": true,
    "target": "es2022",
    "format": ["cjs", "esm"]
  }
}
```

8. modifiquemos el main de muestro storybook e instalemos la siguientes dependencias

```bash
pnpm add -D @storybook/addon-a11y @storybook/addon-actions @storybook/addon-docs @storybook/addon-essentials @storybook/addon-links @storybook/addon-mdx-gfm @storybook/cli @storybook/react @storybook/react-vite @storybook/theming autoprefixer storybook storybook-dark-mode


```

```js
// .storybook
/** @type { import('@storybook/react-vite').StorybookConfig } */

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

const config = {
  stories: [
    '../../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../core/**/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: false,
  },
}

export default config
```

9. instalemos tailwindcss en nuesto workspace de storybook

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpx tailwindcss init -p
```

rellenemos nuestro tailwind.config.ts con algunos path de rutas que podremos utilizar despues podremos expandir esta configuracion.

```ts
// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    '../components/*/src/**/*.{js,jsx,ts,tsx}',
    '../components/*/stories/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  plugins: [],
}
export default config
```

10. ahora instalamos y configuraremos [plop](https://plopjs.com/documentation/) pero lo aremos en el root de ruestro poyecto.

```bash
pnpm add -D plop
```

agregemos nuestro archivo de configuracion u estructura de ejecucion no template con el nombre de plopfile.js.

```js
// plopfile.js

/**
 * La función "mayúscula" toma una cadena como entrada y devuelve la misma cadena con la primera letra
 * en mayúscula.
 * @param str - El parámetro `str` es una cadena que desea poner en mayúscula.
 * @returns La función `mayúscula` devuelve una cadena con el primer carácter en mayúscula.
 */
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * La función camelCase convierte una cadena con guiones o guiones bajos a mayúsculas y minúsculas.
 * @param str - El parámetro `str` es una cadena que representa una oración o frase escrita en
 * kebab-case o Snake_case.
 * @returns La función `camelCase` devuelve una cadena con guiones o guiones bajos convertida a
 * mayúsculas y minúsculas.
 */
const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
}

const workspaces = ['components', 'core', 'utilities']
const generators = ['component', 'package']

const defaultOutDirs = {
  component: 'components',
  package: 'utilities',
}

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text))
  })
  plop.setHelper('camelCase', (text) => {
    return camelCase(text)
  })

  generators.forEach((gen) => {
    plop.setGenerator(gen, {
      description: `Generates a ${gen}`,
      prompts: [
        {
          type: 'input',
          name: `${gen}Name`,
          message: `Enter ${gen} name:`,

          validate: (value) => {
            if (!value) {
              return `${gen} name is required`
            }

            // check is case is correct
            if (value !== value.toLowerCase()) {
              return `${gen} name must be in lowercase`
            }

            // cannot have spaces
            if (value.includes(' ')) {
              return `${gen} name cannot have spaces`
            }

            return true
          },
        },
        {
          type: 'input',
          name: 'description',
          message: `The description of this ${gen}:`,
        },
        {
          type: 'list',
          name: 'outDir',
          message: `where should this ${gen} live?`,
          default: defaultOutDirs[gen],
          choices: workspaces,
          validate: (value) => {
            if (!value) {
              return `outDir is required`
            }

            return true
          },
        },
      ],
      actions(answers) {
        const actions = []

        if (!answers) return actions

        const { description, outDir } = answers
        const generatorName = answers[`${gen}Name`] ?? ''

        const data = {
          [`${gen}Name`]: generatorName,
          description,
          outDir,
        }

        actions.push({
          type: 'addMany',
          templateFiles: `plop/${gen}/**`,
          destination: `./packages/{{outDir}}/{{dashCase ${gen}Name}}`,
          base: `plop/${gen}`,
          data,
          abortOnFail: true,
        })

        return actions
      },
    })
  })
}
```

ahora tendremos que configurar nuestros templates o platillas de [.hbs](https://handlebarsjs.com) que los ubicaremos en un carpeta plop en ruestro root.

```bash
mkdir -p plop/component
cd ./plop/component
```

empesemos por el package.json de nuestro workspace.

```hbs
// package.json.hbs

{
  "name": "@prettyui.org/{{componentName}}",
  "version": "0.0.1",
  "description": "{{description}}",
  "keywords": ["{{componentName}}"],
  "author": "example name <examplemail@gmail.com>",
  "license": "MIT",
  "main": "src/index.ts",
  "sideEffects": false,
  "files": ["dist"],
  "publishConfig": {
    "access": "public"
  },

  "scripts": {
    "build": "tsup src --dts",
    "build:fast": "tsup src",
    "dev": "yarn build:fast -- --watch",
    "clean": "rimraf dist .turbo",
    "typecheck": "tsc --noEmit",
    "prepack": "clean-package",
    "postpack": "clean-package restore"
  },
  "peerDependencies": {
    "react": ">=18"
  },
  "dependencies": {},
  "devDependencies": {
    "clean-package": "2.2.0",
    "react": "^18.0.0"
  },
  "clean-package": "../../../clean-package.config.json"
}
```

procedamos con nuestro tasconfig

```hbs
// tsconfig.json.hbs

{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "."
  },
  "include": ["src", "index.ts"]
}
```

configuremos un readme basico

````hbs
   <!-- README.md.hbs -->

# @prettyui.org/{{componentName}}

A Quick description of the component

> This is an internal utility, not intended for public usage.

## Installation

```sh
  yarn add @prettyui.org/{{componentName}}

  # or

  npm i @prettyui.org/{{componentName}}

```
````

procedamos con [tsup](tsup.egoist.dev) es quien compilara nuesto componente.
este tsup tiene un configuracion particular que utilizaremos en componentes de next.js apartir de su version 13 que no obliga a colocarle en encavesaso "use client" en los archivos que se rederizaran del lado del cliente.
este opcion benner ara esta accion por sosotros en componentes que no la nesesitemos podremos comentar estta opcion, que recomiendo hacerlo ya que pudes tener conflicos en algunos teniendo conponentes de servidor con el banner "use client"

```hbs
// tsup.config.ts.hbs

import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  minify: true,
  target: 'es2022',
  format: ['cjs', 'esm'],
  banner: { js: '"use client";' },
})
```

posigamos creando el index.ts del workspace y el archivo de nuestro componente

```hbs
import {forwardRef} from "react";

export interface {{capitalize componentName}}Props {}

const {{capitalize componentName}} = forwardRef<"div", {{capitalize componentName}}Props>((props, ref) => {

const Comp = 'div'
  return (
    <Comp ref={ref} className={styles} {...otherProps}>
      {children}
    </Comp>
  );
});

{{capitalize componentName}}.displayName = "prettyUI.{{capitalize componentName}}";

export default {{capitalize componentName}};
```
