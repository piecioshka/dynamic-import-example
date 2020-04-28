# dynamic-import-example

:ledger: Testing ECMAScript 2002 Dynamic Import

```js
// main.js
document.querySelector('button').addEventListener('click', async () => {
    const { page } = await import('./pages/contact.js');
    page();
});
```

```js
// pages/contact.js
export const page = () => {
    console.log('contact page loaded');
};
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020
