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
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");
/* harmony import */ var _multi_multi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multi/multi.component */ "./src/app/multi/multi.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






var routes = [
    { path: '', component: _single_single_component__WEBPACK_IMPORTED_MODULE_3__["SingleComponent"] },
    { path: 'newUser/:newUserID', component: _single_single_component__WEBPACK_IMPORTED_MODULE_3__["SingleComponent"] },
    { path: 'returningUser/:returningUserID', component: _single_single_component__WEBPACK_IMPORTED_MODULE_3__["SingleComponent"] },
    { path: 'multi', component: _multi_multi_component__WEBPACK_IMPORTED_MODULE_4__["MultiComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'room/:id', component: _multi_multi_component__WEBPACK_IMPORTED_MODULE_4__["MultiComponent"] }
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

module.exports = ".navbar {\n    padding-right: 14px;\n    box-sizing: border-box;\n    width: 100%;\n    padding-top: 9px;\n    height: 50px;\n    border-bottom: 1px solid lightslategray;\n    text-align: right;\n    background-color: darkslategray;\n}\n\n.navbar a{\n    text-decoration: none;\n    color: #f0a554;\n    padding: 17px;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.hover {\n    border-bottom: 3px solid #f0a554;\n}\n\n#github {\n    margin-left: 10px;\n    height: 30px;\n    vertical-align: top;\n    width: 31px;\n    margin-top: 7px;\n    display: inline-block;\n}\n\n#mail {\n    margin-left: 10px;\n    height: 26px;\n    vertical-align: top;\n    width: 40px;\n    margin-top: 10px;\n    display: inline-block;\n}\n\n.footer p {\n    font-size: 14px;\n    display: inline-block;\n    vertical-align: top;\n    color: #f0a554;\n}\n\n.footer {\n    padding-left: 42%;\n    background-color: darkslategray;\n    margin-top: 7.2%;\n}\n\n#title{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: -6px;\n    margin-right: 50%;\n    margin-bottom: 0px;\n    color: #969696;\n}\n\n#title span {\n    color: #f0a554;\n}\n\n#confirm {\n    position: absolute;\n    left: 34%;\n    top: 24%;\n    text-align: center;\n    box-shadow: 0px 0px 177px 61px black;\n    padding: 82px;\n    border-radius: 8px;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\n#confirm button {\n    margin-left: 5%;\n    margin-top: 10%;\n    font-size: 19px;\n    margin-right: 7%;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n}\n\n#confirm h2 {\n    color: white;\n}\n\n@media only screen and (max-width : 949px){\n    #title {\n        margin-right: 15% !important;\n    }\n}\n\n@media only screen and (min-width : 950px){\n    #title {\n        margin-right: 30% !important;\n    }\n}\n\n@media only screen and (min-width : 1200px){\n    #title {\n        margin-right: 54% !important;\n    }\n}\n\n@media only screen and (min-width : 1600px){\n    #title {\n        margin-right: 61% !important;\n    }\n}\n\n@media only screen and (max-width : 1600px){\n    #confirm {\n        left : 28% !important;\n    }\n    \n}\n\n.hide {\n    display: none;\n}\n\n.showAnimation {\n    -webkit-animation: showOptions 0.75s 1 ease-in  forwards ;\n            animation: showOptions 0.75s 1 ease-in  forwards ;\n}\n\n@-webkit-keyframes showOptions {\n    0% {\n        opacity: 0;\n    }\n    99% {\n        opacity: 0.99;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes showOptions {\n    0% {\n        opacity: 0;\n    }\n    99% {\n        opacity: 0.99;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.hiddenAnimation {\n    -webkit-animation: hideOptions 0.5s 1 ease-in forwards;\n            animation: hideOptions 0.5s 1 ease-in forwards;\n}\n\n@keyframes hideOptions {\n    0% {\n        top : 21%;\n        opacity: 1;\n    }   \n    99% {\n        top: -59%;\n        opacity: 1;\n    }\n    100% {\n        top: -60%;\n        opacity: 0;\n        display: none;\n    }\n}\n\n@-webkit-keyframes hideOptions {\n    0% {\n      top: 0%;\n    opacity: 1;\n    }\n    99% {\n      top: 99%;\n      opacity: 1;\n    }\n    100% {\n      top: 100%;\n      opacity: 0;\n      display: none;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxpQkFBaUI7Q0FDcEI7O0FBR0Q7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix3Q0FBd0M7Q0FDM0M7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaURBQWlEO0lBQ2pELG1DQUFtQztJQUNuQyxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0k7UUFDSSw2QkFBNkI7S0FDaEM7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksNkJBQTZCO0tBQ2hDO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLDZCQUE2QjtLQUNoQztDQUNKOztBQUVEO0lBQ0k7UUFDSSw2QkFBNkI7S0FDaEM7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksc0JBQXNCO0tBQ3pCOztDQUVKOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLDBEQUFrRDtZQUFsRCxrREFBa0Q7Q0FDckQ7O0FBRUQ7SUFDSTtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksV0FBVztLQUNkO0NBQ0o7O0FBVkQ7SUFDSTtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksV0FBVztLQUNkO0NBQ0o7O0FBRUQ7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0NBQ2xEOztBQUdEO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztLQUNkO0lBQ0Q7UUFDSSxVQUFVO1FBQ1YsV0FBVztLQUNkO0lBQ0Q7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGNBQWM7S0FDakI7Q0FDSjs7QUFFRDtJQUNJO01BQ0UsUUFBUTtJQUNWLFdBQVc7S0FDVjtJQUNEO01BQ0UsU0FBUztNQUNULFdBQVc7S0FDWjtJQUNEO01BQ0UsVUFBVTtNQUNWLFdBQVc7TUFDWCxjQUFjO0tBQ2Y7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA5cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuXG4ubmF2YmFyIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZjBhNTU0O1xuICAgIHBhZGRpbmc6IDE3cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YwYTU1NDtcbn1cblxuI2dpdGh1YiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd2lkdGg6IDMxcHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI21haWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9vdGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuLmZvb3RlciB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MiU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgICBtYXJnaW4tdG9wOiA3LjIlO1xufVxuXG5cbiN0aXRsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBjb2xvcjogIzk2OTY5Njtcbn1cblxuI3RpdGxlIHNwYW4ge1xuICAgIGNvbG9yOiAjZjBhNTU0O1xufVxuXG4jY29uZmlybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDM0JTtcbiAgICB0b3A6IDI0JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNzdweCA2MXB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDgycHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjkpO1xufVxuXG4jY29uZmlybSBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jY29uZmlybSBoMiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5NDlweCl7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNSUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDk1MHB4KXtcbiAgICAjdGl0bGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTIwMHB4KXtcbiAgICAjdGl0bGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDU0JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTYwMHB4KXtcbiAgICAjdGl0bGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYxJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTYwMHB4KXtcbiAgICAjY29uZmlybSB7XG4gICAgICAgIGxlZnQgOiAyOCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvd0FuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uOiBzaG93T3B0aW9ucyAwLjc1cyAxIGVhc2UtaW4gIGZvcndhcmRzIDtcbn1cblxuQGtleWZyYW1lcyBzaG93T3B0aW9ucyB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA5OSUge1xuICAgICAgICBvcGFjaXR5OiAwLjk5O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5oaWRkZW5BbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbjogaGlkZU9wdGlvbnMgMC41cyAxIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cblxuQGtleWZyYW1lcyBoaWRlT3B0aW9ucyB7XG4gICAgMCUge1xuICAgICAgICB0b3AgOiAyMSU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfSAgIFxuICAgIDk5JSB7XG4gICAgICAgIHRvcDogLTU5JTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRvcDogLTYwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBoaWRlT3B0aW9ucyB7XG4gICAgMCUge1xuICAgICAgdG9wOiAwJTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5OSUge1xuICAgICAgdG9wOiA5OSU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'navbar'>\n  \n  <h1 id = 'title'> mine<span>sweeper</span> </h1>\n  <a (mouseenter) = 'mouseEnter(\"single\")'\n   (mouseleave) = 'mouseLeave()' \n   [ngClass] = \"{'hover' : selected == 'single'}\" \n   (click) = 'confirmSingle()'>\n   Single Player</a>\n\n  <a (mouseenter) = 'mouseEnter(\"multi\")'\n   (mouseleave) = 'mouseLeave()' \n   [ngClass] = \"{'hover' : selected == 'multi'}\" \n   (click) = 'confirmMulti()'>\n   Multiplayer</a>\n\n  <a (mouseenter) = 'mouseEnter(\"login\")' \n  (mouseleave) = 'mouseLeave()' \n  [ngClass] = \"{'hover' : selected == 'login'}\" \n  (click) = 'confirmLogin()'\n  >\n  Login</a>\n\n</div> \n\n<router-outlet></router-outlet>\n\n\n<div class = 'footer'>\n  <p>© Benjamin Bauer 2018</p>\n  <a href = 'https://github.com/Ben-Bauer-15/minesweeper'><img id = 'github' src = '../assets/githublogo_copy.png'></a>\n  <a href = 'mailto:benjaminbauer15@gmail.com'><img id = 'mail' src = '../assets/mail.png'></a>\n</div>\n\n<div id = 'confirm' [ngClass] = \"{'hide' : !gameStarted || !confirmPopUpVisible, 'showAnimation' : confirmPopUpVisible, 'hiddenAnimation' : showDismissAnimation}\">\n  <h2>Are you sure you want to leave this page?</h2>\n  <button (click) = 'navigate(pageToGoTo)'>Yes</button>\n  <button (click) = 'dismiss()'>No</button>\n</div>"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_titleService, _router) {
        this._titleService = _titleService;
        this._router = _router;
        this.title = 'Minesweeper';
        this.selected = '';
        this.showDismissAnimation = false;
        this.gameStarted = false;
        this.setTitle();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.confirmPopUpVisible = false;
    };
    AppComponent.prototype.setTitle = function () {
        this._titleService.setTitle("Minesweeper");
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
            this.pageToGoTo = '';
        }
        else if (this.currentPage != 'single' && !this.gameStarted) {
            this.navigate('');
        }
    };
    AppComponent.prototype.confirmMulti = function () {
        if (this.currentPage != 'multi' && this.gameStarted) {
            this.confirmPopUpVisible = true;
            this.pageToGoTo = 'multi';
        }
        else if (this.currentPage != 'multi' && !this.gameStarted) {
            this.navigate('multi');
        }
    };
    AppComponent.prototype.confirmLogin = function () {
        if (this.currentPage != 'login' && this.gameStarted) {
            this.confirmPopUpVisible = true;
            this.pageToGoTo = 'login';
        }
        else if (this.currentPage != 'login' && !this.gameStarted) {
            this.navigate('login');
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");
/* harmony import */ var _multi_multi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./multi/multi.component */ "./src/app/multi/multi.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _single_single_component__WEBPACK_IMPORTED_MODULE_8__["SingleComponent"],
                _multi_multi_component__WEBPACK_IMPORTED_MODULE_9__["MultiComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
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
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cell.ts":
/*!*************************!*\
  !*** ./src/app/cell.ts ***!
  \*************************/
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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n    display: inline-block;\n    vertical-align: top;\n    width: 45%;\n}\n\nh2 {\n    color: rgb(100,100,100);\n    margin-left: 1%;\n}\n\nh4 {\n    color: rgb(25,25,25);\n}\n\n.error{\n    color: red;\n}\n\n.fullWidth{\n    width: 80%;\n}\n\n#container {\n    padding: 72px 72px 100px 72px;\n    text-align: center;\n    background-color: rgb(177, 177, 177);\n    border-top: 1px solid rgb(100,100,100);\n    border-bottom: 1px solid rgb(100,100,100);\n    margin-bottom: 16.5%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsV0FBVztDQUNkOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMscUJBQXFCOztDQUV4QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiA0NSU7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogcmdiKDI1LDI1LDI1KTtcbn1cblxuLmVycm9ye1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5mdWxsV2lkdGh7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNzJweCA3MnB4IDEwMHB4IDcycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEwMCwxMDAsMTAwKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEwMCwxMDAsMTAwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNi41JTtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login or Register to Save Your Scores!</h2>\n<div id = 'container'>\n\n  <div class = 'login'>\n    <h4>Login</h4>\n    <form (submit) = 'submitLogin()'>\n      <div>\n        <mat-form-field class = 'fullWidth'>\n            <input [(ngModel)] = 'returningUser.email' matInput placeholder=\"Email\" name = 'returnEmail' required [formControl] = 'returnEmail'>\n            <mat-error *ngIf = 'returnEmail.invalid'>{{getReturningEmailErrorMessage()}} </mat-error>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field class = 'fullWidth'>\n            <input [(ngModel)] = 'returningUser.password' matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"Password\" name = 'returnPassword' required [formControl] = 'returnPassword'>\n            <mat-error *ngIf = 'returnPassword.invalid'>{{getReturnPasswordErrorMessage()}} </mat-error>\n        </mat-form-field>\n      </div>\n      <p class = 'error' *ngIf = 'badCombo'>Email/password combination doesn't match</p>\n      <button type = 'submit' mat-raised-button color=\"primary\"\n      [disabled] = 'returnEmail.invalid || returnPassword.invalid' >Login</button>\n    </form>\n  </div>\n  \n  <div class = 'login'>\n    <h4>Register</h4>\n    <form (submit) = 'submitRegister()'>\n        \n      <div>\n        <mat-form-field class = 'fullWidth'>\n            <input [(ngModel)] = 'newUser.userName' name = 'userName' matInput placeholder=\"Username\" [formControl] = 'userName' required>\n            <mat-error *ngIf = 'userName.invalid'>{{getUserNameErrorMessage()}} </mat-error>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class = 'fullWidth'>\n            <input (keyup) = 'keyup()' [(ngModel)] = 'newUser.email' name = 'email' matInput placeholder=\"Email Address\" [formControl] = 'email' required>\n            <mat-error *ngIf = 'email.invalid'>{{getEmailErrorMessage()}} </mat-error>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field class = 'fullWidth'>\n            <input [(ngModel)] = 'newUser.password' name = 'PW' matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"Password\" [formControl] = 'password' required minlength = '8'>\n            <mat-error *ngIf = 'password.invalid'>{{getPasswordErrorMessage()}} </mat-error>\n        </mat-form-field>\n      </div>\n      <button type = 'submit' mat-raised-button color=\"primary\"\n      [disabled] = 'email.invalid || password.invalid || userName.invalid || emailExists' >\n      Register</button>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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
        this._component.currentPage = 'login';
    };
    LoginComponent.prototype.submitRegister = function () {
        console.log(this.newUser);
        var obs = this._http.newUser(this.newUser);
        obs.subscribe(function (data) {
        });
        this._router.navigate(['/newUser/' + this.newUser.userName]);
        this.newUser = { userName: "", password: "", email: "", confirm: "" };
    };
    LoginComponent.prototype.submitLogin = function () {
        var _this = this;
        var obs = this._http.loginUser(this.returningUser);
        obs.subscribe(function (data) {
            if (data.message == 'Success') {
                _this._router.navigate(['/returningUser/' + data.data]);
                _this.badCombo = false;
            }
            else {
                _this.badCombo = true;
            }
        });
    };
    LoginComponent.prototype.getEmailErrorMessage = function () {
        console.log("error");
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
        // console.log("error")
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
                console.log(data.data[0]);
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
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/minesweeper.ts":
/*!********************************!*\
  !*** ./src/app/minesweeper.ts ***!
  \********************************/
/*! exports provided: Minesweeper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minesweeper", function() { return Minesweeper; });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/app/cell.ts");

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
        else {
            //user has flagged a cell, switch its boolean variable to true
            this.gameArray[i][j].flagged = true;
            //if the user was correct in that this was a mine, remove it from the list of mines
            if (this.gameArray[i][j].mine) {
                for (var idx = 0; idx < this.mines.length; idx++) {
                    // console.log(this.mines[idx])
                    if (this.mines[idx][0] == i && this.mines[idx][1] == j) {
                        console.log("found the mine");
                        this.mines.splice(idx, 1);
                    }
                }
            }
            if (this.mines.length == 0) {
                console.log("you won!!!");
                this.winner = true;
                this.gameOver = true;
                this.stopTimer();
            }
            //decrease the number of mines the user has to keep tabs on
            this.numMines--;
        }
        console.log(this.mines);
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
            //otherwise, do it the fast way
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
                        }
                    }
                    else {
                        //uncover this cell but don't call this function again, since it has > 0 adjacent
                        _this.gameArray[i][j].clicked = true;
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
                    }
                }
                else {
                    //uncover this cell but don't call this function again, since it has > 0 adjacent
                    this.gameArray[i][j].clicked = true;
                }
            }
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

/***/ "./src/app/multi/multi.component.css":
/*!*******************************************!*\
  !*** ./src/app/multi/multi.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#playerBoard, #opponentBoard {\n    width: 40%;\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    padding-top: 10px;\n}\n\n#container {\n    text-align: center;\n}\n\n#playerBoard{\n   margin-right: 0%;\n}\n\n.cell{\n    display: inline-block;\n    vertical-align: top;\n    height: 35px;\n    margin: 1px;\n    border-radius: 3px;\n    width: 35px;\n    background-color: rgba(0,0,0,1);\n}\n\n.uncovered{\n    background-color: #353535;\n}\n\n.test{\n    background-color: red;\n}\n\n.mine {\n    height: 30px;\n    width: 30px;\n    margin-top: 2px;\n}\n\n#refresh{\n    margin-bottom: 0%;\n    width: 40px;\n    margin-left: 31.8%;\n    height: 40px;\n}\n\n.dropdown {\n    font-size: 23px;\n    text-decoration: none;\n    color: #f0a554;\n    margin-right: 4%;\n    margin-left: 4%;\n    margin-top: 15%;\n    display: inline-block;\n}\n\n.dropdown a {\n    display: block;\n    cursor: pointer;\n}\n\n.shareLink img {\n    height: 40px; \n    width: 40px;\n}\n\n.shareLink {\n    margin-top: 38%;\n}\n\n#options ul {\n    list-style-type: none;\n    padding: 0;\n    text-align: center;\n}\n\n#options {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 21%;\n    padding: 60px;\n    border-radius: 8px;\n    left: 42%;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\nli {\n    margin-bottom: 34%;\n    text-align: center;\n    font-size: 22px;\n}\n\nli a{\n    text-decoration: none;\n    color: white;\n    font-family: monospace;\n    cursor: pointer;\n}\n\n#cancel{\n    margin-top: 40%;\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    cursor: pointer;\n    color: white;\n    outline: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.dropdownDisplayed {\n    margin-bottom: 0%;\n}\n\n.selectedDifficulty {\n    color: #619600 !important;\n}\n\n.flagging {\n    height: 5px;\n    width: 5px;\n    margin-top: 15px;\n}\n\n.flagged {\n    height: 25px;\n    width: 22px;\n    margin-left: 5px;\n    margin-top: 6px;\n}\n\n.cell p {\n    font-size: 29px;\n    margin-top: 0px;\n    font-family: \"Quicksand\",\"Lucida Grande\",\"Helvetica\",\"Arial\",\"Verdana\",\"sans-serif\";\n}\n\n.one{\n    color: rgb(34, 109, 34);\n}\n\n.two {\n    color: #00AAC4;\n}\n\n.three {\n    color: #DD6B55;\n}\n\n.four {\n    color: #C2A5CF;\n}\n\n.five {\n    color: #BF812D;\n}\n\n.six {\n    color: #66FFFF;\n}\n\n.seven {\n    color: #FFFF99\n}\n\n.eight {\n    color: #FF9900;\n}\n\n#winner {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 26%;\n    padding: 76px;\n    cursor: pointer;\n    border-radius: 8px;\n    left: 37%;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.95);\n}\n\n#winner h2 {\n    color: #f0a554;\n}\n\n#winner h4 {\n    color: #f0a554;\n}\n\n#winner button {\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    color: white;\n    outline: none;\n}\n\n.ticker {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.name {\n    margin-left: 15%;\n    margin-right: 15%;\n}\n\n#timer h2 {\n    color: #619600;\n    border-radius: 5px;\n    padding: 8px;\n    background-image: linear-gradient(#000567, #000cea);\n    box-shadow: 6px 7px 15px black;\n    border: 1px solid black;\n}\n\n#timer h6 {\n    color: #f0a554;\n}\n\n#numMines h6 {\n    color: #f0a554;\n}\n\n#numMines{\n    font-family: monospace;\n    font-size: 19px;\n}\n\n#numMines h2 {\n    color: #619600;\n    box-shadow: 6px 7px 15px black;\n    border-radius: 5px;\n    padding: 8px;\n    background-image: linear-gradient(#000567, #000cea);\n    border: 1px solid black;\n}\n\n#timer{\n    margin-left: 13%;\n    font-family: monospace;\n    font-size: 19px;\n}\n\n.multiplayer {\n    margin-left: 45%;\n    margin-bottom: 0px;\n    color: #619600;\n    margin-top: 1%;\n}\n\n.playerName{\n    color : #f0a554;\n}\n\n.opponentName {\n    color: gray !important;\n}\n\n.opponentLabel {\n    color: black !important;\n    background-image: linear-gradient(gray, gray) !important;\n\n}\n\n.choice {\n    left: 0;\n    right: 0;\n    top: 34%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 500px;\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    padding: 89px;\n    border-radius: 8px;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\n.topScoreItem {\n    margin-bottom: 0% !important;\n    text-align: center;\n    cursor: default;\n    color: #a7a7a7;\n}\n\n#topScores {\n    list-style-type: none;\n    text-align: center;\n    padding-left: 0px;\n    border-radius: 5px;\n    border: 1px solid #777777;\n    cursor: default;\n    background: #0a4848;\n}\n\n.linkToShare {\n    left: 0;\n    right: 0;\n    top: 34%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 700px;\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    padding: 59px;\n    border-radius: 8px;\n    border: 1px solid gray;\n    background-color: rgba(107, 135, 135, 0.9);\n}\n\n.options ul {\n    list-style-type: none;\n    padding: 0;\n    text-align: center;\n}\n\n.options {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 17%;\n    padding: 60px;\n    border-radius: 8px;\n    left: 0;\n    width: 150px;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\n.cancel{\n    margin-top: 35%;\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n}\n\n.emailContainer {\n    margin-top: 3%;\n    text-align: center;\n}\n\n.fullWidth {\n    width: 80%;\n}\n\n.linkToShare button {\n    margin-left: 5%;\n    font-size: 19px;\n    margin-right: 7%;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n}\n\n.linkToShare h6 {\n    font-size: 18px;\n    color: white;\n}\n\n.choiceButton{\n    margin-right: 31px;\n    margin-left: 42px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.choiceButton button{\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    cursor: pointer;\n    color: white;\n    outline: none;\n}\n\n.choiceButton{\n    color: #619600;\n    font-size: 18px;\n}\n\n.choiceButton h5 {\n    position: absolute;\n}\n\n#publicH5 {\n    left : 48%;\n}\n\n@media only screen and (min-width : 1600px){\n    .multiplayer {\n        margin-left: 46% !important;\n    }\n\n    #options {\n        left: 44% !important;\n    }\n}\n\n#waitingForUser {\n    color: white;\n    font-size: 30px;\n}\n\n#waitingForUser:after {\n    overflow: hidden;\n    display: inline-block;\n    vertical-align: bottom;\n    -webkit-animation: ellipsis steps(4,end) 1500ms infinite;\n    animation: ellipsis steps(4,end) 1500ms infinite;\n    content: \"\\2026\";\n    width: 0px;\n}\n\n.hide {\n    display: none;\n}\n\n.hiddenAnimation {\n    -webkit-animation: hideOptions 0.5s 1 ease-in forwards;\n            animation: hideOptions 0.5s 1 ease-in forwards;\n}\n\n@keyframes hideOptions {\n    0% {\n        top : 21%;\n        opacity: 1;\n    }   \n    99% {\n        top: -59%;\n        opacity: 1;\n    }\n    100% {\n        top: -60%;\n        opacity: 0;\n        display: none;\n    }\n}\n\n@-webkit-keyframes hideOptions {\n    0% {\n      top: 21%;\n      opacity: 1;\n    }\n    99% {\n      top: 99%;\n      opacity: 1;\n    }\n    100% {\n      top: 100%;\n      opacity: 0;\n      display: none;\n    }\n}\n\n.cellHover {\n    background-color: rgb(18, 18, 18);\n}\n\n@keyframes ellipsis {\n    to {\n        width: 1.25em;    \n    }\n}\n\n@-webkit-keyframes ellipsis {\n    to {\n        width: 1.25em;    \n    }\n}\n\n.countdown{\n    box-sizing: border-box;\n    height: 200px;\n    border-radius: 50%;\n    padding-top: 2.5%;\n    position: absolute;\n    font-size: 95px;\n    left: 0;\n    background-color: red;\n    right: 0;\n    top: 37%;\n    width: 200px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    -webkit-animation: countdownAnimation 4s linear forwards;\n            animation: countdownAnimation 4s linear forwards;\n}\n\n@-webkit-keyframes countdownAnimation {\n    12.5% {\n        opacity: 0\n    }\n\n    25% {\n        opacity: 1;\n        background-color: orange;\n    }\n    \n    37.5% {\n        opacity: 0;\n    }\n    \n    50% {\n        opacity: 1;\n        background-color: yellow;\n    }\n    \n    62.5% {\n        opacity: 0;\n    }\n    \n    75% {\n        opacity: 1;\n        background-color: green;\n    }\n    \n    87.5% {\n        opacity: 0;\n    }\n    \n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes countdownAnimation {\n    12.5% {\n        opacity: 0\n    }\n\n    25% {\n        opacity: 1;\n        background-color: orange;\n    }\n    \n    37.5% {\n        opacity: 0;\n    }\n    \n    50% {\n        opacity: 1;\n        background-color: yellow;\n    }\n    \n    62.5% {\n        opacity: 0;\n    }\n    \n    75% {\n        opacity: 1;\n        background-color: green;\n    }\n    \n    87.5% {\n        opacity: 0;\n    }\n    \n    100% {\n        opacity: 0;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGkvbXVsdGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7R0FDRyxpQkFBaUI7Q0FDbkI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQ0FBZ0M7Q0FDbkM7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsU0FBUztJQUNULGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix3Q0FBd0M7Q0FDM0M7O0FBSUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaURBQWlEO0lBQ2pELG1DQUFtQztJQUNuQyxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9GQUFvRjtDQUN2Rjs7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixpREFBaUQ7SUFDakQsbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvREFBb0Q7SUFDcEQsK0JBQStCO0lBQy9CLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvREFBb0Q7SUFDcEQsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLHlEQUF5RDs7Q0FFNUQ7O0FBR0Q7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix3Q0FBd0M7Q0FDM0M7O0FBR0Q7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkNBQTJDO0NBQzlDOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix3Q0FBd0M7Q0FDM0M7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtJQUNqRCxtQ0FBbUM7SUFDbkMsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlEQUFpRDtJQUNqRCxtQ0FBbUM7SUFDbkMsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaURBQWlEO0lBQ2pELG1DQUFtQztJQUNuQyxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0k7UUFDSSw0QkFBNEI7S0FDL0I7O0lBRUQ7UUFDSSxxQkFBcUI7S0FDeEI7Q0FDSjs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBR0Q7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix5REFBeUQ7SUFDekQsaURBQWlEO0lBQ2pELGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUdEO0lBQ0ksdURBQStDO1lBQS9DLCtDQUErQztDQUNsRDs7QUFHRDtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7S0FDZDtJQUNEO1FBQ0ksVUFBVTtRQUNWLFdBQVc7S0FDZDtJQUNEO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxjQUFjO0tBQ2pCO0NBQ0o7O0FBRUQ7SUFDSTtNQUNFLFNBQVM7TUFDVCxXQUFXO0tBQ1o7SUFDRDtNQUNFLFNBQVM7TUFDVCxXQUFXO0tBQ1o7SUFDRDtNQUNFLFVBQVU7TUFDVixXQUFXO01BQ1gsY0FBYztLQUNmO0NBQ0o7O0FBR0Q7SUFDSSxrQ0FBa0M7Q0FDckM7O0FBRUQ7SUFDSTtRQUNJLGNBQWM7S0FDakI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksY0FBYztLQUNqQjtDQUNKOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5REFBaUQ7WUFBakQsaURBQWlEO0NBQ3BEOztBQUVEO0lBQ0k7UUFDSSxVQUFVO0tBQ2I7O0lBRUQ7UUFDSSxXQUFXO1FBQ1gseUJBQXlCO0tBQzVCOztJQUVEO1FBQ0ksV0FBVztLQUNkOztJQUVEO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtLQUM1Qjs7SUFFRDtRQUNJLFdBQVc7S0FDZDs7SUFFRDtRQUNJLFdBQVc7UUFDWCx3QkFBd0I7S0FDM0I7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjs7QUFuQ0Q7SUFDSTtRQUNJLFVBQVU7S0FDYjs7SUFFRDtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7S0FDNUI7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxXQUFXO1FBQ1gseUJBQXlCO0tBQzVCOztJQUVEO1FBQ0ksV0FBVztLQUNkOztJQUVEO1FBQ0ksV0FBVztRQUNYLHdCQUF3QjtLQUMzQjs7SUFFRDtRQUNJLFdBQVc7S0FDZDs7SUFFRDtRQUNJLFdBQVc7S0FDZDtDQUNKIiwiZmlsZSI6InNyYy9hcHAvbXVsdGkvbXVsdGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwbGF5ZXJCb2FyZCwgI29wcG9uZW50Qm9hcmQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXJCb2FyZHtcbiAgIG1hcmdpbi1yaWdodDogMCU7XG59XG5cbi5jZWxse1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwxKTtcbn1cblxuLnVuY292ZXJlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xufVxuXG4udGVzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5taW5lIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG5cbiNyZWZyZXNoe1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMS44JTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5kcm9wZG93biB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2YwYTU1NDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hhcmVMaW5rIGltZyB7XG4gICAgaGVpZ2h0OiA0MHB4OyBcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLnNoYXJlTGluayB7XG4gICAgbWFyZ2luLXRvcDogMzglO1xufVxuXG4jb3B0aW9ucyB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jb3B0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3N3B4IDYxcHggYmxhY2s7XG4gICAgdG9wOiAyMSU7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbGVmdDogNDIlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjkpO1xufVxuXG5cblxubGkge1xuICAgIG1hcmdpbi1ib3R0b206IDM0JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5saSBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjYW5jZWx7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgIzViNWJmZik7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxOHB4IDNweCBibGFjaztcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bkRpc3BsYXllZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG5cbi5zZWxlY3RlZERpZmZpY3VsdHkge1xuICAgIGNvbG9yOiAjNjE5NjAwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGFnZ2luZyB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZmxhZ2dlZCB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uY2VsbCBwIHtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiSGVsdmV0aWNhXCIsXCJBcmlhbFwiLFwiVmVyZGFuYVwiLFwic2Fucy1zZXJpZlwiO1xufVxuXG4ub25le1xuICAgIGNvbG9yOiByZ2IoMzQsIDEwOSwgMzQpO1xufVxuXG4udHdvIHtcbiAgICBjb2xvcjogIzAwQUFDNDtcbn1cblxuLnRocmVlIHtcbiAgICBjb2xvcjogI0RENkI1NTtcbn1cblxuLmZvdXIge1xuICAgIGNvbG9yOiAjQzJBNUNGO1xufVxuXG4uZml2ZSB7XG4gICAgY29sb3I6ICNCRjgxMkQ7XG59XG5cbi5zaXgge1xuICAgIGNvbG9yOiAjNjZGRkZGO1xufVxuXG4uc2V2ZW4ge1xuICAgIGNvbG9yOiAjRkZGRjk5XG59XG5cbi5laWdodCB7XG4gICAgY29sb3I6ICNGRjk5MDA7XG59XG5cbiN3aW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNzdweCA2MXB4IGJsYWNrO1xuICAgIHRvcDogMjYlO1xuICAgIHBhZGRpbmc6IDc2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBsZWZ0OiAzNyU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuOTUpO1xufVxuXG4jd2lubmVyIGgyIHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI3dpbm5lciBoNCB7XG4gICAgY29sb3I6ICNmMGE1NTQ7XG59XG5cbiN3aW5uZXIgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRpY2tlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG4jdGltZXIgaDIge1xuICAgIGNvbG9yOiAjNjE5NjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDA1NjcsICMwMDBjZWEpO1xuICAgIGJveC1zaGFkb3c6IDZweCA3cHggMTVweCBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3RpbWVyIGg2IHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI251bU1pbmVzIGg2IHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI251bU1pbmVze1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4jbnVtTWluZXMgaDIge1xuICAgIGNvbG9yOiAjNjE5NjAwO1xuICAgIGJveC1zaGFkb3c6IDZweCA3cHggMTVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwNTY3LCAjMDAwY2VhKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3RpbWVye1xuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5tdWx0aXBsYXllciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgY29sb3I6ICM2MTk2MDA7XG4gICAgbWFyZ2luLXRvcDogMSU7XG59XG5cbi5wbGF5ZXJOYW1le1xuICAgIGNvbG9yIDogI2YwYTU1NDtcbn1cblxuLm9wcG9uZW50TmFtZSB7XG4gICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cblxuLm9wcG9uZW50TGFiZWwge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChncmF5LCBncmF5KSAhaW1wb3J0YW50O1xuXG59XG5cblxuLmNob2ljZSB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDM0JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNzdweCA2MXB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDg5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjkpO1xufVxuXG5cbi50b3BTY29yZUl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBjb2xvcjogI2E3YTdhNztcbn1cblxuI3RvcFNjb3JlcyB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3Nzc3NztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYmFja2dyb3VuZDogIzBhNDg0ODtcbn1cblxuLmxpbmtUb1NoYXJlIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMzQlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3N3B4IDYxcHggYmxhY2s7XG4gICAgcGFkZGluZzogNTlweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNywgMTM1LCAxMzUsIDAuOSk7XG59XG5cbi5vcHRpb25zIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcHRpb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTc3cHggNjFweCBibGFjaztcbiAgICB0b3A6IDE3JTtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuOSk7XG59XG5cbi5jYW5jZWx7XG4gICAgbWFyZ2luLXRvcDogMzUlO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgIzViNWJmZik7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxOHB4IDNweCBibGFjaztcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5lbWFpbENvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnVsbFdpZHRoIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4ubGlua1RvU2hhcmUgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubGlua1RvU2hhcmUgaDYge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaG9pY2VCdXR0b257XG4gICAgbWFyZ2luLXJpZ2h0OiAzMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY2hvaWNlQnV0dG9uIGJ1dHRvbntcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2hvaWNlQnV0dG9ue1xuICAgIGNvbG9yOiAjNjE5NjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNob2ljZUJ1dHRvbiBoNSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jcHVibGljSDUge1xuICAgIGxlZnQgOiA0OCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE2MDBweCl7XG4gICAgLm11bHRpcGxheWVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ2JSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICNvcHRpb25zIHtcbiAgICAgICAgbGVmdDogNDQlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4jd2FpdGluZ0ZvclVzZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cblxuI3dhaXRpbmdGb3JVc2VyOmFmdGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBlbGxpcHNpcyBzdGVwcyg0LGVuZCkgMTUwMG1zIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogZWxsaXBzaXMgc3RlcHMoNCxlbmQpIDE1MDBtcyBpbmZpbml0ZTtcbiAgICBjb250ZW50OiBcIlxcMjAyNlwiO1xuICAgIHdpZHRoOiAwcHg7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5oaWRkZW5BbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbjogaGlkZU9wdGlvbnMgMC41cyAxIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cblxuQGtleWZyYW1lcyBoaWRlT3B0aW9ucyB7XG4gICAgMCUge1xuICAgICAgICB0b3AgOiAyMSU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfSAgIFxuICAgIDk5JSB7XG4gICAgICAgIHRvcDogLTU5JTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRvcDogLTYwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBoaWRlT3B0aW9ucyB7XG4gICAgMCUge1xuICAgICAgdG9wOiAyMSU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5OSUge1xuICAgICAgdG9wOiA5OSU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuXG4uY2VsbEhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE4LCAxOCk7XG59XG5cbkBrZXlmcmFtZXMgZWxsaXBzaXMge1xuICAgIHRvIHtcbiAgICAgICAgd2lkdGg6IDEuMjVlbTsgICAgXG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZWxsaXBzaXMge1xuICAgIHRvIHtcbiAgICAgICAgd2lkdGg6IDEuMjVlbTsgICAgXG4gICAgfVxufVxuXG4uY291bnRkb3due1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZy10b3A6IDIuNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogOTVweDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDM3JTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBhbmltYXRpb246IGNvdW50ZG93bkFuaW1hdGlvbiA0cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgY291bnRkb3duQW5pbWF0aW9uIHtcbiAgICAxMi41JSB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG5cbiAgICAyNSUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgfVxuICAgIFxuICAgIDM3LjUlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgXG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIH1cbiAgICBcbiAgICA2Mi41JSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIFxuICAgIDc1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICBcbiAgICA4Ny41JSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIFxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/multi/multi.component.html":
/*!********************************************!*\
  !*** ./src/app/multi/multi.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id = 'container'>\n  <div id = 'playerBoard'>\n\n      <div class = 'ticker' id = 'numMines'>\n        <h2>{{minesweeper.numMines}}</h2>\n        <h6>Mines Remaining</h6>\n      </div>\n  \n      <div *ngFor = 'let row of minesweeper.gameArray; index as i' class = 'row'>\n        \n        <div *ngFor = 'let column of minesweeper.gameArray; index as j' \n        class = 'cell'\n        (click) = 'uncover(i,j)'\n        (mouseenter) = 'hoverOnCell(i, j)'\n        (mouseleave) = 'mouseLeaveCell()'\n        [ngClass]= \"{'uncovered' : minesweeper.gameArray[i][j].clicked && !minesweeper.gameArray[i][j].mine, 'cellHover' : hoveredCell[0] == i && hoveredCell[1] == j && !minesweeper.gameArray[i][j].clicked}\">\n        \n        <p *ngIf = 'minesweeper.gameArray[i][j].clicked && \n        !minesweeper.gameArray[i][j].mine && \n        minesweeper.gameArray[i][j].adjacentMines > 0'\n        [ngClass] = \"colorCode[minesweeper.gameArray[i][j].adjacentMines]\"\n        >{{minesweeper.gameArray[i][j].adjacentMines}}</p>\n        \n        <img *ngIf = 'minesweeper.gameArray[i][j].clicked && \n        minesweeper.gameArray[i][j].mine'\n        src = '../../assets/download.png' class = 'mine'>\n    \n        <img *ngIf = 'flaggingEnabled && \n        !minesweeper.gameArray[i][j].clicked &&\n        !minesweeper.gameArray[i][j].flagged'\n        src = '../../assets/flagging.png'\n        class = 'flagging'>\n    \n        <img *ngIf = '!minesweeper.gameArray[i][j].clicked &&\n        minesweeper.gameArray[i][j].flagged' \n        src = '../../assets/flag2.png'\n        class = 'flagged'>\n        \n      </div>\n    </div>\n  \n    </div>\n  \n    \n    <div class = 'dropdown'>\n      <a (click) = 'displayShareWindow()' class = 'shareLink'><img src = '../../assets/link2.png'></a>\n    </div>\n  \n    <div class = 'linkToShare' [ngClass] = \"{'hide' : initialLoad || !shareWindowDisplay}\">\n      <h3>Share this link with a friend to start the game</h3>\n      <h6>{{linkToShare}}</h6>\n      <button (click) = 'closeShareWindow()'>Close</button>\n      <button (click) = 'copyToClipboard(linkToShare)'>Copy to Clipboard</button>\n      <button (click) = 'sendEmailTo()'>Share Via Email</button>\n      <br>\n      <div class = 'emailContainer'>\n        <mat-form-field  class = 'fullWidth' >\n            <input [(ngModel)] = 'friendEmail' matInput  placeholder=\"Email Address\" name = 'Email_Address'>\n          </mat-form-field>\n      </div>\n    </div>\n  \n    \n  \n    <div id = 'opponentBoard' *ngIf = 'opponentBoard'>\n      \n      <div class = 'ticker' id = 'numMines'>\n        <h2 class = 'opponentLabel' >{{opponentBoard.numMines}}</h2>\n        <h6 class = 'opponentName'>Mines Remaining</h6>\n      </div>\n  \n        <div *ngIf = 'otherUser'>\n          <div *ngFor = 'let row of opponentBoard.gameArray; index as i' class = 'row'>\n            \n            <div *ngFor = 'let column of opponentBoard.gameArray; index as j' \n              class = 'cell'\n              [ngClass]= \"{'uncovered' : opponentBoard.gameArray[i][j].clicked && !opponentBoard.gameArray[i][j].mine}\">\n              \n              <p *ngIf = 'opponentBoard.gameArray[i][j].clicked && \n              !opponentBoard.gameArray[i][j].mine && \n              opponentBoard.gameArray[i][j].adjacentMines > 0'\n              >{{opponentBoard.gameArray[i][j].adjacentMines}}</p>\n              \n              <img *ngIf = 'opponentBoard.gameArray[i][j].clicked && \n              opponentBoard.gameArray[i][j].mine'\n              src = '../../assets/download.png' class = 'mine'>\n          \n              <img *ngIf = '!opponentBoard.gameArray[i][j].clicked &&\n              opponentBoard.gameArray[i][j].flagged' \n              src = '../../assets/flag2.png'\n              class = 'flagged'>\n            \n            </div>\n          </div>\n        </div>\n\n        <h2 *ngIf = '!otherUser && userChose' id = 'waitingForUser'>Waiting for another player</h2>\n      \n      </div>\n</div>\n    \n  <div id = 'winner' *ngIf = 'minesweeper.winner'>\n      <h2>Awww yeah!! :)</h2>\n      <h4>Nice work! Your time was: {{minesweeper.gamePlayTime}} seconds</h4>\n      <h4>Top scores for {{difficulty}}</h4>\n      <ul id = 'topScores'>\n        <li *ngFor = 'let score of topScores' class = 'topScoreItem'>{{score.time}} s</li>\n      </ul>\n      <button (click) = 'reset()' >Play again</button>\n  </div>\n\n\n\n  <div *ngIf = '!userChose' class = 'choice'>\n    <div class = 'choiceButton'>\n      <button (mouseenter) = 'mouseEnter(\"private\")'\n      (mouseleave) = 'mouseLeave()'\n      (click) = 'choosePrivateGame()'>Private Game</button>\n      <h5 *ngIf = 'hoveredButton == \"private\"'>Invite a friend to play</h5>\n  </div>\n\n    <div class = 'choiceButton'>\n      <button (mouseenter) = 'mouseEnter(\"public\")'\n      (mouseleave) = 'mouseLeave()'\n      (click) = 'choosePublicGame()'>Public Game</button>\n      <h5 id = 'publicH5' *ngIf = 'hoveredButton == \"public\"'>You are randomly assigned an opponent</h5>\n    </div>\n  </div>\n\n\n  <div class = 'options' *ngIf = '!dropdownHidden'>\n    <h3>Choose a difficulty</h3>\n      <ul>\n        <li><a (click) = 'changeDiff(\"expert\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'expert'}\" >Expert</a></li>\n        <li><a (click) = 'changeDiff(\"hard\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'hard'}\" >Hard</a></li>\n        <li><a (click) = 'changeDiff(\"normal\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'normal'}\" >Normal</a></li>\n        <li><a (click) = 'changeDiff(\"easy\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'easy'}\" >Easy</a></li>\n        <li><a (click) = 'changeDiff(\"beginner\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'beginner'}\" >Beginner</a></li>\n      </ul>\n      <button (click) = 'confirmDiff()' class = 'cancel'>Ok</button>\n  </div>\n\n  <div class = 'options' *ngIf = 'minesweeper.gameOver && !minesweeper.winner'>\n    <h3>Game Over :(</h3>\n    <h3>Please wait for opponent to finish their game</h3>\n  </div>\n\n  \n\n"

/***/ }),

/***/ "./src/app/multi/multi.component.ts":
/*!******************************************!*\
  !*** ./src/app/multi/multi.component.ts ***!
  \******************************************/
/*! exports provided: MultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiComponent", function() { return MultiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _minesweeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minesweeper */ "./src/app/minesweeper.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");

