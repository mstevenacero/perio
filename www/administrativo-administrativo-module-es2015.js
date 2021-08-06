(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administrativo-administrativo-module"],{

/***/ "FSTV":
/*!*****************************************************************!*\
  !*** ./src/app/administrativo/administrativo-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdministrativoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrativoPageRoutingModule", function() { return AdministrativoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _administrativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrativo.page */ "d4YA");




const routes = [
    {
        path: '',
        component: _administrativo_page__WEBPACK_IMPORTED_MODULE_3__["AdministrativoPage"]
    },
    {
        path: 'agenda',
        loadChildren: () => __webpack_require__.e(/*! import() | agenda-agenda-module */ "agenda-agenda-module").then(__webpack_require__.bind(null, /*! ./agenda/agenda.module */ "1X9+")).then(m => m.AgendaPageModule)
    }
];
let AdministrativoPageRoutingModule = class AdministrativoPageRoutingModule {
};
AdministrativoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdministrativoPageRoutingModule);



/***/ }),

/***/ "PkwY":
/*!*********************************************************!*\
  !*** ./src/app/administrativo/administrativo.module.ts ***!
  \*********************************************************/
/*! exports provided: AdministrativoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrativoPageModule", function() { return AdministrativoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _administrativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrativo-routing.module */ "FSTV");
/* harmony import */ var _administrativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administrativo.page */ "d4YA");







let AdministrativoPageModule = class AdministrativoPageModule {
};
AdministrativoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _administrativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrativoPageRoutingModule"]
        ],
        declarations: [_administrativo_page__WEBPACK_IMPORTED_MODULE_6__["AdministrativoPage"]]
    })
], AdministrativoPageModule);



/***/ }),

/***/ "XpKX":
/*!*********************************************************!*\
  !*** ./src/app/administrativo/administrativo.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content {\n  --background:linear-gradient(white,white,white,#8DF851);\n}\n\n#img1 {\n  width: 70%;\n  margin-left: 15%;\n  margin-top: 10%;\n}\n\n.boton1 {\n  margin-top: 5%;\n  width: 90%;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluaXN0cmF0aXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLHVEQUFBO0FBRko7O0FBU0E7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEo7O0FBU0E7RUFHSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFSSiIsImZpbGUiOiJhZG1pbmlzdHJhdGl2by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudHtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh3aGl0ZSx3aGl0ZSx3aGl0ZSwjOERGODUxKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiNpbWcxe1xyXG5cclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5ib3RvbjF7XHJcblxyXG5cclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufSJdfQ== */");

/***/ }),

/***/ "ak5A":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administrativo/administrativo.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>Proceso Administrativo</ion-title>\n    <ion-button color=\"secundary\"slot=\"start\">\n\n      <ion-back-button defauldHref=\"/home\">\n       \n\n      </ion-back-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\">\n\n\n  <img  id=\"img1\"src=\"../../assets/imagenes/calendario.png\" alt=\"\">\n\n  \n  <section>\n   \n   \n    <ion-button class=\"boton1\"color=\"success\" expand=\"block\"  (click)=\"goAgenda()\">Citas</ion-button>\n  </section>\n  <section>\n   \n   \n    <ion-button class=\"boton1\"color=\"success\" expand=\"block\">Medicamentos</ion-button>\n  </section>\n  <section>\n   \n   \n    <ion-button class=\"boton1\"color=\"success\" expand=\"block\">Autorizaciones</ion-button>\n  </section>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "d4YA":
/*!*******************************************************!*\
  !*** ./src/app/administrativo/administrativo.page.ts ***!
  \*******************************************************/
/*! exports provided: AdministrativoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrativoPage", function() { return AdministrativoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_administrativo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./administrativo.page.html */ "ak5A");
/* harmony import */ var _administrativo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administrativo.page.scss */ "XpKX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AdministrativoPage = class AdministrativoPage {
    constructor(router) {
        this.router = router;
    }
    goAgenda() {
        this.router.navigate(['administrativo/agenda']);
    }
    ngOnInit() {
    }
};
AdministrativoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AdministrativoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-administrativo',
        template: _raw_loader_administrativo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_administrativo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdministrativoPage);



/***/ })

}]);
//# sourceMappingURL=administrativo-administrativo-module-es2015.js.map