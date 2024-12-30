---
id: web_app_micro_front_end
title: micro frontend
slug: micro-frontend
---

# Micro frontend

## Module Federation

[Guide](https://module-federation.io/guide/start/index.html)

[Examples](https://github.com/module-federation/module-federation-examples)

### [Deep dive Zack Jackson](https://scriptedalchemy.medium.com/understanding-webpack-module-federation-a-deep-dive-efe5c55bf366)

Tre blocchi principali:

- exposed module (remoti)
- consumption module (host remote import)
- shared module/dependency

L'host consuma i remoti.

Host config:

```ts
export default defineConfig({
  plugins: [
    federation({
      name: "host",
      remotes: {
        app1: "http://localhost:3001/assets/remoteEntry.js",
        app2: "http://localhost:3002/assets/remoteEntry.js",
        // Puoi aggiungere altre remote applications qui
      },
      shared: ["react", "react-dom"], // Librerie condivise
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
```

Per uno stato condiviso utilizzare uno shared module

Lo stile css nell'entry point che esporto ?

[Module federation + SSR](https://github.com/module-federation/module-federation-examples/blob/master/server-side-rendering/README.md)

La shell è un server che chiama `renderToPipeableStream` con App: un componente che l'unica cosa che fa è creare il routing con i remote

## Vite module federation

### Plugins

- https://github.com/module-federation/vite
- https://github.com/originjs/vite-plugin-federation

[Example Vite + React](https://github.com/module-federation/module-federation-examples/tree/master/module-federation-vite-react)

https://cheddar-alfalfa-fa4.notion.site/Module-Federation-Divide-conquer-share-516cc166ad234f848f708df7ea4a22cf

SSR
remix: https://github.com/remix-run/react-router-templates/blob/main/node-custom-server/server.js
react router: https://github.com/remix-run/react-router/blob/main/examples/ssr-data-router/server.js
