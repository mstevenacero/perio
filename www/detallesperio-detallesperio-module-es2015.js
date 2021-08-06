(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detallesperio-detallesperio-module"],{

/***/ "/JM9":
/*!********************************************************************!*\
  !*** ./src/app/perioperatorio/detallesperio/detallesperio.page.ts ***!
  \********************************************************************/
/*! exports provided: DetallesperioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesperioPage", function() { return DetallesperioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detallesperio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detallesperio.page.html */ "WQJB");
/* harmony import */ var _detallesperio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detallesperio.page.scss */ "4I4z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetallesperioPage = class DetallesperioPage {
    constructor() { }
    ngOnInit() {
    }
};
DetallesperioPage.ctorParameters = () => [];
DetallesperioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detallesperio',
        template: _raw_loader_detallesperio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detallesperio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesperioPage);



/***/ }),

/***/ "4I4z":
/*!**********************************************************************!*\
  !*** ./src/app/perioperatorio/detallesperio/detallesperio.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlc3BlcmlvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "KASU":
/*!**********************************************************************!*\
  !*** ./src/app/perioperatorio/detallesperio/detallesperio.module.ts ***!
  \**********************************************************************/
/*! exports provided: DetallesperioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesperioPageModule", function() { return DetallesperioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detallesperio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detallesperio-routing.module */ "eENm");
/* harmony import */ var _detallesperio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detallesperio.page */ "/JM9");







let DetallesperioPageModule = class DetallesperioPageModule {
};
DetallesperioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detallesperio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesperioPageRoutingModule"]
        ],
        declarations: [_detallesperio_page__WEBPACK_IMPORTED_MODULE_6__["DetallesperioPage"]]
    })
], DetallesperioPageModule);



/***/ }),

/***/ "WQJB":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perioperatorio/detallesperio/detallesperio.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>detallesperio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "eENm":
/*!******************************************************************************!*\
  !*** ./src/app/perioperatorio/detallesperio/detallesperio-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: DetallesperioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesperioPageRoutingModule", function() { return DetallesperioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detallesperio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detallesperio.page */ "/JM9");




const routes = [
    {
        path: '',
        component: _detallesperio_page__WEBPACK_IMPORTED_MODULE_3__["DetallesperioPage"]
    }
];
let DetallesperioPageRoutingModule = class DetallesperioPageRoutingModule {
};
DetallesperioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesperioPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=detallesperio-detallesperio-module-es2015.js.map