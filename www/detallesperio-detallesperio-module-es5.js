(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detallesperio-detallesperio-module"], {
    /***/
    "/JM9":
    /*!********************************************************************!*\
      !*** ./src/app/perioperatorio/detallesperio/detallesperio.page.ts ***!
      \********************************************************************/

    /*! exports provided: DetallesperioPage */

    /***/
    function JM9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetallesperioPage", function () {
        return DetallesperioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detallesperio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detallesperio.page.html */
      "WQJB");
      /* harmony import */


      var _detallesperio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detallesperio.page.scss */
      "4I4z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DetallesperioPage = /*#__PURE__*/function () {
        function DetallesperioPage() {
          _classCallCheck(this, DetallesperioPage);
        }

        _createClass(DetallesperioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DetallesperioPage;
      }();

      DetallesperioPage.ctorParameters = function () {
        return [];
      };

      DetallesperioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detallesperio',
        template: _raw_loader_detallesperio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detallesperio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetallesperioPage);
      /***/
    },

    /***/
    "4I4z":
    /*!**********************************************************************!*\
      !*** ./src/app/perioperatorio/detallesperio/detallesperio.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function I4z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlc3BlcmlvLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "KASU":
    /*!**********************************************************************!*\
      !*** ./src/app/perioperatorio/detallesperio/detallesperio.module.ts ***!
      \**********************************************************************/

    /*! exports provided: DetallesperioPageModule */

    /***/
    function KASU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetallesperioPageModule", function () {
        return DetallesperioPageModule;
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


      var _detallesperio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detallesperio-routing.module */
      "eENm");
      /* harmony import */


      var _detallesperio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detallesperio.page */
      "/JM9");

      var DetallesperioPageModule = function DetallesperioPageModule() {
        _classCallCheck(this, DetallesperioPageModule);
      };

      DetallesperioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detallesperio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesperioPageRoutingModule"]],
        declarations: [_detallesperio_page__WEBPACK_IMPORTED_MODULE_6__["DetallesperioPage"]]
      })], DetallesperioPageModule);
      /***/
    },

    /***/
    "WQJB":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perioperatorio/detallesperio/detallesperio.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WQJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>detallesperio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "eENm":
    /*!******************************************************************************!*\
      !*** ./src/app/perioperatorio/detallesperio/detallesperio-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: DetallesperioPageRoutingModule */

    /***/
    function eENm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetallesperioPageRoutingModule", function () {
        return DetallesperioPageRoutingModule;
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


      var _detallesperio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detallesperio.page */
      "/JM9");

      var routes = [{
        path: '',
        component: _detallesperio_page__WEBPACK_IMPORTED_MODULE_3__["DetallesperioPage"]
      }];

      var DetallesperioPageRoutingModule = function DetallesperioPageRoutingModule() {
        _classCallCheck(this, DetallesperioPageRoutingModule);
      };

      DetallesperioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetallesperioPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=detallesperio-detallesperio-module-es5.js.map