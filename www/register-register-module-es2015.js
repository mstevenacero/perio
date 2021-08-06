(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>registrar</ion-title>\n    <ion-button style=\"width: 20%;\"color=\"success\"slot=\"start\">\n \n       <ion-back-button defauldHref=\"/home\">\n        \n \n       </ion-back-button>\n     </ion-button> \n \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-row class='logo-container ion-justify-content-center ion-align-items-center'> <img style=\"width: 50%;\"\n    src='../../assets/imagenes/resgitro.png' alt='' /> </ion-row> <!-- logo -->\n  <form [formGroup]='registerForm'>\n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'> <span\n        class='label-input ion-text-end'>Nombre</span>\n      <ion-item class='ipt'>\n        <ion-input formControlName='name' placeholder='Nombre con apellidos'></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'> <span\n        class='label-input label-2 ion-text-end'>Email</span>\n      <ion-item class='ipt'>\n        <ion-input formControlName='email' placeholder='Correo electrónico'></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'> <span\n        class='label-input label-3 ion-text-end'>Contraseña</span>\n      <ion-item class='ipt'>\n        <ion-input type='password' formControlName='password' placeholder='* * * * *'></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'> <span\n        class='label-input label-4 ion-text-end'>Confirmar Contraseña</span>\n      <ion-item class='ipt'>\n        <ion-input type='password' formControlName='confirm' placeholder=' * * * * *'></ion-input>\n      </ion-item>\n    </ion-row>\n    \n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'>\n      <!-- Boton de registro -->\n      <ion-button (click)='register()' class='register ion-text-uppercase' shape='round' expand='block'>Create account\n      </ion-button> <!-- Boton de registro -->\n    </ion-row>\n  </form> <!-- form register -->\n</ion-content>\n");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let RegisterPage = class RegisterPage {
    constructor(auth, fb, alertController, db) {
        this.auth = auth;
        this.fb = fb;
        this.alertController = alertController;
        this.db = db;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            confirm: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    register() {
        let user = {
            email: this.registerForm.controls['email'].value,
            password: this.registerForm.controls['password'].value
        };
        if (user.password == this.registerForm.controls['confirm'].value) {
            this.auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(userData => {
                this.registerAlert('Success', "El usuario a sido creado correctamente");
                this.db.database.ref('user/' + userData.user.uid).set(this.registerForm.value);
                console.log(userData);
            }).catch(e => {
                this.registerAlert('Error', e.message);
                console.log(e);
            });
        }
    }
    registerAlert(status, sms) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: status,
                subHeader: sms,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:linear-gradient(white,white,white,#8DF851);\n}\n\n.logo-container {\n  width: 100%;\n  height: 28%;\n}\n\nion-item {\n  --background: #fff;\n  --color:#090a09;\n  --border-color: #51D962;\n  width: 85%;\n}\n\n.input-container {\n  height: 100px;\n  position: relative;\n}\n\n.check-container {\n  flex-direction: row;\n  height: 100px;\n  position: relative;\n  --background-checked:#51D962;\n  margin: 0 15px 0 30px;\n}\n\nion-label {\n  color: #090a09;\n  font-size: 13px;\n  width: 65%;\n}\n\n.label-2 {\n  width: 135px;\n  padding-right: 50px;\n}\n\n.label-3 {\n  width: 160px;\n  padding-right: 48px;\n}\n\n.label-4 {\n  width: 185px;\n  padding-right: 25px;\n}\n\nion-button {\n  --background: #51D962;\n  width: 85%;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVEQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHdoaXRlLHdoaXRlLHdoaXRlLCM4REY4NTEpO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI4JVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWNvbG9yOiMwOTBhMDk7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzUxRDk2MjtcclxuICAgIHdpZHRoOiA4NSVcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5jaGVjay1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDojNTFEOTYyO1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMCAzMHB4XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjojMDkwYTA5O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgd2lkdGg6IDY1JVxyXG59XHJcblxyXG4ubGFiZWwtMiB7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4XHJcbn1cclxuXHJcbi5sYWJlbC0zIHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ4cHhcclxufVxyXG5cclxuLmxhYmVsLTQge1xyXG4gICAgd2lkdGg6IDE4NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweFxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzUxRDk2MjtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQ1cHhcclxufSJdfQ== */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map