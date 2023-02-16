"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/netbox/dcim/getDevices";
exports.ids = ["pages/api/netbox/dcim/getDevices"];
exports.modules = {

/***/ "axios?6fac":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/netbox/dcim/getDevices.js":
/*!*********************************************!*\
  !*** ./pages/api/netbox/dcim/getDevices.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const formData = req.body;\n    const body = JSON.stringify(formData);\n    let request = {\n        url: `http://0.0.0.0:8000/api/dcim/devices/`,\n        method: \"GET\",\n        body: body,\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: \"Token 0123456789abcdef0123456789abcdef01234567\"\n        }\n    };\n    const axios = __webpack_require__(/*! axios */ \"axios?6fac\");\n    await axios(request).then(function(response) {\n        if (response.status == 200) {\n            const deviceJSON = response.data;\n            res.status(200).json(response.data);\n        }\n    }).catch(function(response) {\n        console.log(\"Failed to scan network\");\n        res.status(response.response.status).json(response.response.data);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV0Ym94L2RjaW0vZ2V0RGV2aWNlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsV0FBV0YsSUFBSUcsSUFBSTtJQUN6QixNQUFNQSxPQUFPQyxLQUFLQyxTQUFTLENBQUNIO0lBQzVCLElBQUlJLFVBQVU7UUFDWkMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1FBQzVDQyxRQUFRO1FBQ1JMLE1BQU1BO1FBQ05NLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEJDLGVBQWU7UUFDakI7SUFDRjtJQUNBLE1BQU1DLFFBQVFDLG1CQUFPQSxDQUFDLHlCQUFPO0lBQzdCLE1BQU1ELE1BQU1MLFNBQ1RPLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7UUFDeEIsSUFBSUEsU0FBU0MsTUFBTSxJQUFJLEtBQUs7WUFDMUIsTUFBTUMsYUFBYUYsU0FBU0csSUFBSTtZQUNoQ2hCLElBQUljLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUNKLFNBQVNHLElBQUk7UUFDcEMsQ0FBQztJQUNILEdBQ0NFLEtBQUssQ0FBQyxTQUFVTCxRQUFRLEVBQUU7UUFDekJNLFFBQVFDLEdBQUcsQ0FBQztRQUNacEIsSUFBSWMsTUFBTSxDQUFDRCxTQUFTQSxRQUFRLENBQUNDLE1BQU0sRUFBRUcsSUFBSSxDQUFDSixTQUFTQSxRQUFRLENBQUNHLElBQUk7SUFDbEU7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0d3VpLy4vcGFnZXMvYXBpL25ldGJveC9kY2ltL2dldERldmljZXMuanM/Y2RiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gcmVxLmJvZHk7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSk7XG4gIGxldCByZXF1ZXN0ID0ge1xuICAgIHVybDogYGh0dHA6Ly8wLjAuMC4wOjgwMDAvYXBpL2RjaW0vZGV2aWNlcy9gLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBib2R5OiBib2R5LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogXCJUb2tlbiAwMTIzNDU2Nzg5YWJjZGVmMDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3XCIsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG4gIGF3YWl0IGF4aW9zKHJlcXVlc3QpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCBkZXZpY2VKU09OID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBzY2FuIG5ldHdvcmtcIik7XG4gICAgICByZXMuc3RhdHVzKHJlc3BvbnNlLnJlc3BvbnNlLnN0YXR1cykuanNvbihyZXNwb25zZS5yZXNwb25zZS5kYXRhKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZm9ybURhdGEiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwicmVxdWlyZSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImRldmljZUpTT04iLCJkYXRhIiwianNvbiIsImNhdGNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/netbox/dcim/getDevices.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/netbox/dcim/getDevices.js"));
module.exports = __webpack_exports__;

})();