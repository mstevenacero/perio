(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-perfil-module"], {
    /***/
    "7ClG":
    /*!************************************************!*\
      !*** ./src/app/perfil/perfil/perfil.module.ts ***!
      \************************************************/

    /*! exports provided: PerfilPageModule */

    /***/
    function ClG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
        return PerfilPageModule;
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


      var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perfil-routing.module */
      "DTRW");
      /* harmony import */


      var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perfil.page */
      "oTx5");

      var PerfilPageModule = function PerfilPageModule() {
        _classCallCheck(this, PerfilPageModule);
      };

      PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
      })], PerfilPageModule);
      /***/
    },

    /***/
    "DTRW":
    /*!********************************************************!*\
      !*** ./src/app/perfil/perfil/perfil-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: PerfilPageRoutingModule */

    /***/
    function DTRW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
        return PerfilPageRoutingModule;
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


      var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfil.page */
      "oTx5");

      var routes = [{
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
      }];

      var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
        _classCallCheck(this, PerfilPageRoutingModule);
      };

      PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerfilPageRoutingModule);
      /***/
    },

    /***/
    "Ha/B":
    /*!************************************************!*\
      !*** ./src/app/perfil/perfil/perfil.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function HaB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#avatar {\n  width: 50%;\n  height: 30%;\n  margin-left: 22%;\n}\n\n#chip {\n  margin-left: 30%;\n  margin-top: 7%;\n}\n\n#item {\n  margin-top: 15%;\n}\n\n#cc {\n  margin-left: 30%;\n  color: black;\n}\n\n#content {\n  --background:linear-gradient(white,white,white,#72C1F5);\n}\n\n#nom {\n  color: black;\n  font-weight: 700;\n  margin-left: 10%;\n}\n\n#nom2 {\n  color: black;\n  font-weight: 700;\n  margin-left: 10%;\n}\n\n.ion-header {\n  margin-bottom: 30%;\n}\n\n.my-custom-menu {\n  --width: 500px;\n}\n\n.boton {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\n#cerrar {\n  margin-right: 5%;\n}\n\n#cerrar:hover {\n  background-color: #308CC1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDQSxlQUFBO0FBQUE7O0FBS0E7RUFFSSxnQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFLQTtFQUlJLHVEQUFBO0FBTEo7O0FBWUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVlBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUVJLGtCQUFBO0FBVko7O0FBWUE7RUFDSSxjQUFBO0FBVEo7O0FBV0E7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFSQTs7QUFhRTtFQUVFLGdCQUFBO0FBWEo7O0FBZUU7RUFDRSx5QkFBQTtBQVpKIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXZhdGFye1xyXG5cclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMiU7XHJcbn1cclxuI2NoaXB7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbn1cclxuXHJcbiNpdGVte1xyXG5tYXJnaW4tdG9wOiAxNSU7XHJcblxyXG5cclxuXHJcbn1cclxuI2Nje1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuI2NvbnRlbnR7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQod2hpdGUsd2hpdGUsd2hpdGUsIzcyQzFGNSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4jbm9te1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcblxyXG59XHJcbiNub20ye1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcblxyXG59XHJcbi5pb24taGVhZGVye1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxufVxyXG4ubXktY3VzdG9tLW1lbnUge1xyXG4gICAgLS13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG4uYm90b257XHJcbndpZHRoOiA5MCU7XHJcbm1hcmdpbi1sZWZ0OiA1JTtcclxubWFyZ2luLXRvcDogNSU7XHJcblxyXG5cclxuXHJcbiAgfVxyXG4gICNjZXJyYXJ7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBcclxuICAgIFxyXG4gIH1cclxuICAjY2VycmFyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzMwOENDMTtcclxuICAgICBcclxuICB9XHJcbiAiXX0= */";
      /***/
    },

    /***/
    "ZI7s":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil/perfil.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZI7s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>Perfil</ion-title>\n    <ion-icon  id=\"cerrar\"(click)=\"goAu()\" slot=\"end\" name=\"power\"></ion-icon>\n \n\n   \n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\">\n  <h3  id=\"nom\">LUIS ANGEL VASQUEZ ORTIZ </h3>\n  <ion-avatar id=\"avatar\">\n    <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU\">\n  </ion-avatar>\n  \n  <ion-chip id=\"chip\">\n    <ion-avatar>\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n    </ion-avatar>\n    <ion-label id =\"nom2\">Beneficiario</ion-label>\n    \n  </ion-chip>\n  <h3 id=\"cc\"> C.C:1035897</h3>\n\n  <ion-card-content>\n\n    <section>\n   \n   \n      <ion-button (click)=\" goAdmi()\" class=\"boton\"color=\"success\" expand=\"block\">Proceso administrativo</ion-button>\n    </section>\n    <section>\n      \n      <ion-button (click)=\"GOper()\" class=\"boton\" color=\"secondary\" expand=\"block\">Proceso perioperatorio</ion-button>\n    </section>\n    <section>\n    \n      <ion-button (click)=\"goReport()\"  class=\"boton\" color=\"primary\" expand=\"block\">Reporte de sintomas</ion-button>\n    </section>\n  \n  </ion-card-content>\n  \n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "oTx5":
    /*!**********************************************!*\
      !*** ./src/app/perfil/perfil/perfil.page.ts ***!
      \**********************************************/

    /*! exports provided: PerfilPage */

    /***/
    function oTx5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
        return PerfilPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./perfil.page.html */
      "ZI7s");
      /* harmony import */


      var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./perfil.page.scss */
      "Ha/B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PerfilPage = /*#__PURE__*/function () {
        function PerfilPage(menu, router) {
          _classCallCheck(this, PerfilPage);

          this.menu = menu;
          this.router = router;
        }

        _createClass(PerfilPage, [{
          key: "GOper",
          value: function GOper() {
            this.router.navigate(['/perioperatorio']);
          }
        }, {
          key: "goAdmi",
          value: function goAdmi() {
            this.router.navigate(['/administrativo']);
          }
        }, {
          key: "goReport",
          value: function goReport() {
            this.router.navigate(['/reporte']);
          }
        }, {
          key: "goAu",
          value: function goAu() {
            this.router.navigate(['/autenticacion']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PerfilPage;
      }();

      PerfilPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PerfilPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=perfil-perfil-perfil-module-es5.js.map