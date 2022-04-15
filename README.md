This repo is a minimal reproducible example of a bug in webpack that happens
when combining ESM library output with `runtimeChunk: single`.

See https://github.com/webpack/webpack/issues/2933#issuecomment-1099935121

- Build the project with `yarn build`
- Terser will complain about an `export` appearing in a location that's not the
  toplevel of a module.

The generated code that Terser chokes on looks like this:

```js
(__webpack_require__) => {
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(533);
  var __webpack_exports__default = __webpack_exports__.Z;
  export { __webpack_exports__default as default };
};
```