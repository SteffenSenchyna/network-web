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
exports.id = "pages/api/s3/backup/get/[id]";
exports.ids = ["pages/api/s3/backup/get/[id]"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "(api)/./pages/api/s3/backup/get/[id].js":
/*!*****************************************!*\
  !*** ./pages/api/s3/backup/get/[id].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n    const s3 = new AWS.S3({\n        accessKeyId: process.env.AWS_ACCESS_KEY,\n        secretAccessKey: process.env.AWS_SECRET_KEY,\n        region: process.env.AWS_DEFAULT_REGION\n    });\n    // const s3 = new S3Client({\n    // accessKeyId: process.env.AWS_ACCESS_KEY,\n    // secretAccessKey: process.env.AWS_SECRET_KEY,\n    // });\n    const listBuckets = (s3)=>{\n        s3.listBuckets(function(err, data) {\n            if (err) {\n                console.log(\"Error\", err);\n            } else {\n                console.log(\"Success\", data.Buckets);\n            }\n        });\n    };\n    const listObjectsInBucket = (bucketName, folderName)=>{\n        // Create the parameters for calling listObjects\n        var bucketParams = {\n            Bucket: bucketName,\n            Prefix: folderName\n        };\n        // Call S3 to obtain a list of the objects in the bucket\n        s3.listObjects(bucketParams, function(err, data) {\n            if (err) {\n                console.log(\"Error\", err);\n            } else {\n                console.log(\"Success\", data);\n            }\n        });\n    };\n    listBuckets(s3);\n    const id = req.query.id + \"/\";\n    listObjectsInBucket(\"network-conf\", id);\n    return res.status(200); // For unit tests.\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvczMvYmFja3VwL2dldC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRTtBQUVuRCxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxNQUFNQyxtQkFBT0EsQ0FBQyx3QkFBUztJQUM3QixNQUFNQyxLQUFLLElBQUlGLElBQUlHLEVBQUUsQ0FBQztRQUNwQkMsYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1FBQ3ZDQyxpQkFBaUJILFFBQVFDLEdBQUcsQ0FBQ0csY0FBYztRQUMzQ0MsUUFBUUwsUUFBUUMsR0FBRyxDQUFDSyxrQkFBa0I7SUFDeEM7SUFDQSw0QkFBNEI7SUFDNUIsMkNBQTJDO0lBQzNDLCtDQUErQztJQUMvQyxNQUFNO0lBQ04sTUFBTUMsY0FBYyxDQUFDVixLQUFPO1FBQzFCQSxHQUFHVSxXQUFXLENBQUMsU0FBVUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7WUFDbEMsSUFBSUQsS0FBSztnQkFDUEUsUUFBUUMsR0FBRyxDQUFDLFNBQVNIO1lBQ3ZCLE9BQU87Z0JBQ0xFLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRixLQUFLRyxPQUFPO1lBQ3JDLENBQUM7UUFDSDtJQUNGO0lBQ0EsTUFBTUMsc0JBQXNCLENBQUNDLFlBQVlDLGFBQWU7UUFDdEQsZ0RBQWdEO1FBQ2hELElBQUlDLGVBQWU7WUFDakJDLFFBQVFIO1lBQ1JJLFFBQVFIO1FBQ1Y7UUFFQSx3REFBd0Q7UUFDeERsQixHQUFHc0IsV0FBVyxDQUFDSCxjQUFjLFNBQVVSLEdBQUcsRUFBRUMsSUFBSSxFQUFFO1lBQ2hELElBQUlELEtBQUs7Z0JBQ1BFLFFBQVFDLEdBQUcsQ0FBQyxTQUFTSDtZQUN2QixPQUFPO2dCQUNMRSxRQUFRQyxHQUFHLENBQUMsV0FBV0Y7WUFDekIsQ0FBQztRQUNIO0lBQ0Y7SUFDQUYsWUFBWVY7SUFDWixNQUFNdUIsS0FBSzNCLElBQUk0QixLQUFLLENBQUNELEVBQUUsR0FBRztJQUMxQlAsb0JBQW9CLGdCQUFnQk87SUFDcEMsT0FBTzFCLElBQUk0QixNQUFNLENBQUMsTUFBTSxrQkFBa0I7QUFDNUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldHd1aS8uL3BhZ2VzL2FwaS9zMy9iYWNrdXAvZ2V0L1tpZF0uanM/ZDM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTM0NsaWVudCwgTGlzdE9iamVjdHNDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1zM1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IEFXUyA9IHJlcXVpcmUoXCJhd3Mtc2RrXCIpO1xuICBjb25zdCBzMyA9IG5ldyBBV1MuUzMoe1xuICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5BV1NfQUNDRVNTX0tFWSxcbiAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LkFXU19TRUNSRVRfS0VZLFxuICAgIHJlZ2lvbjogcHJvY2Vzcy5lbnYuQVdTX0RFRkFVTFRfUkVHSU9OLFxuICB9KTtcbiAgLy8gY29uc3QgczMgPSBuZXcgUzNDbGllbnQoe1xuICAvLyBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVksXG4gIC8vIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9LRVksXG4gIC8vIH0pO1xuICBjb25zdCBsaXN0QnVja2V0cyA9IChzMykgPT4ge1xuICAgIHMzLmxpc3RCdWNrZXRzKGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiLCBlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIsIGRhdGEuQnVja2V0cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGxpc3RPYmplY3RzSW5CdWNrZXQgPSAoYnVja2V0TmFtZSwgZm9sZGVyTmFtZSkgPT4ge1xuICAgIC8vIENyZWF0ZSB0aGUgcGFyYW1ldGVycyBmb3IgY2FsbGluZyBsaXN0T2JqZWN0c1xuICAgIHZhciBidWNrZXRQYXJhbXMgPSB7XG4gICAgICBCdWNrZXQ6IGJ1Y2tldE5hbWUsXG4gICAgICBQcmVmaXg6IGZvbGRlck5hbWUsXG4gICAgfTtcblxuICAgIC8vIENhbGwgUzMgdG8gb2J0YWluIGEgbGlzdCBvZiB0aGUgb2JqZWN0cyBpbiB0aGUgYnVja2V0XG4gICAgczMubGlzdE9iamVjdHMoYnVja2V0UGFyYW1zLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgbGlzdEJ1Y2tldHMoczMpO1xuICBjb25zdCBpZCA9IHJlcS5xdWVyeS5pZCArIFwiL1wiO1xuICBsaXN0T2JqZWN0c0luQnVja2V0KFwibmV0d29yay1jb25mXCIsIGlkKTtcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKTsgLy8gRm9yIHVuaXQgdGVzdHMuXG59XG4iXSwibmFtZXMiOlsiUzNDbGllbnQiLCJMaXN0T2JqZWN0c0NvbW1hbmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiQVdTIiwicmVxdWlyZSIsInMzIiwiUzMiLCJhY2Nlc3NLZXlJZCIsInByb2Nlc3MiLCJlbnYiLCJBV1NfQUNDRVNTX0tFWSIsInNlY3JldEFjY2Vzc0tleSIsIkFXU19TRUNSRVRfS0VZIiwicmVnaW9uIiwiQVdTX0RFRkFVTFRfUkVHSU9OIiwibGlzdEJ1Y2tldHMiLCJlcnIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkJ1Y2tldHMiLCJsaXN0T2JqZWN0c0luQnVja2V0IiwiYnVja2V0TmFtZSIsImZvbGRlck5hbWUiLCJidWNrZXRQYXJhbXMiLCJCdWNrZXQiLCJQcmVmaXgiLCJsaXN0T2JqZWN0cyIsImlkIiwicXVlcnkiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/s3/backup/get/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/s3/backup/get/[id].js"));
module.exports = __webpack_exports__;

})();