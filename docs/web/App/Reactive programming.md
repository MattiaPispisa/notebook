# Reactive programming

# Signals (reactive programming)

[Pull (React) vs Push (RxJs)](https://dev.to/this-is-learning/derivations-in-reactivity-4fo1?ck_subscriber_id=2129513524)

# L’evoluzione dei Signals

**Alla base è il concetto di programmazione reattiva sfruttando una variante del design pattern: [Observer](https://refactoring.guru/design-patterns/observer)**

[Problemi del pattern observe](https://en.wikipedia.org/wiki/Observer_pattern)

[The Evolution of Signals in JavaScript](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)

Concetti chiave:

- Data binding: Attaccare “un pezzo di stato” nell’albero del DOM, potente (e pericoloso) perché è bidirezionale, stato —> dom, dom —> stato

- Reactive:

[Super Charging Fine-Grained Reactive Performance](https://dev.to/modderme123/super-charging-fine-grained-reactive-performance-47ph)

Gestione dello stato in modo reattivo: eseguire delle funzioni quando la sorgente è stata cambiata in modo:

- Efficiente: non eseguire più volte del necessario

- Glitch free: senza far vedere all’utente uno stato intermedio (solo alcuni elementi reattivi sono cambiati)

Possono essere di due tipi: eager o lazy
Come risolvere il problema del **Diamante**

S.js introduzione **reactive ownership**
