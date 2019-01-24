(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _minesweeper_single_single_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minesweeper/single/single.component */ "./src/app/minesweeper/single/single.component.ts");
/* harmony import */ var _minesweeper_multi_multi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minesweeper/multi/multi.component */ "./src/app/minesweeper/multi/multi.component.ts");
/* harmony import */ var _minesweeper_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minesweeper/login/login.component */ "./src/app/minesweeper/login/login.component.ts");






var routes = [
    // { path : '', component : BenbauerComponent},
    { path: 'single', component: _minesweeper_single_single_component__WEBPACK_IMPORTED_MODULE_3__["SingleComponent"] },
    { path: 'newUser/:newUserID', component: _minesweeper_single_single_component__WEBPACK_IMPORTED_MODULE_3__["SingleComponent"] },
    { path: 'returningUser/:returningUserID', component: _minesweeper_single_single_component__WEBPACK_IMPORTED_MODULE_3__["SingleComponent"] },
    { path: '', component: _minesweeper_multi_multi_component__WEBPACK_IMPORTED_MODULE_4__["MultiComponent"] },
    { path: 'login', component: _minesweeper_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'room/:id', component: _minesweeper_multi_multi_component__WEBPACK_IMPORTED_MODULE_4__["MultiComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.selected = '';
        this.showDismissAnimation = false;
        this.gameStarted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.confirmPopUpVisible = false;
    };
    AppComponent.prototype.mouseEnter = function (elem) {
        this.selected = elem;
    };
    AppComponent.prototype.mouseLeave = function () {
        this.selected = '';
    };
    AppComponent.prototype.confirmSingle = function () {
        if (this.currentPage != 'single' && this.gameStarted) {
            this.confirmPopUpVisible = true;
            this.pageToGoTo = 'minesweeper/single';
        }
        else if (this.currentPage != 'single' && !this.gameStarted) {
            this.navigate('minesweeper/single');
        }
    };
    AppComponent.prototype.confirmMulti = function () {
        if (this.currentPage != 'multi' && this.gameStarted) {
            this.confirmPopUpVisible = true;
            this.pageToGoTo = 'minesweeper';
        }
        else if (this.currentPage != 'multi' && !this.gameStarted) {
            this.navigate('minesweeper');
        }
    };
    AppComponent.prototype.confirmLogin = function () {
        if (this.currentPage != 'login' && this.gameStarted) {
            this.confirmPopUpVisible = true;
            this.pageToGoTo = 'minesweeper/login';
        }
        else if (this.currentPage != 'login' && !this.gameStarted) {
            this.navigate('minesweeper/login');
        }
    };
    AppComponent.prototype.navigate = function (page) {
        this.gameStarted = false;
        this._router.navigate([page]);
        this.confirmPopUpVisible = false;
    };
    AppComponent.prototype.dismiss = function () {
        var _this = this;
        this.showDismissAnimation = true;
        setTimeout(function () {
            _this.confirmPopUpVisible = false;
            _this.showDismissAnimation = false;
        }, 500);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _minesweeper_single_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minesweeper/single/single.component */ "./src/app/minesweeper/single/single.component.ts");
/* harmony import */ var _minesweeper_multi_multi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./minesweeper/multi/multi.component */ "./src/app/minesweeper/multi/multi.component.ts");
/* harmony import */ var _minesweeper_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./minesweeper/login/login.component */ "./src/app/minesweeper/login/login.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _landingPage_benbauer_benbauer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landingPage/benbauer/benbauer.component */ "./src/app/landingPage/benbauer/benbauer.component.ts");
/* harmony import */ var _minesweeper_minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./minesweeper/minesweeper-header/minesweeper-header.component */ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.ts");
/* harmony import */ var _minesweeper_minesweeper_footer_minesweeper_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./minesweeper/minesweeper-footer/minesweeper-footer.component */ "./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _minesweeper_single_single_component__WEBPACK_IMPORTED_MODULE_8__["SingleComponent"],
                _minesweeper_multi_multi_component__WEBPACK_IMPORTED_MODULE_9__["MultiComponent"],
                _minesweeper_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _landingPage_benbauer_benbauer_component__WEBPACK_IMPORTED_MODULE_13__["BenbauerComponent"],
                _minesweeper_minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_14__["MinesweeperHeaderComponent"],
                _minesweeper_minesweeper_footer_minesweeper_footer_component__WEBPACK_IMPORTED_MODULE_15__["MinesweeperFooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"], _minesweeper_minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_14__["MinesweeperHeaderComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.newUser = function (obj) {
        return this._http.post('/newUser', obj, {
            withCredentials: true
        });
    };
    HttpService.prototype.loginUser = function (obj) {
        return this._http.post('/login', obj, {
            withCredentials: true
        });
    };
    HttpService.prototype.getAllUserScores = function () {
        return this._http.get('/userScores');
    };
    HttpService.prototype.getGlobalScores = function (diff) {
        return this._http.get('/allScores/' + diff);
    };
    HttpService.prototype.checkForExistingEmail = function (email) {
        return this._http.get('/checkEmail/' + email);
    };
    HttpService.prototype.saveSinglePlayerGame = function (obj) {
        return this._http.post('/newSingle', obj);
    };
    HttpService.prototype.sendEmailTo = function (obj) {
        return this._http.post('/emailFriend', obj);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/landingPage/benbauer/benbauer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/landingPage/benbauer/benbauer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundContainer {\n    padding: 1% 15% 1% 15%;\n    background-image: url('bg.png');\n    background-repeat: no-repeat;\n    background-size: 100% auto;\n    width: 70% !important;\n    /* min-height: 1000px !important; */\n    box-shadow: 0px -39px 80px 23px black inset;\n    opacity: 0.8;\n}\n\n.name {\n    margin: 2% 0px 0px 2%;\n    text-transform: uppercase;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 20px;\n}\n\nh3 {\n    font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    color: white;\n}\n\n.projects {\n    margin-top: 8%;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    letter-spacing: 1px;\n}\n\n.projectsDetail {\n    text-align: center;\n}\n\n.projectsContainer{\n    text-align: center;\n    margin-bottom: 25%;\n}\n\n.projectsContainer a img{\n    width: 30%;\n    margin: 1%;\n}\n\n.aboutMe {\n    text-align: center;\n    color: white;\n}\n\n.blackContainer {\n    background-color: #030303;\n    margin-top: -8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ1BhZ2UvYmVuYmF1ZXIvYmVuYmF1ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixnQ0FBMEM7SUFDMUMsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLDRDQUE0QztJQUM1QyxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG9FQUFvRTtJQUNwRSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsV0FBVztDQUNkOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZ1BhZ2UvYmVuYmF1ZXIvYmVuYmF1ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kQ29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxJSAxNSUgMSUgMTUlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2JnLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMDBweCAhaW1wb3J0YW50OyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAtMzlweCA4MHB4IDIzcHggYmxhY2sgaW5zZXQ7XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4ubmFtZSB7XG4gICAgbWFyZ2luOiAyJSAwcHggMHB4IDIlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbmgzIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdHMge1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnByb2plY3RzRGV0YWlsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0c0NvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjUlO1xufVxuXG4ucHJvamVjdHNDb250YWluZXIgYSBpbWd7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDElO1xufVxuXG4uYWJvdXRNZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJsYWNrQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xuICAgIG1hcmdpbi10b3A6IC04JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/landingPage/benbauer/benbauer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/landingPage/benbauer/benbauer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'backgroundContainer'>\n    <h3 class = 'name'>Ben Bauer</h3>\n    <h3 class = 'projects'>Projects</h3>\n    <h3 class = 'projectsDetail'>Here are some projects that I've worked on. Feel free to take a look.</h3>\n    <div class = 'projectsContainer'>\n\n        <a [routerLink] = \"['minesweeper']\"><img src = '../../assets/minesweeper.png'></a>\n        \n        <a href = 'http://hangman.ben-bauer.net'><img src = '../../assets/minesweeper.png'></a>\n        <a href = 'http://hangman.ben-bauer.net'><img src = '../../assets/minesweeper.png'></a>\n    </div>\n\n</div>\n<div class = 'blackContainer'>\n    <h3 class = 'projects'>About Me</h3>\n    \n    <p class = 'aboutMe'>ContentContentContentContentContentContentContentContentContentContentContent</p>\n    \n    <h3 class = 'projects'>Contact</h3>\n    \n    <a href = 'mailto:benjaminbauer15@gmail.com'>Email</a>\n    <a href = 'https://www.github.com/Ben-Bauer-15'>GitHub</a>\n    <a href = 'https://www.linkedin.com/in/benjaminbauer15'>LinkedIn</a>\n\n\n</div>    \n\n<a href = 'http://18.225.33.119'>Click me!</a>\n\n"

/***/ }),

/***/ "./src/app/landingPage/benbauer/benbauer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/landingPage/benbauer/benbauer.component.ts ***!
  \************************************************************/
/*! exports provided: BenbauerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenbauerComponent", function() { return BenbauerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var BenbauerComponent = /** @class */ (function () {
    function BenbauerComponent(_title) {
        this._title = _title;
    }
    BenbauerComponent.prototype.ngOnInit = function () {
        this.setTitle();
    };
    BenbauerComponent.prototype.setTitle = function () {
        this._title.setTitle("Ben Bauer");
    };
    BenbauerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-benbauer',
            template: __webpack_require__(/*! ./benbauer.component.html */ "./src/app/landingPage/benbauer/benbauer.component.html"),
            styles: [__webpack_require__(/*! ./benbauer.component.css */ "./src/app/landingPage/benbauer/benbauer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], BenbauerComponent);
    return BenbauerComponent;
}());



/***/ }),

/***/ "./src/app/minesweeper/cell.ts":
/*!*************************************!*\
  !*** ./src/app/minesweeper/cell.ts ***!
  \*************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell(x, y) {
        this.x = x;
        this.y = y;
        this.clicked = false;
        this.mine = false;
        this.adjacentMines = 0;
        this.x = x;
        this.y = y;
        this.neighbors = [];
        this.flagged = false;
    }
    return Cell;
}());



/***/ }),

