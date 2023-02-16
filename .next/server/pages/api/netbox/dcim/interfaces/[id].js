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
exports.id = "pages/api/netbox/dcim/interfaces/[id]";
exports.ids = ["pages/api/netbox/dcim/interfaces/[id]"];
exports.modules = {

/***/ "axios?6fac":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/netbox/dcim/interfaces/[id].js":
/*!**************************************************!*\
  !*** ./pages/api/netbox/dcim/interfaces/[id].js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const id = req.query.id;\n    let request = {\n        url: `http://0.0.0.0:8000/api/dcim/interfaces/?device_id=${id}&embed=interfaces`,\n        method: \"GET\",\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: \"Token 0123456789abcdef0123456789abcdef01234567\"\n        }\n    };\n    let requestIP = {\n        url: `http://0.0.0.0:8000/api/ipam/ip-addresses/?device_id=${id}`,\n        method: \"GET\",\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: \"Token 0123456789abcdef0123456789abcdef01234567\"\n        }\n    };\n    const axios = __webpack_require__(/*! axios */ \"axios?6fac\");\n    const respInt = await axios(request);\n    const respIP = await axios(requestIP);\n    const util = __webpack_require__(/*! util */ \"util\");\n    await Promise.all([\n        respInt,\n        respIP\n    ]).then(function(responses) {\n        const int = responses[0].data.results;\n        const ips = responses[1].data.results;\n        for(let x in int){\n            for(let i in ips){\n                if (int[x][\"id\"] == ips[i][\"assigned_object_id\"]) {\n                    if (ips[i][\"family\"][\"value\"] == 4) {\n                        const IP = ips[i];\n                        int[x].ip4 = IP;\n                    } else {\n                        const IP1 = ips[i];\n                        int[x].ip6 = IP1;\n                    }\n                }\n            }\n        }\n        return res.status(200).json(int);\n    });\n// await axios(request)\n//   .then(function (response) {\n//     if (response.status == 200) {\n//       res.status(200).json(response.data);\n//     }\n//   })\n//   .catch(function (response) {\n//     console.log(\"Failed to grab device interfaces\");\n//     res.status(response.status).json(response.data);\n//   });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV0Ym94L2RjaW0vaW50ZXJmYWNlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxLQUFLRixJQUFJRyxLQUFLLENBQUNELEVBQUU7SUFDdkIsSUFBSUUsVUFBVTtRQUNaQyxLQUFLLENBQUMsbURBQW1ELEVBQUVILEdBQUcsaUJBQWlCLENBQUM7UUFDaEZJLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtZQUNoQkMsZUFBZTtRQUNqQjtJQUNGO0lBQ0EsSUFBSUMsWUFBWTtRQUNkSixLQUFLLENBQUMscURBQXFELEVBQUVILEdBQUcsQ0FBQztRQUNqRUksUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCQyxlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxNQUFNRSxRQUFRQyxtQkFBT0EsQ0FBQyx5QkFBTztJQUM3QixNQUFNQyxVQUFVLE1BQU1GLE1BQU1OO0lBQzVCLE1BQU1TLFNBQVMsTUFBTUgsTUFBTUQ7SUFDM0IsTUFBTUssT0FBT0gsbUJBQU9BLENBQUMsa0JBQU07SUFDM0IsTUFBTUksUUFBUUMsR0FBRyxDQUFDO1FBQUNKO1FBQVNDO0tBQU8sRUFBRUksSUFBSSxDQUFDLFNBQVVDLFNBQVMsRUFBRTtRQUM3RCxNQUFNQyxNQUFNRCxTQUFTLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNDLE9BQU87UUFDckMsTUFBTUMsTUFBTUosU0FBUyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDQyxPQUFPO1FBQ3JDLElBQUssSUFBSUUsS0FBS0osSUFBSztZQUNqQixJQUFLLElBQUlLLEtBQUtGLElBQUs7Z0JBQ2pCLElBQUlILEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEtBQUssSUFBSUQsR0FBRyxDQUFDRSxFQUFFLENBQUMscUJBQXFCLEVBQUU7b0JBQ2hELElBQUlGLEdBQUcsQ0FBQ0UsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRzt3QkFDbEMsTUFBTUMsS0FBS0gsR0FBRyxDQUFDRSxFQUFFO3dCQUNqQkwsR0FBRyxDQUFDSSxFQUFFLENBQUNHLEdBQUcsR0FBR0Q7b0JBQ2YsT0FBTzt3QkFDTCxNQUFNQSxNQUFLSCxHQUFHLENBQUNFLEVBQUU7d0JBQ2pCTCxHQUFHLENBQUNJLEVBQUUsQ0FBQ0ksR0FBRyxHQUFHRjtvQkFDZixDQUFDO2dCQUNILENBQUM7WUFDSDtRQUNGO1FBQ0EsT0FBT3hCLElBQUkyQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVjtJQUM5QjtBQUVBLHVCQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsb0NBQW9DO0FBQ3BDLDZDQUE2QztBQUM3QyxRQUFRO0FBQ1IsT0FBTztBQUNQLGlDQUFpQztBQUNqQyx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELFFBQVE7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0d3VpLy4vcGFnZXMvYXBpL25ldGJveC9kY2ltL2ludGVyZmFjZXMvW2lkXS5qcz9mNGE1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgaWQgPSByZXEucXVlcnkuaWQ7XG4gIGxldCByZXF1ZXN0ID0ge1xuICAgIHVybDogYGh0dHA6Ly8wLjAuMC4wOjgwMDAvYXBpL2RjaW0vaW50ZXJmYWNlcy8/ZGV2aWNlX2lkPSR7aWR9JmVtYmVkPWludGVyZmFjZXNgLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IFwiVG9rZW4gMDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3ODlhYmNkZWYwMTIzNDU2N1wiLFxuICAgIH0sXG4gIH07XG4gIGxldCByZXF1ZXN0SVAgPSB7XG4gICAgdXJsOiBgaHR0cDovLzAuMC4wLjA6ODAwMC9hcGkvaXBhbS9pcC1hZGRyZXNzZXMvP2RldmljZV9pZD0ke2lkfWAsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogXCJUb2tlbiAwMTIzNDU2Nzg5YWJjZGVmMDEyMzQ1Njc4OWFiY2RlZjAxMjM0NTY3XCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbiAgY29uc3QgcmVzcEludCA9IGF3YWl0IGF4aW9zKHJlcXVlc3QpO1xuICBjb25zdCByZXNwSVAgPSBhd2FpdCBheGlvcyhyZXF1ZXN0SVApO1xuICBjb25zdCB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XG4gIGF3YWl0IFByb21pc2UuYWxsKFtyZXNwSW50LCByZXNwSVBdKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZXMpIHtcbiAgICBjb25zdCBpbnQgPSByZXNwb25zZXNbMF0uZGF0YS5yZXN1bHRzO1xuICAgIGNvbnN0IGlwcyA9IHJlc3BvbnNlc1sxXS5kYXRhLnJlc3VsdHM7XG4gICAgZm9yIChsZXQgeCBpbiBpbnQpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gaXBzKSB7XG4gICAgICAgIGlmIChpbnRbeF1bXCJpZFwiXSA9PSBpcHNbaV1bXCJhc3NpZ25lZF9vYmplY3RfaWRcIl0pIHtcbiAgICAgICAgICBpZiAoaXBzW2ldW1wiZmFtaWx5XCJdW1widmFsdWVcIl0gPT0gNCkge1xuICAgICAgICAgICAgY29uc3QgSVAgPSBpcHNbaV07XG4gICAgICAgICAgICBpbnRbeF0uaXA0ID0gSVA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IElQID0gaXBzW2ldO1xuICAgICAgICAgICAgaW50W3hdLmlwNiA9IElQO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oaW50KTtcbiAgfSk7XG5cbiAgLy8gYXdhaXQgYXhpb3MocmVxdWVzdClcbiAgLy8gICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgLy8gICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gIC8vICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLmRhdGEpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gZ3JhYiBkZXZpY2UgaW50ZXJmYWNlc1wiKTtcbiAgLy8gICAgIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHJlc3BvbnNlLmRhdGEpO1xuICAvLyAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVxdWVzdElQIiwiYXhpb3MiLCJyZXF1aXJlIiwicmVzcEludCIsInJlc3BJUCIsInV0aWwiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlc3BvbnNlcyIsImludCIsImRhdGEiLCJyZXN1bHRzIiwiaXBzIiwieCIsImkiLCJJUCIsImlwNCIsImlwNiIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/netbox/dcim/interfaces/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/netbox/dcim/interfaces/[id].js"));
module.exports = __webpack_exports__;

})();