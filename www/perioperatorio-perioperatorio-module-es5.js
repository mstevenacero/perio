(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perioperatorio-perioperatorio-module"], {
    /***/
    "7xnU":
    /*!*****************************************************************!*\
      !*** ./src/app/perioperatorio/perioperatorio-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PerioperatorioPageRoutingModule */

    /***/
    function xnU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerioperatorioPageRoutingModule", function () {
        return PerioperatorioPageRoutingModule;
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


      var _perioperatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perioperatorio.page */
      "SfME");

      var routes = [{
        path: '',
        component: _perioperatorio_page__WEBPACK_IMPORTED_MODULE_3__["PerioperatorioPage"]
      }, {
        path: 'detallesperio',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | detallesperio-detallesperio-module */
          "detallesperio-detallesperio-module").then(__webpack_require__.bind(null,
          /*! ./detallesperio/detallesperio.module */
          "KASU")).then(function (m) {
            return m.DetallesperioPageModule;
          });
        }
      }];

      var PerioperatorioPageRoutingModule = function PerioperatorioPageRoutingModule() {
        _classCallCheck(this, PerioperatorioPageRoutingModule);
      };

      PerioperatorioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerioperatorioPageRoutingModule);
      /***/
    },

    /***/
    "D8Ll":
    /*!*********************************************************!*\
      !*** ./src/app/perioperatorio/perioperatorio.module.ts ***!
      \*********************************************************/

    /*! exports provided: PerioperatorioPageModule */

    /***/
    function D8Ll(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerioperatorioPageModule", function () {
        return PerioperatorioPageModule;
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


      var _perioperatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perioperatorio-routing.module */
      "7xnU");
      /* harmony import */


      var _perioperatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perioperatorio.page */
      "SfME");

      var PerioperatorioPageModule = function PerioperatorioPageModule() {
        _classCallCheck(this, PerioperatorioPageModule);
      };

      PerioperatorioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perioperatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerioperatorioPageRoutingModule"]],
        declarations: [_perioperatorio_page__WEBPACK_IMPORTED_MODULE_6__["PerioperatorioPage"]]
      })], PerioperatorioPageModule);
      /***/
    },

    /***/
    "PJUZ":
    /*!*********************************************************!*\
      !*** ./src/app/perioperatorio/perioperatorio.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function PJUZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#content {\n  --background:linear-gradient(white,white,white,#72C1F5);\n}\n\n.text1 {\n  margin-top: 10%;\n  color: black;\n  font-weight: 900;\n  margin-left: 3%;\n  margin-bottom: 2%;\n}\n\n.text2 {\n  margin-bottom: 2%;\n  margin-top: 2%;\n  color: black;\n  text-align: justify;\n  margin-left: 0.5%;\n  margin-right: 0.5%;\n}\n\n.text3 {\n  margin-top: 10%;\n  color: black;\n  font-weight: 900;\n  margin-left: 35%;\n  margin-bottom: 2%;\n}\n\n.barra {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.content1 {\n  margin-top: 5%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\n.boton {\n  margin-bottom: 5%;\n}\n\n#imagen {\n  width: 70%;\n  margin-left: 15%;\n}\n\n.boton {\n  margin-top: 5%;\n  width: 90%;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcmlvcGVyYXRvcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLHVEQUFBO0FBRko7O0FBU0E7RUFFSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUEo7O0FBU0E7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDSSxZQUFBO0VBRUQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUkg7O0FBVUE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVVBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0FBUko7O0FBVUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEo7O0FBU0E7RUFFSSxpQkFBQTtBQVBKOztBQVNBO0VBRUksVUFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBU0E7RUFHSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFSSiIsImZpbGUiOiJwZXJpb3BlcmF0b3Jpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudHtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh3aGl0ZSx3aGl0ZSx3aGl0ZSwjNzJDMUY1KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbi50ZXh0MXtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi50ZXh0MntcclxuXHJcbm1hcmdpbi1ib3R0b206IDIlO1xyXG5tYXJnaW4tdG9wOiAyJTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICBcclxuICAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG4gICBtYXJnaW4tbGVmdDogMC41JTtcclxuICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xyXG59XHJcbi50ZXh0M3tcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uYmFycmF7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4uY29udGVudDF7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLmJvdG9ue1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbiNpbWFnZW57XHJcblxyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn1cclxuLmJvdG9ue1xyXG5cclxuXHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "SfME":
    /*!*******************************************************!*\
      !*** ./src/app/perioperatorio/perioperatorio.page.ts ***!
      \*******************************************************/

    /*! exports provided: PerioperatorioPage */

    /***/
    function SfME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerioperatorioPage", function () {
        return PerioperatorioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_perioperatorio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./perioperatorio.page.html */
      "k2yo");
      /* harmony import */


      var _perioperatorio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./perioperatorio.page.scss */
      "PJUZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PerioperatorioPage = /*#__PURE__*/function () {
        function PerioperatorioPage(router) {
          _classCallCheck(this, PerioperatorioPage);

          this.router = router;
          this.show = false;
          this.show1 = false;
          this.show2 = false;
        }

        _createClass(PerioperatorioPage, [{
          key: "getPerio",
          value: function getPerio() {
            this.router.navigate(['./perioperatorio']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PerioperatorioPage;
      }();

      PerioperatorioPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      PerioperatorioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perioperatorio',
        template: _raw_loader_perioperatorio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perioperatorio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PerioperatorioPage);
      /***/
    },

    /***/
    "k2yo":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perioperatorio/perioperatorio.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function k2yo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>Proceso Perioperatorio</ion-title>\n    <ion-button color=\"secondary\"slot=\"start\">\n\n      <ion-back-button defauldHref=\"/home\">\n       \n\n      </ion-back-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\">\n  <div>\n\n    <img src=\"../../assets/imagenes/grupo.png\" alt=\"\">\n  </div>\n\n  <ion-button (click)=\"show=!show\" class=\"boton\"color=\"secondary\" expand=\"block\">Antes</ion-button>\n  <div class=\"content1\" *ngIf=\"show\">\n\n    <ion-text class =\"text1\">\n    REUNION CON EL EQUIPO QUIRURGICO:\n      \n\n    \n\n\n    </ion-text>\n    <ion-text class=\"text2\">\n      Antes de la cirugía, usted se reunirá con el cirujano o el equipo quirúrgico.Analizarán su registro médico, realizarán un examen físico y evaluarán la necesidad de cirugía\n    </ion-text>\n     <br>\n    \n    <ion-text class=\"text1\">\n      AUTORIZACION PARA LA CIRUGIA:\n        \n  \n      \n  \n  \n      </ion-text>\n      <br>\n      <ion-text class=\"text2\">\n\n        Es posible que antes de la cirugía necesite ciertas pruebas. Hable con su médico para saber qué pruebas necesitará. A continuación se indican algunos ejemplos.\n\n\n      </ion-text>\n  \n      <br>\n      <ion-text class=\"text3\">\n        PROGRESO:\n      </ion-text>\n       \n      <ion-progress-bar color=\"success\"class=\"barra\" value=\"1\"></ion-progress-bar>\n\n    <img src=\"../../assets/imagenes/Coronavirus-Graphic.png\" alt=\"\"  >\n\n    <ion-button [routerLink]=\"[ '/Perioperatorio' ]\"class=\"boton\"color=\"success\" expand=\"block\"> Mas detalles...</ion-button>\n  </div>\n\n\n\n\n\n\n<!-- despues  durante-----------------------------------------------------------------------------------------------------------------------------------\n.---------------------------->\n\n\n\n   <ion-button (click)=\"show1=!show1\" class=\"boton\"color=\"secondary\" expand=\"block\">Durante</ion-button>\n   <div class=\"content1\" *ngIf=\"show1\">\n \n     <ion-text class =\"text1\">\n    ANESTICIA LOCAL :\n       \n \n     \n \n \n     </ion-text>\n     <ion-text class=\"text2\">\n      La anestesia local es una inyección que adormece el área donde se necesita la cirugía. La anestesia local se usa para procedimientos que se realizan en el consultorio del médico, como la extirpación de un lunar\n     </ion-text>\n      <br>\n     \n     <ion-text class=\"text1\">\n       ANESTECIA GENERAL:\n         \n   \n       \n   \n   \n       </ion-text>\n       <br>\n       <ion-text class=\"text2\">\n \n        La anestesia general deja a la persona en un estado de inconsciencia durante un procedimiento mayor. La anestesia general se administra a través de una máscara facial, una aguja intravenosa (i.v.) que se inserta en una vena del brazo o una combinación de ambas. Luego, el anestesista generalmente coloca un tubo en la garganta para ayudar con la respiración, proporcionar oxígeno y, en ocasiones, administrar anestesia. El anestesista controla cuidadosamente la frecuencia cardíaca, la presión arterial y el oxígeno durante la operación. Por lo general, el paciente no está consciente de nada hasta que la anestesia deja de tener efecto después de la operación\n \n \n       </ion-text>\n   \n       <br>\n       <ion-text class=\"text3\">\n         PROGRESO:\n       </ion-text>\n        \n       <ion-progress-bar color=\"success\"class=\"barra\" value=\"0.7\"></ion-progress-bar>\n \n     <img id=\"imagen\"src=\"../../assets/imagenes/cirugia.png\" alt=\"\"  >\n \n     <ion-button class=\"boton\"color=\"success\" expand=\"block\"> Mas detalles...</ion-button>\n   </div>\n\n\n<!-- despues  operaacio-----------------------------------------------------------------------------------------------------------------------------------\n.---------------------------->\n\n\n\n\n\n   <ion-button (click)=\"show2=!show2\" class=\"boton\"color=\"secondary\" expand=\"block\">Despues</ion-button>\n   <div class=\"content1\" *ngIf=\"show2\">\n \n     <ion-text class =\"text1\">\n    PROCESO DE RECUPERACION :\n       \n \n     \n \n \n     </ion-text>\n     <ion-text class=\"text2\">\n      Consulte al médico sobre la actividad física después de la cirugía. Es importante que camine en cuanto pueda para favorecer la circulación de la sangre y evitar la formación de coágulos.\n\n\n     </ion-text>\n      <br>\n     \n     \n       <br>\n       <ion-text class=\"text2\">\n \n       -  Pida una derivación a un fisioterapeuta, si fuera necesario. La fisioterapia podría ser una parte importante de su recuperación. Puede ayudar a aumentar la fuerza y la flexibilidad, y algunos pacientes pueden comenzar el día siguiente de la cirugía. Es posible que reciba un programa de ejercicios en el hogar, pero es importante que siga las instrucciones específicas del médico y del fisioterapeuta.\n \n \n       </ion-text>\n   \n       <br>\n       <ion-text class=\"text2\">\n \n        - Hable con el personal de enfermería o con el dietista del hospital sobre cuál es la nutrición adecuada y cuándo volver a consumir los alimentos habituales.\n \n \n       </ion-text>\n        <br>\n       \n       <ion-text class=\"text3\">\n         PROGRESO:\n       </ion-text>\n        \n       <ion-progress-bar color=\"success\"class=\"barra\" value=\"0.0\"></ion-progress-bar>\n \n     <img src=\"../../assets/imagenes/recupe.png\" alt=\"\">\n \n     <ion-button class=\"boton\"color=\"success\" expand=\"block\"> Mas detalles...</ion-button>\n   </div>\n\n\n\n\n\n\n\n\n\n\n  \n \n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=perioperatorio-perioperatorio-module-es5.js.map