/***/ "./src/app/minesweeper/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/minesweeper/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n    display: inline-block;\n    vertical-align: top;\n    width: 45%;\n}\n\nh2 {\n    color: rgb(100,100,100);\n    margin-left: 1%;\n}\n\nh4 {\n    color: rgb(25,25,25);\n}\n\n.error{\n    color: red;\n}\n\n.fullWidth{\n    width: 80%;\n}\n\n#container {\n    padding: 72px 72px 100px 72px;\n    text-align: center;\n    background-color: rgb(177, 177, 177);\n    border-top: 1px solid rgb(100,100,100);\n    border-bottom: 1px solid rgb(100,100,100);\n    margin-bottom: 16.5%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZXN3ZWVwZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsV0FBVztDQUNkOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMscUJBQXFCOztDQUV4QiIsImZpbGUiOiJzcmMvYXBwL21pbmVzd2VlcGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiA0NSU7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogcmdiKDI1LDI1LDI1KTtcbn1cblxuLmVycm9ye1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5mdWxsV2lkdGh7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNzJweCA3MnB4IDEwMHB4IDcycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEwMCwxMDAsMTAwKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEwMCwxMDAsMTAwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNi41JTtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/minesweeper/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/minesweeper/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-minesweeper-header></app-minesweeper-header>\n<h2>Login or Register to Save Your Scores!</h2>\n<div id = 'container'>\n\n  <div class = 'login'>\n    <h4>Login</h4>\n    <form (submit) = 'submitLogin()'>\n      <div>\n        <mat-form-field class = 'fullWidth'>\n            <input [(ngModel)] = 'returningUser.email' matInput placeholder=\"Email\" name = 'returnEmail' required [formControl] = 'returnEmail'>\n            <mat-error *ngIf = 'returnEmail.invalid'>{{getReturningEmailErrorMessage()}} </mat-error>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field class = 'fullWidth'>\n            <input [(ngModel)] = 'returningUser.password' matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"Password\" name = 'returnPassword' required [formControl] = 'returnPassword'>\n            <mat-error *ngIf = 'returnPassword.invalid'>{{getReturnPasswordErrorMessage()}} </mat-error>\n        </mat-form-field>\n      </div>\n      <p class = 'error' *ngIf = 'badCombo'>Email/password combination doesn't match</p>\n      <button type = 'submit' mat-raised-button color=\"primary\"\n      [disabled] = 'returnEmail.invalid || returnPassword.invalid' >Login</button>\n    </form>\n  </div>\n  \n  <div class = 'login'>\n    <h4>Register</h4>\n    <form (submit) = 'submitRegister()'>\n        \n      <div>\n        <mat-form-field class = 'fullWidth'>\n            <input [(ngModel)] = 'newUser.userName' name = 'userName' matInput placeholder=\"Username\" [formControl] = 'userName' required>\n            <mat-error *ngIf = 'userName.invalid'>{{getUserNameErrorMessage()}} </mat-error>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class = 'fullWidth'>\n            <input (keyup) = 'keyup()' [(ngModel)] = 'newUser.email' name = 'email' matInput placeholder=\"Email Address\" [formControl] = 'email' required>\n            <mat-error *ngIf = 'email.invalid'>{{getEmailErrorMessage()}} </mat-error>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field class = 'fullWidth'>\n            <input [(ngModel)] = 'newUser.password' name = 'PW' matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"Password\" [formControl] = 'password' required minlength = '8'>\n            <mat-error *ngIf = 'password.invalid'>{{getPasswordErrorMessage()}} </mat-error>\n        </mat-form-field>\n      </div>\n      <button type = 'submit' mat-raised-button color=\"primary\"\n      [disabled] = 'email.invalid || password.invalid || userName.invalid || emailExists' >\n      Register</button>\n      </form>\n  </div>\n</div>\n\n<app-minesweeper-footer></app-minesweeper-footer>"

/***/ }),

/***/ "./src/app/minesweeper/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/minesweeper/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minesweeper-header/minesweeper-header.component */ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_component, _http, _router) {
        this._component = _component;
        this._http = _http;
        this._router = _router;
        this.hide = true;
        this.returningUser = { email: "", password: "" };
        this.badCombo = false;
        this.emailExists = false;
        this.newUser = { userName: "", password: "", confirm: "", email: "" };
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]);
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.returnEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.returnPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitRegister = function () {
        var obs = this._http.newUser(this.newUser);
        obs.subscribe(function (data) {
        });
        this._router.navigate(['minesweeper/newUser/' + this.newUser.userName]);
        this.newUser = { userName: "", password: "", email: "", confirm: "" };
    };
    LoginComponent.prototype.submitLogin = function () {
        var _this = this;
        var obs = this._http.loginUser(this.returningUser);
        obs.subscribe(function (data) {
            if (data.message == 'Success') {
                _this._router.navigate(['minesweeper/returningUser/' + data.data]);
                _this.badCombo = false;
            }
            else {
                _this.badCombo = true;
            }
        });
    };
    LoginComponent.prototype.getEmailErrorMessage = function () {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        if (this.email.hasError('email')) {
            return 'Not a valid email';
        }
        if (this.emailExists) {
            return 'Email already exists';
        }
    };
    LoginComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minlength') ? 'Password is too short' : '';
    };
    LoginComponent.prototype.getReturnPasswordErrorMessage = function () {
        return this.returnPassword.hasError('required') ? 'You must enter a value' : "";
    };
    LoginComponent.prototype.getReturningEmailErrorMessage = function () {
        return this.returnEmail.hasError('required') ? 'You must enter a value' :
            this.returnEmail.hasError('email') ? 'Not a valid email' : '';
    };
    LoginComponent.prototype.getUserNameErrorMessage = function () {
        return this.userName.hasError('required') ? 'You must enter a value' : '';
    };
    LoginComponent.prototype.keyup = function () {
        var _this = this;
        if (this.newUser.email != "") {
            var obs = this._http.checkForExistingEmail(this.newUser.email);
            obs.subscribe(function (data) {
                if (data.data[0] != undefined) {
                    _this.emailExists = true;
                }
                else {
                    _this.emailExists = false;
                }
            });
        }
        else {
            this.emailExists = false;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/minesweeper/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/minesweeper/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_2__["MinesweeperHeaderComponent"],
            _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer p {\n    font-size: 14px;\n    display: inline-block;\n    vertical-align: top;\n    color: #f0a554;\n}\n\n.footer {\n    padding-left: 42%;\n    background-color: darkslategray;\n    margin-top: 7.2%;\n}\n\n#github {\n    margin-left: 10px;\n    height: 30px;\n    vertical-align: top;\n    width: 31px;\n    margin-top: 7px;\n    display: inline-block;\n}\n\n#mail {\n    margin-left: 10px;\n    height: 26px;\n    vertical-align: top;\n    width: 40px;\n    margin-top: 10px;\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZXN3ZWVwZXIvbWluZXN3ZWVwZXItZm9vdGVyL21pbmVzd2VlcGVyLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL21pbmVzd2VlcGVyL21pbmVzd2VlcGVyLWZvb3Rlci9taW5lc3dlZXBlci1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGNvbG9yOiAjZjBhNTU0O1xufVxuXG4uZm9vdGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIG1hcmdpbi10b3A6IDcuMiU7XG59XG5cbiNnaXRodWIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiAzMXB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNtYWlsIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'footer'>\n    <p>© Benjamin Bauer 2018</p>\n    <a href = 'https://github.com/Ben-Bauer-15/minesweeper'><img id = 'github' src = '../assets/githublogo_copy.png'></a>\n    <a href = 'mailto:benjaminbauer15@gmail.com'><img id = 'mail' src = '../assets/mail.png'></a>\n  </div>"

/***/ }),

/***/ "./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.ts ***!
  \********************************************************************************/
/*! exports provided: MinesweeperFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinesweeperFooterComponent", function() { return MinesweeperFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MinesweeperFooterComponent = /** @class */ (function () {
    function MinesweeperFooterComponent() {
    }
    MinesweeperFooterComponent.prototype.ngOnInit = function () {
    };
    MinesweeperFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-minesweeper-footer',
            template: __webpack_require__(/*! ./minesweeper-footer.component.html */ "./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.html"),
            styles: [__webpack_require__(/*! ./minesweeper-footer.component.css */ "./src/app/minesweeper/minesweeper-footer/minesweeper-footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MinesweeperFooterComponent);
    return MinesweeperFooterComponent;
}());



/***/ }),

/***/ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/minesweeper/minesweeper-header/minesweeper-header.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    padding-right: 14px;\n    box-sizing: border-box;\n    width: 100%;\n    padding-top: 9px;\n    height: 50px;\n    border-bottom: 1px solid lightslategray;\n    text-align: right;\n    background-color: darkslategray;\n}\n\n.navbar a{\n    text-decoration: none;\n    color: #f0a554;\n    padding: 17px;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.hover {\n    border-bottom: 3px solid #f0a554;\n}\n\n#title{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: -6px;\n    margin-right: 50%;\n    margin-bottom: 0px;\n    color: #969696;\n}\n\n#title span {\n    color: #f0a554;\n}\n\n@media only screen and (max-width : 949px){\n    #title {\n        margin-right: 15% !important;\n    }\n}\n\n@media only screen and (min-width : 950px){\n    #title {\n        margin-right: 30% !important;\n    }\n}\n\n@media only screen and (min-width : 1200px){\n    #title {\n        margin-right: 54% !important;\n    }\n}\n\n@media only screen and (min-width : 1600px){\n    #title {\n        margin-right: 61% !important;\n    }\n}\n\n@media only screen and (max-width : 1600px){\n    #confirm {\n        left : 28% !important;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZXN3ZWVwZXIvbWluZXN3ZWVwZXItaGVhZGVyL21pbmVzd2VlcGVyLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUdEO0lBQ0k7UUFDSSw2QkFBNkI7S0FDaEM7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksNkJBQTZCO0tBQ2hDO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLDZCQUE2QjtLQUNoQztDQUNKOztBQUVEO0lBQ0k7UUFDSSw2QkFBNkI7S0FDaEM7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksc0JBQXNCO0tBQ3pCOztDQUVKIiwiZmlsZSI6InNyYy9hcHAvbWluZXN3ZWVwZXIvbWluZXN3ZWVwZXItaGVhZGVyL21pbmVzd2VlcGVyLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA5cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuXG4ubmF2YmFyIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZjBhNTU0O1xuICAgIHBhZGRpbmc6IDE3cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YwYTU1NDtcbn1cblxuI3RpdGxle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGNvbG9yOiAjOTY5Njk2O1xufVxuXG4jdGl0bGUgc3BhbiB7XG4gICAgY29sb3I6ICNmMGE1NTQ7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTQ5cHgpe1xuICAgICN0aXRsZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTUlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA5NTBweCl7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMCUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDEyMDBweCl7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1NCUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE2MDBweCl7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MSUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE2MDBweCl7XG4gICAgI2NvbmZpcm0ge1xuICAgICAgICBsZWZ0IDogMjglICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/minesweeper/minesweeper-header/minesweeper-header.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'navbar'>\n  \n    <h1 id = 'title'> mine<span>sweeper</span> </h1>\n    <a (mouseenter) = 'mouseEnter(\"single\")'\n     (mouseleave) = 'mouseLeave()' \n     [ngClass] = \"{'hover' : selected == 'single'}\" \n     [routerLink] = \"['/minesweeper/single']\">\n     Single Player</a>\n  \n    <a (mouseenter) = 'mouseEnter(\"multi\")'\n     (mouseleave) = 'mouseLeave()' \n     [ngClass] = \"{'hover' : selected == 'multi'}\" \n     [routerLink] = \"['/minesweeper/']\">\n     Multiplayer</a>\n  \n    <a (mouseenter) = 'mouseEnter(\"login\")' \n    (mouseleave) = 'mouseLeave()' \n    [ngClass] = \"{'hover' : selected == 'login'}\" \n    [routerLink] = \"['/minesweeper/login']\"\n    >\n    Login</a>\n  \n  </div> "

/***/ }),

/***/ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/minesweeper/minesweeper-header/minesweeper-header.component.ts ***!
  \********************************************************************************/
/*! exports provided: MinesweeperHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinesweeperHeaderComponent", function() { return MinesweeperHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
//This component will control navigation inside the minesweeper app



var MinesweeperHeaderComponent = /** @class */ (function () {
    function MinesweeperHeaderComponent(_titleService) {
        this._titleService = _titleService;
        this.title = 'Minesweeper';
        this.selected = '';
        this.gameStarted = false;
    }
    MinesweeperHeaderComponent.prototype.ngOnInit = function () {
        this.setTitle();
    };
    MinesweeperHeaderComponent.prototype.setTitle = function () {
        this._titleService.setTitle("Minesweeper");
    };
    MinesweeperHeaderComponent.prototype.mouseEnter = function (elem) {
        this.selected = elem;
    };
    MinesweeperHeaderComponent.prototype.mouseLeave = function () {
        this.selected = '';
    };
    MinesweeperHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-minesweeper-header',
            template: __webpack_require__(/*! ./minesweeper-header.component.html */ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.html"),
            styles: [__webpack_require__(/*! ./minesweeper-header.component.css */ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], MinesweeperHeaderComponent);
    return MinesweeperHeaderComponent;
}());



/***/ }),

