(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-sintoma-nuevo-sintoma-module"], {
    /***/
    "1P6A":
    /*!***************************************************************!*\
      !*** ./src/app/nuevo-sintoma/nuevo-sintoma-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NuevoSintomaPageRoutingModule */

    /***/
    function P6A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoSintomaPageRoutingModule", function () {
        return NuevoSintomaPageRoutingModule;
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


      var _nuevo_sintoma_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nuevo-sintoma.page */
      "jnKS");

      var routes = [{
        path: '',
        component: _nuevo_sintoma_page__WEBPACK_IMPORTED_MODULE_3__["NuevoSintomaPage"]
      }];

      var NuevoSintomaPageRoutingModule = function NuevoSintomaPageRoutingModule() {
        _classCallCheck(this, NuevoSintomaPageRoutingModule);
      };

      NuevoSintomaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NuevoSintomaPageRoutingModule);
      /***/
    },

    /***/
    "7n7Z":
    /*!*******************************************************!*\
      !*** ./src/app/nuevo-sintoma/nuevo-sintoma.module.ts ***!
      \*******************************************************/

    /*! exports provided: NuevoSintomaPageModule */

    /***/
    function n7Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoSintomaPageModule", function () {
        return NuevoSintomaPageModule;
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


      var _nuevo_sintoma_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nuevo-sintoma-routing.module */
      "1P6A");
      /* harmony import */


      var _nuevo_sintoma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nuevo-sintoma.page */
      "jnKS");

      var NuevoSintomaPageModule = function NuevoSintomaPageModule() {
        _classCallCheck(this, NuevoSintomaPageModule);
      };

      NuevoSintomaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nuevo_sintoma_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevoSintomaPageRoutingModule"]],
        declarations: [_nuevo_sintoma_page__WEBPACK_IMPORTED_MODULE_6__["NuevoSintomaPage"]]
      })], NuevoSintomaPageModule);
      /***/
    },

    /***/
    "gAp8":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-sintoma/nuevo-sintoma.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function gAp8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>nuevoSintoma</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "jnKS":
    /*!*****************************************************!*\
      !*** ./src/app/nuevo-sintoma/nuevo-sintoma.page.ts ***!
      \*****************************************************/

    /*! exports provided: NuevoSintomaPage */

    /***/
    function jnKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoSintomaPage", function () {
        return NuevoSintomaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nuevo_sintoma_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nuevo-sintoma.page.html */
      "gAp8");
      /* harmony import */


      var _nuevo_sintoma_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nuevo-sintoma.page.scss */
      "no8b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../servicios/crud.service */
      "e9dD");

      var NuevoSintomaPage = /*#__PURE__*/function () {
        function NuevoSintomaPage(db, user, active) {
          _classCallCheck(this, NuevoSintomaPage);

          this.db = db;
          this.user = user;
          this.active = active;
          this.name = '';
          this.number = '';
        }

        _createClass(NuevoSintomaPage, [{
          key: "save",
          value: function save() {
            var _this = this;

            this.db.database.ref('list/' + this.uid).push({
              name: this.name,
              number: this.number
            }).then(function () {
              _this.name = "";
              _this.number = "";
            })["catch"](function (e) {
              console.log(e);
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            this.db.database.ref('list/' + this.uid + '/' + this.contactId).set({
              name: this.name,
              number: this.number
            }).then(function () {
              _this2.name = "";
              _this2.number = "";
            })["catch"](function (e) {
              console.log(e);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NuevoSintomaPage;
      }();

      NuevoSintomaPage.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }, {
          type: _servicios_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      NuevoSintomaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuevo-sintoma',
        template: _raw_loader_nuevo_sintoma_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuevo_sintoma_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NuevoSintomaPage);
      /***/
    },

    /***/
    "no8b":
    /*!*******************************************************!*\
      !*** ./src/app/nuevo-sintoma/nuevo-sintoma.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function no8b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWV2by1zaW50b21hLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=nuevo-sintoma-nuevo-sintoma-module-es5.js.map