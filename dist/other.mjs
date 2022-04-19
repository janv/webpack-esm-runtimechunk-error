export const id = "other";
export const ids = ["other"];
export const modules = {};
;

// load runtime
import __webpack_require__ from "./main.mjs";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./other.mjs";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./other.mjs");
var __webpack_exports__foo = __webpack_exports__.foo;
export { __webpack_exports__foo as foo };