//Imports







var MultiComponent = /** @class */ (function () {
    function MultiComponent(_component, _route, _http) {
        this._component = _component;
        this._route = _route;
        this._http = _http;
        this.diffConfirmed = false;
        this.userChose = false;
        this.hoveredCell = [-1, -1];
        this.initialLoad = true;
        this.friendEmail = "";
        this.firstUserToPublic = false;
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
        this._component.currentPage = 'multi';
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
            _this.linkToShare = 'http://' + _this.IP + '/room/' + data.roomID;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MultiComponent.prototype, "handleKeyBoardEvent", null);
    MultiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi',
            template: __webpack_require__(/*! ./multi.component.html */ "./src/app/multi/multi.component.html"),
            styles: [__webpack_require__(/*! ./multi.component.css */ "./src/app/multi/multi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]])
    ], MultiComponent);
    return MultiComponent;
}());



/***/ }),

/***/ "./src/app/single/single.component.css":
/*!*********************************************!*\
  !*** ./src/app/single/single.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gameBoard{\n    margin: 10px 50px 7px 3%;\n    width: 85%;\n    text-align: center;\n    padding: 50px;\n}\n\n.cell{\n    display: inline-block;\n    vertical-align: top;\n    height: 35px;\n    margin: 1px;\n    border-radius: 3px;\n    width: 35px;\n    background-color: rgba(0,0,0,1);\n}\n\n.cellHover {\n    background-color: rgb(18, 18, 18);\n}\n\n.exploded {\n    background-color: gray;\n}\n\n@-webkit-keyframes uncover {\n    from {background-color: black}\n    to {background-color: #353535}\n}\n\n@keyframes uncover {\n    from {background-color: black}\n    to {background-color: #353535}\n}\n\n.uncovered{\n    -webkit-animation-name: uncover;\n            animation-name: uncover;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    background-color: #353535;\n}\n\n.test{\n    background-color: red;\n}\n\n.mine {\n    height: 30px;\n    width: 30px;\n    margin-top: 2px;\n}\n\n.refresh{\n    margin-bottom: 0%;\n    width: 40px;\n    margin-left: 45.6%;\n    height: 40px;\n    cursor: pointer;\n}\n\n#info {\n    margin-left: 1% !important;\n}\n\n.infoButton {\n    margin-top: 26% !important;\n}\n\n.dropdown {\n    font-size: 23px;\n    margin-top: 2%;\n    text-decoration: none;\n    color: #f0a554;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.options ul {\n    list-style-type: none;\n    padding: 0;\n    text-align: center;\n}\n\n.options {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 21%;\n    padding: 60px;\n    border-radius: 8px;\n    left: 42%;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.9);\n}\n\n.topScoreItem {\n    margin-bottom: 0% !important;\n    text-align: center;\n    cursor: default;\n    color: #a7a7a7;\n}\n\n#topScores {\n    list-style-type: none;\n    text-align: center;\n    padding-left: 0px;\n    border-radius: 5px;\n    border: 1px solid #777777;\n    cursor: default;\n    background: #0a4848;\n}\n\nli {\n    margin-bottom: 34%;\n    text-align: center;\n    font-size: 22px;\n}\n\nli a{\n    text-decoration: none;\n    color: white;\n    font-family: monospace;\n    cursor: pointer;\n}\n\n.cancel{\n    margin-top: 40%;\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n}\n\n.info {\n    width: 500px !important;\n    left: 32% !important;\n    top: 28% !important;\n}\n\n.info p {\n    line-height: 35px;\n    color : #b5b5b5;\n}\n\n.info h2 {\n    color: #b5b5b5;\n}\n\n.hide {\n    display: none;\n}\n\n.hiddenAnimation {\n    -webkit-animation: hideOptions 0.5s 1 ease-in forwards;\n            animation: hideOptions 0.5s 1 ease-in forwards;\n}\n\n@keyframes hideOptions {\n    0% {\n        top : 21%;\n        opacity: 1;\n    }   \n    99% {\n        top: -59%;\n        opacity: 1;\n    }\n    100% {\n        top: -60%;\n        opacity: 0;\n        display: none;\n    }\n}\n\n@-webkit-keyframes hideOptions {\n    0% {\n      top: 21%;\n      opacity: 1;\n    }\n    99% {\n      top: 99%;\n      opacity: 1;\n    }\n    100% {\n      top: 100%;\n      opacity: 0;\n      display: none;\n    }\n}\n\n.showAnimation {\n    -webkit-animation: showOptions 1s 1 ease-in  forwards ;\n            animation: showOptions 1s 1 ease-in  forwards ;\n}\n\n@-webkit-keyframes showOptions {\n    0% {\n        opacity: 0;\n    }\n    99% {\n        opacity: 0.99;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes showOptions {\n    0% {\n        opacity: 0;\n    }\n    99% {\n        opacity: 0.99;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.dropdownDisplayed {\n    margin-bottom: 0%;\n}\n\n.selectedDifficulty {\n    color: #619600 !important;\n}\n\n.flagging {\n    height: 5px;\n    width: 5px;\n    margin-top: 15px;\n}\n\n.flagged {\n    height: 25px;\n    width: 22px;\n    margin-left: 5px;\n    margin-top: 6px;\n}\n\n.cell p {\n    font-size: 29px;\n    margin-top: 0px;\n    font-family: \"Quicksand\",\"Lucida Grande\",\"Helvetica\",\"Arial\",\"Verdana\",\"sans-serif\";\n}\n\n.one{\n    color: rgb(34, 109, 34);\n}\n\n.two {\n    color: #00AAC4;\n}\n\n.three {\n    color: #DD6B55;\n}\n\n.four {\n    color: #C2A5CF;\n}\n\n.five {\n    color: #BF812D;\n}\n\n.six {\n    color: #66FFFF;\n}\n\n.seven {\n    color: #FFFF99\n}\n\n.eight {\n    color: #FF9900;\n}\n\n#winner {\n    text-align: center;\n    position: absolute;\n    box-shadow: 0px 0px 177px 61px black;\n    top: 26%;\n    padding: 76px;\n    border-radius: 8px;\n    left: 37%;\n    border: 1px solid gray;\n    background-color: rgba(47, 79, 79, 0.95);\n}\n\n#winner h2 {\n    color: #f0a554;\n}\n\n#winner h4 {\n    color: #f0a554;\n}\n\n#winner button {\n    cursor: pointer;\n    font-size: 19px;\n    background-image: linear-gradient(blue, #5b5bff);\n    box-shadow: 0px 3px 18px 3px black;\n    padding: 12px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    color: white;\n    outline: none;\n}\n\n.ticker {\n    display: inline-block;\n    vertical-align: top;\n}\n\n#timer h2 {\n    color: #619600;\n    border-radius: 5px;\n    padding: 8px;\n    background-image: linear-gradient(#000567, #000cea);\n    box-shadow: 6px 7px 15px black;\n    border: 1px solid black;\n}\n\n#timer h6 {\n    color: #f0a554;\n}\n\n#numMines h6 {\n    color: #f0a554;\n}\n\n#numMines{\n    font-family: monospace;\n    font-size: 19px;\n}\n\n#numMines h2 {\n    color: #619600;\n    box-shadow: 6px 7px 15px black;\n    border-radius: 5px;\n    padding: 8px;\n    background-image: linear-gradient(#000567, #000cea);\n    border: 1px solid black;\n}\n\n#timer{\n    margin-left: 20%;\n    font-family: monospace;\n    font-size: 19px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlL3NpbmdsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLGtDQUFrQztDQUNyQzs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsSUFBSSx5QkFBeUIsQ0FBQztDQUNqQzs7QUFIRDtJQUNJLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsSUFBSSx5QkFBeUIsQ0FBQztDQUNqQzs7QUFFRDtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsU0FBUztJQUNULGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix3Q0FB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ZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlL3NpbmdsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dhbWVCb2FyZHtcbiAgICBtYXJnaW46IDEwcHggNTBweCA3cHggMyU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweDtcbn1cblxuLmNlbGx7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDEpO1xufVxuXG4uY2VsbEhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE4LCAxOCk7XG59XG5cbi5leHBsb2RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuQGtleWZyYW1lcyB1bmNvdmVyIHtcbiAgICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiBibGFja31cbiAgICB0byB7YmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNX1cbn1cblxuLnVuY292ZXJlZHtcbiAgICBhbmltYXRpb24tbmFtZTogdW5jb3ZlcjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbn1cblxuLnRlc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWluZSB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuXG4ucmVmcmVzaHtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDUuNiU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2luZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxJSAhaW1wb3J0YW50O1xufVxuXG4uaW5mb0J1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjYlICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93biB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2YwYTU1NDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3B0aW9ucyB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3B0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3N3B4IDYxcHggYmxhY2s7XG4gICAgdG9wOiAyMSU7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbGVmdDogNDIlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjkpO1xufVxuXG4udG9wU2NvcmVJdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgY29sb3I6ICNhN2E3YTc7XG59XG5cbiN0b3BTY29yZXMge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc3Nzc7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJhY2tncm91bmQ6ICMwYTQ4NDg7XG59XG5cbmxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzNCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxubGkgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FuY2Vse1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5mbyB7XG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMzIlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAyOCUgIWltcG9ydGFudDtcbn1cblxuLmluZm8gcCB7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY29sb3IgOiAjYjViNWI1O1xufVxuXG4uaW5mbyBoMiB7XG4gICAgY29sb3I6ICNiNWI1YjU7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuQW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IGhpZGVPcHRpb25zIDAuNXMgMSBlYXNlLWluIGZvcndhcmRzO1xufVxuXG5cbkBrZXlmcmFtZXMgaGlkZU9wdGlvbnMge1xuICAgIDAlIHtcbiAgICAgICAgdG9wIDogMjElO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH0gICBcbiAgICA5OSUge1xuICAgICAgICB0b3A6IC01OSU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0b3A6IC02MCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGlkZU9wdGlvbnMge1xuICAgIDAlIHtcbiAgICAgIHRvcDogMjElO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgOTklIHtcbiAgICAgIHRvcDogOTklO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cblxuLnNob3dBbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbjogc2hvd09wdGlvbnMgMXMgMSBlYXNlLWluICBmb3J3YXJkcyA7XG59XG5cbkBrZXlmcmFtZXMgc2hvd09wdGlvbnMge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgOTklIHtcbiAgICAgICAgb3BhY2l0eTogMC45OTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5cbi5kcm9wZG93bkRpc3BsYXllZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG5cbi5zZWxlY3RlZERpZmZpY3VsdHkge1xuICAgIGNvbG9yOiAjNjE5NjAwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGFnZ2luZyB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZmxhZ2dlZCB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uY2VsbCBwIHtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLFwiTHVjaWRhIEdyYW5kZVwiLFwiSGVsdmV0aWNhXCIsXCJBcmlhbFwiLFwiVmVyZGFuYVwiLFwic2Fucy1zZXJpZlwiO1xufVxuXG4ub25le1xuICAgIGNvbG9yOiByZ2IoMzQsIDEwOSwgMzQpO1xufVxuXG4udHdvIHtcbiAgICBjb2xvcjogIzAwQUFDNDtcbn1cblxuLnRocmVlIHtcbiAgICBjb2xvcjogI0RENkI1NTtcbn1cblxuLmZvdXIge1xuICAgIGNvbG9yOiAjQzJBNUNGO1xufVxuXG4uZml2ZSB7XG4gICAgY29sb3I6ICNCRjgxMkQ7XG59XG5cbi5zaXgge1xuICAgIGNvbG9yOiAjNjZGRkZGO1xufVxuXG4uc2V2ZW4ge1xuICAgIGNvbG9yOiAjRkZGRjk5XG59XG5cbi5laWdodCB7XG4gICAgY29sb3I6ICNGRjk5MDA7XG59XG5cbiN3aW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNzdweCA2MXB4IGJsYWNrO1xuICAgIHRvcDogMjYlO1xuICAgIHBhZGRpbmc6IDc2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGxlZnQ6IDM3JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC45NSk7XG59XG5cbiN3aW5uZXIgaDIge1xuICAgIGNvbG9yOiAjZjBhNTU0O1xufVxuXG4jd2lubmVyIGg0IHtcbiAgICBjb2xvcjogI2YwYTU1NDtcbn1cblxuI3dpbm5lciBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsICM1YjViZmYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMThweCAzcHggYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRpY2tlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiN0aW1lciBoMiB7XG4gICAgY29sb3I6ICM2MTk2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwMDU2NywgIzAwMGNlYSk7XG4gICAgYm94LXNoYWRvdzogNnB4IDdweCAxNXB4IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jdGltZXIgaDYge1xuICAgIGNvbG9yOiAjZjBhNTU0O1xufVxuXG4jbnVtTWluZXMgaDYge1xuICAgIGNvbG9yOiAjZjBhNTU0O1xufVxuXG4jbnVtTWluZXN7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG5cbiNudW1NaW5lcyBoMiB7XG4gICAgY29sb3I6ICM2MTk2MDA7XG4gICAgYm94LXNoYWRvdzogNnB4IDdweCAxNXB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDA1NjcsICMwMDBjZWEpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jdGltZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/single/single.component.html":
/*!**********************************************!*\
  !*** ./src/app/single/single.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = 'gameBoard'>\n  \n  <div class = 'ticker' id = 'numMines'>\n    <h2>{{minesweeper.numMines}}</h2>\n    <h6>Mines Remaining</h6>\n  </div>\n\n  <div class = 'ticker' id = 'timer'>\n    <h2>{{minesweeper.displayedTime}}</h2>\n    <h6>Current Game Time</h6>\n  </div>\n\n  <div *ngFor = 'let row of minesweeper.gameArray; index as i' class = 'row'>\n    \n    <div *ngFor = 'let column of minesweeper.gameArray; index as j' \n    class = 'cell'\n    (click) = 'uncover(i,j)'\n    (mouseenter) = 'mouseEnter(i, j)'\n    (mouseleave) = 'mouseLeave()'\n    [ngClass]= \"{'uncovered' : minesweeper.gameArray[i][j].clicked && !minesweeper.gameArray[i][j].mine, 'cellHover' : hoveredCell[0] == i && hoveredCell[1] == j && !minesweeper.gameArray[i][j].clicked}\">\n    \n    <p *ngIf = 'minesweeper.gameArray[i][j].clicked && \n    !minesweeper.gameArray[i][j].mine && \n    minesweeper.gameArray[i][j].adjacentMines > 0'\n    [ngClass] = \"colorCode[minesweeper.gameArray[i][j].adjacentMines]\"\n    >{{minesweeper.gameArray[i][j].adjacentMines}}</p>\n    \n    <img *ngIf = 'minesweeper.gameArray[i][j].clicked && \n    minesweeper.gameArray[i][j].mine'\n    src = '../../assets/download.png' class = 'mine'>\n\n    <img *ngIf = 'flaggingEnabled && \n    !minesweeper.gameArray[i][j].clicked &&\n    !minesweeper.gameArray[i][j].flagged'\n    src = '../../assets/flagging.png'\n    class = 'flagging'>\n\n    <img *ngIf = '!minesweeper.gameArray[i][j].clicked &&\n    minesweeper.gameArray[i][j].flagged' \n    src = '../../assets/flag2.png'\n    class = 'flagged'>\n    \n  </div>\n</div>\n\n  <a class = 'dropdown' (click) = 'toggleDropdown()' [ngClass] = \"{'dropdownDisplayed' : !dropdownHidden}\"><div class = 'dropdown'>Game Options</div></a>\n  <div class = 'options' [ngClass] = \"{'hiddenAnimation' : dropdownHidden, 'hide' : initialDropdownLoad, 'showAnimation' : !dropdownHidden}\">\n    <ul>\n      <li><a (click) = 'changeDiff(\"expert\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'expert'}\" >Expert</a></li>\n      <li><a (click) = 'changeDiff(\"hard\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'hard'}\" >Hard</a></li>\n      <li><a (click) = 'changeDiff(\"normal\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'normal'}\" >Normal</a></li>\n      <li><a (click) = 'changeDiff(\"easy\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'easy'}\" >Easy</a></li>\n      <li><a (click) = 'changeDiff(\"beginner\")' [ngClass] = \"{'selectedDifficulty' : difficulty == 'beginner'}\" >Beginner</a></li>\n    </ul>\n    <button (click) = 'toggleDropdown()' class = 'cancel'>Cancel</button>\n  </div>\n\n</div>\n\n<div id = 'winner' *ngIf = 'minesweeper.winner'>\n  <h2>Awww yeah!! :)</h2>\n  <h4>Nice work! Your time was: {{minesweeper.gamePlayTime}} seconds</h4>\n  <h4>Top scores for {{difficulty}}</h4>\n  <ul id = 'topScores'>\n    <li *ngFor = 'let score of topScores' class = 'topScoreItem'>{{score.time}} s</li>\n  </ul>\n  <button (click) = 'reset()' >Play again</button>\n</div>\n\n<div [ngClass] = \"{'hiddenAnimation' : !infoPopUp, 'hide' : initialPopUpLoad, 'showAnimation' : infoPopUp}\" class = 'options info'>\n  <h2>Welcome to minesweeper!</h2>\n  <p>Find all of the buried mines to win the game, but be careful to not step on them!\n    Instead, flag them by pressing the 'F' key and clicking where you think they are.\n    Numbered cells tell you how many mines are adjacent (including diagonals).\n    Hit the green refresh button to start a new game, and select 'Options' if you'd like to change the difficulty.\n    Good luck!\n  </p>\n  <button (click) = 'displayInfo()' class = 'cancel infoButton'>Ok, I got it</button>\n</div>\n\n<a (click) = 'reset()'><img class = 'refresh' src = '../../assets//refresh.png'></a>\n<a (click) = 'displayInfo()'><img id = 'info' class = 'refresh' src = '../../assets/information-icon-3.png'></a>"

/***/ }),

/***/ "./src/app/single/single.component.ts":
/*!********************************************!*\
  !*** ./src/app/single/single.component.ts ***!
  \********************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _minesweeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minesweeper */ "./src/app/minesweeper.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");







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
        this._component.currentPage = 'single';
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
        this._component.gameStarted = true;
        if (this.flaggingEnabled) {
            this.minesweeper.flag(i, j);
        }
        else {
            this.minesweeper.uncover(i, j);
        }
        var self = this;
        if (this.minesweeper.winner) {
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
        this.dropdownHidden = true;
        this.minesweeper = new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Minesweeper"](this.difficulty, 'single');
    };
    //this method toggles the users ability to place flags
    SingleComponent.prototype.handleKeyBoardEvent = function (event) {
        if (event.key == 'f') {
            this.flaggingEnabled = !this.flaggingEnabled;
            console.log(this.flaggingEnabled);
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
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.css */ "./src/app/single/single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
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

module.exports = __webpack_require__(/*! /Users/bbauer/Desktop/minesweeper/client/public/src/main.ts */"./src/main.ts");


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