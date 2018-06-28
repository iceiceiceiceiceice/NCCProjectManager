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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/my-dashboard\">My Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-project\">Create Project</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-note\">Create Notes</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                Add user to the project\r\n            </li>\r\n        </ol>\r\n        <div class=\"card add-user\">\r\n            <div class=\"card-header text-center\">\r\n                <h3>Add user to the project</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #formAddUser=\"ngForm\" (ngSubmit)=\"onSubmit(formAddUser);\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-control-sm\">\r\n                            <label for=\"select-project\">Select the project name:</label>\r\n                            <select \r\n                                class=\"custom-select\" \r\n                                id=\"select-project\"\r\n                                [(ngModel)]=\"selectProject\" \r\n                                name=\"project_ID\"\r\n                            >\r\n                                <option \r\n                                    *ngFor=\"let item of listProjects\"\r\n                                    [value]=\"item[1].project_id\"\r\n                                >\r\n                                    {{item[1].projectName}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-control-sm\">\r\n                            <label for=\"name-user\">Select user: </label>\r\n                            <select \r\n                                class=\"custom-select\" \r\n                                id=\"select-user\"\r\n                                [(ngModel)]=\"selectUser\" \r\n                                name=\"user_ID\"\r\n                            >\r\n                                <option \r\n                                    *ngFor=\"let item of listUsers\"\r\n                                    [value]=\"item.id\"\r\n                                >\r\n                                    {{item.email}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-control-sm\">\r\n                            <label for=\"role\">Roles</label>\r\n                            <input \r\n                                class=\"form-control\" \r\n                                id=\"role\" \r\n                                placeholder=\"Enter role\"\r\n                                name=\"role\"\r\n                                #txtRole=\"ngModel\"\r\n                                ngModel\r\n                                required\r\n                            >\r\n                            <p *ngIf=\"txtRole.touched && txtRole.errors?.required\" class=\"text-danger\">\r\n                                Role is required.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"container\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-6 text-right\">\r\n                                <a class=\"btn btn-secondary\" routerLink=\"/my-dashboard\">Cancel</a>\r\n                            </div>\r\n                            <div class=\"col-6 text-left\">\r\n                                <button \r\n                                    class=\"btn btn-primary\" \r\n                                    type=\"submit\"\r\n                                    [disabled]=\"formAddUser.invalid\"\r\n                                >Add</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(appService, router) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.listProjects = [];
        this.listUsers = [];
        this.appService.sendGetProjects()
            .then(function (listProject) {
            var arr = Object.keys(listProject).map(function (key) {
                return [Number(key), listProject[key]];
            });
            _this.listProjects = arr;
        })
            .catch(function (error) { return console.log(error); });
        this.appService.sendGetUsers()
            .then(function (listUser) {
            _this.listUsers = listUser;
        })
            .catch(function (error) { return console.log(error); });
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.selectProject = 1;
        this.selectUser = 1;
    };
    AddUserComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.appService.sendAddUser(form.value)
            .then(function (result) {
            if (result.status == 'true') {
                alert('Bạn đã thêm user vào project thành công.');
                _this.router.navigate(['my-dashboard']);
            }
            else {
                alert('Thêm thất bại.');
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-project/create-project.component */ "./src/app/create-project/create-project.component.ts");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "./src/app/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _create_note_create_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-note/create-note.component */ "./src/app/create-note/create-note.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _show_project_show_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-project/show-project.component */ "./src/app/show-project/show-project.component.ts");
/* harmony import */ var _show_user_show_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-user/show-user.component */ "./src/app/show-user/show-user.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
/* harmony import */ var _note_project_note_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./note-project/note-project.component */ "./src/app/note-project/note-project.component.ts");
/* harmony import */ var _app_user_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/user/user-projects/user-projects.component */ "./src/app/user/user-projects/user-projects.component.ts");
/* harmony import */ var _app_user_user_notes_user_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/user/user-notes/user-notes.component */ "./src/app/user/user-notes/user-notes.component.ts");
/* harmony import */ var _app_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/user/user-dashboard/user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _app_user_user_create_note_user_create_note_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/user/user-create-note/user-create-note.component */ "./src/app/user/user-create-note/user-create-note.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'my-dashboard', component: _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MyDashboardComponent"] },
    { path: 'create-project', component: _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_4__["CreateProjectComponent"] },
    { path: 'create-note', component: _create_note_create_note_component__WEBPACK_IMPORTED_MODULE_6__["CreateNoteComponent"] },
    { path: 'add-user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"] },
    { path: 'show-project', component: _show_project_show_project_component__WEBPACK_IMPORTED_MODULE_8__["ShowProjectComponent"] },
    { path: 'show-user', component: _show_user_show_user_component__WEBPACK_IMPORTED_MODULE_9__["ShowUserComponent"] },
    { path: 'note-project/:id', component: _note_project_note_project_component__WEBPACK_IMPORTED_MODULE_11__["NoteProjectComponent"] },
    { path: 'project-detail/:id', component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDetailComponent"] },
    { path: 'user', component: _app_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["UserDashboardComponent"] },
    { path: 'user/user-projects', component: _app_user_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_12__["UserProjectsComponent"] },
    { path: 'user/user-notes', component: _app_user_user_notes_user_notes_component__WEBPACK_IMPORTED_MODULE_13__["UserNotesComponent"] },
    { path: 'user/user-create-note', component: _app_user_user_create_note_user_create_note_component__WEBPACK_IMPORTED_MODULE_15__["UserCreateNoteComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n    <app-login></app-login>\r\n-->\r\n<router-outlet></router-outlet>\r\n<!--\r\n    \r\n-->\r\n<!--\r\n    \r\n-->\r\n<!--\r\n    \r\n-->\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-project/create-project.component */ "./src/app/create-project/create-project.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _create_note_create_note_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-note/create-note.component */ "./src/app/create-note/create-note.component.ts");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "./src/app/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _show_project_show_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-project/show-project.component */ "./src/app/show-project/show-project.component.ts");
/* harmony import */ var _show_user_show_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-user/show-user.component */ "./src/app/show-user/show-user.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
/* harmony import */ var _user_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user-projects/user-projects.component */ "./src/app/user/user-projects/user-projects.component.ts");
/* harmony import */ var _user_user_notes_user_notes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user-notes/user-notes.component */ "./src/app/user/user-notes/user-notes.component.ts");
/* harmony import */ var _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/user-dashboard/user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _user_user_create_note_user_create_note_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user-create-note/user-create-note.component */ "./src/app/user/user-create-note/user-create-note.component.ts");
/* harmony import */ var _note_project_note_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./note-project/note-project.component */ "./src/app/note-project/note-project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_7__["CreateProjectComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"],
                _create_note_create_note_component__WEBPACK_IMPORTED_MODULE_10__["CreateNoteComponent"],
                _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["MyDashboardComponent"],
                _show_project_show_project_component__WEBPACK_IMPORTED_MODULE_12__["ShowProjectComponent"],
                _show_user_show_user_component__WEBPACK_IMPORTED_MODULE_13__["ShowUserComponent"],
                _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDetailComponent"],
                _user_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_16__["UserProjectsComponent"],
                _user_user_notes_user_notes_component__WEBPACK_IMPORTED_MODULE_17__["UserNotesComponent"],
                _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["UserDashboardComponent"],
                _user_user_create_note_user_create_note_component__WEBPACK_IMPORTED_MODULE_19__["UserCreateNoteComponent"],
                _note_project_note_project_component__WEBPACK_IMPORTED_MODULE_20__["NoteProjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:8080/';
var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
    'Content-Type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzAxOTU1MTcsInVzZXJuYW1lIjoiYWRtaW5AZ21haWwuY29tIn0.r0GfyER9QAKoR-MrX4Fo1qCwXxkjToz-EOWrjkLTDiU'
});
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.sendLogin = function (value) {
        var url = URL + 'login';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendRegister = function (value) {
        var url = URL + 'register';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendGetProjects = function () {
        var url = URL + 'get-projects';
        return this.http.get(url, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendGetUsers = function () {
        var url = URL + 'get-users';
        return this.http.get(url, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendCreateProject = function (value) {
        var url = URL + 'create-project';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendLogTimeSheet = function (value) {
        var url = URL + 'log-time-sheet/create';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendAddUser = function (value) {
        var url = URL + 'add-user';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendProjectDetail = function (value) {
        var url = URL + 'project-detail';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendUserProjects = function (value) {
        var url = URL + 'user/user-projects';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendUserNotes = function (value) {
        var url = URL + 'log-time-sheet/user';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService.prototype.sendProjectNotes = function (value) {
        var url = URL + 'log-time-sheet/user/project';
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/create-note/create-note.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-note/create-note.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}"

/***/ }),

/***/ "./src/app/create-note/create-note.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-note/create-note.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/my-dashboard\">My Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-project\">Create Project</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                Create Notes\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/add-user\">Add user to the project</a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card create-note\">\r\n            <div class=\"card-header text-center\">\r\n                <h3>Create New Notes</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #formCreateNote=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateNote);\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"select-project\">Select the project name:</label>\r\n                                <select \r\n                                    class=\"custom-select\" \r\n                                    id=\"select-project\"\r\n                                    [(ngModel)]=\"selectProject\" \r\n                                    name=\"project_id\"\r\n                                >\r\n                                    <option \r\n                                        *ngFor=\"let item of listProjects\"\r\n                                        [value]=\"item[1].project_id\"\r\n                                    >\r\n                                        {{item[1].projectName}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"select-job\">Select job type:</label>\r\n                                <select \r\n                                    class=\"custom-select\" \r\n                                    id=\"select-job\"\r\n                                    [(ngModel)]=\"selectJob\" \r\n                                    name=\"job_type\"\r\n                                >\r\n                                    <option \r\n                                        *ngFor=\"let item of listJobs\"\r\n                                        [value]=\"item\"\r\n                                    >\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"role\">Roles</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"role\" \r\n                                    placeholder=\"Enter role\"\r\n                                    name=\"role\"\r\n                                    #txtRole=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <p *ngIf=\"txtRole.touched && txtRole.errors?.required\" class=\"text-danger\">\r\n                                    Role is required.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"time-hour\">Hours</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"time-hour\" \r\n                                    type=\"number\" \r\n                                    placeholder=\"Enter hour\"\r\n                                    name=\"hours\"\r\n                                    #txtTimeHour=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <p *ngIf=\"txtTimeHour.touched && txtTimeHour.errors?.required\" class=\"text-danger\">\r\n                                    Hours is required.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"container\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-6 text-right\">\r\n                                <a class=\"btn btn-secondary\" routerLink=\"/my-dashboard\">Cancel</a>\r\n                            </div>\r\n                            <div class=\"col-6 text-left\">\r\n                                <button \r\n                                    class=\"btn btn-primary\" \r\n                                    type=\"submit\"\r\n                                    [disabled]=\"formCreateNote.invalid\"\r\n                                >Create</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/create-note/create-note.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-note/create-note.component.ts ***!
  \******************************************************/
/*! exports provided: CreateNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNoteComponent", function() { return CreateNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateNoteComponent = /** @class */ (function () {
    function CreateNoteComponent(appService, router) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.listProjects = [];
        this.listJobs = ['task', 'fix bug', 'other'];
        this.appService.sendGetProjects()
            .then(function (listProject) {
            var arr = Object.keys(listProject).map(function (key) {
                return [Number(key), listProject[key]];
            });
            _this.listProjects = arr;
        })
            .catch(function (error) { return console.log(error); });
    }
    CreateNoteComponent.prototype.ngOnInit = function () {
        this.selectProject = 1;
        this.selectJob = 'task';
    };
    CreateNoteComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var dataRequest = form.value;
        dataRequest.user_id = parseInt(localStorage.getItem('user_id'));
        console.log(dataRequest);
        this.appService.sendLogTimeSheet(dataRequest)
            .then(function (result) {
            if (result.status == true) {
                alert('Bạn đã tạo chú thích thành công.');
                _this.router.navigate(['user']);
            }
            else {
                alert('Tạo chú thích không thành công.');
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    CreateNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-note',
            template: __webpack_require__(/*! ./create-note.component.html */ "./src/app/create-note/create-note.component.html"),
            styles: [__webpack_require__(/*! ./create-note.component.css */ "./src/app/create-note/create-note.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateNoteComponent);
    return CreateNoteComponent;
}());



/***/ }),

/***/ "./src/app/create-project/create-project.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-project/create-project.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}"

/***/ }),

/***/ "./src/app/create-project/create-project.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-project/create-project.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/my-dashboard\">My Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                Create Project\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-note\">Create Notes</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                <a routerLink=\"/add-user\">Add user to the project</a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card create-project\">\r\n            <div class=\"card-header text-center\">\r\n                <h3>Create New Project</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #formCreateProject=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateProject);\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"name-project\">Name Project</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"name-project\" \r\n                                    placeholder=\"Enter name project\"\r\n                                    name=\"projectName\"\r\n                                    #txtNameProject=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <p  *ngIf=\"txtNameProject.touched && txtNameProject.errors?.required\" \r\n                                    class=\"text-danger\"\r\n                                >\r\n                                    Name Project is required.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"name-PM\">Name PM</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"name-PM\" \r\n                                    placeholder=\"Name PM\"\r\n                                    name=\"pm\"\r\n                                    #txtNamePM=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <p  *ngIf=\"txtNamePM.touched && txtNamePM.errors?.required\" \r\n                                    class=\"text-danger\"\r\n                                >\r\n                                    Name PM is required.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"name-customer\">Name Customer</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"name-customer\" \r\n                                    placeholder=\"Name customer\"\r\n                                    name=\"customer\"\r\n                                    #txtNameCustomer=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <p  *ngIf=\"txtNameCustomer.touched && txtNameCustomer.errors?.required\" \r\n                                    class=\"text-danger\"\r\n                                >\r\n                                    Name Customer is required.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"name-technology\">Name Technology</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"name-technology\" \r\n                                    placeholder=\"Name technology\"\r\n                                    name=\"technology\"\r\n                                    #txtNameTechnology=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <p  *ngIf=\"txtNameTechnology.touched && txtNameTechnology.errors?.required\" \r\n                                    class=\"text-danger\"\r\n                                >\r\n                                    Name Technology is required.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"discription\">Discription</label>\r\n                        <textarea \r\n                            class=\"form-control\" \r\n                            id=\"discription\"\r\n                            name=\"discription\"\r\n                            #txtDiscription=\"ngModel\"\r\n                            ngModel\r\n                            required\r\n                        >\r\n                        </textarea>\r\n                        <p  *ngIf=\"txtDiscription.touched && txtDiscription.errors?.required\" \r\n                            class=\"text-danger\"\r\n                        >\r\n                            Discription is required.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"container\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-6 text-right\">\r\n                                <a class=\"btn btn-secondary\" routerLink=\"/my-dashboard\">Cancel</a>\r\n                            </div>\r\n                            <div class=\"col-6 text-left\">\r\n                                <button \r\n                                    class=\"btn btn-primary\" type=\"submit\"\r\n                                    [disabled]=\"formCreateProject.invalid\"\r\n                                >Create</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-project/create-project.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-project/create-project.component.ts ***!
  \************************************************************/
/*! exports provided: CreateProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function() { return CreateProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateProjectComponent = /** @class */ (function () {
    function CreateProjectComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    CreateProjectComponent.prototype.ngOnInit = function () {
    };
    CreateProjectComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.appService.sendCreateProject(form.value)
            .then(function (result) {
            console.log(result);
            if (result.status == true) {
                alert('Bạn đã tạo mới project thành công.');
                _this.router.navigate(['add-user']);
            }
            else {
                alert('Dự án chưa được tạo. Bạn hãy thử lại.');
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    CreateProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-project',
            template: __webpack_require__(/*! ./create-project.component.html */ "./src/app/create-project/create-project.component.html"),
            styles: [__webpack_require__(/*! ./create-project.component.css */ "./src/app/create-project/create-project.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateProjectComponent);
    return CreateProjectComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n#mainNav .navbar-collapse {\r\n    overflow: auto;\r\n    max-height: 75vh;\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    cursor: pointer;\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\r\n    float: right;\r\n    content: attr(\\f105);\r\n    font-family: 'FontAwesome';\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-sidenav .nav-link-collapse.collapsed:after {\r\n    content: attr(\\f107);\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {\r\n    position: relative;\r\n    min-width: 45px;\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\r\n    float: right;\r\n    width: auto;\r\n    content: attr(\\f105);\r\n    border: none;\r\n    font-family: 'FontAwesome';\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link .indicator {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 21px;\r\n    font-size: 10px;\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown.show > .nav-link:after {\r\n    content: attr(\\f107);\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {\r\n    overflow: hidden;\r\n    max-width: none;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n@media screen and (min-width: 481px) and (max-width: 990px){\r\n    #show-messages, #show-notifications{\r\n       display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n    #show-messages, #show-notifications{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    #mainNav .navbar-brand {\r\n        width: 250px;\r\n    }\r\n    #mainNav .navbar-collapse {\r\n        overflow: visible;\r\n        max-height: none;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-sidenav {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        flex-direction: column;\r\n        margin-top: 56px;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item {\r\n        width: 250px;\r\n        padding: 0;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\r\n        padding: 1em;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {\r\n        min-width: 0;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\r\n        width: 24px;\r\n        text-align: center;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {\r\n        max-width: 300px;\r\n    }\r\n    #mainNav.fixed-top .navbar-sidenav {\r\n        height: calc(110vh - 112px);\r\n    }\r\n    \r\n}\r\n\r\n.navbar-sidenav-tooltip.show {\r\n    display: none;\r\n}\r\n\r\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\r\n    color: #868e96;\r\n}\r\n\r\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\r\n    color: #868e96;\r\n}\r\n\r\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item > .nav-link:hover {\r\n    color: #adb5bd;\r\n}\r\n\r\n#mainNav.navbar-dark .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\r\n    color: #adb5bd;\r\n}\r\n\r\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item > .nav-link:hover {\r\n    color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n#mainNav.navbar-light .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav {\r\n        background: #343a40;\r\n    }\r\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a {\r\n        color: white !important;\r\n        background-color: #495057;\r\n    }\r\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a:focus, #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a:hover {\r\n        color: white;\r\n    }\r\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav {\r\n        background: #f8f9fa;\r\n    }\r\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a {\r\n        color: #000 !important;\r\n        background-color: #e9ecef;\r\n    }\r\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a:focus, #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a:hover {\r\n        color: #000;\r\n    }\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\r\n    <a class=\"navbar-brand\" routerLink=\"/my-dashboard\"> Project Management </a>\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n        aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\r\n            <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\r\n                <a class=\"nav-link\" routerLink=\"/my-dashboard\">\r\n                    <i class=\"fas fa-tachometer-alt fa-fw\"></i>\r\n                    <span class=\"nav-link-text\"> &nbsp; My Dashboard</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Create project\">\r\n                <a class=\"nav-link\" routerLink=\"/create-project\">\r\n                    <i class=\"fas fa-address-card fa-fw\"></i>\r\n                    <span class=\"nav-link-text\"> &nbsp; Create Project</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\" id=\"create-note\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Create notes\">\r\n                <a class=\"nav-link\" routerLink=\"/create-note\">\r\n                    <i class=\"fas fa-address-card fa-fw\"></i>\r\n                    <span class=\"nav-link-text\"> &nbsp; Create Notes</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add user to the project\">\r\n                <a class=\"nav-link\" routerLink=\"/add-user\">\r\n                    <i class=\"fas fa-address-card fa-fw\"></i>\r\n                    <span class=\"nav-link-text\"> &nbsp; Add user to the project</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <form class=\"form-inline my-2 my-lg-0 mr-lg-2\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Search for...\">\r\n                        <span class=\"input-group-append\">\r\n                            <button class=\"btn btn-primary\" type=\"button\">\r\n                                <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                        </span>\r\n                    </div>\r\n                </form>\r\n            </li>\r\n            <li class=\"nav-item\" title=\"Logout\">\r\n                <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#modalLogout\">\r\n                    <i class=\"fas fa-sign-out-alt\"></i> Logout\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<!-- Logout Modal-->\r\n<div class=\"modal fade\" id=\"modalLogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"logout\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"logout\">Ready to Leave?</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\r\n                <a class=\"btn btn-primary\" href=\"/login\">Logout</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#form-login{\r\n    position: fixed;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.card-header{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    text-shadow: 1px 1px #393A3B;\r\n}\r\n.form-login{\r\n    margin: auto;\r\n    width: 50%;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n/*Tablet*/\r\n@media screen and (min-width: 481px) and (max-width: 768px){\r\n    .form-login{\r\n        width: 70%;\r\n    }\r\n}\r\n/* Smart Phone */\r\n@media screen and (max-width: 480px){\r\n    .form-login{\r\n        width: 100%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"form-login\" class=\"bg-dark\">\r\n    <div class=\"container form-login\">\r\n        <div class=\"card card-login\">\r\n            <div class=\"card-header text-primary\">\r\n                Login with account\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #formLogin=\"ngForm\" (ngSubmit)=\"onSubmit(formLogin);\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email address</label>\r\n                        <input \r\n                            class=\"form-control\" \r\n                            id=\"email\" type=\"email\" \r\n                            placeholder=\"Enter email\"\r\n                            name=\"username\"\r\n                            #txtEmail=\"ngModel\"\r\n                            [(ngModel)]=\"email\"\r\n                            required\r\n                            email\r\n                        >\r\n                    </div>\r\n                    <div>\r\n                        <p *ngIf=\"txtEmail.touched && txtEmail.errors?.required\" class=\"text-danger\">\r\n                            Email is required.\r\n                        </p>\r\n                        <p *ngIf=\"txtEmail.touched && txtEmail.errors?.email\" class=\"text-danger\">\r\n                            Email is not valid.\r\n                        </p>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input \r\n                            class=\"form-control\" \r\n                            id=\"password\" type=\"password\" \r\n                            placeholder=\"Password\"  \r\n                            name=\"password\"\r\n                            #txtPassword=\"ngModel\"\r\n                            [(ngModel)]=\"password\"\r\n                            required\r\n                        >\r\n                    </div>\r\n                    <p *ngIf=\"txtPassword.touched && txtPassword.errors?.required\" class=\"text-danger\">\r\n                        Password is required.\r\n                    </p>\r\n                    <button \r\n                        class=\"btn btn-primary btn-block\"\r\n                        [disabled]=\"formLogin.invalid\"\r\n                    >Login</button>\r\n                   \r\n                </form>\r\n                <div class=\"text-center\">\r\n                    <a class=\"d-block small mt-4\" routerLink=\"/register\">Register an Account</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function (formLogin) {
        var _this = this;
        this.appService.sendLogin(formLogin.value)
            .then(function (result) {
            console.log(result);
            if (result.token != null) {
                localStorage.setItem('token_user', result.token);
                localStorage.setItem('user_id', result.profile.id + '');
                localStorage.setItem('user_name', result.profile.username);
                localStorage.setItem('role', result.profile.role);
                alert('Đăng nhập thành công.');
                _this.router.navigate(['my-dashboard']);
            }
            else {
                alert('Đăng nhập thất bại. Bạn hãy kiểm tra lại Email/ Password.');
                _this.router.navigate(['login']);
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}\r\n\r\ntable tbody {\r\n    counter-reset: no;\r\n}\r\n\r\ntable tbody tr{\r\n    counter-increment: no;\r\n}\r\n\r\ntable tbody tr td:first-child:before{ \r\n    content: counter(no);\r\n}\r\n\r\ntable thead {\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\ntable tbody tr td{\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                My Dashboard\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-project\"> Create Project</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-note\">Create Notes</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                <a routerLink=\"/add-user\">Add user to the project</a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card add-user\">\r\n            <div class=\"card-header text-center\">\r\n                <h3>Project Management</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row justify-content-around\">\r\n                    <table class=\"table table-bordered table-hover table-sm\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td scope=\"col\">#</td>\r\n                                <td scope=\"col\">Name Project</td>\r\n                                <td> Choose button </td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor = \"let list of listProjects\">\r\n                                <td id=\"{{list[1].project_id}}\"></td>\r\n                                <td>{{list[1].projectName}}</td>\r\n                                <td>\r\n                                    <div class=\"row justify-content-center\">\r\n                                        <div class=\"col-4 text-right\">\r\n                                            <button \r\n                                                class=\"btn btn-success\" \r\n                                                type=\"button\"\r\n                                                routerLink=\"/project-detail/{{list[1].project_id}}\"\r\n                                            >View project information</button>\r\n                                        </div>\r\n                                        <div class=\"col-4\">\r\n                                            <button \r\n                                                class=\"btn btn-primary\" \r\n                                                type=\"button\"\r\n                                                routerLink=\"/add-user\"\r\n                                            >Add user to the project</button>\r\n                                        </div>\r\n                                        <div class=\"col-4 text-left\">\r\n                                            <button \r\n                                                class=\"btn btn-info\" \r\n                                                type=\"button\"\r\n                                                routerLink=\"/note-project/{{list[1].project_id}}\"\r\n                                            >View notes information </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.listProjects = [];
        this.appService.sendGetProjects()
            .then(function (result) {
            var arr = Object.keys(result).map(function (key) {
                return [Number(key), result[key]];
            });
            _this.listProjects = arr;
        })
            .catch(function (error) { return console.log(error); });
    }
    MyDashboardComponent.prototype.ngOnInit = function () {
    };
    MyDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dashboard',
            template: __webpack_require__(/*! ./my-dashboard.component.html */ "./src/app/my-dashboard/my-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./my-dashboard.component.css */ "./src/app/my-dashboard/my-dashboard.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());



/***/ }),

/***/ "./src/app/note-project/note-project.component.css":
/*!*********************************************************!*\
  !*** ./src/app/note-project/note-project.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}\r\n\r\ntable tr td{\r\n    vertical-align: middle;\r\n}\r\n\r\n.icon-edit, .icon-delete{\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.icon-delete{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/note-project/note-project.component.html":
/*!**********************************************************!*\
  !*** ./src/app/note-project/note-project.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/my-dashboard\">My Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-project\"> Create Project</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-note\">Create Notes</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                <a routerLink=\"/add-user\">Add user to the project</a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card add-user\">\r\n            <div class=\"card-header text-center\">\r\n                <h3> Information Notes </h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-bordered table-hover table-responsive-sm table-sm table-project\">\r\n                    <thead class=\"text-center\">\r\n                        <tr>\r\n                            <td scope=\"col\">ID</td>\r\n                            <td scope=\"col\">Name Project</td>\r\n                            <td scope=\"col\">ID Note</td>\r\n                            <td scope=\"col\">Roles</td>\r\n                            <td scope=\"col\">Job type</td>\r\n                            <td scope=\"col\">Hours</td>\r\n                            <td scope=\"col\">User create note</td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr class=\"text-center\" *ngFor = \"let item of listNotes\">\r\n                            <td scope=\"row\"> {{ projectID }} </td>\r\n                            <td> {{ projectName }} </td>\r\n                            <td>{{ item.log_time_sheet_id }}</td>\r\n                            <td>{{ item.role }}</td>\r\n                            <td>{{ item.type }}</td>\r\n                            <td>{{ item.hours }}</td>\r\n                            <td>\r\n                                <!--<i class=\"fas fa-edit icon-edit text-primary\"></i>\r\n                                <i class=\"fas fa-trash-alt icon-delete text-danger\"></i>-->\r\n                                {{ item.username }}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/note-project/note-project.component.ts":
/*!********************************************************!*\
  !*** ./src/app/note-project/note-project.component.ts ***!
  \********************************************************/
/*! exports provided: NoteProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteProjectComponent", function() { return NoteProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoteProjectComponent = /** @class */ (function () {
    function NoteProjectComponent(appService, route) {
        var _this = this;
        this.appService = appService;
        this.route = route;
        this.listNotes = [];
        this.appService.sendProjectNotes({
            'token': localStorage.getItem('token_user'),
            'project_id': +this.route.snapshot.paramMap.get('id')
        })
            .then(function (result) {
            _this.listNotes = result.userLog;
            _this.projectID = result.project_id;
            _this.projectName = result.projectName;
        })
            .catch(function (error) { return console.log(error); });
    }
    NoteProjectComponent.prototype.ngOnInit = function () {
    };
    NoteProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note-project',
            template: __webpack_require__(/*! ./note-project.component.html */ "./src/app/note-project/note-project.component.html"),
            styles: [__webpack_require__(/*! ./note-project.component.css */ "./src/app/note-project/note-project.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NoteProjectComponent);
    return NoteProjectComponent;
}());



/***/ }),

/***/ "./src/app/project-detail/project-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}\r\n\r\ntable tbody {\r\n    counter-reset: no;\r\n}\r\n\r\ntable tbody tr{\r\n    counter-increment: no;\r\n}\r\n\r\ntable tbody tr td:first-child:before{ \r\n    content: counter(no);\r\n}\r\n\r\ntable tr td{\r\n    vertical-align: middle;\r\n}\r\n\r\n.icon-edit, .icon-delete{\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.icon-delete{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/my-dashboard\">My Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-project\"> Create Project</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-note\">Create Notes</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                <a routerLink=\"/add-user\">Add user to the project</a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card add-user\">\r\n            <div class=\"card-header text-center\">\r\n                <h3> Information Project </h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-bordered table-hover table-responsive-sm table-sm table-project\">\r\n                    <thead class=\"text-center\">\r\n                        <tr>\r\n                            <td scope=\"col\">ID</td>\r\n                            <td scope=\"col\">Name Project</td>\r\n                            <td scope=\"col\">Name PM</td>\r\n                            <td scope=\"col\">Name Customer</td>\r\n                            <td scope=\"col\">Name Technology</td>\r\n                            <td scope=\"col\">Description</td>\r\n                            <td scope=\"col\">User in the project</td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr class=\"text-center\">\r\n                            <td scope=\"row\">{{projectDetail.id}}</td>\r\n                            <td>{{projectDetail.projectName}}</td>\r\n                            <td>{{projectDetail.pm}}</td>\r\n                            <td>{{projectDetail.customer}}</td>\r\n                            <td>{{projectDetail.technology}}</td>\r\n                            <td>{{projectDetail.description}}</td>\r\n                            <td>\r\n                                <!--<i class=\"fas fa-edit icon-edit text-primary\"></i>\r\n                                <i class=\"fas fa-trash-alt icon-delete text-danger\"></i>-->\r\n                                <ul *ngFor=\"let user of listUser\">\r\n                                    <li>{{user.username}}</li>\r\n                                </ul>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, appService) {
        var _this = this;
        this.route = route;
        this.appService = appService;
        this.projectDetail = [];
        this.listUser = [];
        var id = {
            "project_id": +this.route.snapshot.paramMap.get('id')
        };
        this.appService.sendProjectDetail(id)
            .then(function (result) {
            var arr = Object.keys(result).map(function (key) {
                return [key, result[key]];
            });
            _this.projectDetail = arr[0][1];
            _this.listUser = arr[1][1];
        })
            .catch(function (error) { return console.log(error); });
    }
    ProjectDetailComponent.prototype.ngOnInit = function () { };
    ProjectDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.css */ "./src/app/project-detail/project-detail.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#form-register{\r\n    position: fixed;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.card-header{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    text-shadow: 1px 1px #393A3B;\r\n}\r\n.form-register{\r\n    margin: auto;\r\n    width: 50%;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n/*Tablet*/\r\n@media screen and (min-width: 481px) and (max-width: 768px){\r\n    .form-register{\r\n        width: 70%;\r\n    }\r\n}\r\n/* Smart Phone */\r\n@media screen and (max-width: 480px){\r\n    .form-register{\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"form-register\" class=\"bg-dark\">\r\n    <div class=\"container form-register\">\r\n        <div class=\"card card-register mx-auto\">\r\n            <div class=\"card-header text-primary\">\r\n                Register an Account\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #formRegister=\"ngForm\" (ngSubmit)=\"onSubmit(formRegister);\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label for=\"first-Name\">First name</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"first-Name\" type=\"text\" \r\n                                    placeholder=\"Enter first name\"\r\n                                    name=\"firstName\"\r\n                                    #txtFirstName=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <span *ngIf=\"txtFirstName.touched && txtFirstName.errors?.required\" class=\"text-danger\">\r\n                                    First Name is required.\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label for=\"last-Name\">Last name</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"last-Name\" type=\"text\" \r\n                                    placeholder=\"Enter last name\"\r\n                                    name=\"lastName\"\r\n                                    #txtLastName=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <span *ngIf=\"txtLastName.touched && txtLastName.errors?.required\" class=\"text-danger\">\r\n                                    First Name is required.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"address-Email\">Email address</label>\r\n                        <input \r\n                            class=\"form-control\" \r\n                            id=\"email\" type=\"email\" \r\n                            placeholder=\"Enter email\"\r\n                            name=\"email\"\r\n                            #txtEmail=\"ngModel\"\r\n                            ngModel\r\n                            required\r\n                            email\r\n                        >\r\n                        <span *ngIf=\"txtEmail.touched && txtEmail.errors?.required\" class=\"text-danger\">\r\n                            Email is required.\r\n                        </span>\r\n                        <span *ngIf=\"txtEmail.touched && txtEmail.errors?.email\" class=\"text-danger\">\r\n                            Email is not valid.\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label for=\"password\">Password</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"password\" type=\"password\" \r\n                                    placeholder=\"Password\"  \r\n                                    name=\"password\"\r\n                                    #txtPassword=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <span *ngIf=\"txtPassword.touched && txtPassword.errors?.required\" class=\"text-danger\">\r\n                                    Password is required.\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label for=\"confirm-Password\">Confirm password</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"confirm-password\" type=\"password\" \r\n                                    placeholder=\"Password\"  \r\n                                    name=\"confirmPassword\"\r\n                                    #txtConfirmPassword=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <span *ngIf=\"txtConfirmPassword.touched && txtConfirmPassword.errors?.required\" class=\"text-danger\">\r\n                                    Confirm Password is required.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <p *ngIf=\"(txtPassword.value != txtConfirmPassword.value)&&(txtConfirmPassword.touched||txtPassword.touched)\" class=\"text-danger\">\r\n                        Please enter your password.\r\n                    </p>\r\n                    <button \r\n                        class=\"btn btn-primary btn-block\" \r\n                        [disabled]=\"formRegister.invalid || (txtPassword.value != txtConfirmPassword.value)\"\r\n                        \r\n                    >\r\n                        Register \r\n                    </button>\r\n                </form>\r\n                <div class=\"text-center\">\r\n                    <a class=\"d-block small mt-3\" routerLink=\"/login\"> Cannel </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function (formRegister) {
        var _this = this;
        this.appService.sendRegister(formRegister.value)
            .then(function (result) {
            console.log(result);
            if (result.status == 'true') {
                alert("Bạn đã đăng kí thành công.");
                _this.router.navigate(['login']);
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/show-project/show-project.component.css":
/*!*********************************************************!*\
  !*** ./src/app/show-project/show-project.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}\r\n\r\ntable.table-project tbody {\r\n    counter-reset: no;\r\n}\r\n\r\ntable.table-project tbody tr{\r\n    counter-increment: no;\r\n}\r\n\r\ntable.table-project tbody tr td:first-child:before{ \r\n    content: counter(no);\r\n}\r\n\r\n.icon-edit, .icon-delete{\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.icon-delete{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/show-project/show-project.component.html":
/*!**********************************************************!*\
  !*** ./src/app/show-project/show-project.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/my-dashboard\">My Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-project\"> Create Project</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-note\">Create Notes</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                <a routerLink=\"/add-user\">Add user to the project</a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card add-user\">\r\n            <div class=\"card-header text-center\">\r\n                <h3> Information Project </h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-bordered table-hover table-responsive-sm table-sm table-project\">\r\n                    <thead class=\"text-center\">\r\n                        <tr>\r\n                            <td scope=\"col\">#</td>\r\n                            <td scope=\"col\">Name Project</td>\r\n                            <td scope=\"col\">Name PM</td>\r\n                            <td scope=\"col\">Name Customer</td>\r\n                            <td scope=\"col\">Name Technology</td>\r\n                            <td scope=\"col\">Description</td>\r\n                            <td></td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td scope=\"row\" class=\"text-center\"></td>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                            <td>#nn</td>\r\n                            <td>!dd</td>\r\n                            <td class=\"text-center\">\r\n                                <i class=\"fas fa-edit icon-edit text-primary\"></i>\r\n                                <i class=\"fas fa-trash-alt icon-delete text-danger\"></i>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td scope=\"row\" class=\"text-center\"></td>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                            <td>#nn</td>\r\n                            <td>!dd</td>\r\n                            <td class=\"text-center\">\r\n                                <i class=\"fas fa-edit icon-edit text-primary\"></i>\r\n                                <i class=\"fas fa-trash-alt icon-delete text-danger\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/show-project/show-project.component.ts":
/*!********************************************************!*\
  !*** ./src/app/show-project/show-project.component.ts ***!
  \********************************************************/
/*! exports provided: ShowProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProjectComponent", function() { return ShowProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowProjectComponent = /** @class */ (function () {
    function ShowProjectComponent() {
    }
    ShowProjectComponent.prototype.ngOnInit = function () {
    };
    ShowProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-project',
            template: __webpack_require__(/*! ./show-project.component.html */ "./src/app/show-project/show-project.component.html"),
            styles: [__webpack_require__(/*! ./show-project.component.css */ "./src/app/show-project/show-project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowProjectComponent);
    return ShowProjectComponent;
}());



/***/ }),

/***/ "./src/app/show-user/show-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/show-user/show-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}\r\n\r\ntable.table-project tbody {\r\n    counter-reset: no;\r\n}\r\n\r\ntable.table-project tbody tr{\r\n    counter-increment: no;\r\n}\r\n\r\ntable.table-project tbody tr td:first-child:before{ \r\n    content: counter(no);\r\n}\r\n\r\n.icon-edit, .icon-delete{\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.icon-delete{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/show-user/show-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/show-user/show-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/my-dashboard\">My Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-project\"> Create Project</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/create-note\">Create Notes</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                <a routerLink=\"/add-user\">Add user to the project</a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card add-user\">\r\n            <div class=\"card-header text-center\">\r\n                <h3> Information User </h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-bordered table-hover table-responsive-sm table-sm table-project\">\r\n                    <thead class=\"text-center\">\r\n                        <tr>\r\n                            <td scope=\"col\">#</td>\r\n                            <td scope=\"col\">First Name</td>\r\n                            <td scope=\"col\">Last Name</td>\r\n                            <td scope=\"col\">Email</td>\r\n                            <td scope=\"col\">Password</td>\r\n                            <td></td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td scope=\"row\" class=\"text-center\"></td>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                            <td>#nn</td>\r\n                            <td class=\"text-center\">\r\n                                <i class=\"fas fa-edit icon-edit text-primary\"></i>\r\n                                <i class=\"fas fa-trash-alt icon-delete text-danger\"></i>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td scope=\"row\" class=\"text-center\"></td>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                            <td>#nn</td>\r\n                            <td class=\"text-center\">\r\n                                <i class=\"fas fa-edit icon-edit text-primary\"></i>\r\n                                <i class=\"fas fa-trash-alt icon-delete text-danger\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/show-user/show-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/show-user/show-user.component.ts ***!
  \**************************************************/
/*! exports provided: ShowUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowUserComponent", function() { return ShowUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowUserComponent = /** @class */ (function () {
    function ShowUserComponent() {
    }
    ShowUserComponent.prototype.ngOnInit = function () {
    };
    ShowUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-user',
            template: __webpack_require__(/*! ./show-user.component.html */ "./src/app/show-user/show-user.component.html"),
            styles: [__webpack_require__(/*! ./show-user.component.css */ "./src/app/show-user/show-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowUserComponent);
    return ShowUserComponent;
}());



/***/ }),

/***/ "./src/app/user/user-create-note/user-create-note.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/user-create-note/user-create-note.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}"

/***/ }),

/***/ "./src/app/user/user-create-note/user-create-note.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/user/user-create-note/user-create-note.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-dashboard></app-user-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/user\"> Dashboard </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/user/user-projects\"> View all projects </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/user/user-notes\"> View all notes </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                Create Notes\r\n            </li>\r\n        </ol>\r\n        <div class=\"card create-note\">\r\n            <div class=\"card-header text-center\">\r\n                <h3>Create New Notes</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #formCreateNote=\"ngForm\" (ngSubmit)=\"onSubmit(formCreateNote);\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-row\">\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"select-project\">Select the project name:</label>\r\n                                <select \r\n                                    class=\"custom-select\" \r\n                                    id=\"select-project\"\r\n                                    [(ngModel)]=\"selectProject\" \r\n                                    name=\"project_id\"\r\n                                >\r\n                                    <option \r\n                                        *ngFor=\"let item of listProjects\"\r\n                                        [value]=\"item[1].project_id\"\r\n                                    >\r\n                                        {{item[1].projectName}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"select-job\">Select job type:</label>\r\n                                <select \r\n                                    class=\"custom-select\" \r\n                                    id=\"select-job\"\r\n                                    [(ngModel)]=\"selectJob\" \r\n                                    name=\"job_type\"\r\n                                >\r\n                                    <option \r\n                                        *ngFor=\"let item of listJobs\"\r\n                                        [value]=\"item\"\r\n                                    >\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"role\">Roles</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"role\" \r\n                                    placeholder=\"Enter role\"\r\n                                    name=\"role\"\r\n                                    #txtRole=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <p *ngIf=\"txtRole.touched && txtRole.errors?.required\" class=\"text-danger\">\r\n                                    Role is required.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"col-md-6 form-control-sm\">\r\n                                <label for=\"time-hour\">Hours</label>\r\n                                <input \r\n                                    class=\"form-control\" \r\n                                    id=\"time-hour\" \r\n                                    type=\"number\" \r\n                                    placeholder=\"Enter hour\"\r\n                                    name=\"hours\"\r\n                                    #txtTimeHour=\"ngModel\"\r\n                                    ngModel\r\n                                    required\r\n                                >\r\n                                <p *ngIf=\"txtTimeHour.touched && txtTimeHour.errors?.required\" class=\"text-danger\">\r\n                                    Hours is required.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"container\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-6 text-right\">\r\n                                <a class=\"btn btn-secondary\" routerLink=\"/my-dashboard\">Cancel</a>\r\n                            </div>\r\n                            <div class=\"col-6 text-left\">\r\n                                <button \r\n                                    class=\"btn btn-primary\" \r\n                                    type=\"submit\"\r\n                                    [disabled]=\"formCreateNote.invalid\"\r\n                                >Create</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-create-note/user-create-note.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-create-note/user-create-note.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserCreateNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateNoteComponent", function() { return UserCreateNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCreateNoteComponent = /** @class */ (function () {
    function UserCreateNoteComponent(appService, router) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.listProjects = [];
        this.listJobs = ['task', 'fix bug', 'other'];
        this.appService.sendGetProjects()
            .then(function (listProject) {
            var arr = Object.keys(listProject).map(function (key) {
                return [Number(key), listProject[key]];
            });
            _this.listProjects = arr;
        })
            .catch(function (error) { return console.log(error); });
    }
    UserCreateNoteComponent.prototype.ngOnInit = function () {
        this.selectProject = 1;
        this.selectJob = 'task';
    };
    UserCreateNoteComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var dataRequest = form.value;
        dataRequest.user_id = parseInt(localStorage.getItem('user_id'));
        console.log(dataRequest);
        this.appService.sendLogTimeSheet(dataRequest)
            .then(function (result) {
            if (result.status == true) {
                alert('Bạn đã tạo chú thích thành công.');
                _this.router.navigate(['my-dashboard']);
            }
            else {
                alert('Tạo chú thích không thành công.');
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    UserCreateNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create-note',
            template: __webpack_require__(/*! ./user-create-note.component.html */ "./src/app/user/user-create-note/user-create-note.component.html"),
            styles: [__webpack_require__(/*! ./user-create-note.component.css */ "./src/app/user/user-create-note/user-create-note.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCreateNoteComponent);
    return UserCreateNoteComponent;
}());



/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n#mainNav .navbar-collapse {\r\n    overflow: auto;\r\n    max-height: 75vh;\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    cursor: pointer;\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\r\n    float: right;\r\n    content: attr(\\f105);\r\n    font-family: 'FontAwesome';\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-sidenav .nav-link-collapse.collapsed:after {\r\n    content: attr(\\f107);\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {\r\n    position: relative;\r\n    min-width: 45px;\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\r\n    float: right;\r\n    width: auto;\r\n    content: attr(\\f105);\r\n    border: none;\r\n    font-family: 'FontAwesome';\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link .indicator {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 21px;\r\n    font-size: 10px;\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown.show > .nav-link:after {\r\n    content: attr(\\f107);\r\n}\r\n\r\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {\r\n    overflow: hidden;\r\n    max-width: none;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n@media screen and (min-width: 481px) and (max-width: 990px){\r\n    #show-messages, #show-notifications{\r\n       display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n    #show-messages, #show-notifications{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    #mainNav .navbar-brand {\r\n        width: 250px;\r\n    }\r\n    #mainNav .navbar-collapse {\r\n        overflow: visible;\r\n        max-height: none;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-sidenav {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        flex-direction: column;\r\n        margin-top: 56px;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item {\r\n        width: 250px;\r\n        padding: 0;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\r\n        padding: 1em;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {\r\n        min-width: 0;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\r\n        width: 24px;\r\n        text-align: center;\r\n    }\r\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {\r\n        max-width: 300px;\r\n    }\r\n    #mainNav.fixed-top .navbar-sidenav {\r\n        height: calc(110vh - 112px);\r\n    }\r\n    \r\n}\r\n\r\n.navbar-sidenav-tooltip.show {\r\n    display: none;\r\n}\r\n\r\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\r\n    color: #868e96;\r\n}\r\n\r\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\r\n    color: #868e96;\r\n}\r\n\r\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item > .nav-link:hover {\r\n    color: #adb5bd;\r\n}\r\n\r\n#mainNav.navbar-dark .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\r\n    color: #adb5bd;\r\n}\r\n\r\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item > .nav-link:hover {\r\n    color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n#mainNav.navbar-light .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav {\r\n        background: #343a40;\r\n    }\r\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a {\r\n        color: white !important;\r\n        background-color: #495057;\r\n    }\r\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a:focus, #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a:hover {\r\n        color: white;\r\n    }\r\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav {\r\n        background: #f8f9fa;\r\n    }\r\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a {\r\n        color: #000 !important;\r\n        background-color: #e9ecef;\r\n    }\r\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a:focus, #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a:hover {\r\n        color: #000;\r\n    }\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\r\n    <a class=\"navbar-brand\" routerLink=\"/user\"> Hello {{user}} </a>\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n        aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\r\n            <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\r\n                <a class=\"nav-link\" routerLink=\"/user\">\r\n                    <i class=\"fas fa-tachometer-alt fa-fw\"></i>\r\n                    <span class=\"nav-link-text\"> &nbsp; Dashboard</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Create project\">\r\n                <a class=\"nav-link\" routerLink=\"/user/user-projects\">\r\n                    <i class=\"fas fa-address-card fa-fw\"></i>\r\n                    <span class=\"nav-link-text\"> &nbsp; View all projects </span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\" id=\"create-note\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Create notes\">\r\n                <a class=\"nav-link\" routerLink=\"/user/user-notes\">\r\n                    <i class=\"fas fa-address-card fa-fw\"></i>\r\n                    <span class=\"nav-link-text\"> &nbsp; View all notes </span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\" id=\"create-note\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Create notes\">\r\n                <a class=\"nav-link\" routerLink=\"/user/user-create-note\">\r\n                    <i class=\"fas fa-address-card fa-fw\"></i>\r\n                    <span class=\"nav-link-text\"> &nbsp; Create Notes</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <form class=\"form-inline my-2 my-lg-0 mr-lg-2\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Search for...\">\r\n                        <span class=\"input-group-append\">\r\n                            <button class=\"btn btn-primary\" type=\"button\">\r\n                                <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                        </span>\r\n                    </div>\r\n                </form>\r\n            </li>\r\n            <li class=\"nav-item\" title=\"Logout\">\r\n                <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#modalLogout\">\r\n                    <i class=\"fas fa-sign-out-alt\"></i> Logout\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<!-- Logout Modal-->\r\n<div class=\"modal fade\" id=\"modalLogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"logout\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"logout\">Ready to Leave?</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\r\n                <a class=\"btn btn-primary\" href=\"/login\">Logout</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
        this.user = localStorage.getItem('user_name');
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user/user-notes/user-notes.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/user-notes/user-notes.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}"

/***/ }),

/***/ "./src/app/user/user-notes/user-notes.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/user-notes/user-notes.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-dashboard></app-user-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/user\"> Dashboard </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/user/user-projects\"> View all projects </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                View all notes\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                <a routerLink=\"/user/user-create-note\"> Create Notes </a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card add-user\">\r\n            <div class=\"card-header text-center\">\r\n                <h3>Project Management</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row justify-content-around\">\r\n                    <table class=\"table table-bordered table-hover table-responsive-sm table-sm table-project\">\r\n                        <thead class=\"text-center\">\r\n                            <tr>\r\n                                <td scope=\"col\">ID Project</td>\r\n                                <td scope=\"col\">Name Project</td>\r\n                                <td scope=\"col\">ID Note</td>\r\n                                <td scope=\"col\">Roles</td>\r\n                                <td scope=\"col\">Job type</td>\r\n                                <td scope=\"col\">Hours</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr class=\"text-center\" *ngFor=\"let item of arrNotes\">\r\n                                <td scope=\"row\">{{item.project_id}}</td>\r\n                                <td>{{item.projectName}}</td>\r\n                                <td>{{item.id}}</td>\r\n                                <td>{{item.role}}</td>\r\n                                <td>{{item.type}}</td>\r\n                                <td>{{item.hours}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-notes/user-notes.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-notes/user-notes.component.ts ***!
  \*********************************************************/
/*! exports provided: UserNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotesComponent", function() { return UserNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserNotesComponent = /** @class */ (function () {
    function UserNotesComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.appService.sendUserNotes({
            'user_id': localStorage.getItem('user_id')
        })
            .then(function (result) {
            console.log(result);
            _this.arrNotes = result;
        })
            .catch(function (error) { return console.log(error); });
    }
    UserNotesComponent.prototype.ngOnInit = function () {
    };
    UserNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-notes',
            template: __webpack_require__(/*! ./user-notes.component.html */ "./src/app/user/user-notes/user-notes.component.html"),
            styles: [__webpack_require__(/*! ./user-notes.component.css */ "./src/app/user/user-notes/user-notes.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], UserNotesComponent);
    return UserNotesComponent;
}());



/***/ }),

/***/ "./src/app/user/user-projects/user-projects.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/user-projects/user-projects.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody.sticky-footer {\r\n    margin-bottom: 56px;            \r\n}\r\n\r\nbody.fixed-nav {\r\n    padding-top: 56px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.smaller {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n    z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n    z-index: 1;\r\n}\r\n\r\n.content-wrapper {\r\n    overflow-x: hidden;\r\n    background: white;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .content-wrapper {\r\n        margin-left: 250px;\r\n    }\r\n}\r\n\r\nbody.sticky-footer .content-wrapper {\r\n    min-height: calc(100vh - 56px - 56px);\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 56px);\r\n    margin-top: 4.3rem;\r\n}"

/***/ }),

/***/ "./src/app/user/user-projects/user-projects.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-projects/user-projects.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-dashboard></app-user-dashboard>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/user\"> Dashboard </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                View all projects\r\n            </li>\r\n            <li class=\"breadcrumb-item\">\r\n                <a routerLink=\"/user/user-notes\"> View all notes </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">\r\n                <a routerLink=\"/user/user-create-note\"> Create Notes </a>\r\n            </li>\r\n        </ol>\r\n        <div class=\"card add-user\">\r\n            <div class=\"card-header text-center\">\r\n                <h3>Project Management</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row justify-content-around\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-projects/user-projects.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/user-projects/user-projects.component.ts ***!
  \***************************************************************/
/*! exports provided: UserProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectsComponent", function() { return UserProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProjectsComponent = /** @class */ (function () {
    function UserProjectsComponent(appService) {
        this.appService = appService;
        this.appService.sendUserProjects({
            'token': localStorage.getItem('token_user')
        })
            .then(function (result) {
            console.log(result);
        })
            .catch(function (error) { return console.log(error); });
    }
    UserProjectsComponent.prototype.ngOnInit = function () {
    };
    UserProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-projects',
            template: __webpack_require__(/*! ./user-projects.component.html */ "./src/app/user/user-projects/user-projects.component.html"),
            styles: [__webpack_require__(/*! ./user-projects.component.css */ "./src/app/user/user-projects/user-projects.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], UserProjectsComponent);
    return UserProjectsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GITLOCAL\Project-Management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map