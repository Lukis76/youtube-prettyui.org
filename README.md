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
cd carteta-contenedora
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
  "scripts": {
  },
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
mkdir packages/storybook
# nos desplazamos a la ubicacion
cd packages/storybook
# intslaremos storybook con el contuctor del mismo
pnpm dlx storybook@latest init
```

