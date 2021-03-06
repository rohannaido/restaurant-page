/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContact = () => {\r\n    const contact = document.createElement(\"div\");\r\n    const number = document.createElement(\"p\");\r\n    const address = document.createElement(\"p\");\r\n    const map = document.createElement(\"img\");\r\n\r\n    contact.classList.add(\"contact-div\");\r\n    number.innerText = \"📞 +91 98765 43210\";\r\n    address.innerText = \"🏠 Plot No. 44, RTC X Rd, Opposite Sandhya Theatre, Jawahar Nagar, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020\";\r\n    map.src = \"./images/map.png\"\r\n\r\n    contact.appendChild(number);\r\n    contact.appendChild(address);\r\n    contact.appendChild(map);\r\n\r\n    return contact;\r\n}\r\n\r\nconst loadContact = () => {\r\n    const main = document.querySelector(\"main\");\r\n    main.innerText = \"\";\r\n    main.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHome = () => {\r\n    const homeDiv = document.createElement(\"div\");\r\n    homeDiv.classList.add(\"home-div\");\r\n    \r\n    const subtitle1 = document.createElement(\"p\");\r\n    subtitle1.classList.add(\"subtitle\")\r\n    subtitle1.innerText = \"Best Biryani in your Country\"\r\n    \r\n    const subtitle2 = document.createElement(\"p\");\r\n    subtitle2.classList.add(\"subtitle\")\r\n    subtitle2.innerText = \"Made with passion since 1950.\"\r\n    \r\n    const image = document.createElement(\"img\");\r\n    image.src = \"./images/bawarchi-home.jpg\"\r\n    \r\n    const subtitle3 = document.createElement(\"p\");\r\n    subtitle3.classList.add(\"subtitle\")\r\n    subtitle3.innerText = \"Order online or visit us!\"\r\n    \r\n    homeDiv.appendChild(subtitle1);\r\n    homeDiv.appendChild(subtitle2);\r\n    homeDiv.appendChild(image);\r\n    homeDiv.appendChild(subtitle3);\r\n\r\n    return homeDiv;\r\n}\r\n\r\nconst loadHome = () => {\r\n    const main = document.querySelector(\"main\");\r\n    main.innerText = \"\";\r\n    main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\r\n\r\n(0,_webpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuItems = [\r\n    {\r\n        name: \"Chicken Biryani\",\r\n        image: \"./images/chicken-biryani.jpg\",\r\n        ingredient: \"chicken, rice\",\r\n    },\r\n    {\r\n        name: \"Mutton Biryani\",\r\n        image: \"./images/mutton-biryani.jpg\",\r\n        ingredient: \"mutton, rice\",\r\n    },\r\n    {\r\n        name: \"Tandoori Chicken\",\r\n        image: \"./images/tandoori-chicken.jpg\",\r\n        ingredient: \"\",\r\n    },\r\n    {\r\n        name: \"Grill Chicken\",\r\n        image: \"./images/grilled-chicken.jpg\",\r\n        ingredient: \"\",\r\n    },\r\n    {\r\n        name: \"Chicken 65\",\r\n        image: \"./images/chicken-65.jpg\",\r\n        ingredient: \"\",\r\n    },\r\n    {\r\n        name: \"Pepper Chicken\",\r\n        image: \"./images/pepper-chicken.jpg\",\r\n        ingredient: \"\",\r\n    },\r\n];\r\n\r\nconst createMenuItem = (name, image, ingredient) => {\r\n    const menuItem = document.createElement(\"div\");\r\n    menuItem.classList.add(\"menu-item-div\")\r\n    const itemHeading = document.createElement(\"h3\");\r\n    const itemImage = document.createElement(\"img\");\r\n    const itemIngredient = document.createElement(\"p\");\r\n\r\n    itemHeading.innerText = name;\r\n    itemImage.src = image;\r\n    itemIngredient.innerText = ingredient;\r\n    \r\n    menuItem.appendChild(itemHeading);\r\n    menuItem.appendChild(itemImage);\r\n    menuItem.appendChild(itemIngredient);\r\n\r\n    return menuItem;\r\n}\r\n\r\nconst createMenu = () => {\r\n    const menuDiv = document.createElement(\"div\");\r\n    menuDiv.classList.add(\"menu-div\");\r\n    \r\n    menuItems.forEach((item) => {\r\n        menuDiv.appendChild(createMenuItem(item.name, item.image, item.ingredient));\r\n    })\r\n\r\n    return menuDiv;\r\n}\r\n\r\n\r\nconst loadMenu = () => {\r\n    const main = document.querySelector(\"main\");\r\n    main.innerText = \"\";\r\n\r\n    main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst createHeader = () => {\r\n    const header = document.createElement(\"header\");\r\n    \r\n    const heading = document.createElement(\"h1\");\r\n    heading.innerText = \"Bawarchi\";\r\n    heading.className = \"restaurant-name-heading\"\r\n    \r\n    content.appendChild(header);\r\n    header.appendChild(heading);\r\n\r\n    header.appendChild(createNavBar());\r\n\r\n    return header;\r\n}\r\n\r\nconst createNavBar = () => {\r\n    const nav = document.createElement(\"nav\");\r\n\r\n    const homeButton = document.createElement(\"button\");\r\n    homeButton.textContent = \"Home\";\r\n    homeButton.classList.add(\"nav-btn\");\r\n    // homeButton.classList.add(\"active\");\r\n    homeButton.addEventListener(\"click\", () => {\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        setActiveButton(homeButton);\r\n    })\r\n\r\n    const menuButton = document.createElement(\"button\");\r\n    menuButton.textContent = \"Menu\";\r\n    menuButton.classList.add(\"nav-btn\");\r\n    menuButton.addEventListener(\"click\", () => {\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        setActiveButton(menuButton);\r\n    })\r\n\r\n    const contactButton = document.createElement(\"button\");\r\n    contactButton.textContent = \"Contact\";\r\n    contactButton.classList.add(\"nav-btn\");\r\n    contactButton.addEventListener(\"click\", () => {\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        setActiveButton(contactButton);\r\n    })\r\n\r\n    nav.appendChild(homeButton);\r\n    nav.appendChild(menuButton);\r\n    nav.appendChild(contactButton);\r\n\r\n    return nav;\r\n}\r\n\r\nconst createMain = () => {\r\n    const main = document.createElement(\"main\");\r\n    return main;\r\n}\r\n\r\nconst createFooter = () => {\r\n    const footer = document.createElement(\"footer\");\r\n    const githubIcon = document.createElement(\"i\");\r\n    const githubLink = document.createElement(\"a\");\r\n\r\n    githubIcon.classList.add(\"fa-brands\");\r\n    githubIcon.classList.add(\"fa-github\")\r\n\r\n    footer.innerText = \"Copyright © 2022 rohannaido \";\r\n    githubLink.href = \"https://github.com/rohannaido\";\r\n    githubLink.target = \"_blank\"\r\n    githubLink.appendChild(githubIcon);\r\n    footer.appendChild(githubLink);\r\n    \r\n    return footer;\r\n}\r\n\r\nconst setActiveButton = (button) => {\r\n    const navButtons = document.querySelectorAll(\".nav-btn\");\r\n    \r\n    navButtons.forEach((btn) => {\r\n        if(btn.classList.contains(\"active\")){\r\n            btn.classList.remove(\"active\");\r\n        }\r\n    })\r\n\r\n    button.classList.add(\"active\");\r\n}\r\n\r\nconst initializeWebpage = () => {\r\n    const content = document.querySelector(\"div#content\");\r\n    \r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n    content.appendChild(createFooter());\r\n\r\n    setActiveButton(document.querySelector(\".nav-btn\"));\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebpage);\n\n//# sourceURL=webpack://restaurant-page/./src/webpage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;