/***/ "./src/app/minesweeper/minesweeper.ts":
/*!********************************************!*\
  !*** ./src/app/minesweeper/minesweeper.ts ***!
  \********************************************/
/*! exports provided: Minesweeper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minesweeper", function() { return Minesweeper; });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/app/minesweeper/cell.ts");

var Minesweeper = /** @class */ (function () {
    function Minesweeper(difficulty, mode) {
        this.difficulty = difficulty;
        this.mode = mode;
        this.difficulties = {
            expert: { mines: 50, size: 15 },
            hard: { mines: 40, size: 15 },
            normal: { mines: 30, size: 15 },
            easy: { mines: 20, size: 15 },
            beginner: { mines: 10, size: 15 }
        };
        this.difficulty = difficulty;
        this.gamePlayMode = mode;
        this.gameSize = this.difficulties[difficulty].size;
        this.gameArray = [];
        this.gameOver = false;
        this.winner = false;
        this.gamePlayTime = 0.0;
        this.displayedTime = 0;
        this.gameStarted = false;
        for (var i = 0; i < this.gameSize; i++) {
            this.gameArray.push([]);
            for (var j = 0; j < this.gameSize; j++) {
                //i represents rows and is thus more appropriate to use as a cell's 'y' variable, and vice versa for j
                var newCell = new _cell__WEBPACK_IMPORTED_MODULE_0__["Cell"](j, i);
                this.gameArray[i].push(newCell);
                //detect all the neighbors for this new cell and add them to its list of neighbors
                this.populateNeighbors(newCell);
            }
        }
        //invoke the placeMines method to populate the grid with mines as well as update all of the non-mine cells
        this.placeMines(this.difficulty);
    }
    //will play an explosion noise when called
    Minesweeper.prototype.playGameOver = function () {
        var audio = new Audio();
        audio.src = './assets/Bomb+1.mp3';
        audio.load();
        audio.play();
    };
    //restarts the timer
    Minesweeper.prototype.startTimer = function () {
        var _this = this;
        this.myTimer = setInterval(function () {
            _this.gamePlayTime += 0.1;
            _this.displayedTime = Math.floor(_this.gamePlayTime);
        }, 100);
    };
    Minesweeper.prototype.stopTimer = function () {
        clearInterval(this.myTimer);
        this.gamePlayTime = (Math.round(this.gamePlayTime * 10) / 10);
    };
    //flags or unflags a cell when one is clicked
    Minesweeper.prototype.flag = function (i, j) {
        //the user has decided to unflag a cell, so switch its boolean back to false
        if (this.gameArray[i][j].flagged) {
            this.gameArray[i][j].flagged = false;
            // if this cell is a mine, put it back into the list of mines
            if (this.gameArray[i][j].mine) {
                this.mines.push([i, j]);
            }
            //increase the number of mines the user is keeping tabs on 
            this.numMines++;
        }
        else if (!this.gameArray[i][j].flagged && !this.gameArray[i][j].clicked) {
            //user has flagged a cell, switch its boolean variable to true
            this.gameArray[i][j].flagged = true;
            //if the user was correct in that this was a mine, remove it from the list of mines
            if (this.gameArray[i][j].mine) {
                for (var idx = 0; idx < this.mines.length; idx++) {
                    // console.log(this.mines[idx])
                    if (this.mines[idx][0] == i && this.mines[idx][1] == j) {
                        // console.log("found the mine")
                        this.mines.splice(idx, 1);
                    }
                }
            }
            if (this.mines.length == 0) {
                // console.log("you won!!!")
                this.winner = true;
                this.gameOver = true;
                this.stopTimer();
            }
            //decrease the number of mines the user has to keep tabs on
            this.numMines--;
        }
    };
    Minesweeper.prototype.uncoverMines = function (i, j) {
        if (!this.gameArray[i][j].clicked) {
            for (var idx = 0; idx < this.mines.length; idx++) {
                var x = this.mines[idx][0];
                var y = this.mines[idx][1];
                this.gameArray[i][j].clicked = true;
                this.uncoverMines(x, y);
            }
        }
    };
    //recursively uncovers cells when one is clicked
    Minesweeper.prototype.uncover = function (i, j) {
        var _this = this;
        //if a cell is a mine, call the uncover mines function (because it doesn't have a timeout and is faster) and uncover the rest of the mines
        if (this.gameArray[i][j].mine && !this.gameArray[i][j].clicked && !this.gameOver) {
            this.stopTimer();
            this.playGameOver();
            this.gameOver = true;
            this.uncoverMines(i, j);
        }
        else if (!this.gameOver) {
            //if a user clicks a flagged cell, add 1 back to the number of mines that the user sees displayed above the grid
            if (this.gameArray[i][j].flagged) {
                this.numMines++;
            }
            if (!this.gameStarted) {
                this.gameStarted = true;
                this.startTimer();
            }
            //if the gameplay is singleplayer, go ahead and do the 'fancy' reveal of cell
            //otherwise, do it the faster way
            if (this.gamePlayMode == 'single') {
                //this delays the recursive calls so that the user can see the recursion in action!
                setTimeout(function () {
                    //this is optional, but the original version of the game uncovers all cells that don't have any mines adjacent
                    //it stops uncovering once it reaches a cell with adjacent > 0
                    //if a cell doesn't have any mines adjacent and it HASNT been uncovered, recursively uncover all of its neighbors
                    if (_this.gameArray[i][j].adjacentMines == 0 && !_this.gameArray[i][j].clicked) {
                        for (var idx = 0; idx < _this.gameArray[i][j].neighbors.length; idx++) {
                            //all cell neighbors are stored as coordinates, NOT cells
                            var neighborCoords = _this.gameArray[i][j].neighbors[idx];
                            //go into neighbor coords to get the actual cell
                            var neighbor = _this.gameArray[neighborCoords[0]][neighborCoords[1]];
                            _this.gameArray[i][j].clicked = true;
                            _this.uncover(neighbor.x, neighbor.y);
                            // this.removeFromEmpties(i,j)
                        }
                    }
                    else {
                        //uncover this cell but don't call this function again, since it has > 0 adjacent
                        _this.gameArray[i][j].clicked = true;
                        // this.removeFromEmpties(i,j)
                    }
                }, 50);
            }
            else {
                //if a cell doesn't have any mines adjacent and it HASNT been uncovered, recursively uncover all of its neighbors
                if (this.gameArray[i][j].adjacentMines == 0 && !this.gameArray[i][j].clicked) {
                    for (var idx = 0; idx < this.gameArray[i][j].neighbors.length; idx++) {
                        //all cell neighbors are stored as coordinates, NOT cells
                        var neighborCoords = this.gameArray[i][j].neighbors[idx];
                        //go into neighbor coords to get the actual cell
                        var neighbor = this.gameArray[neighborCoords[0]][neighborCoords[1]];
                        this.gameArray[i][j].clicked = true;
                        this.uncover(neighbor.x, neighbor.y);
                        // this.removeFromEmpties(i,j)
                    }
                }
                else {
                    //uncover this cell but don't call this function again, since it has > 0 adjacent
                    this.gameArray[i][j].clicked = true;
                    // this.removeFromEmpties(i,j)
                }
            }
            for (var idx = 0; idx < this.empties.length; idx++) {
                if (this.empties[idx][0] == i && this.empties[idx][1] == j) {
                    this.empties.splice(idx, 1);
                    // console.log(this.empties)
                }
            }
            if (this.empties.length == 0) {
                this.gameOver = true;
                this.winner = true;
                this.stopTimer();
                // console.log(this.winner)
            }
            // console.log(this.empties)
        }
    };
    //this will determine where each mine will randomly be placed on the map
    Minesweeper.prototype.placeMines = function (diff) {
        //this will dictate how many mines we randomly place
        var numMines = this.difficulties[diff].mines;
        //create a duplicate array of the game array, but instead of storing cell objects, it stores indices
        var gameArrayDummy = [];
        for (var i = 0; i < this.gameArray.length; i++) {
            for (var j = 0; j < this.gameArray.length; j++) {
                gameArrayDummy.push([i, j]);
            }
        }
        //this will store all the indices for the mines
        this.mines = [];
        //this will store all the indices for non mines
        this.empties = [];
        //loop through the array dummy numMines times
        for (var i = 0; i < numMines; i++) {
            //choose a random index between 0 and array dummy length
            var random = Math.floor(Math.random() * gameArrayDummy.length);
            //store this random index
            this.mines.push(gameArrayDummy[random]);
            //delete it from the dummy so we can't choose the same location again!
            gameArrayDummy.splice(random, 1);
        }
        //now loop through mines and change the targeted cells to mines
        for (var i = 0; i < this.mines.length; i++) {
            var row = this.mines[i][0];
            var column = this.mines[i][1];
            // console.log(row, column)
            this.gameArray[row][column].mine = true;
        }
        //loop through mines again and update the neighbors adjacency property
        for (var i = 0; i < this.mines.length; i++) {
            var row = this.mines[i][0];
            var column = this.mines[i][1];
            this.increaseAdjacents(this.gameArray[row][column]);
        }
        //finally, loop through game array and push all non mine cells to empties
        for (var i = 0; i < this.gameArray.length; i++) {
            for (var j = 0; j < this.gameArray[i].length; j++) {
                if (!this.gameArray[i][j].mine) {
                    this.empties.push([i, j]);
                }
            }
        }
        // console.log(this.empties)
        //this will help the user keep track of how many flags they've placed
        //when the game starts, this figure will be the maximum (depending on difficulty),
        //but as they place more flags, the number will decrease
        this.numMines = this.mines.length;
    };
    Minesweeper.prototype.populateNeighbors = function (cell) {
        var max = this.gameSize;
        //edge case: cell is at the upper left corner
        if (cell.x == 0 && cell.y == 0) {
            cell.neighbors = [
                [0, 1],
                [1, 1],
                [1, 0]
            ];
        }
        //edge case: cell is in upper right corner
        else if (cell.y == 0 && cell.x == this.gameSize - 1) {
            cell.neighbors = [
                [max - 2, 0],
                [max - 1, 1],
                [max - 2, 1]
            ];
        }
        //edge case: cell is in lower right corner
        else if (cell.y == this.gameSize - 1 && cell.x == this.gameSize - 1) {
            cell.neighbors = [
                [max - 1, max - 2],
                [max - 2, max - 1],
                [max - 2, max - 2]
            ];
        }
        //edge case: cell is in lower left corner
        else if (cell.y == this.gameSize - 1 && cell.x == 0) {
            cell.neighbors = [
                [0, max - 2],
                [1, max - 1],
                [1, max - 2]
            ];
        }
        //edge case: cell is along left margin
        else if (cell.x == 0) {
            cell.neighbors = [
                [0, cell.y - 1],
                [0, cell.y + 1],
                [1, cell.y],
                [1, cell.y - 1],
                [1, cell.y + 1]
            ];
        }
        //edge case: cell is on top margin
        else if (cell.y == 0) {
            cell.neighbors = [
                [cell.x - 1, 0],
                [cell.x + 1, 0],
                [cell.x, 1],
                [cell.x - 1, 1],
                [cell.x + 1, 1]
            ];
        }
        //edge case: cell is on right margin
        else if (cell.x == this.gameSize - 1) {
            cell.neighbors = [
                [max - 1, cell.y - 1],
                [max - 1, cell.y + 1],
                [max - 2, cell.y],
                [max - 2, cell.y - 1],
                [max - 2, cell.y + 1]
            ];
        }
        //final edge case: cell on on bottom margin
        else if (cell.y == this.gameSize - 1) {
            cell.neighbors = [
                [cell.x - 1, max - 1],
                [cell.x + 1, max - 1],
                [cell.x, max - 2],
                [cell.x - 1, max - 2],
                [cell.x + 1, max - 2]
            ];
        }
        //cell is somewhere 'in the middle' and can be treated differently
        else {
            cell.neighbors = [
                [cell.x - 1, cell.y],
                [cell.x + 1, cell.y],
                [cell.x, cell.y - 1],
                [cell.x, cell.y + 1],
                [cell.x - 1, cell.y - 1],
                [cell.x - 1, cell.y + 1],
                [cell.x + 1, cell.y - 1],
                [cell.x + 1, cell.y + 1]
            ];
        }
    };
    //for each mine (cell) that is placed, loop through all of its neighbors and increase their property for adjacents by 1
    Minesweeper.prototype.increaseAdjacents = function (mine) {
        //loop through the neighbors of each mine...
        for (var i = 0; i < mine.neighbors.length; i++) {
            //coord is an array of length 2
            var coord = mine.neighbors[i];
            //neighbor is a cell from the gameArray given by the x,y from the coord variable
            var neighbor = this.gameArray[coord[1]][coord[0]];
            //if the neighbor isn't a mine, increase its adjacent mines property by 1
            if (!neighbor.mine) {
                neighbor.adjacentMines++;
            }
        }
    };
    return Minesweeper;
}());



