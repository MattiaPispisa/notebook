# TS cool stuff

## Infer object keys

```ts
function isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
  return k in x;
}
```

```ts
const objectKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};
```
