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

2. inicializamos nuestro proyecto creando nuestro **package.json**

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
    "plop": "plop"
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

3. configuremos nuestro eslint

```json

```
