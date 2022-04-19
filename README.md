This branch is a minimal reproducible example of another bug in webpack that happens
when combining ESM library output with dependent modules.

See https://github.com/webpack/webpack/issues/2933#issuecomment-1099935121

- Build the project with `yarn build`
- The resulting `main.mjs` file in the dist folder contains two default outputs,
  one in line 76: `export default __webpack_require__`, the other one being the
  actual default output of the `index.mjs` source file (at the end of the `main.mjs`).
