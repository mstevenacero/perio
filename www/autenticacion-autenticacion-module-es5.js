(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autenticacion-autenticacion-module"], {
    /***/
    "0xV4":
    /*!*******************************************************!*\
      !*** ./src/app/autenticacion/autenticacion.module.ts ***!
      \*******************************************************/

    /*! exports provided: AutenticacionPageModule */

    /***/
    function xV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutenticacionPageModule", function () {
        return AutenticacionPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _autenticacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./autenticacion-routing.module */
      "m5Hw");
      /* harmony import */


      var _autenticacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./autenticacion.page */
      "oyHu");

      var AutenticacionPageModule = function AutenticacionPageModule() {
        _classCallCheck(this, AutenticacionPageModule);
      };

      AutenticacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _autenticacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["AutenticacionPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_autenticacion_page__WEBPACK_IMPORTED_MODULE_6__["AutenticacionPage"]]
      })], AutenticacionPageModule);
      /***/
    },

    /***/
    "LdqH":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autenticacion/autenticacion.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function LdqH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar>\n    <ion-title>Iniciar Sesión</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"inicio\">\n  <form [formGroup]=\"loginForm\" id=\"form\">\n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'>\n      <ion-item lines='none' class='ipt'>\n        <ion-input formControlName=\"email\" placeholder='Username'></ion-input>\n        <ion-icon name='person' slot='start'></ion-icon>\n      </ion-item>\n    </ion-row>\n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'>\n      <ion-item lines='none' class='ipt'>\n        <ion-input formControlName=\"password\" type='password' placeholder='* * * * * * * * * *'></ion-input>\n        <ion-icon name='lock-closed' slot='start'></ion-icon>\n      </ion-item>\n    </ion-row>\n    <!-- button login -->\n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'>\n      <ion-button (click)='login()' class='ion-text-uppercase' shape='round' expand='block'>login</ion-button>\n    </ion-row>\n    <!-- button login -->\n    <!-- button register -->\n    <ion-row class='input-container ion-justify-content-center ion-align-items-center'>\n      <ion-button routerLink='/register' class='register ion-text-uppercase' shape='round' expand='block'>Create account\n      </ion-button>\n    </ion-row>\n    <!-- button register -->\n  </form>\n  \n\n\n  <img id=\"udec\"src=\"../../assets/imagenes/logoUnall.png\" alt=\"\">\n\n  \n\n\n \n\n\n   \n    \n\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "X2Ul":
    /*!*******************************************************!*\
      !*** ./src/app/autenticacion/autenticacion.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function X2Ul(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inicio {\n  --background:linear-gradient(white,white,white,#8DF851);\n}\n\n.box {\n  margin-top: 100px;\n  width: 100%;\n  margin: solid 2px;\n}\n\n.box2 {\n  width: 70%;\n  margin-left: 15%;\n  margin: solid 2px;\n}\n\n#udec {\n  margin-top: 30%;\n}\n\n#una {\n  margin-left: 50%;\n  width: 40%;\n  margin-bottom: 10%;\n  display: block;\n  float: left;\n}\n\nion-content {\n  --ion-background-color: #ffffff;\n}\n\n.logo-container {\n  width: 100%;\n  height: 28%;\n}\n\n.logo-container img {\n  width: 50%;\n}\n\n.input-container {\n  margin: 35px 0;\n}\n\n.input-container .ipt {\n  width: 85%;\n  border-radius: 30px;\n  --background: #e6e6e6;\n  --color: #51D962;\n}\n\n.input-container ion-icon {\n  color: #51D962;\n}\n\nion-button {\n  --background: #51D962;\n  width: 85%;\n  height: 45px;\n}\n\n.register {\n  font-family: \"productSansT\" !important;\n}\n\n@media only screen and (min-width: 1025px) {\n  .logo-container img {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGF1dGVudGljYWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksdURBQUE7QUFESjs7QUFNQTtFQUVJLGlCQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0FBTEo7O0FBUUE7RUFFSyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5MOztBQVVBO0VBRUcsZUFBQTtBQVJIOztBQWFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQVhBOztBQWlCQTtFQUNJLCtCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFkSjs7QUFnQkk7RUFDSSxVQUFBO0FBZFI7O0FBa0JBO0VBRUksY0FBQTtBQWhCSjs7QUFrQkk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBaEJSOztBQW1CSTtFQUNJLGNBQUE7QUFqQlI7O0FBcUJBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWxCSjs7QUFxQkE7RUFDSSxzQ0FBQTtBQWxCSjs7QUFxQkE7RUFFUTtJQUNJLFVBQUE7RUFuQlY7QUFDRiIsImZpbGUiOiJhdXRlbnRpY2FjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmljaW97XHJcblxyXG5cclxuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQod2hpdGUsd2hpdGUsd2hpdGUsIzhERjg1MSk7XHJcblxyXG5cclxufVxyXG5cclxuLmJveHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBtYXJnaW46c29saWQgMnB4O1xyXG4gICAgXHJcbn1cclxuLmJveDJ7XHJcblxyXG4gICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgICBtYXJnaW46c29saWQgMnB4O1xyXG5cclxuXHJcbn1cclxuI3VkZWN7XHJcblxyXG4gICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgIFxyXG5cclxuICAgIFxyXG59XHJcbiN1bmF7XHJcblxyXG5tYXJnaW4tbGVmdDogNTAlO1xyXG53aWR0aDogNDAlO1xyXG5tYXJnaW4tYm90dG9tOiAxMCU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5mbG9hdDogbGVmdDtcclxuXHJcblxyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyOCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIC8vICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWFyZ2luOiAzNXB4IDA7XHJcblxyXG4gICAgLmlwdCB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICAgICAgICAtLWNvbG9yOiAjNTFEOTYyO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzUxRDk2MjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1MUQ5NjI7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdwcm9kdWN0U2Fuc1QnICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAubG9nby1jb250YWluZXIge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "l38k":
    /*!******************************************!*\
      !*** ./src/app/servicios/img.service.ts ***!
      \******************************************/

    /*! exports provided: ImgService */

    /***/
    function l38k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgService", function () {
        return ImgService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ImgService = /*#__PURE__*/function () {
        function ImgService() {
          _classCallCheck(this, ImgService);

          this.imagenes = [{
            imagen1: "../../assets/imagenes/logoUnall",
            imagen2: "http://www.posgrados.unal.edu.co/tesis3minutos/images/logoUnall.png"
          }];
        }

        _createClass(ImgService, [{
          key: "getImagen",
          value: function getImagen() {
            return _toConsumableArray(this.imagenes);
          }
        }]);

        return ImgService;
      }();

      ImgService.ctorParameters = function () {
        return [];
      };

      ImgService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ImgService);
      /***/
    },

    /***/
    "m5Hw":
    /*!***************************************************************!*\
      !*** ./src/app/autenticacion/autenticacion-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AutenticacionPageRoutingModule */

    /***/
    function m5Hw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutenticacionPageRoutingModule", function () {
        return AutenticacionPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _autenticacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./autenticacion.page */
      "oyHu");

      var routes = [{
        path: '',
        component: _autenticacion_page__WEBPACK_IMPORTED_MODULE_3__["AutenticacionPage"]
      }];

      var AutenticacionPageRoutingModule = function AutenticacionPageRoutingModule() {
        _classCallCheck(this, AutenticacionPageRoutingModule);
      };

      AutenticacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AutenticacionPageRoutingModule);
      /***/
    },

    /***/
    "oyHu":
    /*!*****************************************************!*\
      !*** ./src/app/autenticacion/autenticacion.page.ts ***!
      \*****************************************************/

    /*! exports provided: AutenticacionPage */

    /***/
    function oyHu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutenticacionPage", function () {
        return AutenticacionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_autenticacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./autenticacion.page.html */
      "LdqH");
      /* harmony import */


      var _autenticacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./autenticacion.page.scss */
      "X2Ul");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicios_img_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../servicios/img.service */
      "l38k");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AutenticacionPage = /*#__PURE__*/function () {
        function AutenticacionPage(imagenes, router, db, auth, fb) {
          _classCallCheck(this, AutenticacionPage);

          this.imagenes = imagenes;
          this.router = router;
          this.db = db;
          this.auth = auth;
          this.fb = fb;
          this.img = imagenes.getImagen();
        }

        _createClass(AutenticacionPage, [{
          key: "goUsuario",
          value: function goUsuario() {
            this.router.navigate(['/perfil']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.fb.group({
              email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
            });
            this.itemRef = this.db.object('test');
            this.itemRef.snapshotChanges().subscribe(function (action) {
              console.log(action.type);
              console.log(action.key);
              console.log(action.payload.val());
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            this.auth.signInWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).then(function (userData) {
              console.log(userData);

              _this.router.navigateByUrl('perfil');
            });
            console.log(this.loginForm.value);
          }
        }]);

        return AutenticacionPage;
      }();

      AutenticacionPage.ctorParameters = function () {
        return [{
          type: _servicios_img_service__WEBPACK_IMPORTED_MODULE_4__["ImgService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      AutenticacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-autenticacion',
        template: _raw_loader_autenticacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_autenticacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AutenticacionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=autenticacion-autenticacion-module-es5.js.map