/***/ }),

/***/ "./src/app/minesweeper/multi/multi.component.css":
/*!*******************************************************!*\
  !*** ./src/app/minesweeper/multi/multi.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#playerBoard, #opponentBoard {\n    width: 40%;\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    padding-top: 10px;\n}\n\n#container {\n    text-align: center;\n}\n\n#playerBoard{\n   margin-right: 0%;\n}\n\n.cell{\n    display: inline-block;\n    vertical-align: top;\n    height: 35px;\n    margin: 1px;\n    border-radius: 3px;\n    width: 35px;\n    background-color: rgba(0,0,0,1);\n}\n\n.uncovered{\n    background-color: #353535;\n}\n\n.test{\n    background-color: red;\n}\n\n.mine {\n    height: 30px;\n    width: 30px;\n    margin-top: 2px;\n}\n\n#refresh{\n    margin-bottom: 0%;\n    width: 40px;\n    margin-left: 31.8%;\n    height: 40px;\n}\n\n.dropdown {\n    font-size: 23px;\n    text-decoration: none;\n    color: #f0a554;\n    margin-right: 4%;\n    margin-left: 4%;\n    margin-top: 15%;\n    display: inline-block;\n}\n\n.dropdown a {\n    display: block;\n    cursor: pointer;\n}\n\n.shareLink img {\n    height: 40px; \n    width: 40px;\n}\n\n.shareLink {\n    margin-top: 38%;\n}\n\n#options ul {\n    list-style-type: none;\n    padding: 0;\n    text-align: center;\n}\n\n#options {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 21%;\n    padding: 60px;\n    border-radius: 8px;\n    left: 42%;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\nli {\n    margin-bottom: 34%;\n    text-align: center;\n    font-size: 22px;\n}\n\nli a{\n    text-decoration: none;\n    color: white;\n    font-family: monospace;\n    cursor: pointer;\n}\n\n#cancel{\n    margin-top: 40%;\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    cursor: pointer;\n    color: white;\n    outline: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.dropdownDisplayed {\n    margin-bottom: 0%;\n}\n\n.selectedDifficulty {\n    color: #619600 !important;\n}\n\n.flagging {\n    height: 5px;\n    width: 5px;\n    margin-top: 15px;\n}\n\n.flagged {\n    height: 25px;\n    width: 22px;\n    margin-left: 5px;\n    margin-top: 6px;\n}\n\n.cell p {\n    font-size: 29px;\n    margin-top: 0px;\n    font-family: \"Quicksand\",\"Lucida Grande\",\"Helvetica\",\"Arial\",\"Verdana\",\"sans-serif\";\n}\n\n.one{\n    color: rgb(34, 109, 34);\n}\n\n.two {\n    color: #00AAC4;\n}\n\n.three {\n    color: #DD6B55;\n}\n\n.four {\n    color: #C2A5CF;\n}\n\n.five {\n    color: #BF812D;\n}\n\n.six {\n    color: #66FFFF;\n}\n\n.seven {\n    color: #FFFF99\n}\n\n.eight {\n    color: #FF9900;\n}\n\n#winner {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 26%;\n    padding: 76px;\n    cursor: pointer;\n    border-radius: 8px;\n    left: 37%;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.95);\n}\n\n#winner h2 {\n    color: #f0a554;\n}\n\n#winner h4 {\n    color: #f0a554;\n}\n\n#winner button {\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    color: white;\n    outline: none;\n}\n\n.ticker {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.name {\n    margin-left: 15%;\n    margin-right: 15%;\n}\n\n#timer h2 {\n    color: #619600;\n    border-radius: 5px;\n    padding: 8px;\n    background-image: linear-gradient(#000567, #000cea);\n    box-shadow: 6px 7px 15px black;\n    border: 1px solid black;\n}\n\n#timer h6 {\n    color: #f0a554;\n}\n\n#numMines h6 {\n    color: #f0a554;\n}\n\n#numMines{\n    font-family: monospace;\n    font-size: 19px;\n}\n\n#numMines h2 {\n    color: #619600;\n    box-shadow: 6px 7px 15px black;\n    border-radius: 5px;\n    padding: 8px;\n    background-image: linear-gradient(#000567, #000cea);\n    border: 1px solid black;\n}\n\n#timer{\n    margin-left: 13%;\n    font-family: monospace;\n    font-size: 19px;\n}\n\n.multiplayer {\n    margin-left: 45%;\n    margin-bottom: 0px;\n    color: #619600;\n    margin-top: 1%;\n}\n\n.playerName{\n    color : #f0a554;\n}\n\n.opponentName {\n    color: gray !important;\n}\n\n.opponentLabel {\n    color: black !important;\n    background-image: linear-gradient(gray, gray) !important;\n\n}\n\n.choice {\n    left: 0;\n    right: 0;\n    top: 34%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 500px;\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    padding: 89px;\n    border-radius: 8px;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\n.topScoreItem {\n    margin-bottom: 0% !important;\n    text-align: center;\n    cursor: default;\n    color: #a7a7a7;\n}\n\n#topScores {\n    list-style-type: none;\n    text-align: center;\n    padding-left: 0px;\n    border-radius: 5px;\n    border: 1px solid #777777;\n    cursor: default;\n    background: #0a4848;\n}\n\n.linkToShare {\n    left: 0;\n    right: 0;\n    top: 34%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 700px;\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    padding: 59px;\n    border-radius: 8px;\n    border: 1px solid gray;\n    background-color: rgba(107, 135, 135, 0.9);\n}\n\n.options ul {\n    list-style-type: none;\n    padding: 0;\n    text-align: center;\n}\n\n.options {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 17%;\n    padding: 60px;\n    border-radius: 8px;\n    left: 0;\n    width: 150px;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\n.cancel{\n    margin-top: 35%;\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n}\n\n.emailContainer {\n    margin-top: 3%;\n    text-align: center;\n}\n\n.fullWidth {\n    width: 80%;\n}\n\n.linkToShare button {\n    margin-left: 5%;\n    font-size: 19px;\n    margin-right: 7%;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n}\n\n.linkToShare h6 {\n    font-size: 18px;\n    color: white;\n}\n\n.choiceButton{\n    margin-right: 31px;\n    margin-left: 42px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.choiceButton button{\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    cursor: pointer;\n    color: white;\n    outline: none;\n}\n\n.choiceButton{\n    color: #619600;\n    font-size: 18px;\n}\n\n.choiceButton h5 {\n    position: absolute;\n}\n\n#publicH5 {\n    left : 48%;\n}\n\n@media only screen and (min-width : 1600px){\n    .multiplayer {\n        margin-left: 46% !important;\n    }\n\n    #options {\n        left: 44% !important;\n    }\n}\n\n#waitingForUser {\n    color: white;\n    font-size: 30px;\n}\n\n#waitingForUser:after {\n    overflow: hidden;\n    display: inline-block;\n    vertical-align: bottom;\n    -webkit-animation: ellipsis steps(4,end) 1500ms infinite;\n    animation: ellipsis steps(4,end) 1500ms infinite;\n    content: \"\\2026\";\n    width: 0px;\n}\n\n.hide {\n    display: none;\n}\n\n.hiddenAnimation {\n    -webkit-animation: hideOptions 0.5s 1 ease-in forwards;\n            animation: hideOptions 0.5s 1 ease-in forwards;\n}\n\n@keyframes hideOptions {\n    0% {\n        top : 21%;\n        opacity: 1;\n    }   \n    99% {\n        top: -59%;\n        opacity: 1;\n    }\n    100% {\n        top: -60%;\n        opacity: 0;\n        display: none;\n    }\n}\n\n@-webkit-keyframes hideOptions {\n    0% {\n      top: 21%;\n      opacity: 1;\n    }\n    99% {\n      top: 99%;\n      opacity: 1;\n    }\n    100% {\n      top: 100%;\n      opacity: 0;\n      display: none;\n    }\n}\n\n.cellHover {\n    background-color: rgb(18, 18, 18);\n}\n\n@keyframes ellipsis {\n    to {\n        width: 1.25em;    \n    }\n}\n\n@-webkit-keyframes ellipsis {\n    to {\n        width: 1.25em;    \n    }\n}\n\n.countdown{\n    box-sizing: border-box;\n    height: 200px;\n    border-radius: 50%;\n    padding-top: 2.5%;\n    position: absolute;\n    font-size: 95px;\n    left: 0;\n    background-color: red;\n    right: 0;\n    top: 37%;\n    width: 200px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    -webkit-animation: countdownAnimation 4s linear forwards;\n            animation: countdownAnimation 4s linear forwards;\n}\n\n@-webkit-keyframes countdownAnimation {\n    12.5% {\n        opacity: 0\n    }\n\n    25% {\n        opacity: 1;\n        background-color: orange;\n    }\n    \n    37.5% {\n        opacity: 0;\n    }\n    \n    50% {\n        opacity: 1;\n        background-color: yellow;\n    }\n    \n    62.5% {\n        opacity: 0;\n    }\n    \n    75% {\n        opacity: 1;\n        background-color: green;\n    }\n    \n    87.5% {\n        opacity: 0;\n    }\n    \n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes countdownAnimation {\n    12.5% {\n        opacity: 0\n    }\n\n    25% {\n        opacity: 1;\n        background-color: orange;\n    }\n    \n    37.5% {\n        opacity: 0;\n    }\n    \n    50% {\n        opacity: 1;\n        background-color: yellow;\n    }\n    \n    62.5% {\n        opacity: 0;\n    }\n    \n    75% {\n        opacity: 1;\n        background-color: green;\n    }\n    \n    87.5% {\n        opacity: 0;\n    }\n    \n    100% {\n        opacity: 0;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZXN3ZWVwZXIvbXVsdGkvbXVsdGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7R0FDRyxpQkFBaUI7Q0FDbkI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQ0FBZ0M7Q0FDbkM7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsU0FBUztJQUNULGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix3Q0FBd0M7Q0FDM0M7O0FBSUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJB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LFdBQVc7UUFDWCx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjs7QUFuQ0Q7SUFDSTtRQUNJLFVBQVU7S0FDYjs7SUFFRDtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7S0FDNUI7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxXQUFXO1FBQ1gseUJBQXlCO0tBQzVCOztJQUVEO1FBQ0ksV0FBVztLQUNkOztJQUVEO1FBQ0ksV0FBVztRQUNYLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLFdBQVc7S0FDZDs7SUFFRDtRQUNJLFdBQVc7S0FDZDtDQUNKIiwiZmlsZSI6InNyYy9hcHAvbWluZXN3ZWVwZXIvbXVsdGkvbXVsdGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwbGF5ZXJCb2FyZCwgI29wcG9uZW50Qm9hcmQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXJCb2FyZHtcbiAgIG1hcmdpbi1yaWdodDogMCU7XG59XG5cbi5jZWxse1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwxKTtcbn1cblxuLnVuY292ZXJlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xufVxuXG4udGVzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5taW5lIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG5cbiNyZWZyZXNoe1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMS44JTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5kcm9wZG93biB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2YwYTU1NDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hhcmVMaW5rIGltZyB7XG4gICAgaGVpZ2h0OiA0MHB4OyBcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLnNoYXJlTGluayB7XG4gICAgbWFyZ2luLXRvcDogMzglO1xufVxuXG4jb3B0aW9ucyB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jb3B0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3N3B4IDYxcHggYmxhY2s7XG4gICAgdG9wOiAyMSU7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbGVmdDogNDIlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjkpO1xufVxuXG5cblxubGkge1xuICAgIG1hcmdpbi1ib3R0b206IDM0JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5saSBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjYW5jZWx7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgIzViNWJmZik7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxOHB4IDNweCBibGFjaztcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bkRpc3BsYXllZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG5cbi5zZWxlY3RlZERpZmZpY3VsdHkge1xuICAgIGNvbG9yOiAjNjE5NjAwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGFnZ2luZyB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZmxhZ2dlZCB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uY2VsbCBwIHtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiSGVsdmV0aWNhXCIsXCJBcmlhbFwiLFwiVmVyZGFuYVwiLFwic2Fucy1zZXJpZlwiO1xufVxuXG4ub25le1xuICAgIGNvbG9yOiByZ2IoMzQsIDEwOSwgMzQpO1xufVxuXG4udHdvIHtcbiAgICBjb2xvcjogIzAwQUFDNDtcbn1cblxuLnRocmVlIHtcbiAgICBjb2xvcjogI0RENkI1NTtcbn1cblxuLmZvdXIge1xuICAgIGNvbG9yOiAjQzJBNUNGO1xufVxuXG4uZml2ZSB7XG4gICAgY29sb3I6ICNCRjgxMkQ7XG59XG5cbi5zaXgge1xuICAgIGNvbG9yOiAjNjZGRkZGO1xufVxuXG4uc2V2ZW4ge1xuICAgIGNvbG9yOiAjRkZGRjk5XG59XG5cbi5laWdodCB7XG4gICAgY29sb3I6ICNGRjk5MDA7XG59XG5cbiN3aW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNzdweCA2MXB4IGJsYWNrO1xuICAgIHRvcDogMjYlO1xuICAgIHBhZGRpbmc6IDc2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBsZWZ0OiAzNyU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuOTUpO1xufVxuXG4jd2lubmVyIGgyIHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI3dpbm5lciBoNCB7XG4gICAgY29sb3I6ICNmMGE1NTQ7XG59XG5cbiN3aW5uZXIgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRpY2tlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG4jdGltZXIgaDIge1xuICAgIGNvbG9yOiAjNjE5NjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDA1NjcsICMwMDBjZWEpO1xuICAgIGJveC1zaGFkb3c6IDZweCA3cHggMTVweCBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3RpbWVyIGg2IHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI251bU1pbmVzIGg2IHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI251bU1pbmVze1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4jbnVtTWluZXMgaDIge1xuICAgIGNvbG9yOiAjNjE5NjAwO1xuICAgIGJveC1zaGFkb3c6IDZweCA3cHggMTVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwNTY3LCAjMDAwY2VhKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3RpbWVye1xuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5tdWx0aXBsYXllciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgY29sb3I6ICM2MTk2MDA7XG4gICAgbWFyZ2luLXRvcDogMSU7XG59XG5cbi5wbGF5ZXJOYW1le1xuICAgIGNvbG9yIDogI2YwYTU1NDtcbn1cblxuLm9wcG9uZW50TmFtZSB7XG4gICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cblxuLm9wcG9uZW50TGFiZWwge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChncmF5LCBncmF5KSAhaW1wb3J0YW50O1xuXG59XG5cblxuLmNob2ljZSB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDM0JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNzdweCA2MXB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDg5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjkpO1xufVxuXG5cbi50b3BTY29yZUl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBjb2xvcjogI2E3YTdhNztcbn1cblxuI3RvcFNjb3JlcyB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3Nzc3NztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYmFja2dyb3VuZDogIzBhNDg0ODtcbn1cblxuLmxpbmtUb1NoYXJlIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMzQlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3N3B4IDYxcHggYmxhY2s7XG4gICAgcGFkZGluZzogNTlweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNywgMTM1LCAxMzUsIDAuOSk7XG59XG5cbi5vcHRpb25zIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcHRpb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTc3cHggNjFweCBibGFjaztcbiAgICB0b3A6IDE3JTtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuOSk7XG59XG5cbi5jYW5jZWx7XG4gICAgbWFyZ2luLXRvcDogMzUlO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgIzViNWJmZik7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxOHB4IDNweCBibGFjaztcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5lbWFpbENvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnVsbFdpZHRoIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4ubGlua1RvU2hhcmUgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubGlua1RvU2hhcmUgaDYge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaG9pY2VCdXR0b257XG4gICAgbWFyZ2luLXJpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY2hvaWNlQnV0dG9uIGJ1dHRvbntcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2hvaWNlQnV0dG9ue1xuICAgIGNvbG9yOiAjNjE5NjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNob2ljZUJ1dHRvbiBoNSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jcHVibGljSDUge1xuICAgIGxlZnQgOiA0OCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE2MDBweCl7XG4gICAgLm11bHRpcGxheWVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ2JSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICNvcHRpb25zIHtcbiAgICAgICAgbGVmdDogNDQlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4jd2FpdGluZ0ZvclVzZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cblxuI3dhaXRpbmdGb3JVc2VyOmFmdGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBlbGxpcHNpcyBzdGVwcyg0LGVuZCkgMTUwMG1zIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogZWxsaXBzaXMgc3RlcHMoNCxlbmQpIDE1MDBtcyBpbmZpbml0ZTtcbiAgICBjb250ZW50OiBcIlxcMjAyNlwiO1xuICAgIHdpZHRoOiAwcHg7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5oaWRkZW5BbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbjogaGlkZU9wdGlvbnMgMC41cyAxIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cblxuQGtleWZyYW1lcyBoaWRlT3B0aW9ucyB7XG4gICAgMCUge1xuICAgICAgICB0b3AgOiAyMSU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfSAgIFxuICAgIDk5JSB7XG4gICAgICAgIHRvcDogLTU5JTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRvcDogLTYwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBoaWRlT3B0aW9ucyB7XG4gICAgMCUge1xuICAgICAgdG9wOiAyMSU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5OSUge1xuICAgICAgdG9wOiA5OSU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuXG4uY2VsbEhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE4LCAxOCk7XG59XG5cbkBrZXlmcmFtZXMgZWxsaXBzaXMge1xuICAgIHRvIHtcbiAgICAgICAgd2lkdGg6IDEuMjVlbTsgICAgXG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZWxsaXBzaXMge1xuICAgIHRvIHtcbiAgICAgICAgd2lkdGg6IDEuMjVlbTsgICAgXG4gICAgfVxufVxuXG4uY291bnRkb3due1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZy10b3A6IDIuNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogOTVweDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDM3JTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBhbmltYXRpb246IGNvdW50ZG93bkFuaW1hdGlvbiA0cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgY291bnRkb3duQW5pbWF0aW9uIHtcbiAgICAxMi41JSB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG5cbiAgICAyNSUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgfVxuICAgIFxuICAgIDM3LjUlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgXG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIH1cbiAgICBcbiAgICA2Mi41JSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIFxuICAgIDc1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICBcbiAgICA4Ny41JSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIFxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/minesweeper/multi/multi.component.html":
/*!********************************************************!*\
  !*** ./src/app/minesweeper/multi/multi.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-minesweeper-header></app-minesweeper-header>\n<div id = 'container'>\n  <div id = 'playerBoard'>\n\n      <div class = 'ticker' id = 'numMines'>\n        <h2>{{minesweeper.numMines}}</h2>\n        <h6>Mines Remaining</h6>\n      </div>\n  \n      <div *ngFor = 'let row of minesweeper.gameArray; index as i' class = 'row'>\n        \n        <div *ngFor = 'let column of minesweeper.gameArray; index as j' \n        class = 'cell'\n        (click) = 'uncover(i,j)'\n        (mouseenter) = 'hoverOnCell(i, j)'\n        (mouseleave) = 'mouseLeaveCell()'\n        [ngClass]= \"{'uncovered' : minesweeper.gameArray[i][j].clicked && !minesweeper.gameArray[i][j].mine, 'cellHover' : hoveredCell[0] == i && hoveredCell[1] == j && !minesweeper.gameArray[i][j].clicked}\">\n        \n        <p *ngIf = 'minesweeper.gameArray[i][j].clicked && \n        !minesweeper.gameArray[i][j].mine && \n        minesweeper.gameArray[i][j].adjacentMines > 0'\n        [ngClass] = \"colorCode[minesweeper.gameArray[i][j].adjacentMines]\"\n        >{{minesweeper.gameArray[i][j].adjacentMines}}</p>\n        \n        <img *ngIf = 'minesweeper.gameArray[i][j].clicked && \n        minesweeper.gameArray[i][j].mine'\n        src = '../assets/download.png' class = 'mine'>\n    \n        <img *ngIf = 'flaggingEnabled && \n        !minesweeper.gameArray[i][j].clicked &&\n        !minesweeper.gameArray[i][j].flagged'\n        src = '../assets/flagging.png'\n        class = 'flagging'>\n    \n        <img *ngIf = '!minesweeper.gameArray[i][j].clicked &&\n        minesweeper.gameArray[i][j].flagged' \n        src = '../assets/flag2.png'\n        class = 'flagged'>\n        \n      </div>\n    </div>\n  \n    </div>\n  \n    \n    <div class = 'dropdown'>\n      <a (click) = 'displayShareWindow()' class = 'shareLink'><img src = '../assets/link2.png'></a>\n    </div>\n  \n    <div class = 'linkToShare' [ngClass] = \"{'hide' : initialLoad || !shareWindowDisplay}\">\n      <h3>Share this link with a friend to start the game</h3>\n      <h6>{{linkToShare}}</h6>\n      <button (click) = 'closeShareWindow()'>Close</button>\n      <button (click) = 'copyToClipboard(linkToShare)'>Copy to Clipboard</button>\n      <button (click) = 'sendEmailTo()'>Share Via Email</button>\n      <br>\n      <div class = 'emailContainer'>\n        <mat-form-field  class = 'fullWidth' >\n            <input [(ngModel)] = 'friendEmail' matInput  placeholder=\"Email Address\" name = 'Email_Address'>\n          </mat-form-field>\n      </div>\n    </div>\n  \n    \n  \n    <div id = 'opponentBoard' *ngIf = 'opponentBoard'>\n      \n      <div class = 'ticker' id = 'numMines'>\n        <h2 class = 'opponentLabel' >{{opponentBoard.numMines}}</h2>\n        <h6 class = 'opponentName'>Mines Remaining</h6>\n      </div>\n  \n        <div *ngIf = 'otherUser'>\n          <div *ngFor = 'let row of opponentBoard.gameArray; index as i' class = 'row'>\n            \n            <div *ngFor = 'let column of opponentBoard.gameArray; index as j' \n              class = 'cell'\n              [ngClass]= \"{'uncovered' : opponentBoard.gameArray[i][j].clicked && !opponentBoard.gameArray[i][j].mine}\">\n              \n              <p *ngIf = 'opponentBoard.gameArray[i][j].clicked && \n              !opponentBoard.gameArray[i][j].mine && \n              opponentBoard.gameArray[i][j].adjacentMines > 0'\n              >{{opponentBoard.gameArray[i][j].adjacentMines}}</p>\n              \n              <img *ngIf = 'opponentBoard.gameArray[i][j].clicked && \n              opponentBoard.gameArray[i][j].mine'\n              src = '../assets/download.png' class = 'mine'>\n          \n              <img *ngIf = '!opponentBoard.gameArray[i][j].clicked &&\n              opponentBoard.gameArray[i][j].flagged' \n              src = '../assets/flag2.png'\n              class = 'flagged'>\n            \n            </div>\n          </div>\n        </div>\n\n        <h2 *ngIf = '!otherUser && userChose' id = 'waitingForUser'>Waiting for another player</h2>\n      \n      </div>\n</div>\n    \n  <div id = 'winner' *ngIf = 'minesweeper.winner'>\n      <h2>Awww yeah!! :)</h2>\n      <h4>Nice work! Your time was: {{minesweeper.gamePlayTime}} seconds</h4>\n      <h4>Top scores for {{difficulty}}</h4>\n      <ul id = 'topScores'>\n        <li *ngFor = 'let score of topScores' class = 'topScoreItem'>{{score.time}} s</li>\n      </ul>\n      <button (click) = 'reset()' >Play again</button>\n  </div>\n\n\n\n  <div *ngIf = '!userChose' class = 'choice'>\n    <div class = 'choiceButton'>\n      <button (mouseenter) = 'mouseEnter(\"private\")'\n      (mouseleave) = 'mouseLeave()'\n      (click) = 'choosePrivateGame()'>Private Game</button>\n      <h5 *ngIf = 'hoveredButton == \"private\"'>Invite a friend to play</h5>\n  </div>\n\n    <div class = 'choiceButton'>\n      <button (mouseenter) = 'mouseEnter(\"public\")'\n      (mouseleave) = 'mouseLeave()'\n      (click) = 'choosePublicGame()'>Public Game</button>\n      <h5 id = 'publicH5' *ngIf = 'hoveredButton == \"public\"'>You are randomly assigned an opponent</h5>\n    </div>\n  </div>\n\n\n  <div class = 'options' *ngIf = '!dropdownHidden'>\n    <h3>Choose a difficulty</h3>\n      <ul>\n        <li><a (click) = 'changeDiff(\"expert\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'expert'}\" >Expert</a></li>\n        <li><a (click) = 'changeDiff(\"hard\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'hard'}\" >Hard</a></li>\n        <li><a (click) = 'changeDiff(\"normal\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'normal'}\" >Normal</a></li>\n        <li><a (click) = 'changeDiff(\"easy\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'easy'}\" >Easy</a></li>\n        <li><a (click) = 'changeDiff(\"beginner\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'beginner'}\" >Beginner</a></li>\n      </ul>\n      <button (click) = 'confirmDiff()' class = 'cancel'>Ok</button>\n  </div>\n\n  <div class = 'options' *ngIf = 'minesweeper.gameOver && !minesweeper.winner'>\n    <h3>Game Over :(</h3>\n    <h3>Please wait for opponent to finish their game</h3>\n  </div>\n\n  \n<app-minesweeper-footer></app-minesweeper-footer>\n"

/***/ }),

