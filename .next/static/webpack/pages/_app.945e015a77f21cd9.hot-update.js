"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./services/service.js":
/*!*****************************!*\
  !*** ./services/service.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"draStartHandler\": function() { return /* binding */ draStartHandler; },\n/* harmony export */   \"draLeaveHandler\": function() { return /* binding */ draLeaveHandler; },\n/* harmony export */   \"onDropHandler\": function() { return /* binding */ onDropHandler; }\n/* harmony export */ });\n// export const getPhotos = () => {\n//   let photos = [];\n//   if (typeof window !== 'undefined') {\n//     photos = JSON.parse(localStorage.getItem('photo')) || [];\n//   }\n//   return photos;\n// };\n// export const converterBase64 = (file) => {\n//   return new Promise((resolve, reject) => {\n//     const fileReader = new FileReader();\n//     fileReader.readAsDataURL(file);\n//     fileReader.onload = () => {\n//       resolve(fileReader.result);\n//     };\n//     fileReader.onerror = (error) => {\n//       reject(error);\n//     };\n//   });\n// };\n// export const uploadImage = async (\n//   e,\n//   setTestImages,\n//   title,\n//   description,\n//   setNewImage\n// ) => {\n//   const file = e.dataTransfer.files[0];\n//   const base64 = await converterBase64(file);\n//   setTestImages(base64);\n//   if (title && description) {\n//     setNewImage({\n//       title,\n//       description,\n//       image: base64,\n//     });\n//   }\n// };\nvar draStartHandler = function(param) {\n    var e = param.e, setDrag = param.setDrag;\n    e.preventDefault();\n    setDrag(true);\n};\nvar draLeaveHandler = function(param) {\n    var e = param.e, setDrag = param.setDrag;\n    e.preventDefault();\n    setDrag(false);\n};\nvar onDropHandler = function(param) {\n    var e = param.e, newImage = param.newImage, setSnackbar = param.setSnackbar, setOpen = param.setOpen, uploadImage = param.uploadImage, setDrag = param.setDrag, title = param.title, description = param.description, setTestImages = param.setTestImages, setNewImage = param.setNewImage;\n    if (!newImage[title] && !newImage[description]) {\n        setSnackbar(\"Complete  all fields\");\n        setOpen(true);\n    }\n    e.preventDefault();\n    uploadImage(e, setTestImages, title, description, setNewImage);\n    setDrag(false);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zZXJ2aWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyxxQkFBcUI7QUFDckIseUNBQXlDO0FBQ3pDLGdFQUFnRTtBQUNoRSxNQUFNO0FBQ04sbUJBQW1CO0FBQ25CLEtBQUs7QUFFTCw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDJDQUEyQztBQUMzQyxzQ0FBc0M7QUFFdEMsa0NBQWtDO0FBQ2xDLG9DQUFvQztBQUNwQyxTQUFTO0FBRVQsd0NBQXdDO0FBQ3hDLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsUUFBUTtBQUNSLEtBQUs7QUFFTCxxQ0FBcUM7QUFDckMsT0FBTztBQUNQLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1QsMENBQTBDO0FBQzFDLGdEQUFnRDtBQUNoRCwyQkFBMkI7QUFDM0IsZ0NBQWdDO0FBQ2hDLG9CQUFvQjtBQUNwQixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixVQUFVO0FBQ1YsTUFBTTtBQUNOLEtBQUs7QUFFRSxJQUFNQSxlQUFlLEdBQUcsZ0JBQW9CO1FBQWpCQyxDQUFDLFNBQURBLENBQUMsRUFBRUMsT0FBTyxTQUFQQSxPQUFPO0lBQzFDRCxDQUFDLENBQUNFLGNBQWMsRUFBRSxDQUFDO0lBQ25CRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDZixDQUFDO0FBRUssSUFBTUUsZUFBZSxHQUFHLGdCQUFvQjtRQUFqQkgsQ0FBQyxTQUFEQSxDQUFDLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUMxQ0QsQ0FBQyxDQUFDRSxjQUFjLEVBQUUsQ0FBQztJQUNuQkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ2hCLENBQUM7QUFFSyxJQUFNRyxhQUFhLEdBQUcsZ0JBV3ZCO1FBVkpKLENBQUMsU0FBREEsQ0FBQyxFQUNESyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsV0FBVyxTQUFYQSxXQUFXLEVBQ1hDLE9BQU8sU0FBUEEsT0FBTyxFQUNQQyxXQUFXLFNBQVhBLFdBQVcsRUFDWFAsT0FBTyxTQUFQQSxPQUFPLEVBQ1BRLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsYUFBYSxTQUFiQSxhQUFhLEVBQ2JDLFdBQVcsU0FBWEEsV0FBVztJQUVYLElBQUksQ0FBQ1AsUUFBUSxDQUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDSixRQUFRLENBQUNLLFdBQVcsQ0FBQyxFQUFFO1FBQzlDSixXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7SUFDRFAsQ0FBQyxDQUFDRSxjQUFjLEVBQUUsQ0FBQztJQUNuQk0sV0FBVyxDQUFDUixDQUFDLEVBQUVXLGFBQWEsRUFBRUYsS0FBSyxFQUFFQyxXQUFXLEVBQUVFLFdBQVcsQ0FBQyxDQUFDO0lBQy9EWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9zZXJ2aWNlLmpzPzU1ZWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IGdldFBob3RvcyA9ICgpID0+IHtcbi8vICAgbGV0IHBob3RvcyA9IFtdO1xuLy8gICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICBwaG90b3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwaG90bycpKSB8fCBbXTtcbi8vICAgfVxuLy8gICByZXR1cm4gcGhvdG9zO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IGNvbnZlcnRlckJhc2U2NCA9IChmaWxlKSA9PiB7XG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4vLyAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuXG4vLyAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4vLyAgICAgICByZXNvbHZlKGZpbGVSZWFkZXIucmVzdWx0KTtcbi8vICAgICB9O1xuXG4vLyAgICAgZmlsZVJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4vLyAgICAgICByZWplY3QoZXJyb3IpO1xuLy8gICAgIH07XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKFxuLy8gICBlLFxuLy8gICBzZXRUZXN0SW1hZ2VzLFxuLy8gICB0aXRsZSxcbi8vICAgZGVzY3JpcHRpb24sXG4vLyAgIHNldE5ld0ltYWdlXG4vLyApID0+IHtcbi8vICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xuLy8gICBjb25zdCBiYXNlNjQgPSBhd2FpdCBjb252ZXJ0ZXJCYXNlNjQoZmlsZSk7XG4vLyAgIHNldFRlc3RJbWFnZXMoYmFzZTY0KTtcbi8vICAgaWYgKHRpdGxlICYmIGRlc2NyaXB0aW9uKSB7XG4vLyAgICAgc2V0TmV3SW1hZ2Uoe1xuLy8gICAgICAgdGl0bGUsXG4vLyAgICAgICBkZXNjcmlwdGlvbixcbi8vICAgICAgIGltYWdlOiBiYXNlNjQsXG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH07XG5cbmV4cG9ydCBjb25zdCBkcmFTdGFydEhhbmRsZXIgPSAoeyBlLCBzZXREcmFnIH0pID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzZXREcmFnKHRydWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYUxlYXZlSGFuZGxlciA9ICh7IGUsIHNldERyYWcgfSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNldERyYWcoZmFsc2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uRHJvcEhhbmRsZXIgPSAoe1xuICBlLFxuICBuZXdJbWFnZSxcbiAgc2V0U25hY2tiYXIsXG4gIHNldE9wZW4sXG4gIHVwbG9hZEltYWdlLFxuICBzZXREcmFnLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHNldFRlc3RJbWFnZXMsXG4gIHNldE5ld0ltYWdlLFxufSkgPT4ge1xuICBpZiAoIW5ld0ltYWdlW3RpdGxlXSAmJiAhbmV3SW1hZ2VbZGVzY3JpcHRpb25dKSB7XG4gICAgc2V0U25hY2tiYXIoJ0NvbXBsZXRlICBhbGwgZmllbGRzJyk7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfVxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHVwbG9hZEltYWdlKGUsIHNldFRlc3RJbWFnZXMsIHRpdGxlLCBkZXNjcmlwdGlvbiwgc2V0TmV3SW1hZ2UpO1xuICBzZXREcmFnKGZhbHNlKTtcbn07XG4iXSwibmFtZXMiOlsiZHJhU3RhcnRIYW5kbGVyIiwiZSIsInNldERyYWciLCJwcmV2ZW50RGVmYXVsdCIsImRyYUxlYXZlSGFuZGxlciIsIm9uRHJvcEhhbmRsZXIiLCJuZXdJbWFnZSIsInNldFNuYWNrYmFyIiwic2V0T3BlbiIsInVwbG9hZEltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldFRlc3RJbWFnZXMiLCJzZXROZXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/service.js\n");

/***/ })

});