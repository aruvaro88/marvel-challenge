# Marvel-Challenge

Marvel-challenge es un proyecto Front-end creado desde 0 como prueba técnica. En ella se usan tecnologías como HTML, CSS, y Typescript. Se ha usado React como framework y bibliotecas de estilos, principalmente Styled-components.

## Instalación

Para poder probar el proyecto lo primero de todo es descargarlo en tu equipo, para ello usa el comando de git, git clone:

```bash
git clone https://github.com/aruvaro88/marvel-challenge.git
```

Luego tendras que instalar las dependencias que se usan en el proyecto, para ello usamos el comando:

```bash
npm install
```

Para arrancar el proyecto, usaremos el comando:

```bash
npm run dev
```

Abrimos una ventana del navegador y para poder visualizar el proyecto pegamos la siguiente url: http://localhost:5173/

## Descripción

Marvel-challenge es una aplicacion web en la que podremos ver, buscar y conocer super heroes de Marvel. Para ello podremos navegar por las diferentes rutas:

```typescript
Rutas disponibles

# /
Vista por defecto de la aplicación. Muestra los 50 primeros personajes de Marvel.

# /character/:id
Vista de detalle de un personaje concreto. En ella se puede ver una pequeña descrición y los comics en los que aparece.

# /favorites
Vista que muestra los personajes de Marvel que hemos guardado en favoritos.
```

## Uso

El usuario puede navegar entre las diferentes rutas. Por defecto se mostraran 50 personajes de Marvel. Cada uno de ellos tiene un icono de un corazón en el que si el usuario hace click podrá añadir ese personaje a favoritos. El usuario puede tener tantos personajes favoritos como quiera.
Siempre que se añada un personaje el numero que se encuentra en la esquina superior derecha cambiará según el numero de favoritos que tenga el usuario. Si el usuario hace click sobre el icono se navegará a la ruta /favorites

Ademas, en dicha vista hay una barra buscador donde el usuario puede introducir una palabra y automáticamente se mostraran personajes que contengan dicha palabra. Estos personajes también se pueden añadir a favoritos.

En la vista de detalle de personaje también existe la posibilidad de añadir el personaje a favoritos. En esta vista se muestran los comics en los que aparece el personaje. El usuario podrá hacer scroll horizontal para poder visualizarlos.

## Estructura

El proyecto tiene la siguiente estructura de datos:

```bash
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   ├── empty-heart-icon.svg
│   │   ├── glass.svg
│   │   ├── groot.png
│   │   ├── heart-icon.svg
│   │   ├── marvel-logo.svg
│   │   └── react.svg
│   ├── components
│   │   ├── characterCard
│   │   │   ├── CharacterCard.component.tsx
│   │   │   └── CharacterCard.styles.ts
│   │   ├── comicCard
│   │   │   ├── comicCard.component.tsx
│   │   │   └── comicCard.styles.ts
│   │   ├── comicsSection
│   │   │   ├── ComicsSection.component.tsx
│   │   │   └── ComicsSection.styles.ts
│   │   ├── detailPage
│   │   │   ├── DetailPage.component.tsx
│   │   │   └── DetailPage.styles.ts
│   │   ├── header
│   │   │   ├── Header.component.tsx
│   │   │   ├── Header.styles.ts
│   │   │   └── Header.test.tsx
│   │   ├── headerWrapper
│   │   │   └── HeaderWrapper.component.tsx
│   │   ├── icons
│   │   │   ├── EmptyHeartIcon.tsx
│   │   │   └── HeartIcon.tsx
│   │   ├── landingPage
│   │   │   ├── LandingPage.component.tsx
│   │   │   └── LandingPage.styles.ts
│   │   └── notFound
│   │       ├── NotFound.component.tsx
│   │       ├── NotFound.styles.ts
│   │       └── NotFound.test.ts
│   ├── context
│   │   └── favoritesContext.ts
│   ├── endpoints
│   │   └── endpoints.ts
│   ├── hooks
│   │   └── useFavorites.ts
│   ├── index.ts
│   ├── main.tsx
│   ├── models
│   │   ├── character.model.ts
│   │   └── comic.model.ts
│   ├── services
│   │   ├── characters
│   │   │   └── characters.services.ts
│   │   └── comics
│   │       └── comics.services.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Autoría

Este proyecto ha sido creado por Alvaro Moral.

## License

[MIT](https://choosealicense.com/licenses/mit/)