/***/ "./src/app/minesweeper/multi/multi.component.ts":
/*!******************************************************!*\
  !*** ./src/app/minesweeper/multi/multi.component.ts ***!
  \******************************************************/
/*! exports provided: MultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiComponent", function() { return MultiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _minesweeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minesweeper */ "./src/app/minesweeper/minesweeper.ts");
/* harmony import */ var _minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../minesweeper-header/minesweeper-header.component */ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

//Imports








var MultiComponent = /** @class */ (function () {
    function MultiComponent(_component, _route, _http, _titleService) {
        this._component = _component;
        this._route = _route;
        this._http = _http;
        this._titleService = _titleService;
        this.diffConfirmed = false;
        this.userChose = false;
        this.hoveredCell = [-1, -1];
        this.initialLoad = true;
        this.friendEmail = "";
        this.firstUserToPublic = false;
        this.setTitle();
    }
    MultiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"]('easy', 'multi');
        this._route.params.subscribe(function (params) {
            if (params['id']) {
                _this.userChose = true;
                _this.roomID = params['id'];
                _this.connectToPrivateRoom();
            }
        });
        this.dropdownHidden = true;
        this.difficulty = "easy";
        this.flaggingEnabled = false;
        this.otherUser = false;
        this.colorCode = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight'
        };
        this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"]('easy', 'multi');
    };
    //minesweeper game logic functions
    MultiComponent.prototype.uncover = function (i, j) {
        if (this.flaggingEnabled && this.otherUser) {
            this._component.gameStarted = true;
            this.minesweeper.flag(i, j);
            this.socket.emit('clicked', { board: this.minesweeper, id: this.roomID });
            if (this.minesweeper.winner) {
                var self = this;
                if (this._component.user) {
                    this._component.gameStarted = false;
                    var postObj = { userID: this._component.user, difficulty: this.minesweeper.difficulty, time: this.minesweeper.gamePlayTime };
                    var obs = this._http.saveSinglePlayerGame(postObj);
                    obs.subscribe(function (data) {
                    });
                }
                var topScores = this._http.getGlobalScores(this.minesweeper.difficulty);
                console.log('getting scores');
                topScores.subscribe(function (data) {
                    console.log(data);
                    self.topScores = data.data;
                });
            }
        }
        else if (this.otherUser) {
            this._component.gameStarted = true;
            this.minesweeper.uncover(i, j);
            this.socket.emit('clicked', { board: this.minesweeper, id: this.roomID });
        }
    };
    MultiComponent.prototype.reset = function () {
        this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](this.difficulty, 'multi');
        this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](this.difficulty, 'multi');
        this.socket.emit('reset', { roomID: this.roomID });
        this.flaggingEnabled = false;
    };
    MultiComponent.prototype.changeDiff = function (diff) {
        this.difficulty = diff;
        if (this.otherUser) {
            this.socket.emit('difficulty', { room: this.roomID, difficulty: this.difficulty });
        }
        this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](this.difficulty, 'multi');
        this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](this.difficulty, 'multi');
    };
    MultiComponent.prototype.confirmDiff = function () {
        this.diffConfirmed = true;
        this.toggleDifficultyWindow();
    };
    //this method toggles the users ability to place flags
    MultiComponent.prototype.handleKeyBoardEvent = function (event) {
        if (event.key == 'f' && this.otherUser) {
            this.flaggingEnabled = !this.flaggingEnabled;
        }
    };
    //socket room functions
    //this is for the user who initially connects
    MultiComponent.prototype.choosePrivateGame = function () {
        var _this = this;
        this.gameMode = 'private';
        this.initialLoad = false;
        this.userChose = true;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__();
        this.socket.on('welcome', function (data) {
            _this.socket.emit("userChosePrivateRoom", data.roomID);
            _this.roomID = data.roomID;
            _this.IP = data.address;
            _this.shareWindowDisplay = true;
            _this.linkToShare = 'http://ben-bauer.net/room/' + data.roomID;
        });
        this.socket.on('gameStarted', function () {
            _this.otherUser = true;
            _this.socket.emit('difficulty', { room: _this.roomID, difficulty: _this.difficulty });
        });
        this.socket.on('clicked', function (data) {
            _this.opponentBoard = data;
            console.log(data);
            if (data.gameOver && !data.winner && _this.minesweeper.gameOver) {
                _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
                _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
                _this.socket.emit('reset', { roomID: _this.roomID });
            }
        });
        this.socket.on('disconnect', function () {
            _this.otherUser = false;
            _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
            _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
        });
        this.socket.on('reset', function () {
            console.log('reset');
            _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
            _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
        });
    };
    //this is for the user who was invited to play
    MultiComponent.prototype.connectToPrivateRoom = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__();
        console.log(this.roomID);
        this.socket.on('welcome', function () {
            _this.socket.emit('connectToPrivateRoom', _this.roomID);
        });
        this.socket.on('gameStarted', function () {
            _this.otherUser = true;
        });
        this.socket.on('difficulty', function (data) {
            _this.difficulty = data;
            _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
            _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
        });
        this.socket.on('clicked', function (data) {
            _this.opponentBoard = data;
            console.log(data);
            if (data.gameOver && !data.winner && _this.minesweeper.gameOver) {
                _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
                _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
                _this.socket.emit('reset', { roomID: _this.roomID });
            }
        });
        this.socket.on('reset', function () {
            _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
            _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
        });
        this.socket.on('disconnect', function () {
            _this.otherUser = false;
            _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
            _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
        });
    };
    MultiComponent.prototype.choosePublicGame = function () {
        var _this = this;
        this.initialLoad = false;
        this.userChose = true;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__();
        this.socket.on('welcome', function () {
            _this.socket.emit('connectToPublicRoom');
        });
        this.socket.on('welcomeToPublic', function (data) {
            _this.roomID = data.id;
            if (data.numUsers == 2) {
                if (_this.firstUserToPublic) {
                    _this.socket.emit('difficulty', { room: _this.roomID, difficulty: _this.difficulty });
                }
                _this.otherUser = true;
            }
            else {
                _this.toggleDifficultyWindow();
                _this.firstUserToPublic = true;
            }
        });
        this.socket.on('difficulty', function (data) {
            _this.difficulty = data;
            _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
            _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
        });
        this.socket.on('clicked', function (data) {
            _this.opponentBoard = data;
            console.log(data);
            if (data.gameOver && !data.winner && _this.minesweeper.gameOver) {
                _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
                _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
                _this.socket.emit('reset', { roomID: _this.roomID });
            }
        });
        this.socket.on('reset', function () {
            _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
            _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
        });
        this.socket.on('disconnect', function () {
            _this.otherUser = false;
            _this.opponentBoard = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
            _this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](_this.difficulty, 'multi');
        });
    };
    //sharing link functions
    MultiComponent.prototype.copyToClipboard = function (val) {
        this.shareWindowDisplay = false;
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toggleDifficultyWindow();
    };
    MultiComponent.prototype.sendEmailTo = function () {
        var obj = { link: this.linkToShare, email: this.friendEmail };
        var obs = this._http.sendEmailTo(obj);
        obs.subscribe(function (data) {
        });
        this.shareWindowDisplay = false;
        this.friendEmail = '';
        this.toggleDifficultyWindow();
    };
    //mouse hovering functions
    MultiComponent.prototype.mouseEnter = function (buttonName) {
        this.hoveredButton = buttonName;
    };
    MultiComponent.prototype.mouseLeave = function () {
        this.hoveredButton = "";
    };
    MultiComponent.prototype.hoverOnCell = function (i, j) {
        this.hoveredCell = [i, j];
    };
    MultiComponent.prototype.mouseLeaveCell = function () {
        this.hoveredCell = [-1, -1];
    };
    //various pop up window display functions
    MultiComponent.prototype.closeShareWindow = function () {
        this.shareWindowDisplay = false;
        this.toggleDifficultyWindow();
    };
    MultiComponent.prototype.displayShareWindow = function () {
        if (this.gameMode == 'private') {
            this.shareWindowDisplay = true;
        }
    };
    MultiComponent.prototype.closeGoWindow = function () {
        this.diffConfirmed = false;
    };
    MultiComponent.prototype.toggleDifficultyWindow = function () {
        this.dropdownHidden = !this.dropdownHidden;
    };
    MultiComponent.prototype.setTitle = function () {
        this._titleService.setTitle("Minesweeper");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MultiComponent.prototype, "handleKeyBoardEvent", null);
    MultiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi',
            template: __webpack_require__(/*! ./multi.component.html */ "./src/app/minesweeper/multi/multi.component.html"),
            styles: [__webpack_require__(/*! ./multi.component.css */ "./src/app/minesweeper/multi/multi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_3__["MinesweeperHeaderComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
    ], MultiComponent);
    return MultiComponent;
}());



