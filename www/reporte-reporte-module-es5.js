(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-reporte-module"], {
    /***/
    "+C6O":
    /*!***************************************************!*\
      !*** ./src/app/reporte/reporte-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ReportePageRoutingModule */

    /***/
    function C6O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportePageRoutingModule", function () {
        return ReportePageRoutingModule;
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


      var _reporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reporte.page */
      "VRHm");

      var routes = [{
        path: '',
        component: _reporte_page__WEBPACK_IMPORTED_MODULE_3__["ReportePage"]
      }];

      var ReportePageRoutingModule = function ReportePageRoutingModule() {
        _classCallCheck(this, ReportePageRoutingModule);
      };

      ReportePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportePageRoutingModule);
      /***/
    },

    /***/
    "2xeV":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reporte/reporte.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function xeV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" color=\"primary\">\n  <ion-toolbar color=\"primary\">\n  \n    <ion-title>Reporte de sintomas</ion-title>\n    <ion-button color=\"primary\"slot=\"start\">\n \n       <ion-back-button defauldHref=\"/home\">\n        \n \n       </ion-back-button>\n     </ion-button> \n \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"content\">\n  <ion-item  style=\"    --background:linear-gradient(white,white);color: black;\">\n    <img id=\"imgsin\"src=\"../../assets/imagenes/sinto.png\" alt=\"\">\n   \n   \n  </ion-item>\n \n  \n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    <ion-list line=\"none\">\n      <ion-item-sliding *ngFor=\"let contact of contacts\">\n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"warning\" [routerLink]=\"['/agregar-sintomas', contact.key]\" ><ion-icon  style=\"font-size:30px\"  name=\"create-outline\"></ion-icon></ion-item-option>\n          \n        </ion-item-options>\n    \n        <ion-item  class=\"cajas\" >\n          <ion-row style=\"width: 100%;\">\n            <ion-col size=\"2\">\n              <ion-avatar>\n                <ion-img src=\"https://www.cdc.gov/flu/images/symptoms/signs-symptoms.png\"></ion-img>\n              </ion-avatar>\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-label style=\"margin-left: 16px;\" class=\"ion-text-wrap\">\n            \n                <ion-text color=\"danger\">\n                  <h3>{{contact.name}}</h3>\n                </ion-text>\n                <p>{{contact.number}}</p>\n               \n              </ion-label>\n            </ion-col>\n            \n          </ion-row>\n          \n          \n        </ion-item>\n    \n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"deleteConfirm(contact.key)\"><ion-icon style=\"font-size:30px\" name=\"trash-outline\"></ion-icon></ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n      \n      \n    </ion-list>\n    <ion-fab  vertical=\"bottom\" slot=\"fixed\" horizontal=\"end\">\n\n      <ion-fab-button color=\"danger\" (click)=\"addSintoma()\" >\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "3Lu+":
    /*!*******************************************!*\
      !*** ./src/app/reporte/reporte.module.ts ***!
      \*******************************************/

    /*! exports provided: ReportePageModule */

    /***/
    function Lu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportePageModule", function () {
        return ReportePageModule;
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


      var _reporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reporte-routing.module */
      "+C6O");
      /* harmony import */


      var _reporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reporte.page */
      "VRHm");

      var ReportePageModule = function ReportePageModule() {
        _classCallCheck(this, ReportePageModule);
      };

      ReportePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportePageRoutingModule"]],
        declarations: [_reporte_page__WEBPACK_IMPORTED_MODULE_6__["ReportePage"]]
      })], ReportePageModule);
      /***/
    },

    /***/
    "IsDH":
    /*!*******************************************!*\
      !*** ./src/app/reporte/reporte.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function IsDH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#content {\n  --background:linear-gradient(white,white,#F9D387);\n}\n\n#imgsin {\n  width: 65%;\n  margin-left: 17%;\n  margin-top: 5%;\n}\n\n#imgsin2 {\n  width: 70%;\n  margin-left: 16%;\n  margin-top: 3%;\n}\n\n.cajas {\n  color: black;\n  --background:linear-gradient(white,#F9D387);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlcG9ydGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksaURBQUE7QUFGSjs7QUFTQTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFTQTtFQUNHLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFOSDs7QUFVQTtFQUVJLFlBQUE7RUFDQSwyQ0FBQTtBQVJKIiwiZmlsZSI6InJlcG9ydGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnR7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQod2hpdGUsd2hpdGUsI0Y5RDM4Nyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4jaW1nc2lue1xyXG5cclxuICAgIHdpZHRoOjY1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4jaW1nc2luMntcclxuICAgd2lkdGg6NzAlIDtcclxuICAgbWFyZ2luLWxlZnQ6IDE2JTtcclxuICAgbWFyZ2luLXRvcDogMyU7XHJcblxyXG5cclxufVxyXG4uY2FqYXN7XHJcblxyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHdoaXRlLCNGOUQzODcpO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "VRHm":
    /*!*****************************************!*\
      !*** ./src/app/reporte/reporte.page.ts ***!
      \*****************************************/

    /*! exports provided: ReportePage */

    /***/
    function VRHm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportePage", function () {
        return ReportePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reporte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reporte.page.html */
      "2xeV");
      /* harmony import */


      var _reporte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reporte.page.scss */
      "IsDH");
      /* harmony import */


      var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../servicios/crud.service */
      "e9dD");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ReportePage = /*#__PURE__*/function () {
        function ReportePage(db, user, alert, router) {
          _classCallCheck(this, ReportePage);

          this.db = db;
          this.user = user;
          this.alert = alert;
          this.router = router;
          this.contacts = [];
          this.uid = localStorage.getItem("uid");
        }

        _createClass(ReportePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.itemRef = this.db.object('list/' + this.uid);
            console.log(this.uid);
            this.itemRef.snapshotChanges().subscribe(function (action) {
              var data = action.payload.val();
              _this.contacts = [];
              console.log(data);

              for (var k in data) {
                var user = data[k];
                user.key = k;
                console.log(user);

                _this.contacts.push(user);
              }
            });
          }
        }, {
          key: "deleteConfirm",
          value: function deleteConfirm(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alert.create({
                        header: 'Espera!',
                        message: 'Este contacto se eliminara de tu lista. Quieres continuar?',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Eliminar',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this2.db.database.ref('list/' + _this2.uid + '/' + key).remove();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addSintoma",
          value: function addSintoma() {
            this.router.navigate(['/agregar-sintomas']);
          }
        }]);

        return ReportePage;
      }();

      ReportePage.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }, {
          type: _servicios_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      ReportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-reporte',
        template: _raw_loader_reporte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reporte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReportePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=reporte-reporte-module-es5.js.map