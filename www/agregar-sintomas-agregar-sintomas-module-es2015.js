(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-sintomas-agregar-sintomas-module"],{

/***/ "28eO":
/*!*************************************************************!*\
  !*** ./src/app/agregar-sintomas/agregar-sintomas.module.ts ***!
  \*************************************************************/
/*! exports provided: AgregarSintomasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarSintomasPageModule", function() { return AgregarSintomasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agregar_sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agregar-sintomas-routing.module */ "I23y");
/* harmony import */ var _agregar_sintomas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agregar-sintomas.page */ "kOLS");







let AgregarSintomasPageModule = class AgregarSintomasPageModule {
};
AgregarSintomasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agregar_sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarSintomasPageRoutingModule"]
        ],
        declarations: [_agregar_sintomas_page__WEBPACK_IMPORTED_MODULE_6__["AgregarSintomasPage"]]
    })
], AgregarSintomasPageModule);



/***/ }),

/***/ "3Y+t":
/*!*************************************************************!*\
  !*** ./src/app/agregar-sintomas/agregar-sintomas.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyLXNpbnRvbWFzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "I23y":
/*!*********************************************************************!*\
  !*** ./src/app/agregar-sintomas/agregar-sintomas-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AgregarSintomasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarSintomasPageRoutingModule", function() { return AgregarSintomasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agregar_sintomas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar-sintomas.page */ "kOLS");




const routes = [
    {
        path: '',
        component: _agregar_sintomas_page__WEBPACK_IMPORTED_MODULE_3__["AgregarSintomasPage"]
    }
];
let AgregarSintomasPageRoutingModule = class AgregarSintomasPageRoutingModule {
};
AgregarSintomasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgregarSintomasPageRoutingModule);



/***/ }),

/***/ "IETK":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agregar-sintomas/agregar-sintomas.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>Describa sus sintomas</ion-title>\n    <ion-button color=\"primary\"slot=\"start\">\n \n       <ion-back-button defauldHref=\"/home\">\n        \n \n       </ion-back-button>\n     </ion-button> \n \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"--background:linear-gradient(white,#F9D387);color: black;\">\n  \n  <ion-item>\n    <ion-label position=\"floating\">Sintomas</ion-label>\n    <ion-input [(ngModel)]=\"name\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">temperatura</ion-label>\n    <ion-input [(ngModel)]=\"number\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-button *ngIf=\"contactId==undefined\"  (click)=\"save()\"  color=\"danger\">Guardar</ion-button>\n    <ion-button *ngIf=\"contactId!=undefined\"  (click)=\"update()\"  color=\"danger\">Actualizar</ion-button>\n  </ion-item>\n\n  \n</ion-content>\n");

/***/ }),

/***/ "kOLS":
/*!***********************************************************!*\
  !*** ./src/app/agregar-sintomas/agregar-sintomas.page.ts ***!
  \***********************************************************/
/*! exports provided: AgregarSintomasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarSintomasPage", function() { return AgregarSintomasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agregar_sintomas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agregar-sintomas.page.html */ "IETK");
/* harmony import */ var _agregar_sintomas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregar-sintomas.page.scss */ "3Y+t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/crud.service */ "e9dD");







let AgregarSintomasPage = class AgregarSintomasPage {
    constructor(db, user, active) {
        this.db = db;
        this.user = user;
        this.active = active;
        this.name = '';
        this.number = '';
        this.uid = localStorage.getItem('uid');
        active.params.subscribe(key => {
            console.log(key);
            if (key.id != null) {
                this.contactId = key.id;
                db.database.ref('list/' + this.uid + "/" + key.id).once('value', (snap) => {
                    console.log(snap.val());
                    this.name = snap.val().name;
                    this.number = snap.val().number;
                });
            }
        });
    }
    save() {
        this.db.database.ref('list/' + this.uid).push({ name: this.name, number: this.number }).then(() => {
            this.name = "";
            this.number = "";
        })
            .catch(e => {
            console.log(e);
        });
    }
    update() {
        this.db.database.ref('list/' + this.uid + '/' + this.contactId).set({ name: this.name, number: this.number }).then(() => {
            this.name = "";
            this.number = "";
        })
            .catch(e => {
            console.log(e);
        });
    }
    ngOnInit() {
    }
};
AgregarSintomasPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _servicios_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AgregarSintomasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agregar-sintomas',
        template: _raw_loader_agregar_sintomas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agregar_sintomas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgregarSintomasPage);



/***/ })

}]);
//# sourceMappingURL=agregar-sintomas-agregar-sintomas-module-es2015.js.map