/***/ }),

/***/ "./src/app/minesweeper/single/single.component.css":
/*!*********************************************************!*\
  !*** ./src/app/minesweeper/single/single.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gameBoard{\n    margin: 10px 50px 7px 3%;\n    width: 85%;\n    text-align: center;\n    padding: 50px;\n}\n\n.cell{\n    display: inline-block;\n    vertical-align: top;\n    height: 35px;\n    margin: 1px;\n    border-radius: 3px;\n    width: 35px;\n    background-color: rgba(0,0,0,1);\n}\n\n.cellHover {\n    background-color: rgb(18, 18, 18);\n}\n\n.exploded {\n    background-color: gray;\n}\n\n@-webkit-keyframes uncover {\n    from {background-color: black}\n    to {background-color: #353535}\n}\n\n@keyframes uncover {\n    from {background-color: black}\n    to {background-color: #353535}\n}\n\n.uncovered{\n    -webkit-animation-name: uncover;\n            animation-name: uncover;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    background-color: #353535;\n}\n\n.mine {\n    height: 30px;\n    width: 30px;\n    margin-top: 2px;\n}\n\n.refresh{\n    margin-bottom: 0%;\n    width: 40px;\n    margin-left: 45.6%;\n    height: 40px;\n    cursor: pointer;\n}\n\n#info {\n    margin-left: 1% !important;\n}\n\n.infoButton {\n    margin-top: 26% !important;\n}\n\n.dropdown {\n    font-size: 23px;\n    margin-top: 2%;\n    text-decoration: none;\n    color: #f0a554;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.options ul {\n    list-style-type: none;\n    padding: 0;\n    text-align: center;\n}\n\n.options {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 21%;\n    padding: 60px;\n    border-radius: 8px;\n    left: 42%;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\n.topScoreItem {\n    margin-bottom: 0% !important;\n    text-align: center;\n    cursor: default;\n    color: #a7a7a7;\n}\n\n#topScores {\n    list-style-type: none;\n    text-align: center;\n    padding-left: 0px;\n    border-radius: 5px;\n    border: 1px solid #777777;\n    cursor: default;\n    background: #0a4848;\n}\n\nli {\n    margin-bottom: 34%;\n    text-align: center;\n    font-size: 22px;\n}\n\nli a{\n    text-decoration: none;\n    color: white;\n    font-family: monospace;\n    cursor: pointer;\n}\n\n.cancel{\n    margin-top: 40%;\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n}\n\n.info {\n    width: 500px !important;\n    left: 32% !important;\n    top: 28% !important;\n}\n\n.info p {\n    line-height: 35px;\n    color : #b5b5b5;\n}\n\n.info h2 {\n    color: #b5b5b5;\n}\n\n.hide {\n    display: none;\n}\n\n.hiddenAnimation {\n    -webkit-animation: hideOptions 0.5s 1 ease-in forwards;\n            animation: hideOptions 0.5s 1 ease-in forwards;\n}\n\n@keyframes hideOptions {\n    0% {\n        top : 21%;\n        opacity: 1;\n    }   \n    99% {\n        top: -59%;\n        opacity: 1;\n    }\n    100% {\n        top: -60%;\n        opacity: 0;\n        display: none;\n    }\n}\n\n@-webkit-keyframes hideOptions {\n    0% {\n      top: 21%;\n      opacity: 1;\n    }\n    99% {\n      top: 99%;\n      opacity: 1;\n    }\n    100% {\n      top: 100%;\n      opacity: 0;\n      display: none;\n    }\n}\n\n.showAnimation {\n    -webkit-animation: showOptions 1s 1 ease-in  forwards ;\n            animation: showOptions 1s 1 ease-in  forwards ;\n}\n\n@-webkit-keyframes showOptions {\n    0% {\n        opacity: 0;\n    }\n    99% {\n        opacity: 0.99;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes showOptions {\n    0% {\n        opacity: 0;\n    }\n    99% {\n        opacity: 0.99;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.dropdownDisplayed {\n    margin-bottom: 0%;\n}\n\n.selectedDifficulty {\n    color: #619600 !important;\n}\n\n.flagging {\n    height: 5px;\n    width: 5px;\n    margin-top: 15px;\n}\n\n.flagged {\n    height: 25px;\n    width: 22px;\n    margin-left: 5px;\n    margin-top: 6px;\n}\n\n.cell p {\n    font-size: 29px;\n    margin-top: 0px;\n    font-family: \"Quicksand\",\"Lucida Grande\",\"Helvetica\",\"Arial\",\"Verdana\",\"sans-serif\";\n}\n\n.one{\n    color: rgb(34, 109, 34);\n}\n\n.two {\n    color: #00AAC4;\n}\n\n.three {\n    color: #DD6B55;\n}\n\n.four {\n    color: #C2A5CF;\n}\n\n.five {\n    color: #BF812D;\n}\n\n.six {\n    color: #66FFFF;\n}\n\n.seven {\n    color: #FFFF99\n}\n\n.eight {\n    color: #FF9900;\n}\n\n#winner {\n    width: 200px;\n    margin-right: auto;\n    right: 0;\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 26%;\n    padding: 76px;\n    margin-left: auto;\n    border-radius: 8px;\n    left: 0;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.95);\n}\n\n#winner h2 {\n    color: #f0a554;\n}\n\n#winner h4 {\n    color: #f0a554;\n}\n\n#winner button {\n    cursor: pointer;\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    color: white;\n    outline: none;\n}\n\n.ticker {\n    display: inline-block;\n    vertical-align: top;\n}\n\n#timer h2 {\n    color: #619600;\n    border-radius: 5px;\n    padding: 8px;\n    background-image: linear-gradient(#000567, #000cea);\n    box-shadow: 6px 7px 15px black;\n    border: 1px solid black;\n}\n\n#timer h6 {\n    color: #f0a554;\n}\n\n#numMines h6 {\n    color: #f0a554;\n}\n\n#numMines{\n    font-family: monospace;\n    font-size: 19px;\n}\n\n#numMines h2 {\n    color: #619600;\n    box-shadow: 6px 7px 15px black;\n    border-radius: 5px;\n    padding: 8px;\n    background-image: linear-gradient(#000567, #000cea);\n    border: 1px solid black;\n}\n\n#timer{\n    margin-left: 20%;\n    font-family: monospace;\n    font-size: 19px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZXN3ZWVwZXIvc2luZ2xlL3NpbmdsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLGtDQUFrQztDQUNyQzs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsSUFBSSx5QkFBeUIsQ0FBQztDQUNqQzs7QUFIRDtJQUNJLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsSUFBSSx5QkFBeUIsQ0FBQztDQUNqQzs7QUFFRDtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QiwwQkFBMEI7Q0FDN0I7O0FBR0Q7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsU0FBUztJQUNULGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix3Q0FBd0M7Q0FDM0M7O0FB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OztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL21pbmVzd2VlcGVyL3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNnYW1lQm9hcmR7XG4gICAgbWFyZ2luOiAxMHB4IDUwcHggN3B4IDMlO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5jZWxse1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwxKTtcbn1cblxuLmNlbGxIb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOCwgMTgpO1xufVxuXG4uZXhwbG9kZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbkBrZXlmcmFtZXMgdW5jb3ZlciB7XG4gICAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogYmxhY2t9XG4gICAgdG8ge2JhY2tncm91bmQtY29sb3I6ICMzNTM1MzV9XG59XG5cbi51bmNvdmVyZWR7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHVuY292ZXI7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG59XG5cblxuLm1pbmUge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG5cblxuLnJlZnJlc2h7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1LjYlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNpbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMSUgIWltcG9ydGFudDtcbn1cblxuLmluZm9CdXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDI2JSAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24ge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmMGE1NTQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9wdGlvbnMgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9wdGlvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNzdweCA2MXB4IGJsYWNrO1xuICAgIHRvcDogMjElO1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGxlZnQ6IDQyJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC45KTtcbn1cblxuLnRvcFNjb3JlSXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGNvbG9yOiAjYTdhN2E3O1xufVxuXG4jdG9wU2NvcmVzIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3Nzc3O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kOiAjMGE0ODQ4O1xufVxuXG5saSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzQlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbmxpIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhbmNlbHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibHVlLCAjNWI1YmZmKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE4cHggM3B4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmluZm8ge1xuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDMyJSAhaW1wb3J0YW50O1xuICAgIHRvcDogMjglICFpbXBvcnRhbnQ7XG59XG5cbi5pbmZvIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGNvbG9yIDogI2I1YjViNTtcbn1cblxuLmluZm8gaDIge1xuICAgIGNvbG9yOiAjYjViNWI1O1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbkFuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uOiBoaWRlT3B0aW9ucyAwLjVzIDEgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuXG5Aa2V5ZnJhbWVzIGhpZGVPcHRpb25zIHtcbiAgICAwJSB7XG4gICAgICAgIHRvcCA6IDIxJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9ICAgXG4gICAgOTklIHtcbiAgICAgICAgdG9wOiAtNTklO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdG9wOiAtNjAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGhpZGVPcHRpb25zIHtcbiAgICAwJSB7XG4gICAgICB0b3A6IDIxJTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDk5JSB7XG4gICAgICB0b3A6IDk5JTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5cbi5zaG93QW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IHNob3dPcHRpb25zIDFzIDEgZWFzZS1pbiAgZm9yd2FyZHMgO1xufVxuXG5Aa2V5ZnJhbWVzIHNob3dPcHRpb25zIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDk5JSB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuXG4uZHJvcGRvd25EaXNwbGF5ZWQge1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xufVxuXG4uc2VsZWN0ZWREaWZmaWN1bHR5IHtcbiAgICBjb2xvcjogIzYxOTYwMCAhaW1wb3J0YW50O1xufVxuXG4uZmxhZ2dpbmcge1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmZsYWdnZWQge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjJweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmNlbGwgcCB7XG4gICAgZm9udC1zaXplOiAyOXB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIixcIkx1Y2lkYSBHcmFuZGVcIixcIkhlbHZldGljYVwiLFwiQXJpYWxcIixcIlZlcmRhbmFcIixcInNhbnMtc2VyaWZcIjtcbn1cblxuLm9uZXtcbiAgICBjb2xvcjogcmdiKDM0LCAxMDksIDM0KTtcbn1cblxuLnR3byB7XG4gICAgY29sb3I6ICMwMEFBQzQ7XG59XG5cbi50aHJlZSB7XG4gICAgY29sb3I6ICNERDZCNTU7XG59XG5cbi5mb3VyIHtcbiAgICBjb2xvcjogI0MyQTVDRjtcbn1cblxuLmZpdmUge1xuICAgIGNvbG9yOiAjQkY4MTJEO1xufVxuXG4uc2l4IHtcbiAgICBjb2xvcjogIzY2RkZGRjtcbn1cblxuLnNldmVuIHtcbiAgICBjb2xvcjogI0ZGRkY5OVxufVxuXG4uZWlnaHQge1xuICAgIGNvbG9yOiAjRkY5OTAwO1xufVxuXG4jd2lubmVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNzdweCA2MXB4IGJsYWNrO1xuICAgIHRvcDogMjYlO1xuICAgIHBhZGRpbmc6IDc2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuOTUpO1xufVxuXG4jd2lubmVyIGgyIHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI3dpbm5lciBoNCB7XG4gICAgY29sb3I6ICNmMGE1NTQ7XG59XG5cbiN3aW5uZXIgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibHVlLCAjNWI1YmZmKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE4cHggM3B4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi50aWNrZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4jdGltZXIgaDIge1xuICAgIGNvbG9yOiAjNjE5NjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDA1NjcsICMwMDBjZWEpO1xuICAgIGJveC1zaGFkb3c6IDZweCA3cHggMTVweCBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3RpbWVyIGg2IHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI251bU1pbmVzIGg2IHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI251bU1pbmVze1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4jbnVtTWluZXMgaDIge1xuICAgIGNvbG9yOiAjNjE5NjAwO1xuICAgIGJveC1zaGFkb3c6IDZweCA3cHggMTVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwNTY3LCAjMDAwY2VhKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3RpbWVye1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/minesweeper/single/single.component.html":
/*!**********************************************************!*\
  !*** ./src/app/minesweeper/single/single.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-minesweeper-header></app-minesweeper-header>\n<div id = 'gameBoard'>\n  \n  <div class = 'ticker' id = 'numMines'>\n    <h2>{{minesweeper.numMines}}</h2>\n    <h6>Mines Remaining</h6>\n  </div>\n\n  <div class = 'ticker' id = 'timer'>\n    <h2>{{minesweeper.displayedTime}}</h2>\n    <h6>Current Game Time</h6>\n  </div>\n\n  <div *ngFor = 'let row of minesweeper.gameArray; index as i' class = 'row'>\n    \n    <div *ngFor = 'let column of minesweeper.gameArray; index as j' \n    class = 'cell'\n    (click) = 'uncover(i,j)'\n    (mouseenter) = 'mouseEnter(i, j)'\n    (mouseleave) = 'mouseLeave()'\n    [ngClass]= \"{'uncovered' : minesweeper.gameArray[i][j].clicked && !minesweeper.gameArray[i][j].mine, 'cellHover' : hoveredCell[0] == i && hoveredCell[1] == j && !minesweeper.gameArray[i][j].clicked}\">\n    \n    <p *ngIf = 'minesweeper.gameArray[i][j].clicked && \n    !minesweeper.gameArray[i][j].mine && \n    minesweeper.gameArray[i][j].adjacentMines > 0'\n    [ngClass] = \"colorCode[minesweeper.gameArray[i][j].adjacentMines]\"\n    >{{minesweeper.gameArray[i][j].adjacentMines}}</p>\n    \n    <img *ngIf = 'minesweeper.gameArray[i][j].clicked && \n    minesweeper.gameArray[i][j].mine'\n    src = '../assets/download.png' class = 'mine'>\n\n    <img *ngIf = 'flaggingEnabled && \n    !minesweeper.gameArray[i][j].clicked &&\n    !minesweeper.gameArray[i][j].flagged'\n    src = '../assets/flagging.png'\n    class = 'flagging'>\n\n    <img *ngIf = '!minesweeper.gameArray[i][j].clicked &&\n    minesweeper.gameArray[i][j].flagged' \n    src = '../assets/flag2.png'\n    class = 'flagged'>\n    \n  </div>\n</div>\n\n  <a class = 'dropdown' (click) = 'toggleDropdown()' [ngClass] = \"{'dropdownDisplayed' : !dropdownHidden}\"><div class = 'dropdown'>Game Options</div></a>\n  <div class = 'options' [ngClass] = \"{'hiddenAnimation' : dropdownHidden, 'hide' : initialDropdownLoad, 'showAnimation' : !dropdownHidden}\">\n    <ul>\n      <li><a (click) = 'changeDiff(\"expert\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'expert'}\" >Expert</a></li>\n      <li><a (click) = 'changeDiff(\"hard\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'hard'}\" >Hard</a></li>\n      <li><a (click) = 'changeDiff(\"normal\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'normal'}\" >Normal</a></li>\n      <li><a (click) = 'changeDiff(\"easy\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'easy'}\" >Easy</a></li>\n      <li><a (click) = 'changeDiff(\"beginner\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'beginner'}\" >Beginner</a></li>\n    </ul>\n    <button (click) = 'toggleDropdown()' class = 'cancel'>Cancel</button>\n  </div>\n\n</div>\n\n<div id = 'winner' *ngIf = 'minesweeper.winner'>\n  <h2>Awww yeah!! :)</h2>\n  <h4>Nice work! Your time was: {{minesweeper.gamePlayTime}} seconds</h4>\n  <h4>Top scores for {{difficulty}}</h4>\n  <ul *ngIf = 'topScores' id = 'topScores'>\n    <li *ngFor = 'let score of topScores' class = 'topScoreItem'>{{score.time}} s</li>\n  </ul>\n  <button (click) = 'reset()' >Play again</button>\n</div>\n\n<div [ngClass] = \"{'hiddenAnimation' : !infoPopUp, 'hide' : initialPopUpLoad, 'showAnimation' : infoPopUp}\" class = 'options info'>\n  <h2>Welcome to minesweeper!</h2>\n  <p>Find all of the buried mines to win the game, but be careful to not step on them!\n    Instead, flag them by pressing the 'F' key and clicking where you think they are.\n    Numbered cells tell you how many mines are adjacent (including diagonals).\n    Hit the green refresh button to start a new game, and select 'Options' if you'd like to change the difficulty.\n    Good luck!\n  </p>\n  <button (click) = 'displayInfo()' class = 'cancel infoButton'>Ok, I got it</button>\n</div>\n\n<a (click) = 'reset()'><img class = 'refresh' src = '../assets//refresh.png'></a>\n<a (click) = 'displayInfo()'><img id = 'info' class = 'refresh' src = '../assets/information-icon-3.png'></a>\n\n<app-minesweeper-footer></app-minesweeper-footer>"

/***/ }),

