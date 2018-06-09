webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n    text-align: center;\n}\n\na {\n    text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <router-outlet></router-outlet>\n</main>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_authentication_component__ = __webpack_require__("../../../../../src/app/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_register_register_component__ = __webpack_require__("../../../../../src/app/authentication/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tap_tap_component__ = __webpack_require__("../../../../../src/app/tap/tap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scores_scores_component__ = __webpack_require__("../../../../../src/app/scores/scores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tap_username_username_component__ = __webpack_require__("../../../../../src/app/tap/username/username.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__authentication_authentication_component__["a" /* AuthenticationComponent */] },
    { path: 'tap', component: __WEBPACK_IMPORTED_MODULE_9__tap_tap_component__["a" /* TapComponent */] },
    { path: 'scores', component: __WEBPACK_IMPORTED_MODULE_10__scores_scores_component__["a" /* ScoresComponent */] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__authentication_authentication_component__["a" /* AuthenticationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__authentication_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__authentication_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tap_tap_component__["a" /* TapComponent */],
                __WEBPACK_IMPORTED_MODULE_10__scores_scores_component__["a" /* ScoresComponent */],
                __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tap_username_username_component__["a" /* UsernameComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n    max-width: 35rem;\n    margin: auto;\n    margin-top: auto;\n    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);\n    padding: 2rem 0.5rem 1rem 0.5rem;\n    margin-top: -2rem;\n    border-bottom-left-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n    text-align: center;\n    text-transform: uppercase;\n}\n\nh1 {\n    font-family: 'Bungee Inline',cursive;\n    color: #000;\n    line-height: 1;\n    font-size: 2.5rem;\n    font-weight: 600;\n    margin-bottom: 0;\n}\n\n.header__resume {\n    font-size: 1rem;\n    margin: .5rem auto 1rem auto;\n    border-bottom: .1rem dotted #eee;\n    padding-bottom: .5rem;\n}\n\nh2 {\n    font-size: 16px;\n    text-transform: uppercase;\n    font-weight: 600;\n    border: .1rem solid rebeccapurple;\n    margin: 2rem 0 1rem 0;\n    padding: .5rem 1rem;\n    letter-spacing: .1rem;\n    cursor: pointer;\n    text-align: left;\n}\n\n.body__content {\n    max-width: 25rem;\n    border: none;\n    border-radius: 0px;\n    box-shadow:none;\n    margin-top: 1rem;\n    padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <section>\n      <h1>WELCOME ON <br><span>TAPBOARD</span></h1>\n      <p class=\"header__resume\">LOGIN OR REGISTER TO START TAPPING</p>\n  </section>\n</header>\n\n<section class=\"body__content\">\n  <h2 (click)=\"toggleLogin()\">LOGIN</h2>\n  <app-login [hidden]=\"!displayLogin\"></app-login>\n  <div>\n    <h2 (click)=\"toggleRegister()\">REGISTER</h2>\n    <app-register [hidden]=\"!displayRegister\"></app-register>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationComponent = (function () {
    function AuthenticationComponent(router) {
        this.router = router;
        this.displayLogin = true;
        this.displayRegister = false;
    }
    AuthenticationComponent.prototype.toggleLogin = function () {
        this.displayLogin = !this.displayLogin;
        this.displayRegister = false;
    };
    AuthenticationComponent.prototype.toggleRegister = function () {
        this.displayRegister = !this.displayRegister;
        this.displayLogin = false;
    };
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-authentication',
            template: __webpack_require__("../../../../../src/app/authentication/authentication.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    background-color: rgb(214, 214, 214);\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    padding: 1rem 0;\n}\n\nlabel {\n    text-transform: uppercase;\n    display: block;\n    font-size: 1.6rem;\n    font-weight: 700;\n    text-align: left;\n    font-size: 12px;\n    margin: 0.5rem 1rem;\n}\n\ninput {\n    border: 0.1rem solid #d1d1d1;\n    border-radius: .4rem;\n    box-shadow: none;\n    box-sizing: inherit;\n    height: 2rem;\n    margin: 0rem 1rem;\n}\n\n.btn-submit {\n    border-radius: .4rem;\n    color: #FFF;\n    background-color: #9b4dca;\n    width: 200px;\n    border: none;\n    height: 40px;\n    margin-top: 1rem;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.error__message {\n    font-size: 16px;\n    color: rgb(221, 50, 50)\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formLogin\">\n  <span class=\"error__message\">{{ error }}</span>\n  <label for=\"email\">email</label>\n  <input name=\"email\" type=\"text\" formControlName=\"email\" #email />\n  <label for=\"password\">password</label>\n  <input name=\"password\" type=\"password\" formControlName=\"password\" #password />\n  <div>\n    <button class=\"btn-submit\" (click)=\"login(formLogin.value.email, formLogin.value.password)\">LOGIN</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(http, formBuilder, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.error = null;
        this.formLogin = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.setSession = function (response) {
        localStorage.setItem('token', response.token);
    };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.http.post('http://localhost:3000/api/login', {
            email: email,
            password: password
        })
            .subscribe(function (response) {
            _this.setSession(response);
            _this.router.navigate(['/tap']);
        }, function (err) {
            if (err.status === 404) {
                _this.error = 'Bad credentials';
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    background-color: rgb(214, 214, 214);\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    padding: 1rem 0;\n}\n\nlabel {\n    text-transform: uppercase;\n    display: block;\n    font-size: 1.6rem;\n    font-weight: 700;\n    text-align: left;\n    font-size: 12px;\n    margin: 0.5rem 1rem;\n}\n\ninput {\n    border: 0.1rem solid #d1d1d1;\n    border-radius: .4rem;\n    box-shadow: none;\n    box-sizing: inherit;\n    height: 2rem;\n    margin: 0rem 1rem;\n}\n\n.btn-submit {\n    border-radius: .4rem;\n    color: #FFF;\n    background-color: #9b4dca;\n    width: 200px;\n    border: none;\n    height: 40px;\n    margin-top: 1rem;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.error__message {\n    font-size: 16px;\n    color: rgb(221, 50, 50)\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formRegister\" novalidate>\n  <span class=\"error__message\">{{ error }}</span>\n  <label for=\"firstname\">firstname</label>\n  <input name=\"firstname\" type=\"text\" formControlName=\"firstname\" #firstname />\n  <label for=\"lastname\">lastname</label>\n  <input name=\"lastname\" type=\"lastname\" formControlName=\"lastname\" #lastname />\n  <label for=\"email\">email</label>\n  <input name=\"email\" type=\"text\" formControlName=\"email\" #email />\n  <label for=\"password\">password</label>\n  <input name=\"password\" type=\"password\" formControlName=\"password\" #password />\n  <div>\n    <button class=\"btn-submit\" (click)=\"register(formRegister.value.firstname, formRegister.value.lastname, formRegister.value.email, formRegister.value.password)\">REGISTER</button>\n  </div>\n</form>\n  "

/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(http, formBuilder, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.error = null;
        this.formRegister = this.formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.setSession = function (response) {
        localStorage.setItem('token', response.token);
    };
    RegisterComponent.prototype.register = function (firstname, lastname, email, password) {
        var _this = this;
        if (!firstname || !lastname || !email || !password) {
            this.error = 'All fields must by specified.';
            return;
        }
        this.http.post('http://localhost:3000/api/users', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })
            .subscribe(function (response) {
            _this.setSession(response);
            _this.router.navigate(['/tap']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/authentication/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-submit {\n    border-radius: .4rem;\n    color: #FFF;\n    background-color: #9b4dca;\n    padding: 0.5rem 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    font-size: 16px;\n    cursor: pointer;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn-submit\" (click)=\"logout()\">LOGOUT</button>\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/scores/scores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n    max-width: 35rem;\n    margin: auto;\n    margin-top: auto;\n    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);\n    padding: 2rem 0.5rem 1rem 0.5rem;\n    margin-top: -2rem;\n    border-bottom-left-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n    text-align: center;\n    text-transform: uppercase;\n}\n\nh1 {\n    font-family: 'Bungee Inline',cursive;\n    color: #000;\n    line-height: 1;\n    font-size: 2.5rem;\n    font-weight: 600;\n    margin-bottom: 0;\n}\n\n.header__resume {\n    font-size: 1rem;\n    margin: .5rem auto 1rem auto;\n    border-bottom: .1rem dotted #eee;\n    padding-bottom: .5rem;\n}\n\n.body__content {\n    max-width: 35rem;\n    border: none;\n    margin: auto;\n    border-radius: 0px;\n    box-shadow:none;\n    margin-top: 1rem;\n    padding: 0;\n}\n\nul {\n    list-style: none;\n    font-size: 14px;\n}\n\nli {\n    border-bottom: 1px solid grey;\n}\n\nspan {\n    margin-left: 5rem;\n}\n\nb {\n    font-size: 16px;\n}\n\na {\n    text-decoration: none;\n    border-radius: .4rem;\n    color: #FFF;\n    background-color: #9b4dca;\n    width: 200px;\n    border: none;\n    height: 40px;\n    margin-top: 1rem;\n    font-size: 16px;\n    cursor: pointer;\n    padding: 0.5rem 0.5rem;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scores/scores.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <section>\n    <h1>score table</h1>\n    <p class=\"header__resume\">Here is the list of scores</p>\n\n    <a routerLink=\"/tap\" routerLinkActive=\"active\">Tap</a>\n    <app-logout></app-logout>\n  </section>\n</header>\n  \n\n<section class=\"body__content\">\n  <ul>\n    <li *ngFor=\"let score of scores\">\n        <b>{{ score.points }}pts</b>\n        <span class=\"user\">{{ score.user.firstname }} {{ score.user.lastname }} / {{ score.date | date:'yyyy/MM/dd HH:mm:ss' }}</span>\n    </li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/scores/scores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScoresComponent = (function () {
    function ScoresComponent(http, router) {
        this.http = http;
        this.router = router;
        this.scores = [];
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
        this.getScores();
    }
    ScoresComponent.prototype.ngOnInit = function () {
    };
    ScoresComponent.prototype.setScores = function (scores) {
        this.scores = scores;
    };
    ScoresComponent.prototype.getScores = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-access-token', localStorage.getItem('token'));
        this.http.get('http://localhost:3000/api/scores', { headers: headers })
            .subscribe(function (response) {
            _this.setScores(response);
        });
    };
    ScoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scores',
            template: __webpack_require__("../../../../../src/app/scores/scores.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scores/scores.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ScoresComponent);
    return ScoresComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tap/tap.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n    max-width: 35rem;\n    margin: auto;\n    margin-top: auto;\n    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);\n    padding: 2rem 0.5rem 1rem 0.5rem;\n    margin-top: -2rem;\n    border-bottom-left-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.header__resume {\n    font-size: 1rem;\n    margin: .5rem auto 1rem auto;\n    border-bottom: .1rem dotted #eee;\n    padding-bottom: .5rem;\n}\n\n.body__content {\n    max-width: 35rem;\n    border: none;\n    margin: auto;\n    border-radius: 0px;\n    box-shadow:none;\n    margin-top: 1rem;\n    padding: 0;\n}\n\na {\n    text-decoration: none;\n    border-radius: .4rem;\n    color: #FFF;\n    background-color: #9b4dca;\n    width: 200px;\n    border: none;\n    height: 40px;\n    margin-top: 1rem;\n    font-size: 16px;\n    cursor: pointer;\n    padding: 0.5rem 0.5rem;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n\nimg {\n    width: 400px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tap/tap.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <section>\n    <app-username></app-username>\n    <p class=\"header__resume\">YOU HAVE 10 SECONDS TO TAP! READY? STEADY ? TAP!</p>\n\n    <a routerLink=\"/scores\" routerLinkActive=\"active\">SCORES</a>\n    <app-logout></app-logout>\n  </section>\n</header>\n\n<div>\n  <div>\n      <img \n        alt=\"Bouton\" \n        src=\"assets/{{ img }}\"\n        (mousedown)=\"isPressed()\"\n      />\n  </div>\n\n  <div>\n    <progress value=\"{{timer}}\" min=\"0\" max={{endingTimer}}></progress>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tap/tap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TapComponent = (function () {
    function TapComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.img = 'tapOff.png';
        this.score = 0;
        this.timer = 0;
        this.isStarted = false;
        this.timerInterval = null;
        this.endingTimer = 10000;
        this.tapOn = false;
        this.calculTimer = function () {
            _this.timer += 50;
            if (_this.timer === _this.endingTimer) {
                clearInterval(_this.timerInterval);
                _this.ending();
            }
        };
        this.launchTimer = function () {
            _this.timerInterval = setInterval(_this.calculTimer, 50);
            _this.isStarted = true;
        };
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
    }
    TapComponent.prototype.isPressed = function () {
        if (!this.isStarted) {
            this.launchTimer();
        }
        if (this.tapOn === false) {
            this.score++;
            this.tapOn = true;
            this.img = 'tapOn.png';
        }
        else {
            this.tapOn = false;
            this.img = 'tapOff.png';
        }
    };
    TapComponent.prototype.ending = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-access-token', localStorage.getItem('token'));
        this.http.post('http://localhost:3000/api/tap', {
            points: this.score,
        }, { headers: headers })
            .subscribe(function (response) {
            _this.router.navigate(['/scores']);
        });
    };
    TapComponent.prototype.ngOnInit = function () {
    };
    TapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tap',
            template: __webpack_require__("../../../../../src/app/tap/tap.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tap/tap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], TapComponent);
    return TapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tap/username/username.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    font-family: 'Bungee Inline',cursive;\n    color: #000;\n    line-height: 1;\n    font-size: 2.5rem;\n    font-weight: 600;\n    margin-bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tap/username/username.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>HELLO {{ user && user.firstname }}</h1>\n"

/***/ }),

/***/ "../../../../../src/app/tap/username/username.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsernameComponent = (function () {
    function UsernameComponent(http) {
        this.http = http;
        this.user = null;
        this.getUser();
    }
    UsernameComponent.prototype.ngOnInit = function () {
    };
    UsernameComponent.prototype.setUser = function (user) {
        this.user = user;
    };
    UsernameComponent.prototype.getUser = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-access-token', localStorage.getItem('token'));
        this.http.get('http://localhost:3000/api/users', { headers: headers })
            .subscribe(function (response) {
            _this.setUser(response);
        });
    };
    UsernameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-username',
            template: __webpack_require__("../../../../../src/app/tap/username/username.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tap/username/username.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsernameComponent);
    return UsernameComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map