/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(2);



class Controller {
    constructor() {}
    addUser() {
        __WEBPACK_IMPORTED_MODULE_0__model__["a" /* form */].addEventListener('submit', e => {
            e.preventDefault();
            let name = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* form */].name.value;
            let email = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* form */].email.value;
            let role;
            let options = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* form */].account.options;
            for (let i = 0; i < options.length; i++) {
                let cell = options[i];
                if (cell.selected) {
                    role = cell.value;
                }
            }
            __WEBPACK_IMPORTED_MODULE_1__view__["a" /* view */].createTag(name, email, role);
            __WEBPACK_IMPORTED_MODULE_0__model__["a" /* form */].reset();
        });
    }
    render() {
        this.addUser();
    }
}
let controller = new Controller();
controller.render();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return form; });
let form = document.querySelector("form");

// class Person extends Person {
//     controller() {}

// }
// class Guest extends Person {
//     constructor() {
//         super();
//     }
// }
// class User extends Person {

// }
// class Admin extends Person {

// }
// person.createUser();
// class Guest extends Person {
//     constructor() {
//             super("nnn", "mmm");
//             this.role = "guest";
//             // console.log(this.role);
//         }
//         // createGuest() {

//     // }
// }
// new Guest().createUser();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return view; });
class View {
    constructor() {}
    createTag(name, email, role) {
        let tbody = document.querySelector('tbody');
        tbody.innerHTML += `<tr><td><a data-toggle="tab" href="#contact-2" class="client-link">${name}</a>
                                            </td>
                                            <td>
                                                <a data-toggle="tab" href="#" class="client-link">${email}</a>
                                            </td>
                                            <td>
                                                <a data-toggle="tab" href="#contact-2" class="client-link">${role}</a>
                                            </td></tr>`;
        return tbody;
    }
}
let view = new View();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map