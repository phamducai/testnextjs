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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: 'AIzaSyBuu0YHXOcgmqWLZl-fiMn6lG2wUhdPg8k',\n    authDomain: 'next-firebase-stripe-39bf8.firebaseapp.com',\n    databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',\n    projectId: 'next-firebase-stripe-39bf8',\n    storageBucket: 'next-firebase-stripe-39bf8.appspot.com',\n    messagingSenderId: '777709922250',\n    appId: '1:777709922250:web:4500ee09dca93e1406d133'\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxFQUF1RDtBQUNNO0FBQ1o7QUFDVjtBQUV2QyxFQUE0RDtBQUM1RCxFQUFpRTtBQUVqRSxFQUF3QztBQUN4QyxFQUFtRTtBQUNuRSxLQUFLLENBQUNLLGNBQWMsR0FBRyxDQUFDO0lBQ3RCQyxNQUFNLEVBQUUsQ0FBeUM7SUFDakRDLFVBQVUsRUFBRSxDQUE0QztJQUN4REMsV0FBVyxFQUFFLENBQWdFO0lBQzdFQyxTQUFTLEVBQUUsQ0FBNEI7SUFDdkNDLGFBQWEsRUFBRSxDQUF3QztJQUN2REMsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0FBQ3BELENBQUM7QUFFRCxFQUFzQjtBQUN0QixLQUFLLENBQUNDLEdBQUcsSUFBSVgscURBQU8sR0FBR1ksTUFBTSxHQUFHZCwyREFBYSxDQUFDSyxjQUFjLElBQUlKLG9EQUFNO0FBQ3RFLEtBQUssQ0FBQ2MsRUFBRSxHQUFHWixnRUFBWTtBQUN2QixLQUFLLENBQUNhLElBQUksR0FBR1osc0RBQU87QUFFcEIsaUVBQWVTLEdBQUc7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlLnRzPzkyZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHAsIGdldEFwcHMgfSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcblxyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6ICdBSXphU3lCdXUwWUhYT2NnbXFXTFpsLWZpTW42bEcyd1VoZFBnOGsnLFxyXG4gIGF1dGhEb21haW46ICduZXh0LWZpcmViYXNlLXN0cmlwZS0zOWJmOC5maXJlYmFzZWFwcC5jb20nLFxyXG4gIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9uZXh0LWZpcmViYXNlLXN0cmlwZS0zOWJmOC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20nLFxyXG4gIHByb2plY3RJZDogJ25leHQtZmlyZWJhc2Utc3RyaXBlLTM5YmY4JyxcclxuICBzdG9yYWdlQnVja2V0OiAnbmV4dC1maXJlYmFzZS1zdHJpcGUtMzliZjguYXBwc3BvdC5jb20nLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnNzc3NzA5OTIyMjUwJyxcclxuICBhcHBJZDogJzE6Nzc3NzA5OTIyMjUwOndlYjo0NTAwZWUwOWRjYTkzZTE0MDZkMTMzJyxcclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSAhZ2V0QXBwcygpLmxlbmd0aCA/IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZ2V0QXBwKClcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKVxyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBcclxuZXhwb3J0IHsgYXV0aCwgZGIgfVxyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcCIsImdldEFwcHMiLCJnZXRGaXJlc3RvcmUiLCJnZXRBdXRoIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImxlbmd0aCIsImRiIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: initialLoading , 1: setInitialLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push('/login');\n            }\n            setInitialLoading(false);\n        })\n    , [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push('/');\n            setLoading(false);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push('/');\n            setLoading(false);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user: user1,\n            signUp,\n            signIn,\n            error: error1,\n            loading,\n            logout\n        })\n    , [\n        user1,\n        loading,\n        error1\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mrbac\\\\OneDrive\\\\Desktop\\\\copy\\\\netflix-redesign\\\\hooks\\\\useAuth.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined));\n};\n// Let's only export the `useAuth` hook instead of the context.\n// We only want to use the hook directly and never the context comopnent.\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1hSLE9BQU8sQ0FBQyxJQUFJO1FBQ2QsQ0FBQyxFQUNBVSxLQUFLLEVBQUVmLEtBQUssR0FBS2dCLEtBQUssQ0FBQ2hCLEtBQUssQ0FBQ2lCLE9BQU87VUFDcENDLE9BQU8sS0FBT1QsVUFBVSxDQUFDLEtBQUs7O0lBQ25DLENBQUM7SUFFRCxLQUFLLENBQUNVLFdBQVcsR0FBRzNCLDhDQUFPLE1BQ2xCLENBQUM7WUFBQ0ksSUFBSSxFQUFKQSxLQUFJO1lBQUVDLE1BQU07WUFBRUMsTUFBTTtZQUFFRSxLQUFLLEVBQUxBLE1BQUs7WUFBRUMsT0FBTztZQUFFRixNQUFNO1FBQUMsQ0FBQztNQUN2RCxDQUFDSDtRQUFBQSxLQUFJO1FBQUVLLE9BQU87UUFBRUQsTUFBSztJQUFBLENBQUM7SUFHeEIsTUFBTSw2RUFDSEwsV0FBVyxDQUFDeUIsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLFdBQVc7bUJBQ3BDWixjQUFjLElBQUlKLFFBQVE7Ozs7OztBQUdsQyxDQUFDO0FBRUQsRUFBK0Q7QUFDL0QsRUFBeUU7QUFDMUQsUUFBUSxDQUFDbUIsT0FBTyxHQUFHLENBQUM7SUFDakMsTUFBTSxDQUFDaEMsaURBQVUsQ0FBQ0ssV0FBVztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQXV0aC50c3g/ZmJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgc2lnbk91dCxcclxuICBVc2VyLFxyXG59IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcblxyXG5pbnRlcmZhY2UgSUF1dGgge1xyXG4gIHVzZXI6IFVzZXIgfCBudWxsXHJcbiAgc2lnblVwOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPlxyXG4gIHNpZ25JbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cclxuICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD5cclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbFxyXG4gIGxvYWRpbmc6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoPih7XHJcbiAgdXNlcjogbnVsbCxcclxuICBzaWduVXA6IGFzeW5jICgpID0+IHt9LFxyXG4gIHNpZ25JbjogYXN5bmMgKCkgPT4ge30sXHJcbiAgbG9nb3V0OiBhc3luYyAoKSA9PiB7fSxcclxuICBlcnJvcjogbnVsbCxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxufSlcclxuXHJcbmludGVyZmFjZSBBdXRoUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW5pdGlhbExvYWRpbmcsIHNldEluaXRpYWxMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+XHJcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAvLyBMb2dnZWQgaW4uLi5cclxuICAgICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIE5vdCBsb2dnZWQgaW4uLi5cclxuICAgICAgICAgIHNldFVzZXIobnVsbClcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0SW5pdGlhbExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pLFxyXG4gICAgW2F1dGhdXHJcbiAgKVxyXG5cclxuICBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG5cclxuICAgIGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIodXNlckNyZWRlbnRpYWwudXNlcilcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IubWVzc2FnZSkpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgc2lnbk91dChhdXRoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBtZW1vZWRWYWx1ZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoeyB1c2VyLCBzaWduVXAsIHNpZ25JbiwgZXJyb3IsIGxvYWRpbmcsIGxvZ291dCB9KSxcclxuICAgIFt1c2VyLCBsb2FkaW5nLCBlcnJvcl1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21lbW9lZFZhbHVlfT5cclxuICAgICAgeyFpbml0aWFsTG9hZGluZyAmJiBjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBMZXQncyBvbmx5IGV4cG9ydCB0aGUgYHVzZUF1dGhgIGhvb2sgaW5zdGVhZCBvZiB0aGUgY29udGV4dC5cclxuLy8gV2Ugb25seSB3YW50IHRvIHVzZSB0aGUgaG9vayBkaXJlY3RseSBhbmQgbmV2ZXIgdGhlIGNvbnRleHQgY29tb3BuZW50LlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImF1dGgiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJzaWduVXAiLCJzaWduSW4iLCJsb2dvdXQiLCJlcnJvciIsImxvYWRpbmciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInNldFVzZXIiLCJzZXRFcnJvciIsImluaXRpYWxMb2FkaW5nIiwic2V0SW5pdGlhbExvYWRpbmciLCJzZXRMb2FkaW5nIiwicHVzaCIsImVtYWlsIiwicGFzc3dvcmQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJjYXRjaCIsImFsZXJ0IiwibWVzc2FnZSIsImZpbmFsbHkiLCJtZW1vZWRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrbac\\\\OneDrive\\\\Desktop\\\\copy\\\\netflix-redesign\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mrbac\\\\OneDrive\\\\Desktop\\\\copy\\\\netflix-redesign\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mrbac\\\\OneDrive\\\\Desktop\\\\copy\\\\netflix-redesign\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFaUI7QUFDWjtTQUUxQkUsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsTUFBTSw2RUFDSEgsOENBQVU7OEZBRVJELHdEQUFZO2tHQUNWRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlQXV0aCdcclxuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gJ3JlY29pbCdcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlY29pbFJvb3Q+XHJcbiAgICAgIHsvKiBIaWdoZXIgT3JkZXIgQ29tcG9uZW50ICovfVxyXG4gICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICA8L1JlY29pbFJvb3Q+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiUmVjb2lsUm9vdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();