/***/ "./src/app/minesweeper/single/single.component.ts":
/*!********************************************************!*\
  !*** ./src/app/minesweeper/single/single.component.ts ***!
  \********************************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _minesweeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minesweeper */ "./src/app/minesweeper/minesweeper.ts");
/* harmony import */ var _minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../minesweeper-header/minesweeper-header.component */ "./src/app/minesweeper/minesweeper-header/minesweeper-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");







var SingleComponent = /** @class */ (function () {
    function SingleComponent(_component, _route, _http) {
        this._component = _component;
        this._route = _route;
        this._http = _http;
        this.dropdownHidden = true;
        this.flaggingEnabled = false;
        this.hoveredCell = [-1, -1];
        this.initialDropdownLoad = true;
        this.initialPopUpLoad = true;
        this.infoPopUp = false;
    }
    SingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            if (params['newUserID']) {
                _this._component.user = params['newUserID'];
            }
            else if (params['returningUserID']) {
                _this._component.user = params['returningUserID'];
            }
        });
        this.difficulty = "easy";
        this.colorCode = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight'
        };
        this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"]('easy', 'single');
    };
    SingleComponent.prototype.uncover = function (i, j) {
        var _this = this;
        this._component.gameStarted = true;
        if (this.flaggingEnabled) {
            this.minesweeper.flag(i, j);
        }
        else {
            this.minesweeper.uncover(i, j);
        }
        // console.log(this._component.gameStarted)
        // console.log(this.minesweeper.winner)
        var self = this;
        if (this.minesweeper.winner && this._component.gameStarted) {
            this._component.gameStarted = false;
            // console.log('line 75')
            var postObj = { userID: undefined, difficulty: this.minesweeper.difficulty, time: this.minesweeper.gamePlayTime };
            if (this._component.user) {
                postObj.userID = this._component.user;
                var obs = this._http.saveSinglePlayerGame(postObj);
                obs.subscribe(function (data) {
                    var topScoresObs = _this._http.getGlobalScores(_this.difficulty);
                    // console.log('getting scores')
                    topScoresObs.subscribe(function (data) {
                        // console.log(data)
                        self.topScores = data.data;
                    });
                });
            }
            else {
                // console.log(postObj)
                var obs = this._http.saveSinglePlayerGame(postObj);
                obs.subscribe(function (data) {
                    var topScoresObs = _this._http.getGlobalScores(_this.difficulty);
                    // console.log('getting scores')
                    topScoresObs.subscribe(function (data) {
                        // console.log(data)
                        self.topScores = data.data;
                    });
                });
            }
        }
    };
    SingleComponent.prototype.reset = function () {
        this._component.gameStarted = false;
        this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](this.difficulty, 'single');
        this.flaggingEnabled = false;
    };
    SingleComponent.prototype.toggleDropdown = function () {
        this.initialDropdownLoad = false;
        if (!this.dropdownHidden) {
            if (this.minesweeper.gameStarted) {
                this.minesweeper.startTimer();
            }
            this.dropdownHidden = true;
        }
        else {
            this.dropdownHidden = false;
            this.minesweeper.stopTimer();
        }
    };
    SingleComponent.prototype.changeDiff = function (diff) {
        this.difficulty = diff;
        this._component.gameStarted = false;
        // console.log(this.difficulty)
        this.dropdownHidden = true;
        this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](this.difficulty, 'single');
        // console.log(this.minesweeper.difficulty)
    };
    //this method toggles the users ability to place flags
    SingleComponent.prototype.handleKeyBoardEvent = function (event) {
        if (event.key == 'f') {
            this.flaggingEnabled = !this.flaggingEnabled;
            // console.log(this.flaggingEnabled)
        }
    };
    SingleComponent.prototype.mouseEnter = function (i, j) {
        this.hoveredCell = [i, j];
    };
    SingleComponent.prototype.mouseLeave = function () {
        this.hoveredCell = [-1, -1];
    };
    SingleComponent.prototype.displayInfo = function () {
        this.initialPopUpLoad = false;
        this.infoPopUp = !this.infoPopUp;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SingleComponent.prototype, "handleKeyBoardEvent", null);
    SingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/minesweeper/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.css */ "./src/app/minesweeper/single/single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_minesweeper_header_minesweeper_header_component__WEBPACK_IMPORTED_MODULE_3__["MinesweeperHeaderComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bbauer/Desktop/minesweeper/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map