(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/cjv":
/*!***********************************************************!*\
  !*** ./src/app/Components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.component.html */ "bFfU");
/* harmony import */ var _checkout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.component.scss */ "qC+i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "S3Px");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_alert */ "06Np");









let CheckoutComponent = class CheckoutComponent {
    constructor(_products, _auth, route, alertService) {
        this._products = _products;
        this._auth = _auth;
        this.route = route;
        this.alertService = alertService;
        this.orders = [];
        this.checkout = {};
        this.editparams = {};
        this.myProfile = {
            username: "",
            first_name: "",
            last_name: "",
            address: "",
            mobile: "",
            birth_date: "",
            email: ""
        };
        this.options = {
            autoClose: true,
            keepAfterRouteChange: true
        };
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
        if (!localStorage.getItem('token')) {
            this.alertService.warn('Please Login First To Place your Order !!', this.options);
            this.route.navigate(['/login']);
        }
        this._auth.userProfile().subscribe((data) => this.myProfile = data, (err) => console.log(err));
        if (localStorage.getItem("orders")) {
            this.orders = JSON.parse(localStorage.getItem("orders") || '{}');
        }
        else {
            this.route.navigate(['/search']);
        }
        if (localStorage.getItem("checkout")) {
            this.checkout = JSON.parse(localStorage.getItem("checkout") || '{}');
        }
    }
    updateprofile() {
        this.editparams.first_name = this.myProfile.first_name;
        this.editparams.last_name = this.myProfile.last_name;
        this.editparams.address = this.myProfile.address;
        this.editparams.mobile = this.myProfile.mobile;
        this._auth.editprofile(this.editparams).subscribe((data) => console.log("Ok"), (err) => console.log(err));
    }
    placeOrder() {
        for (let i = 0; i < this.orders.length; i++) {
            this._products.order(this.orders[i].product, this.orders[i].quantaty).subscribe((data) => {
                localStorage.removeItem("cart");
                localStorage.removeItem("orders");
                localStorage.removeItem("checkout");
            }, (err) => console.log(err));
        }
    }
    orderNow() {
        if (this.myProfile.first_name.length > 2 && this.myProfile.last_name.length > 2 && this.myProfile.mobile && this.myProfile.mobile.length == 11 && this.myProfile.address && this.myProfile.address.length > 3) {
            this.updateprofile();
            this.placeOrder();
            this.alertService.success('Thanks For using HDYA :)', this.options);
            this.route.navigate(['/search']);
        }
        else {
            this.alertService.error('Please Fill a Valid Data !', this.options);
        }
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
CheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/amr/Web/Web/ITI/FinalProject/mybackup/Front/src/main.ts */"zUnb");


/***/ }),

/***/ "06Np":
/*!*********************************!*\
  !*** ./src/app/_alert/index.ts ***!
  \*********************************/
/*! exports provided: AlertModule, AlertService, Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.module */ "hN6I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "nrat");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "y2ja");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"]; });






/***/ }),

/***/ "0gwD":
/*!*******************************************************!*\
  !*** ./src/app/Components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "TwXj");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.scss */ "WcJ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_confirmedpassword_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/confirmedpassword.service */ "5G9e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_alert */ "06Np");











let SignupComponent = class SignupComponent {
    constructor(auth, route, fb, confirmedPassword, alertService) {
        this.auth = auth;
        this.route = route;
        this.fb = fb;
        this.confirmedPassword = confirmedPassword;
        this.alertService = alertService;
        this.errors = [];
        this.options = {
            autoClose: true,
            keepAfterRouteChange: true
        };
        this.profileForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$")]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^01[0-2]{1}[0-9]{8}")]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30)]],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }, {
            validator: this.confirmedPassword.passwordMatchValidator("password", "confirmpassword")
        });
        if (localStorage.getItem('token')) {
            this.route.navigate(['/home']);
        }
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_8__["init"]();
    }
    UserRegester(username, email, password, re_password, first_name, last_name, mobile) {
        this.auth.register(username, email, password, re_password, first_name, last_name, mobile).subscribe((data) => {
            this.alertService.success('Thanks for register please login now', this.options);
            this.route.navigate(['/login']);
        }, (err) => {
            console.log(err);
            for (let i in err.error) {
                // console.log(err.error[i])
                for (let e in err.error[i]) {
                    this.errors.push(err.error[i][e]);
                }
            }
        });
    }
    ConfirmedValidator(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_confirmedpassword_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmedpasswordService"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupComponent);



/***/ }),

/***/ "0zBU":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "u3yF");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "n/dm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "S3Px");
/* harmony import */ var _services_add_to_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/add-to-cart.service */ "smYa");







let HomeComponent = class HomeComponent {
    constructor(_products, _addCart) {
        this._products = _products;
        this._addCart = _addCart;
        this.saleList = [];
        this.categoryList = [];
        this.products = [];
        this.allproducts = [];
        this.productparams = {};
    }
    // searchparams: {[k: string]: any} = {featured:true}
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
        this._products.showcategories().subscribe((data) => this.categoryList = data, (err) => console.log(err));
        let list = [44, 46, 51, 58, 50, 53];
        for (let i in list) {
            this._products.viewProductById(list[i]).subscribe((data) => this.saleList.push(data), (err) => console.log(err));
        }
        // this._products.searchProducts(this.searchparams).subscribe(
        //   (data)=>console.log(data),
        //   (err) => console.log(err)
        // )
    }
    catSearch(catId) {
        localStorage.setItem('catsearch', JSON.stringify(catId));
    }
    add(product_id) {
        this._addCart.addCart(product_id);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _services_add_to_cart_service__WEBPACK_IMPORTED_MODULE_6__["AddToCartService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "1qOR":
/*!***********************************************************************!*\
  !*** ./src/app/Components/create-product/create-product.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-product.component.html */ "RjGw");
/* harmony import */ var _create_product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-product.component.scss */ "xZFE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_alert */ "06Np");







let CreateProductComponent = class CreateProductComponent {
    constructor(_productservisec, route, alertService) {
        this._productservisec = _productservisec;
        this.route = route;
        this.alertService = alertService;
        this.url = new Array();
        this.categories = [];
        this.occassions = [];
        this.relationships = [];
        this.images = [];
        this.edit = false;
        this.avatar = [];
        this.ageError = false;
        this.options = {
            autoClose: true,
            keepAfterRouteChange: true
        };
        this.newproduct = {
            gender: "",
            details: "",
            name: "",
            category: 0,
            occassions: [],
            relationships: [],
            is_featured: false,
            price: 0,
            age_from: 0,
            age_to: 0,
        };
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            alert('Please Log in To create Your product');
            this.route.navigate(['/login']);
        }
        this._productservisec.showcategories().subscribe((data) => this.categories = data, (err) => console.log(err));
        this._productservisec.showrelations().subscribe((data) => this.relationships = data, (err) => console.log(err));
        this._productservisec.showoccassions().subscribe((data) => this.occassions = data, (err) => console.log(err));
        if (localStorage.getItem('editprd')) {
            let prdId = JSON.parse(localStorage.getItem('editprd') || '{}');
            this._productservisec.viewProductById(prdId).subscribe((data) => {
                this.newproduct = data;
                this.edit = true;
            }, err => console.log((err)));
        }
    }
    changeImageInput(event) {
        this.images = [];
        let incoming_images = event.target.files;
        for (let i = 0; i < incoming_images.length; i++) {
            this.images.push(incoming_images[i]);
        }
        this.url = [];
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.url.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    }
    addNewProduct() {
        if (this.images.length >= 3 && this.newproduct.age_from < this.newproduct.age_to) {
            this._productservisec.createProduct(this.newproduct).subscribe((data) => {
                const fd = new FormData();
                for (let i = 0; i < this.images.length; i++) {
                    fd.append('image', this.images[i], this.images[i].name);
                    fd.append('product', data.id);
                    this._productservisec.createProductImages(fd).subscribe((data) => console.log("Ok"), (err) => console.log(err));
                }
                ;
                this.ageError = false;
                this.alertService.success('Your Product Was submitted successfully', this.options);
                this.route.navigate([`/productdetails/${data.id}`]);
            }, (err) => console.log(err));
        }
        else {
            this.alertService.error('Wrong data, Please check your data again', this.options);
            this.ageError = true;
        }
    }
    ageCheck(age_from, age_to) {
        if (age_from > age_to) {
            this.ageError = true;
        }
        else {
            this.ageError = false;
        }
    }
    editProduct() {
        let prd_id = this.newproduct.id;
        this._productservisec.editProduct(prd_id, this.newproduct).subscribe((data) => {
            localStorage.removeItem('editprd');
            this.edit = false;
        }, (err) => console.log(err));
        const fd = new FormData();
        for (let i = 0; i < this.images.length; i++) {
            fd.append('image', this.images[i], this.images[i].name);
            fd.append('product', prd_id);
            this._productservisec.createProductImages(fd).subscribe((data) => console.log(data), (err) => console.log(err));
        }
        ;
        this.alertService.success('Your Product Was submitted successfully', this.options);
        this.route.navigate([`/productdetails/${prd_id}`]);
        localStorage.removeItem('editprd');
    }
    delimg(img_id) {
        this._productservisec.deletimg(img_id).subscribe((data) => {
            let prdId = JSON.parse(localStorage.getItem('editprd') || '{}');
            this._productservisec.viewProductById(prdId).subscribe((data) => {
                this.newproduct = data;
                this.edit = true;
            }, err => console.log((err)));
        }, (err) => console.log(err));
    }
    cancel() {
        let id = this.newproduct.id;
        this.newproduct = {
            gender: "",
            details: "",
            name: "",
            category: 0,
            occassions: [],
            relationships: [],
            is_featured: false,
            price: 0,
            age_from: 0,
            age_to: 0,
        };
        localStorage.removeItem('editprd');
        this.route.navigate([`/productdetails/${id}`]);
    }
};
CreateProductComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
CreateProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-product',
        template: _raw_loader_create_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_product_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateProductComponent);



/***/ }),

/***/ "2Mj0":
/*!*************************************************************************!*\
  !*** ./src/app/Components/forgetpassword/forgetpassword.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-image: url('forget.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.empty {\n  margin-top: 50px;\n}\n\n.container {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdldHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSiIsImZpbGUiOiJmb3JnZXRwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZvcmdldC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5lbXB0eXtcbiAgICBtYXJnaW4tdG9wOjUwcHg7XG59XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDoxMDBweDtcbiBcbn1cbiJdfQ== */");

/***/ }),

/***/ "2ZRt":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/pagenotfound/pagenotfound.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <aside><img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png\" alt=\"404 Image\" />\n    </aside>\n    <main>\n        <h1>Sorry!</h1>\n        <p>\n            Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>\n        </p>\n        <button routerLink=\"/home\">You can go now!</button>\n    </main>\n</div>");

/***/ }),

/***/ "4LSX":
/*!*********************************************************!*\
  !*** ./src/app/Components/loader/loader.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@keyframes bouncing {\n  0% {\n    top: 40%;\n  }\n  100% {\n    top: 30%;\n  }\n}\n@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.page-overlay-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1009;\n  background: rgba(226, 174, 161, 0.5);\n}\n.page-overlay-wrapper .bee-spinner {\n  width: 55%;\n  height: 20%;\n  position: fixed;\n  top: 40%;\n  left: calc(50% - 10%);\n  z-index: 100;\n  background-image: url('gift-removebg-preview.png');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  animation: bouncing 0.4s cubic-bezier(0.1, 0.25, 0.1, 1) 0s infinite alternate both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksUUFBQTtFQUNOO0VBQ0U7SUFDSSxRQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0k7SUFDSSxVQUFBO0VBQU47RUFFRTtJQUNJLFVBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FBREo7QUFFSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtRkFBQTtBQUFSIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgYm91bmNpbmcge1xuICAgIDAlIHtcbiAgICAgICAgdG9wOiA0MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0b3A6IDMwJTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLnBhZ2Utb3ZlcmxheS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDA5O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI2LCAxNzQsIDE2MSwgMC41KTtcbiAgICAuYmVlLXNwaW5uZXIge1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMCUpO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dpZnQtcmVtb3ZlYmctcHJldmlldy5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2luZyAwLjRzIGN1YmljLWJlemllcigwLjEsIDAuMjUsIDAuMSwgMSkgMHMgaW5maW5pdGUgYWx0ZXJuYXRlIGJvdGg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "4LVL":
/*!*********************************************************************!*\
  !*** ./src/app/Components/pagenotfound/pagenotfound.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: 0;\n  margin: 0;\n  padding: 0;\n  cursor: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/cursors-edge.png\"), auto;\n}\n\nbody {\n  background: linear-gradient(to right, white 50%, #383838 50%);\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: white;\n}\n\ndiv {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  max-width: 1000px;\n  width: calc(100% - 4rem);\n  margin: 0 auto;\n}\n\ndiv > * {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  max-width: 500px;\n  width: 100%;\n  padding: 2.5rem;\n}\n\naside {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/right-edges.png\");\n  background-position: top right;\n  background-repeat: no-repeat;\n  background-size: 25px 100%;\n}\n\naside img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n\nmain {\n  text-align: center;\n}\n\nmain h1 {\n  font-family: \"Fontdiner Swanky\", cursive;\n  font-size: 4rem;\n  color: #c5dc50;\n  margin-bottom: 1rem;\n}\n\nmain p {\n  margin-bottom: 2.5rem;\n}\n\nmain p em {\n  font-style: italic;\n  color: #c5dc50;\n}\n\nmain button {\n  font-family: \"Fontdiner Swanky\", cursive;\n  font-size: 1rem;\n  color: #383838;\n  border: none;\n  background-color: #f36a6f;\n  padding: 1rem 2.5rem;\n  transform: skew(-5deg);\n  transition: all 0.1s ease;\n  cursor: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/cursors-eye.png\"), auto;\n}\n\nmain button:hover {\n  background-color: #c5dc50;\n  transform: scale(1.15);\n}\n\n@media (max-width: 700px) {\n  body {\n    background: #383838;\n    font-size: 16px;\n  }\n\n  div {\n    flex-flow: column;\n  }\n  div > * {\n    max-width: 700px;\n    height: 100%;\n  }\n\n  aside {\n    background-image: none;\n    background-color: white;\n  }\n  aside img {\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDBGQUFBO0FBUEY7O0FBV0E7RUFDRSw2REFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFuQ0M7QUE0Qkw7O0FBV0E7RUFDRSw2RkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQVJGOztBQVNFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUEo7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVNFO0VBQ0Usd0NBQUE7RUFDQSxlQXREQztFQXVERCxjQTVERztFQTZESCxtQkExREM7QUFtREw7O0FBU0U7RUFDRSxxQkE1REM7QUFxREw7O0FBUUk7RUFDRSxrQkFBQTtFQUNBLGNBbkVDO0FBNkRQOztBQVNFO0VBQ0Usd0NBQUE7RUFDQSxlQXJFQztFQXNFRCxjQXZFRztFQXdFSCxZQUFBO0VBQ0EseUJBMUVHO0VBMkVILG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlGQUFBO0FBUEo7O0FBU0k7RUFDRSx5QkFsRkM7RUFtRkQsc0JBQUE7QUFQTjs7QUFZQTtFQUNFO0lBQ0UsbUJBeEZHO0lBeUZILGVBQUE7RUFURjs7RUFXQTtJQUNFLGlCQUFBO0VBUkY7RUFTRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtFQVBKOztFQVVBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQVBGO0VBUUU7SUFDRSxnQkFBQTtFQU5KO0FBQ0YiLCJmaWxlIjoicGFnZW5vdGZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kbGltZTogI2M1ZGM1MDtcbiRyYXNwOiAjZjM2YTZmO1xuJHNlZWQ6ICMzODM4Mzg7XG4kc206IDFyZW07XG4kbWQ6IDIuNXJlbTtcbiRsZzogNHJlbTtcblxuKiB7XG4gIGJveC1zaXppbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby80NDI0NzkwL2N1cnNvcnMtZWRnZS5wbmdcIiksXG4gICAgYXV0bztcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUgNTAlLCAkc2VlZCA1MCUpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gI3skbGd9KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAkbWQ7XG4gIH1cbn1cblxuYXNpZGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby80NDI0NzkwL3JpZ2h0LWVkZ2VzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI1cHggMTAwJTtcbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxubWFpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnRkaW5lciBTd2Fua3lcIiwgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6ICRsZztcbiAgICBjb2xvcjogJGxpbWU7XG4gICAgbWFyZ2luLWJvdHRvbTogJHNtO1xuICB9XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206ICRtZDtcbiAgICBlbSB7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBjb2xvcjogJGxpbWU7XG4gICAgfVxuICB9XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9udGRpbmVyIFN3YW5reVwiLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogJHNtO1xuICAgIGNvbG9yOiAkc2VlZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJhc3A7XG4gICAgcGFkZGluZzogJHNtICRtZDtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gICAgY3Vyc29yOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby80NDI0NzkwL2N1cnNvcnMtZXllLnBuZ1wiKSxcbiAgICAgIGF1dG87XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkc2VlZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgZGl2IHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICA+ICoge1xuICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgYXNpZGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "4si3":
/*!*************************************************************************!*\
  !*** ./src/app/Components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-details.component.html */ "niDO");
/* harmony import */ var _product_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details.component.scss */ "yu9E");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../popup/popup.component */ "5iAN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_add_to_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/add-to-cart.service */ "smYa");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








// import {  Review } from '../../models/interfaces/review'


// import { stringify } from '@angular/compiler/src/util';
// import {  Report } from '../../models/interfaces/report';

// import { pid } from 'process';
let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(_products, activerouter, _addCart, _auth, route, dialog) {
        this._products = _products;
        this.activerouter = activerouter;
        this._addCart = _addCart;
        this._auth = _auth;
        this.route = route;
        this.dialog = dialog;
        this.onSale = false;
        this.is_Owner = false;
        this.myID = 0;
        this.orders = [];
        this.occassionList = [];
        this.filterdoccassionList = [];
        this.relList = [];
        this.filterdrelList = [];
        this.reviewList = [];
        this.productPopUp = {};
        this.countOfReviews = 0;
        this.avrOfReviews = 0;
        this.productList = [];
        this.filteredList = [];
        this.reatValue = 0;
        this.avrOfReviewsList = [];
        this.halfStar = false;
        this.productdetails = { id: 0,
            name: "",
            price: 0,
            details: "",
            age_from: 0,
            age_to: 0,
            gender: "",
            occassions: [],
            category: 0,
            relationships: [],
            is_featured: false,
            created_at: "",
            updated_at: "",
            images: [],
            user: 0
        };
        //owlcarosel
        this.title = 'angularowlslider';
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: true
        };
        this.reportProduct = [];
    }
    ngOnInit() {
        jQuery('.owl-carousel').owlCarousel();
        aos__WEBPACK_IMPORTED_MODULE_5__["init"]();
        let id = this.activerouter.snapshot.params['id'];
        this._auth.userProfile().subscribe((data) => {
            this.myID = data.id;
            // console.log(this.myID);
        }, (err) => console.log(err));
        this._products.showoccassions().subscribe((data) => this.occassionList = data, (err) => this.occassionList = err);
        this._products.showrelations().subscribe((data) => this.relList = data, (err) => console.log(err));
        this._products.viewProductById(id).subscribe((data) => {
            this.productdetails = data;
            if (this.productdetails.category == 5) {
                this.onSale = true;
            }
            if (this.productdetails.user == this.myID) {
                this.is_Owner = true;
            }
            if (this.productdetails.gender == 'f') {
                this.productdetails.gender = "Female";
            }
            else if (this.productdetails.gender == 'm') {
                this.productdetails.gender = "Male";
            }
            else if (this.productdetails.gender == 'b') {
                this.productdetails.gender = "Both";
            }
            for (let i = 0; i < this.productdetails.occassions.length; i++) {
                this.filterdoccassionList.push(this.occassionList.find((occ) => occ.id == this.productdetails.occassions[i]));
            }
            for (let i = 0; i < this.productdetails.relationships.length; i++) {
                this.filterdrelList.push(this.relList.find((rel) => rel.id == this.productdetails.relationships[i]));
            }
        }, (err) => console.log(err));
        this._products.viewProducts().subscribe((data) => {
            this.productList = data;
        }, (err) => console.log(err));
        this._products.showreviews(id).subscribe((data) => {
            this.reviewList = data;
            this.countOfReviews = this.reviewList.length;
            let onlyReviews = [];
            for (let i = 0; i < this.reviewList.length; i++) {
                onlyReviews.push(this.reviewList[i].rate);
            }
            var sum = onlyReviews.reduce(function (a, b) {
                return a + b;
            }, 0);
            if (sum != 0) {
                this.avrOfReviews = sum / onlyReviews.length;
                for (let i = 0; i < Math.floor(this.avrOfReviews); i++) {
                    this.avrOfReviewsList.push(i);
                }
                if (this.avrOfReviewsList.length < this.avrOfReviews) {
                    this.halfStar = true;
                }
            }
        }, (err) => console.log(err));
        this._products.showorders().subscribe((data) => this.orders = data, (err) => console.log(err));
        this._products.showReports().subscribe((data) => this.reportProduct = data, (err) => console.log(err));
    }
    popUpProduct(product_id) {
        this.productPopUp = this.productList.find((product) => {
            return product.id == product_id;
        });
        console.log(this.productPopUp);
    }
    reload() {
        location.reload();
    }
    reviewFun(body) {
        let id = this.activerouter.snapshot.params['id'];
        let found = false;
        for (let i in this.orders) {
            if (this.orders[i].product == id) {
                found = true;
                break;
            }
        }
        if (found == true) {
            if (this.reviewList.length == 0) {
                this._products.ReviewProduct(body, this.reatValue, this.productdetails.id).subscribe((data) => {
                    alert('Thanks for your review ');
                    location.reload();
                }, (err) => console.log(err));
            }
            else {
                let userFound = false;
                for (let i in this.reviewList) {
                    if (this.reviewList[i].user == this.myID) {
                        userFound = true;
                        break;
                    }
                }
                if (userFound == false) {
                    this._products.ReviewProduct(body, this.reatValue, this.productdetails.id).subscribe((data) => {
                        alert('Thanks for your review ');
                        location.reload();
                    }, (err) => console.log(err));
                }
                else {
                    alert("you can't review again");
                }
            }
        }
        else {
            alert("You Can't Review Product You didn't Try ");
        }
    }
    reportproduct(body) {
        let id = this.activerouter.snapshot.params['id'];
        let found = false;
        let myreports = [];
        let reportfound = false;
        for (let i in this.orders) {
            if (this.orders[i].product == id) {
                found = true;
                break;
            }
        }
        if (found == true) {
            for (let i in this.reportProduct) {
                if (this.reportProduct[i].user == this.myID) {
                    myreports.push(this.reportProduct[i]);
                }
            }
            for (let i in myreports) {
                if (myreports[i].product == id) {
                    reportfound = true;
                }
            }
            if (reportfound == false) {
                this.openDialog();
            }
            else {
                alert("You can't report again");
            }
        }
        else {
            alert("You Can't Report Product You didn't Try");
        }
    }
    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        this.filteredList = this.productList.filter((product) => product.category == this.productdetails.category);
    }
    addToCart(qntty) {
        let id = this.activerouter.snapshot.params['id'];
        if (qntty > 0) {
            this._addCart.addCart(id, qntty);
        }
        else {
            this._addCart.addCart(id);
        }
    }
    editPrd(prd_id) {
        localStorage.setItem('editprd', JSON.stringify(prd_id));
        this.route.navigate(['/product/createproduct']);
    }
    openDialog() {
        let id = this.activerouter.snapshot.params['id'];
        this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"], {
            // width: '330px',
            // height: '400px',
            data: {
                id: id,
                myID: this.myID
            }
        });
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_add_to_cart_service__WEBPACK_IMPORTED_MODULE_8__["AddToCartService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
ProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-product-details',
        template: _raw_loader_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "5G9e":
/*!*******************************************************!*\
  !*** ./src/app/services/confirmedpassword.service.ts ***!
  \*******************************************************/
/*! exports provided: ConfirmedpasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedpasswordService", function() { return ConfirmedpasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ConfirmedpasswordService = class ConfirmedpasswordService {
    constructor() { }
    passwordMatchValidator(password, confirmPassword) {
        return (formGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];
            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }
            if (confirmPasswordControl.errors &&
                !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPasswordControl.setErrors(null);
            }
        };
    }
};
ConfirmedpasswordService.ctorParameters = () => [];
ConfirmedpasswordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfirmedpasswordService);



/***/ }),

/***/ "5iAN":
/*!*****************************************************!*\
  !*** ./src/app/Components/popup/popup.component.ts ***!
  \*****************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_popup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./popup.component.html */ "Evcn");
/* harmony import */ var _popup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.component.scss */ "RJd3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");






let PopupComponent = class PopupComponent {
    constructor(_products, data) {
        this._products = _products;
        this.data = data;
        this.myID = 0;
        this.msgBody = "";
    }
    ngOnInit() {
    }
    sendmsg() {
        let id = parseInt(this.data.id);
        let myID = parseInt(this.data.myID);
        this._products.Report(myID, this.msgBody, id).subscribe((data) => {
            console.log(data);
            alert('Thanks for your report ');
            location.reload();
        }, (err) => console.log(err));
    }
};
PopupComponent.ctorParameters = () => [
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
PopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popup',
        template: _raw_loader_popup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PopupComponent);



/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: 'https://hdyaapi.herokuapp.com'
    // apiUrl: 'http://127.0.0.1:8000'
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

/***/ "B0Zt":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-light\">\n    <div class=\"container py-5\">\n        <div class=\"row h-100 align-items-center py-5\">\n            <div class=\"col-lg-6\">\n                <h1 class=\"display-4\">About us page</h1>\n                <p class=\"lead text-muted mb-0\">Hdya is the first Arab site for shopping through handmade products only. We include many products that include many categories We were established in 2021, our headquarters are in Egypt.</p>\n            </div>\n            <div class=\"col-lg-6 d-none d-lg-block\"><img src=\"https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png\" alt=\"\" class=\"img-fluid\"></div>\n        </div>\n    </div>\n</div>\n\n<div class=\"bg-white py-5\">\n    <div class=\"container py-5\">\n        <div class=\"row align-items-center mb-5\">\n            <div class=\"col-lg-6 order-2 order-lg-1\"><i class=\"fa fa-bar-chart fa-2x mb-3 text-primary\"></i>\n                <h2 class=\"font-weight-light\">Our Target</h2>\n                <p class=\"font-italic text-muted mb-4\">We aim to grow very quickly due to the increase in the number of Internet shoppers in the Arab world, especially with the Corona pandemic, Handmade and shopping is on the increase.</p>\n            </div>\n            <div class=\"col-lg-5 px-5 mx-auto order-1 order-lg-2\"><img src=\"https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg\" alt=\"\" class=\"img-fluid mb-4 mb-lg-0\"></div>\n        </div>\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-5 px-5 mx-auto\"><img src=\"https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg\" alt=\"\" class=\"img-fluid mb-4 mb-lg-0\"></div>\n            <div class=\"col-lg-6\"><i class=\"fa fa-leaf fa-2x mb-3 text-primary\"></i>\n                <h2 class=\"font-weight-light\">More Informtions</h2>\n                <p class=\"font-italic text-muted mb-4\">We operate as a retail site as well as a marketplace for third-party vendors. Hdya offers a comfortable and safe shopping experience with the ability to pay in cash upon receipt of goods, and the ability to return them for free.</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"bg-light py-5\">\n    <div class=\"container py-5\">\n        <div class=\"row mb-4\">\n            <div class=\"col-lg-5\">\n                <h2 class=\"display-4 font-weight-light\">Our team</h2>\n                <p class=\"font-italic text-muted\">We are 5 Fresh Graduated Developers and our goal is to expand our own company</p>\n            </div>\n        </div>\n\n        <div class=\"row text-center\">\n            <!-- Team item-->\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"../../../assets/images/amr.jpeg\" alt=\"\" width=\"100\" class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\n                    <h5 class=\"mb-0\">Amr Hassan </h5><span class=\"small text-uppercase text-muted\">Full Stack Developer</span>\n                    <ul class=\"social mb-0 list-inline mt-3\">\n                        <li class=\"list-inline-item\"><a href=\"https://www.facebook.com/amr.hassan.14418101\" class=\"social-link\" target=\"_blank\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"https://github.com/amrhassan93\" class=\"social-link\" target=\"_blank\" target=\"_blank\"><i class=\"fab fa-github\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"https://www.linkedin.com/in/amr-hassan-36375a3b/\" class=\"social-link\" target=\"_blank\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <!-- End-->\n\n            <!-- Team item-->\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"../../../assets/images/Moomen.jpeg\" alt=\"\" width=\"100\" class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\n                    <h5 class=\"mb-0\">Moomen Abdelrazik</h5><span class=\"small text-uppercase text-muted\">Full Stack Developer </span>\n                    <ul class=\"social mb-0 list-inline mt-3\">\n                        <li class=\"list-inline-item\"><a href=\"https://www.facebook.com/MoomenRazik/\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"https://github.com/moomenrazik\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-github\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"https://www.linkedin.com/in/moomenazik/\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <!-- End-->\n\n            <!-- Team item-->\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"../../../assets/images/beshoy.jpeg\" alt=\"\" width=\"100\" class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\n                    <h5 class=\"mb-0\">Beshoy nabeih</h5><span class=\"small text-uppercase text-muted\">Full Stack Developer</span>\n                    <ul class=\"social mb-0 list-inline mt-3\">\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-github\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"#\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n\n            <!-- Team item-->\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"../../../assets/images/reham.jpeg\" alt=\"\" width=\"100\" class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\n                    <h5 class=\"mb-0\">Reham Tarek</h5><span class=\"small text-uppercase text-muted\">Front-End Developer</span>\n                    <ul class=\"social mb-0 list-inline mt-3\">\n                        <li class=\"list-inline-item\"><a href=\"https://www.facebook.com/profile.php?id=100010325220520\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"https://github.com/reham-tarek\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-github\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"https://www.linkedin.com/in/reham-tarek-b42b241aa\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <!-- End-->\n\n            <!-- Team item-->\n            <div class=\"col-xl-3 col-sm-6 mb-5\">\n                <div class=\"bg-white rounded shadow-sm py-5 px-4\"><img src=\"../../../assets/images/noor.jpeg\" alt=\"\" width=\"100\" class=\"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm\">\n                    <h5 class=\"mb-0\">Nooreldein shalaby</h5><span class=\"small text-uppercase text-muted\">Front-End Developer</span>\n                    <ul class=\"social mb-0 list-inline mt-3\">\n                        <li class=\"list-inline-item\"><a href=\"https://www.facebook.com/profile.php?id=100012494322742\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"https://github.com/noorshalaby\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-github\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"https://www.linkedin.com/in/nour-shalaby-ba8a681a8/\" class=\"social-link\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <!-- End-->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "B8YX":
/*!*****************************************************!*\
  !*** ./src/app/Components/edit/edit.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-img {\n  text-align: center;\n}\n\n.profile-img img {\n  width: 90%;\n  height: 100%;\n}\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  width: 90%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background-color: #252a33;\n}\n\n.profile-img .file:hover {\n  background-color: #d2393b;\n}\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n}\n\n.form-control:focus {\n  box-shadow: none;\n  border-color: #d2393b;\n}\n\n.profile-button {\n  background: #d2393b;\n  box-shadow: none;\n  border: none;\n  color: white;\n  width: 50%;\n}\n\n.profile-button:hover {\n  background: #252a33;\n}\n\n.profile-button:focus {\n  background: #252a33;\n  box-shadow: none;\n}\n\n.labels {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBO0VBQ0ksa0JBQUE7QUF0Qko7O0FBd0JBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFyQko7O0FBdUJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFwQko7O0FBc0JBO0VBQ0kseUJBQUE7QUFuQko7O0FBc0JBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQW5CSjs7QUFzQkE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBbkJKOztBQXNCQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFuQko7O0FBc0JBO0VBQ0ksbUJBQUE7QUFuQko7O0FBc0JBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQW5CSjs7QUF1QkE7RUFDSSxlQUFBO0FBcEJKIiwiZmlsZSI6ImVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY29udGFpbmVyIHtcbi8vICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTRlNDtcbi8vIH1cblxuLy8gLm1iLTMge1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vIH1cblxuLy8gLmZvcm0tY29udHJvbCB7XG4vLyAgICAgd2lkdGg6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIC5zdHlsZV9jYXJkIHtcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyB9XG5cbi8vIC5zYXZlX2NoYW5nZSB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbi8vIH1cblxuLnByb2ZpbGUtaW1ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlLWltZyBpbWd7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUgeyAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsNDIsNTEpO1xufVxuLnByb2ZpbGUtaW1nIC5maWxlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxMCw1Nyw1OSk7XG59XG5cbi5wcm9maWxlLWltZyAuZmlsZSBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpXG59XG5cbi5wcm9maWxlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB3aWR0aDo1MCU7XG59XG5cbi5wcm9maWxlLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDM3LDQyLDUxKTtcbn1cblxuLnByb2ZpbGUtYnV0dG9uOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzcsNDIsNTEpO1xuICAgIGJveC1zaGFkb3c6IG5vbmVcbn1cbiAgICBcblxuLmxhYmVscyB7XG4gICAgZm9udC1zaXplOiAxOHB4XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "BUpF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader *ngIf=\"!productList.length > 0\"></app-loader>\n<!-- ****** Quick View Modal Area Start ****** -->\n<div class=\"modal fade\" *ngIf=\"productPopUp\" id=\"quickview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"quickview\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <button type=\"button\" class=\"close btn\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n            <div class=\"modal-body\">\n                <div class=\"quickview_body\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-5\">\n                                <div class=\"quickview_pro_img\">\n                                    <img *ngIf=\"productPopUp.images && fromsearch == false\" src=\"{{productPopUp.images[0].image}}\" alt=\"{{productPopUp.name}}\">\n                                    <img *ngIf=\"productPopUp.images && fromsearch == true\" src=\"https://hdyaapi.herokuapp.com{{productPopUp.images[0].image}}\" alt=\"{{productPopUp.name}}\">\n                                    <img *ngIf=\"!productPopUp.images\" src=\"../../../assets/images/productunknown.png\" style=\"width: 150px; height:150px;\" alt=\"{{productPopUp.name}}\">\n\n                                </div>\n                            </div>\n                            <div class=\"col-12 col-lg-7\">\n                                <div class=\"quickview_pro_des\">\n                                    <h4 class=\"title\">{{productPopUp.name}}</h4>\n                                    <h5 class=\"price\">{{productPopUp.price | currency:'EGP '}}</h5>\n                                    <p>{{productPopUp.details}}</p>\n                                </div>\n                                <!-- Add to Cart Form -->\n                                <form class=\"cart\" method=\"post\">\n                                    <div class=\"quantity\">\n                                        <span class=\"qty-minus\" onclick=\"var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n\n                                        <input type=\"number\" #pquntty class=\"qty-text\" id=\"qty\" step=\"1\" min=\"1\" max=\"12\" name=\"quantity\" value=\"1\">\n\n                                        <span class=\"qty-plus\" onclick=\"var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                                    </div>\n                                    <button type=\"submit\" (click)=\"addToCart(productPopUp.id ,pquntty.value )\" name=\"addtocart\" value=\"5\" class=\"cart-submit\">Add to cart</button>\n\n                                </form>\n                                <br>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- ****** Quick View Modal Area End ****** -->\n\n<section class=\"shop_grid_area section_padding_100 \">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-3\">\n                <div class=\"shop_sidebar_area\" data-aos=\"fade-right\" data-aos-duration=\"1100\" data-aos-offset=\"300\" data-aos-easing=\"ease-in-sine\">\n                    <div class=\"wrapper\">\n                        <!-- Sidebar -->\n                        <nav id=\"sidebar\">\n                            <div class=\"sidebar-header text-center\" style=\"background-color: rgb(236, 236, 236);\">\n                                <h3>Filters</h3>\n                            </div>\n                            <div class=\"panel-group\" id=\"accordion\">\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\">\n                                        <h4 class=\"panel-title\" class=\"text-center\">\n                                            <a class=\"btn karl-checkout-btn\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">Category List <i class=\"fas fa-caret-down\"></i></a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n                                        <ul>\n                                            <li *ngFor=\"let cat of categoryList\">\n                                                <a (click)=\"showProductsbyID(cat.id)\" style=\"color: black;\">{{cat.title}}</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </nav>\n                    </div>\n                    <div class=\"widget price mt-50\">\n                        <h6 class=\"widget-title mb-20\">Filter by Price</h6><br>\n                        <div class=\"widget-desc\">\n\n                            <label for=\"minpricefilter\">Min price</label>\n                            <p>{{minprice}}</p>\n                            <input #filterminprice (change)=\"minPrice(filterminprice.value)\" [(ngModel)]=\"minprice\" type=\"range\" max=\"10000\" min=\"0\" step=\"1\" value=\"0\" id=\"minpricefilter\">\n                            <br>\n                            <label for=\"maxpricefilter\">Max price</label>\n                            <p>{{maxprice}}</p>\n                            <input #filtermaxprice (change)=\"maxPrice(filtermaxprice.value)\" [(ngModel)]=\"maxprice\" type=\"range\" max=\"10000\" min=\"0\" step=\"1\" value=\"1000\" id=\"maxpricefilter\">\n                            <!-- <button class=\"btn karl-checkout-btn\" (click)=\"getproductsbyprice(filterminprice.value , filtermaxprice.value)\">Price filter</button> -->\n                        </div>\n                    </div>\n\n                    <div class=\"widget color mb-70 d-block\">\n                        <br>\n                        <h6 class=\"widget-title mb-30\">Filter by Gender</h6>\n                        <div class=\"widget-desc\">\n                            <ul class=\"justify-content-between\">\n                                <input #pmale (change)=\"getproductsbygender(pmale.value)\" type=\"radio\" name=\"genderfilter\" value=\"m\">Male\n                                <input #pfemale (change)=\"getproductsbygender(pfemale.value)\" type=\"radio\" name=\"genderfilter\" value=\"f\">Female<br>\n                                <input #pboth (change)=\"getproductsbygender(pboth.value)\" type=\"radio\" name=\"genderfilter\" value=\"b\"> Both<br>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"widget size d-block\">\n                        <br>\n                        <h6 class=\"widget-title\">Filter by Age</h6><br>\n                        <div class=\"widget-desc\">\n\n                            <label for=\"minrangefilter\">Min Age</label>\n                            <p>{{minrange}}</p>\n                            <input #filterminage (change)=\"minAge(filterminage.value)\" [(ngModel)]=\"minrange\" type=\"range\" max=\"100\" min=\"0\" step=\"1\" value=\"10\" id=\"minrangefilter\">\n                            <br>\n                            <label for=\"maxrangefilter\">Max Age</label>\n                            <p>{{maxrange}}</p>\n                            <input #filtermaxage (change)=\"maxAge(filtermaxage.value)\" [(ngModel)]=\"maxrange\" type=\"range\" max=\"100\" min=\"0\" step=\"1\" value=\"70\" id=\"maxrangefilter\">\n                            <!-- <button class=\"btn karl-checkout-btn\" (click)=\"getproductsbyage(filterminage.value , filtermaxage.value)\">age filter</button> -->\n                        </div>\n                    </div>\n                    <div class=\"widget size d-block\">\n                        <br>\n                        <h6 class=\"widget-title\">Occassion</h6><br>\n                        <div class=\"widget-desc\">\n                            <select #poccassions (change)=\"occassionSearch()\" [(ngModel)]=\"filteredoccassions\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"occassion\">\n                                <option *ngFor=\"let occ of occassions\" [value]=\"occ.id\" >{{occ.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"widget size d-block\">\n                        <br>\n                        <h6 class=\"widget-title\">Relationship</h6><br>\n                        <div class=\"widget-desc\">\n                            <select #prelationship (change)=\"relationSearch()\" [(ngModel)]=\"filteredrelations\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"relationship\">\n                                <option *ngFor=\"let rel of relationships\"  [value]=\"rel.id\" >{{rel.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <button (click)=\"resetFilters()\" class=\"btn karl-checkout-btn mt-2 bg-dark\">Reset Filters</button>\n                    <button (click)=\" searchNow()\" class=\"btn karl-checkout-btn mt-2\"> Search</button>\n                </div>\n            </div>\n            <div class=\"col-12 col-md-8 col-lg-9\">\n                <div class=\"shop_grid_product_area d-block p-4 m-4 text-center\">\n                    <div *ngIf=\"productList.length > 0\" class=\"row\">\n                        <!-- Single gallery Item -->\n                        <div *ngFor=\"let product of productList | paginate: { id: 'incoming_pagination',\n                        itemsPerPage: 9,\n                        currentPage: page,\n                        totalItems: totaloncomingOrdersRecords} \" class=\"col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig mb-4\" data-wow-delay=\"0.2s\" data-aos=\"fade-up\" data-aos-duration=\"1300\">\n                            <!-- Product Image -->\n                            <div class=\"product-img\">\n\n                                <img *ngIf=\"product.images[0] && fromsearch == false\" src=\"{{product.images[0].image}}\" style=\"width: 150px; height:150px;\" alt=\"{{product.name}}\">\n                                <img *ngIf=\"product.images[0] && fromsearch == true\" src=\"https://hdyaapi.herokuapp.com{{product.images[0].image}}\" style=\"width: 150px; height:150px;\" alt=\"{{product.name}}\">\n                                <img *ngIf=\"!product.images[0]\" src=\"../../../assets/images/productunknown.png\" style=\"width: 150px; height:150px;\" alt=\"{{product.name}}\">\n                                <div class=\"product-quicview\">\n                                    <a data-toggle=\"modal\" (click)=\"popUpProduct(product.id)\" data-target=\"#quickview\"><i class=\"far fa-plus\"></i></a>\n                                </div>\n                            </div>\n                            <!-- Product Description -->\n                            <div class=\"product-description\">\n                                <h4 class=\"product-price\">{{product.price | currency:'EGP '}}</h4>\n                                <p>{{product.name}}</p>\n                                <!-- <p>{{product.images[0].image}}</p> -->\n                                <!-- More Details -->\n                                <button class=\"btn btn-link\" [routerLink]=\"['/productdetails',product.id]\">More Details</button>\n                                <!-- Add to Cart -->\n                                <a class=\"add-to-cart-btn\" (click)=\"addToCart(product.id)\">ADD TO CART</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <pagination-controls responsive=\"true\" id=\"incoming_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"page = $event\"></pagination-controls>\n                    </div>\n                </div>\n                <!-- <div class=\"text-center\">\n                    <button (click)=\"showless()\" class=\"btn btn-light m-2\"><i class=\"fas fa-arrow-circle-left fa-2x\"></i></button>\n                    <button (click)=\"showMore()\" class=\"btn btn-light\"><i class=\"fas fa-arrow-circle-right fa-2x\"></i></button>\n                </div> -->\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "CVoa":
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "uvzM");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "hKzT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "D+GR":
/*!*******************************************!*\
  !*** ./src/app/_alert/alert.component.ts ***!
  \*******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "OMC0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.model */ "y2ja");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "nrat");






let AlertComponent = class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            this.alerts.find(x => x === alert).fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissable'];
        const alertTypeClass = {
            [_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success]: 'alert alert-success',
            [_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error]: 'alert alert-danger',
            [_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info]: 'alert alert-info',
            [_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
AlertComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fade: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ selector: 'alert', template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"] })
], AlertComponent);



/***/ }),

/***/ "Evcn":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/popup/popup.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1 mat-dialog-title>Report Form</h1>\n    <div mat-dialog-content>\n        <textarea #preport [(ngModel)]=\"msgBody\" placeholder=\"Write reasons for reporting this product\"></textarea>\n    </div>\n    <div mat-dialog-actions>\n        <button mat-button mat-dialog-close>Close</button>\n        <button (click)=\"sendmsg()\" mat-button>Send</button>\n    </div>\n</div>\n\n<!-- \n<textarea #preport></textarea>\n<button type=\"submit\" (click)=\"reportproduct(preport.value)\">Report</button> -->");

/***/ }),

/***/ "FuVj":
/*!*******************************************!*\
  !*** ./src/app/Pipes/dollartoegp.pipe.ts ***!
  \*******************************************/
/*! exports provided: DollartoegpPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollartoegpPipe", function() { return DollartoegpPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';
let DollartoegpPipe = class DollartoegpPipe {
    transform(value, changeRate = 15.70) {
        let result = value * changeRate;
        return `${result} EGP`;
    }
};
DollartoegpPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dollartoegp'
    })
], DollartoegpPipe);



/***/ }),

/***/ "HLHb":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader *ngIf=\"loaderStatus == false\"></app-loader>\n<!-- <app-loader *ngIf=\"!myProducts && !myProducts.length > 0\"></app-loader> -->\n\n<br> <br> <br>\n\n<div class=\"container\">\n    <form>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"profile-img\">\n                    <img *ngIf=\"myprofile.avatar\" src=\"{{myprofile.avatar}}\" alt=\"\" />\n                    <img *ngIf=\"!myprofile.avatar\" src=\"../../../assets/images/icon.jpeg\" alt=\"\" />\n                    <!-- <div class=\"file btn btn-lg btn-primary\">\n                        Change Photo\n                        <input type=\"file\" name=\"file\" />\n                    </div> -->\n                    <input type=\"submit\" class=\"profile-edit-btn mt-2\" name=\"btnAddMore\" value=\"Edit Profile\" routerLink='./edit' />\n\n                    <br><br>\n                    <h4 style=\"color: rgb(37,42,51);\">{{myprofile.username}}</h4>\n                </div>\n            </div>\n\n\n            <div class=\"col-md-8\">\n\n                <div class=\"row\">\n                    <div class=\"col p-4\">\n                        <div class=\"profile-head\">\n                            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">About</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" *ngIf=\"myProducts.length > 0\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Products</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" *ngIf=\"incomingOrdersToHandle.length > 0\" id=\"orders-tab\" data-toggle=\"tab\" href=\"#orders\" role=\"tab\" aria-controls=\"orders\" aria-selected=\"false\">Incoming Orders</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" *ngIf=\"myOrders.length > 0\" id=\"orders-tab\" data-toggle=\"tab\" href=\"#myorders\" role=\"tab\" aria-controls=\"myorders\" aria-selected=\"false\">My Orders</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <!-- <div class=\"col\"> -->\n\n                    <div class=\"col\">\n                        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>User Name</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{myprofile.username}}</p>\n                                    </div>\n                                </div><br>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>First Name</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{myprofile.first_name}}</p>\n                                    </div>\n                                </div><br>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Last Name</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{myprofile.last_name}}</p>\n                                    </div>\n                                </div><br>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Email</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{myprofile.email}}</p>\n                                    </div>\n                                </div><br>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Phone</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{myprofile.mobile}}</p>\n                                    </div>\n                                </div><br>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Address</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{myprofile.address}}</p>\n                                    </div>\n                                </div><br>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Bithday</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{myprofile.birth_date}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 ml-1 mb-5\">\n                                        <table class=\"table table-responsive \">\n                                            <thead>\n                                                <tr>\n                                                    <th>No.</th>\n                                                    <th class=\"col-md-3\">Product Name</th>\n                                                    <th class=\"col-md-3\">Price</th>\n                                                    <th class=\"col-md-3\">Created At</th>\n                                                    <!-- <th class=\"col-md-3\">Total</th> -->\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let prd of myProducts  | paginate: { id: 'product_pagination',\n                                                        itemsPerPage: 6,\n                                                        currentPage: productpage,\n                                                        totalItems: totalProductsRecords} ; let i=index\">\n                                                    <td>{{i+1}}</td>\n                                                    <td class=\"cart_product_img text-center\" class=\"col-md-3\">\n                                                        <h6><a [routerLink]=\"['/productdetails',prd.id]\">{{prd.name}}</a></h6>\n                                                    </td>\n                                                    <td class=\"price\" class=\"col-md-3\"><span>{{prd.price}}</span></td>\n                                                    <td class=\"qty\" class=\"col-md-3\">\n                                                        <div class=\"quantity\">\n                                                            <span>{{prd.created_at}}</span>\n                                                        </div>\n                                                    </td>\n                                                    <!-- <td class=\"total_price\" class=\"col-md-3\"><span>120 EGP</span></td> -->\n                                                </tr>\n\n                                            </tbody>\n                                        </table>\n                                        <div>\n                                            <pagination-controls responsive=\"true\" id=\"product_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"productpage = $event\"></pagination-controls>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane fade\" id=\"orders\" role=\"tabpanel\" aria-labelledby=\"orders-tab\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 ml-1 mb-5\">\n                                        <table class=\"table table-responsive \">\n                                            <thead>\n                                                <tr>\n                                                    <th class=\"col-md-3\">No.</th>\n                                                    <th class=\"col-md-3\">Product</th>\n                                                    <th class=\"col-md-3\">Quantity</th>\n                                                    <th class=\"col-md-3\">Date</th>\n                                                    <th class=\"col-md-3\">Status</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let order of incomingOrdersToHandle  | paginate: { id: 'incoming_pagination',\n                                                        itemsPerPage: 6,\n                                                        currentPage: incommingorderspage,\n                                                        totalItems: totaloncomingOrdersRecords} ; let i=index\">\n\n                                                    <td>\n                                                        {{i+1}}\n                                                    </td>\n                                                    <td class=\"cart_product_img text-center\" class=\"col-md-3\">\n                                                        <h6><a [routerLink]=\"['/productdetails',order.product_id]\">{{order.product_name}}</a></h6>\n                                                    </td>\n                                                    <td class=\"qty\" class=\"col-md-3\">\n                                                        <div class=\"quantity\">\n                                                            <span>{{order.Quantity}}</span>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"total_price\" class=\"col-md-3\"><span>{{order.created_at}}</span></td>\n                                                    <td class=\"total_price\" class=\"col-md-3\"><span>{{order.status}}</span></td>\n                                                    <td class=\"total_price\" class=\"col-md-3\"><span><i class=\"far fa-trash-alt\" (click)=\"cancelOrder(order.order_id)\"></i></span></td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                        <br>\n                                        <div>\n                                            <pagination-controls responsive=\"true\" id=\"incoming_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"incommingorderspage = $event\"></pagination-controls>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"tab-pane fade\" id=\"myorders\" role=\"tabpanel\" aria-labelledby=\"MyOrders-tab\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 ml-1 mb-5\">\n                                        <table class=\"table table-responsive \">\n                                            <thead>\n                                                <tr>\n                                                    <th class=\"col-md-3\">No.</th>\n                                                    <th class=\"col-md-3\">Product</th>\n                                                    <th class=\"col-md-3\">Price</th>\n                                                    <th class=\"col-md-3\">Quantity</th>\n                                                    <th class=\"col-md-3\">Total</th>\n                                                    <th class=\"col-md-3\">Date</th>\n                                                    <th class=\"col-md-3\">Status</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let order of myOrders  | paginate: { id: 'orders_pagination',\n                                                        itemsPerPage: 6,\n                                                        currentPage: orderpage,\n                                                        totalItems: totalOrdersRecords} ; let i=index\">\n\n                                                    <td>\n                                                        {{i+1}}\n                                                    </td>\n                                                    <td class=\"cart_product_img text-center\" class=\"col-md-3\">\n                                                        <h6><a [routerLink]=\"['/productdetails',order.product_id]\">{{order.product_name}}</a></h6>\n                                                    </td>\n                                                    <td class=\"price\" class=\"col-md-3\"><span>{{order.product_price}}</span></td>\n                                                    <td class=\"qty\" class=\"col-md-3\">\n                                                        <div class=\"quantity\">\n                                                            <span>{{order.Quantity}}</span>\n                                                        </div>\n                                                    </td>\n                                                    <td class=\"total_price\" class=\"col-md-3\"><span>{{order.Total}}</span></td>\n                                                    <td class=\"total_price\" class=\"col-md-3\"><span>{{order.created_at}}</span></td>\n                                                    <td class=\"total_price\" class=\"col-md-3\"><span>{{order.status}}</span></td>\n                                                    <td class=\"total_price\" class=\"col-md-3\"><span><i class=\"far fa-trash-alt\" (click)=\"cancelOrder(order.order_id)\"></i></span></td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                        <br>\n                                        <div>\n                                            <pagination-controls responsive=\"true\" id=\"orders_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"orderpage = $event\"></pagination-controls>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- </div> -->\n                </div>\n\n\n            </div>\n\n            <!-- \n            <div class=\"col-md-2\">\n\n            </div> -->\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "I4Uo":
/*!***************************************************!*\
  !*** ./src/app/Components/nav/nav.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#example1 {\n  border: 1px solid white;\n  padding: 5px;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2V4YW1wbGUxIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "IKN5":
/*!*****************************************************!*\
  !*** ./src/app/Components/cart/cart.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-weight: 400;\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: rgb(37, 42, 51);\n    line-height: 1.2;\n    font-weight: 700;\n}\n\np {\n    color: rgb(37, 42, 51);\n    font-size: 1em;\n    line-height: 1.5;\n    font-weight: 400;\n}\n\na:focus {\n    outline: 0 solid;\n}\n\na,\na:hover,\na:focus {\n    transition: all 500ms ease 0s;\n    text-decoration: none;\n    outline: none;\n    color: rgb(37, 42, 51);\n    font-weight: 400;\n}\n\nul,\nol {\n    margin: 0;\n}\n\nol li,\nul li {\n    list-style: outside none none;\n}\n\nimg {\n    height: auto;\n    max-width: 100%;\n}\n\n.background-overlay,\n.background-overlay-white {\n    position: relative;\n    z-index: 2;\n    background-position: center center;\n    background-size: cover;\n}\n\n.background-overlay:before,\n.background-overlay-white:before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\";\n}\n\n.background-overlay:before {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.background-overlay-white:before {\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.mb-100 {\n    margin-bottom: 100px;\n}\n\n.bg-img {\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.bg-transparent {\n    background-color: transparent;\n}\n\n.bg-transparent-dark {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.bg-transparent-light {\n    background-color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.bg-dark3 {\n    background-color: rgba(0, 0, 0, 0.75) !important;\n}\n\n.bg-dark2 {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.font-bold {\n    font-weight: 700;\n}\n\n.font-light {\n    font-weight: 300;\n}\n\n.line,\n.line-mtb15 {\n    width: 100%;\n    height: 1px;\n    background-color: #ddd;\n    margin: 30px 0;\n}\n\n.line-mtb15 {\n    margin: 15px 0;\n}\n\n.height-500 {\n    height: 500px !important;\n}\n\n.height-600 {\n    height: 600px !important;\n}\n\n.height-700 {\n    height: 700px !important;\n}\n\n.height-800 {\n    height: 800px !important;\n}\n\n#scrollUp {\n    background-color: rgb(210, 57, 59);\n    border-radius: 0;\n    bottom: 0;\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n    color: #fff;\n    font-size: 24px;\n    height: 40px;\n    line-height: 40px;\n    right: 60px;\n    text-align: center;\n    width: 40px;\n}\n\n/* \n/////////////////////////////////////////\n//////////////// Modal  //////////////////////// */\n\n#quickview button.close {\n    box-shadow: none;\n    position: absolute;\n    right: 15px;\n    text-align: right;\n    top: 10px;\n    z-index: 9;\n}\n\n.fade {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%\n}\n\n.quickview_body {\n    overflow: hidden;\n    text-align: center;\n}\n\n.quickview_pro_img {\n    border: 1px solid #f6f6f6;\n    position: relative;\n    width: 100%;\n    z-index: 1;\n}\n\n.quickview_pro_img .hover_img {\n    left: 0;\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    position: absolute;\n    top: -30px;\n    transition-duration: 500ms;\n}\n\n.quickview_pro_img:hover .hover_img {\n    top: 0;\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.quickview_pro_des .title {\n    text-transform: capitalize;\n}\n\n.quickview_pro_des {\n    padding: 30px 0;\n}\n\n.quickview_pro_des .price>span {\n    color: #888;\n    font-size: 14px;\n    text-decoration: line-through;\n}\n\n.quickview_pro_des>p {\n    font-size: 13px;\n}\n\n.quickview_pro_des>a {\n    color: #19B5FE;\n    font-size: 13px;\n    text-decoration: underline;\n}\n\n.quickview_body .quantity>input {\n    -moz-appearance: textfield;\n    border: 1px solid #f6f6f6;\n    height: 35px;\n    text-align: center;\n    width: 40px;\n    font-size: 13px;\n}\n\n.quickview_body .quantity {\n    align-items: center;\n    display: flex;\n}\n\n.quickview_body .cart {\n    display: flex;\n}\n\n.quickview_body .qty-plus,\n.quickview_body .qty-minus {\n    background-color: transparent;\n    border: 1px solid #f6f6f6;\n    color: #000;\n    cursor: pointer;\n    height: 35px;\n    text-align: center;\n    width: 22px;\n}\n\n.quickview_body .qty-plus {\n    border-left: 0 solid transparent;\n}\n\n.quickview_body .qty-minus {\n    border-right: 0 solid transparent;\n}\n\n.quickview_body .cart-submit {\n    background-color: rgb(210, 57, 59);\n    border: medium none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 13px;\n    height: 35px;\n    margin-left: 15px;\n    width: 120px;\n    transition-duration: 500ms;\n}\n\n.quickview_body .cart-submit:hover {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n}\n\n.quickview_body .qty-minus i,\n.quickview_body .qty-plus i {\n    color: #888;\n    font-size: 10px;\n    line-height: 33px;\n}\n\n.quickview_body .modal_pro_wishlist>a,\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n    display: block;\n    height: 35px;\n    margin: 0 15px;\n    text-align: center;\n    width: 35px;\n    font-size: 22px;\n}\n\n.quickview_body .modal_pro_wishlist>a:hover,\n.quickview_body .modal_pro_compare>a:hover {\n    background-color: #000;\n    color: #fff;\n}\n\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(37, 42, 51);\n    margin: 0;\n}\n\n.quickview_body .modal_pro_wishlist>a i,\n.quickview_body .modal_pro_compare>a i {\n    line-height: 35px;\n}\n\n.quickview_body .share_wf>p {\n    font-size: 13px;\n    margin-bottom: 5px;\n    text-transform: capitalize;\n}\n\n.quickview_body .share_wf ._icon>a {\n    color: #888;\n    font-size: 14px;\n    margin-right: 5px;\n}\n\n.quickview_body .share_wf ._icon>a:hover {\n    color: #000;\n}\n\n.quickview_body .top_seller_product_rating>i {\n    color: #ff9800;\n    font-size: 13px;\n}\n\n.section_padding_100_0 {\n    padding: 100px 0 0;\n}\n\n.section_padding_0_100 {\n    padding: 0 0 100px;\n}\n\n.section_heading {\n    margin-bottom: 50px;\n    position: relative;\n    z-index: 1;\n}\n\n.section_heading h2 {\n    font-size: 48px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n}\n\n.section_heading.text-left {\n    text-align: left !important;\n}\n\n.karl-btn {\n    display: inline-block;\n    min-width: 170px;\n    height: 55px;\n    color: #fff;\n    border: 3px solid #fff;\n    border-radius: 2px;\n    padding: 0 30px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 49px;\n}\n\n.karl-btn:hover,\n.karl-btn:focus {\n    font-weight: 700;\n    color: #fff;\n    background-color: rgb(37, 42, 51);\n    border-color: rgb(37, 42, 51);\n}\n\n.product-img {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n}\n\n.product-img>img {\n    width: 100%;\n    transition-duration: 500ms;\n}\n\n.single_gallery_item:hover .product-img>img {\n    transform: scale(1.15);\n}\n\n.product-img .product-quicview {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(23, 24, 24, 0.6);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    transition-duration: 500ms;\n}\n\n.product-img:hover .product-quicview {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.product-img .product-quicview>a {\n    width: 72px;\n    height: 72px;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    border-radius: 50%;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 36px;\n    line-height: 72px;\n}\n\n.product-img .product-quicview>a:hover {\n    border: 2px solid rgba(255, 255, 255, 1);\n    color: rgba(255, 255, 255, 1);\n}\n\n.product-description {\n    margin-top: 20px;\n}\n\n.product-description h4 {\n    font-weight: 400;\n    color: rgb(210, 57, 59);\n    margin-bottom: 5px;\n    display: block;\n}\n\n.product-description p {\n    font-size: 20px;\n    margin: 0;\n    color: rgb(37, 42, 51)\n}\n\n.product-description .add-to-cart-btn {\n    margin-top: 50px;\n    font-size: 12px;\n    font-weight: 700;\n    color: rgb(210, 57, 59);\n    display: block;\n}\n\n.product-description .add-to-cart-btn:hover {\n    color: rgb(210, 57, 59);\n}\n\n.container {\n  margin: auto;\n  padding: auto;\n  width: 70%;\n  font-size: 20px;\n}\n\n.cart-table .table {\n  position: relative;\n  z-index: 9;\n}\n\n.cart_area table thead {\n  background-color: #f4f2f8;\n  border: none;\n}\n\n.cart_area table tbody tr td {\n  width: 10% !important;\n}\n\n.cart_area table tbody tr td:first-child {\n  width: 70% !important;\n}\n\n.cart_product_img > a {\n  width: 120px;\n  margin-right: 20px;\n}\n\n.cart-table .table td,\n.cart-table .table th {\n  padding: 12px;\n  padding: 12px;\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: middle;\n  border: none;\n  font-size: 13px;\n}\n\n.cart-table .cart_product_img h6 {\n  font-size: 14px;\n  margin: 0;\n  font-weight: 400;\n}\n\n.cart-table .qty-minus,\n.cart-table .qty-plus {\n  background-color: #f6f6f6;\n  cursor: pointer;\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n\n.cart-table .qty-minus i,\n.cart-table .qty-plus i {\n  line-height: 30px;\n  font-size: 10px;\n}\n\n.cart-table .qty-text {\n  background-color: #f6f6f6;\n  border: medium none;\n  display: inline-block;\n  height: 30px;\n  -moz-appearance: textfield;\n  -webkit-appearance: textfield;\n  appearance: textfield;\n  text-align: center;\n  font-size: 12px;\n  width: 50px;\n}\n\n.cart-table .quantity {\n  align-items: center;\n  display: inline-flex;\n  text-align: center;\n}\n\n.cart-table .price span,\n.cart-table .total_price > span,\n.cart-table .action > a {\n  font-size: 14px;\n}\n\n.cart_area .update-checkout a,\n.cart_area .back-to-shop a {\n  background-color: transparent;\n  border-radius: 0;\n  display: inline-block;\n  height: 55px;\n  line-height: 51px;\n  min-width: 120px;\n  padding: 0 30px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  border: 2px solid #252a33;\n  text-transform: uppercase;\n}\n\n.cart_area .update-checkout a:first-child {\n  color: #252a33;\n  border-color: #f4f2f8;\n}\n\n.cart_area .update-checkout a:last-child {\n  background-color: #f4f2f8;\n  color: #252a33;\n  border-color: #f4f2f8;\n}\n\n.cart-page-heading {\n  margin-bottom: 50px;\n}\n\n.cart-page-heading h5 {\n  text-transform: uppercase;\n  font-size: 18px;\n}\n\n.cart-page-heading p {\n  color: #7a7a7a;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.coupon-code-area form {\n  position: relative;\n  z-index: 1;\n}\n\n.coupon-code-area form > input {\n  width: 100%;\n  height: 52px;\n  border: none;\n  background-color: #f4f2f8;\n  padding: 0 30px;\n  font-size: 12px;\n}\n\n.coupon-code-area form > button {\n  width: 120px;\n  height: 52px;\n  border: none;\n  text-transform: uppercase;\n  background-color: #d2393b;\n  padding: 0 30px;\n  font-size: 14px;\n  position: absolute;\n  top: 0;\n  color: #fff;\n  font-weight: 700;\n  right: 0;\n}\n\n.shipping-method-area .custom-control-label span {\n  font-size: 14px;\n}\n\n.cart-total-chart {\n  background-color: #f4f2f8;\n  padding: 30px;\n}\n\n.cart-total-chart li {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\na {\n  cursor: pointer;\n}\n\n.karl-checkout-btn {\n  width: 100%;\n  height: 60px;\n  background-color: #d2393b;\n  border-radius: 0;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 60px;\n  padding: 0;\n}\n\n.karl-checkout-btn:hover,\n.karl-checkout-btn:focus {\n  background-color: #252a33;\n  color: #fff;\n  font-weight: 700;\n}\n\n.mt-30 {\n  margin-top: 30px;\n  color: #d2393b;\n}\n\n.mt-70 {\n  margin-top: 70px;\n}\n\n.cart_total {\n  margin-left: auto;\n  position: relative;\n}\n\na:hover {\n  color: #d2393b;\n}\n\n.emptycart {\n  font-family: \"Oswald\", sans-serif;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4uY3NzIiwiLi4vLi4vLi4vLi4vY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7SUFNSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBSUksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0kscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztB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QTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO0VBR0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTs7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnAge1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwIHNvbGlkO1xufVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UgMHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UgMHM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG51bCxcbm9sIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbm9sIGxpLFxudWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXksXG4uYmFja2dyb3VuZC1vdmVybGF5LXdoaXRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXk6YmVmb3JlLFxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogXCJcIjtcbn1cblxuLmJhY2tncm91bmQtb3ZlcmxheTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLm1iLTEwMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQtZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudC1saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyazIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9udC1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmxpbmUsXG4ubGluZS1tdGIxNSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBtYXJnaW46IDMwcHggMDtcbn1cblxuLmxpbmUtbXRiMTUge1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaGVpZ2h0LTUwMCB7XG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTYwMCB7XG4gICAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTcwMCB7XG4gICAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTgwMCB7XG4gICAgaGVpZ2h0OiA4MDBweCAhaW1wb3J0YW50O1xufVxuXG4jc2Nyb2xsVXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgcmlnaHQ6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG5cbi8qIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8gTW9kYWwgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4jcXVpY2t2aWV3IGJ1dHRvbi5jbG9zZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdG9wOiAxMHB4O1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi5mYWRlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJVxufVxuXG4ucXVpY2t2aWV3X2JvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXVpY2t2aWV3X3Byb19pbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2ltZyAuaG92ZXJfaW1nIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2ltZzpob3ZlciAuaG92ZXJfaW1nIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzIC50aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2RlcyB7XG4gICAgcGFkZGluZzogMzBweCAwO1xufVxuXG4ucXVpY2t2aWV3X3Byb19kZXMgLnByaWNlPnNwYW4ge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzPnAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzPmEge1xuICAgIGNvbG9yOiAjMTlCNUZFO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdWFudGl0eT5pbnB1dCB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y2ZjZmNjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdWFudGl0eSB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5jYXJ0IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzLFxuLnF1aWNrdmlld19ib2R5IC5xdHktbWludXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIycHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXR5LXBsdXMge1xuICAgIGJvcmRlci1sZWZ0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1taW51cyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLmNhcnQtc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuY2FydC1zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXR5LW1pbnVzIGksXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzIGkge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YSxcbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YTpob3Zlcixcbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fY29tcGFyZT5hIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb193aXNobGlzdD5hIGksXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb19jb21wYXJlPmEgaSB7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuc2hhcmVfd2Y+cCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5zaGFyZV93ZiAuX2ljb24+YSB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnNoYXJlX3dmIC5faWNvbj5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC50b3Bfc2VsbGVyX3Byb2R1Y3RfcmF0aW5nPmkge1xuICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlY3Rpb25fcGFkZGluZ18xMDBfMCB7XG4gICAgcGFkZGluZzogMTAwcHggMCAwO1xufVxuXG4uc2VjdGlvbl9wYWRkaW5nXzBfMTAwIHtcbiAgICBwYWRkaW5nOiAwIDAgMTAwcHg7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcgaDIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcudGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5rYXJsLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xufVxuXG4ua2FybC1idG46aG92ZXIsXG4ua2FybC1idG46Zm9jdXMge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LWltZz5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5zaW5nbGVfZ2FsbGVyeV9pdGVtOmhvdmVyIC5wcm9kdWN0LWltZz5pbWcge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4ucHJvZHVjdC1pbWcgLnByb2R1Y3QtcXVpY3ZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMjQsIDI0LCAwLjYpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5wcm9kdWN0LWltZzpob3ZlciAucHJvZHVjdC1xdWljdmlldyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3PmEge1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNzJweDtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3PmE6aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKVxufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiAuYWRkLXRvLWNhcnQtYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9tYWluLmNzcyc7XG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogYXV0bztcbiAgICB3aWR0aDogNzAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhcnQtdGFibGUgLnRhYmxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTtcbn1cblxuLmNhcnRfYXJlYSB0YWJsZSB0aGVhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjJmODtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJ0X2FyZWEgdGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbn1cblxuLmNhcnRfYXJlYSB0YWJsZSB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xufVxuXG4uY2FydF9wcm9kdWN0X2ltZz5hIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2FydC10YWJsZSAudGFibGUgdGQsXG4uY2FydC10YWJsZSAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2FydC10YWJsZSAuY2FydF9wcm9kdWN0X2ltZyBoNiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2FydC10YWJsZSAucXR5LW1pbnVzLFxuLmNhcnQtdGFibGUgLnF0eS1wbHVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG4uY2FydC10YWJsZSAucXR5LW1pbnVzIGksXG4uY2FydC10YWJsZSAucXR5LXBsdXMgaSB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2FydC10YWJsZSAucXR5LXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uY2FydC10YWJsZSAucXVhbnRpdHkge1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FydC10YWJsZSAucHJpY2Ugc3Bhbixcbi5jYXJ0LXRhYmxlIC50b3RhbF9wcmljZT5zcGFuLFxuLmNhcnQtdGFibGUgLmFjdGlvbj5hIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJ0X2FyZWEgLnVwZGF0ZS1jaGVja291dCBhLFxuLmNhcnRfYXJlYSAuYmFjay10by1zaG9wIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogNTVweDtcbiAgICBsaW5lLWhlaWdodDogNTFweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDM3LCA0MiwgNTEpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJ0X2FyZWEgLnVwZGF0ZS1jaGVja291dCBhOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGJvcmRlci1jb2xvcjogI2Y0ZjJmODtcbn1cblxuLmNhcnRfYXJlYSAudXBkYXRlLWNoZWNrb3V0IGE6bGFzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjJmODtcbiAgICBjb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGJvcmRlci1jb2xvcjogI2Y0ZjJmODtcbn1cblxuLmNhcnQtcGFnZS1oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY2FydC1wYWdlLWhlYWRpbmcgaDUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2FydC1wYWdlLWhlYWRpbmcgcCB7XG4gICAgY29sb3I6ICM3YTdhN2E7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb3Vwb24tY29kZS1hcmVhIGZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uY291cG9uLWNvZGUtYXJlYSBmb3JtPmlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGYyZjg7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvdXBvbi1jb2RlLWFyZWEgZm9ybT5idXR0b24ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICByaWdodDogMDtcbn1cblxuLnNoaXBwaW5nLW1ldGhvZC1hcmVhIC5jdXN0b20tY29udHJvbC1sYWJlbCBzcGFuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJ0LXRvdGFsLWNoYXJ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMmY4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5jYXJ0LXRvdGFsLWNoYXJ0IGxpIHtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgZGlzcGxheTogLW8tZmxleDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ua2FybC1jaGVja291dC1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5rYXJsLWNoZWNrb3V0LWJ0bjpob3Zlcixcbi5rYXJsLWNoZWNrb3V0LWJ0bjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tdC0zMCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KVxufVxuXG4ubXQtNzAge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5jYXJ0X3RvdGFsIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjEwLCA1NywgNTkpXG59XG5cbi5lbXB0eWNhcnQge1xuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "M6HQ":
/*!*******************************************************!*\
  !*** ./src/app/Components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search.component.html */ "BUpF");
/* harmony import */ var _search_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component.scss */ "YOqH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "S3Px");
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_alert */ "06Np");
/* harmony import */ var _services_add_to_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/add-to-cart.service */ "smYa");








let SearchComponent = class SearchComponent {
    constructor(_products, alertService, _addCart) {
        this._products = _products;
        this.alertService = alertService;
        this._addCart = _addCart;
        this.productList = [];
        this.categoryList = [];
        this.filterdProducts = [];
        this.cart = [];
        this.productPopUp = {};
        this.moreData = [];
        this.searchparams = {};
        this.filteredrelations = 0;
        this.filteredoccassions = 0;
        this.fromsearch = false;
        this.options = {
            autoClose: true,
            keepAfterRouteChange: true
        };
        this.totalRecords = 0;
        this.page = 1;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
        if (localStorage.getItem('searchKey')) {
            this.searchparams.name = localStorage.getItem('searchKey');
            this.searchNow();
            localStorage.removeItem('searchKey');
        }
        else if (localStorage.getItem('catsearch')) {
            this.searchparams.category = JSON.parse(localStorage.getItem('catsearch') || '{}');
            this.searchNow();
            localStorage.removeItem('catsearch');
        }
        else {
            this.showAll();
        }
        this._products.showcategories().subscribe((data) => this.categoryList = data, (err) => console.log(err));
        this._products.showrelations().subscribe((data) => this.relationships = data, (err) => console.log(err));
        this._products.showoccassions().subscribe((data) => this.occassions = data, (err) => console.log(err));
    }
    showAll() {
        this._products.viewProducts().subscribe((data) => {
            this.productList = data;
            this.moreData = data;
            //pagination
            this.totalRecords = this.productList.length;
        }, (err) => console.log(err));
    }
    ngDoCheck() {
        if (localStorage.getItem('searchKey')) {
            this.searchparams.name = localStorage.getItem('searchKey');
            this.searchNow();
            localStorage.removeItem('searchKey');
        }
    }
    resetFilters() {
        this.showAll();
        this.searchparams = {};
        this.fromsearch = false;
        location.reload();
    }
    showProductsbyID(catId) {
        this.searchparams.category = catId;
    }
    getproductsbygender(gender) {
        this.searchparams.gender = gender;
    }
    maxPrice(maxprice) {
        this.searchparams.max_price = maxprice;
    }
    minPrice(minprice) {
        this.searchparams.min_price = minprice;
    }
    minAge(minage) {
        this.searchparams.min_age = minage;
    }
    maxAge(maxage) {
        this.searchparams.max_age = maxage;
    }
    occassionSearch() {
        this.searchparams.occassions = this.filteredoccassions;
    }
    relationSearch() {
        this.searchparams.relationships = this.filteredrelations;
    }
    searchNow() {
        this._products.searchProducts(this.searchparams).subscribe((data) => {
            // console.log(data);
            if (data.length > 0) {
                this.productList = data;
                console.log(data);
                this.moreData = [];
                this.fromsearch = true;
            }
            else {
                this.alertService.error('NO Results Found!!', this.options);
                this.showAll();
            }
        }, (err) => console.log(err));
    }
    // search(searchKey:string){
    //   for (let i = 0 ; i < this.productList.length ; i++){
    //     if (this.productList[i].name.toLowerCase().includes(searchKey.toLowerCase())){
    //       this.filterdProducts.push(this.productList[i])
    //     }else{
    //       console.log('this is not in products');
    //     }
    //   }
    //   this.productList = this.filterdProducts
    //   this.filterdProducts = []
    //    console.log(this.productList)
    // }
    addToCart(product_id) {
        this._addCart.addCart(product_id);
    }
    popUpProduct(product_id) {
        this.productPopUp = this.productList.find((product) => {
            return product.id == product_id;
        });
    }
    showMore() {
        if (this.moreData.next) {
            this._products.viewProductsByPage(this.moreData.next).subscribe((data) => {
                console.log(data);
                this.moreData = data;
                this.productList = data.results;
                console.log(this.productList);
            }, (err) => console.log(err));
        }
        else {
            this.alertService.warn('There is no more !!', this.options);
        }
    }
    showless() {
        if (this.moreData.previous) {
            this._products.viewProductsByPage(this.moreData.previous).subscribe((data) => {
                console.log(data);
                this.moreData = data;
                this.productList = data;
                console.log(this.productList);
            }, (err) => console.log(err));
        }
        else {
            this.alertService.warn('There is no previous !!', this.options);
        }
    }
};
SearchComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _services_add_to_cart_service__WEBPACK_IMPORTED_MODULE_7__["AddToCartService"] }
];
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchComponent);



/***/ }),

/***/ "MUEW":
/*!*******************************************************!*\
  !*** ./src/app/Components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  font-family: \"Oswald\", sans-serif;\n  background-image: url('register.webp');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.formcard {\n  background-color: whitesmoke;\n  padding: 20px 60px;\n  border-radius: 20px;\n  font-size: 20px;\n  opacity: 0.9;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  width: 50%;\n  margin: auto;\n}\n\n.headerform {\n  color: #d2393b;\n  margin: auto;\n  font-size: 50px;\n}\n\n.sign_in,\n.sign_with_google {\n  font-size: 20px;\n  background-color: #252a33;\n  margin: 20px 0;\n}\n\n.sign_in:hover,\n.sign_with_google:hover {\n  background-color: #d2393b;\n}\n\n.to_login {\n  font-size: 20px;\n  margin: auto;\n  padding-top: 3px;\n}\n\n.to_login a {\n  text-decoration: none;\n}\n\n.to_login a:hover {\n  color: #d2393b;\n}\n\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-3 i {\n  font-size: 20px;\n}\n\n.form-control {\n  padding: 15px;\n}\n\n.or_div .or {\n  font-size: 30px;\n  margin-left: 50px;\n}\n\n.creat_account {\n  margin: auto;\n}\n\n.creat_button {\n  background-color: green;\n  padding: 10px;\n  margin-bottom: 20px;\n  background-color: #d2393b;\n}\n\n.field-icon {\n  position: absolute;\n  float: right;\n  left: 520;\n  top: 17px;\n  font-size: 20px;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.eye {\n  cursor: pointer;\n}\n\n.g {\n  padding-bottom: 5px;\n}\n\n.google-btn {\n  height: 42px;\n  background-color: #4285f4;\n  border-radius: 2px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  width: 100%;\n}\n\n.google-btn .google-icon-wrapper {\n  position: absolute;\n  margin-top: 1px;\n  margin-left: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.google-btn .google-icon {\n  position: absolute;\n  margin-top: 11px;\n  margin-left: 11px;\n  width: 18px;\n  height: 18px;\n}\n\n.google-btn .btn-text {\n  padding-top: 10px;\n  text-align: center;\n  margin: 11px 11px 0 0;\n  color: #fff;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-family: \"Roboto\";\n}\n\n.google-btn:hover {\n  box-shadow: 0 0 6px #4285f4;\n  cursor: pointer;\n}\n\n.google-btn:active {\n  background: #1669F2;\n}\n\n@media (max-width: 576px) {\n  .formcard {\n    width: 97%;\n  }\n\n  .g {\n    padding-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBOztFQUVJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQTs7RUFFSSx5QkFBQTtBQUFKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBOztFQUVJLGFBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBUUE7RUFFSSxtQkFBQTtBQU5KOztBQVNBO0VBRUksWUFBQTtFQUNBLHlCQVZVO0VBV1Ysa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7QUFQSjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQXRCQTtBQWdCUjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTlI7O0FBUUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQW5DQTtFQW9DQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQU5SOztBQVFJO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0FBTlI7O0FBUUk7RUFDSSxtQkEzQ2E7QUFxQ3JCOztBQVVBO0VBQ0k7SUFDSSxVQUFBO0VBUE47O0VBU0U7SUFDSSxrQkFBQTtFQU5OO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVnaXN0ZXIud2VicCk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvcm1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHBhZGRpbmc6IDIwcHggNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvcGFjaXR5OiAuOTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5oZWFkZXJmb3JtIHtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uc2lnbl9pbixcbi5zaWduX3dpdGhfZ29vZ2xlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIC8vICAgd2lkdGg6IDU1MHB4O1xufVxuXG4uc2lnbl9pbjpob3Zlcixcbi5zaWduX3dpdGhfZ29vZ2xlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIDtcbn1cblxuLnRvX2xvZ2luIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi50b19sb2dpbiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50b19sb2dpbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbn1cblxuLm1iLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0haW1wb3J0YW50O1xufVxuXG4ubWItMyBpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5vcl9kaXYgLm9yIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5jcmVhdF9hY2NvdW50IHtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jcmVhdF9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xufVxuXG4uZmllbGQtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBsZWZ0OiA1MjA7XG4gICAgdG9wOiAxN3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lcj4qIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5leWUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy9nb29nbGVcbiR3aGl0ZTogI2ZmZjtcbiRnb29nbGUtYmx1ZTogIzQyODVmNDtcbiRidXR0b24tYWN0aXZlLWJsdWU6ICMxNjY5RjI7XG4uZyB7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZ29vZ2xlLWJ0biB7XG4gICAgLy8gd2lkdGg6IDE4NHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29vZ2xlLWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuZ29vZ2xlLWljb24td3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gICAgLmdvb2dsZS1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG4gICAgLmJ0bi10ZXh0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMXB4IDExcHggMCAwO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4ICRnb29nbGUtYmx1ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRidXR0b24tYWN0aXZlLWJsdWU7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC5mb3JtY2FyZCB7XG4gICAgICAgIHdpZHRoOiA5NyU7XG4gICAgfVxuICAgIC5nIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "OMC0":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_alert/alert.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}} fixed-top\">\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n    <span [innerHTML]=\"alert.message\"></span>\n</div>");

/***/ }),

/***/ "Q/My":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "cTQ8");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "MUEW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_alert */ "06Np");









let LoginComponent = class LoginComponent {
    constructor(auth, route, alertService) {
        this.auth = auth;
        this.route = route;
        this.alertService = alertService;
        this.hide = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]);
        this.options = {
            autoClose: true,
            keepAfterRouteChange: false
        };
        this.password = '';
        if (localStorage.getItem('token')) {
            this.route.navigate(['/home']);
        }
    }
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_7__["init"]();
    }
    UserLogin(email, password) {
        this.auth.login(email, password).subscribe((data) => {
            localStorage.setItem("token", data.auth_token);
            this.route.navigate(['/home']);
        }, (err) => this.alertService.error('Wrong Email or Password', this.options));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "RJd3":
/*!*******************************************************!*\
  !*** ./src/app/Components/popup/popup.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  color: #d2393b;\n  width: 600px;\n}\n\ntextarea {\n  width: 90%;\n  height: 100%;\n  resize: none;\n  font-size: 22px;\n  color: #252a33;\n  box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, 0.15);\n}\n\nbutton {\n  border: solid 1px #252a33;\n  color: #252a33;\n}\n\n@media (max-width: 768px) {\n  textarea {\n    width: 45%;\n    height: 100%;\n    resize: none;\n    font-size: 18px;\n    color: #252a33;\n    box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, 0.15);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0RBQUE7QUFFSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGtEQUFBO0VBQ047QUFDRiIsImZpbGUiOiJwb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgY29sb3I6cmdiKDIxMCw1Nyw1OSk7XG4gICAgd2lkdGg6NjAwcHg7XG59XG50ZXh0YXJlYXtcbiAgICB3aWR0aDo5MCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgcmVzaXplOm5vbmU7XG4gICAgZm9udC1zaXplOjIycHg7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuXG5idXR0b257XG4gICAgYm9yZGVyOnNvbGlkIDFweCByZ2IoMzcsIDQyLCA1MSk7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgIHRleHRhcmVhe1xuICAgICAgICB3aWR0aDo0NSU7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICByZXNpemU6bm9uZTtcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "RjGw":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/create-product/create-product.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\" col-md-6 p-4 main\">\n            <div class=\"cart-page-heading mb-3 text-center\">\n                <br>\n                <h5 style=\"font-size:30px;\">ADD PRODUCT</h5>\n            </div>\n            <form method=\"post\" #myForm=\"ngForm\" ngNativeValidate>\n                <div class=\"row\">\n                    <div class=\"col-md-12 mb-4 \">\n                        <label for=\"Name\">Product Name <span>*</span></label>\n                        <input #pname [(ngModel)]=\"newproduct.name\" type=\"text\" pattern=\"(^[a-zA-Z0-9\\s]{3,30})\" class=\"form-control\" name=\"Name\" id=\"Name\" value=\"\" #NameField=\"ngModel\" required minlength=\"3\" maxlength=\"30\" [class.is-valid]=\"NameField.valid\" [class.is-invaild]=\"NameField.invalid && NameField.touched\">\n                        <div class=\"alert alert-danger mt-2 p-3\" *ngIf=\"NameField.invalid && NameField.touched\">\n                            <div *ngIf=\"NameField.hasError('required')\">Product Name is Required</div>\n                            <div *ngIf=\"NameField.hasError('pattern')\">Product Name Must be Characters and not less than 2</div>\n                            <div *ngIf=\"NameField.hasError('maxlength')\">Product Name must be 30 Characters or less</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 mb-4\">\n                        <label for=\"last_name\">Price <span>*</span></label>\n                        <input #pprice [(ngModel)]=\"newproduct.price\" type=\"number\" id=\"number\" class=\"form-control\" min=\"0\" name=\"price\" value=\"\" pattern=\"^((?!(0))[0-9]{1,7})$\" #priceField=\"ngModel\" [class.is-valid]=\"priceField.valid\" [class.is-invaild]=\"priceField.invalid && priceField.touched\"\n                            required>\n                        <div class=\"alert alert-danger mt-2 p-3\" *ngIf=\"priceField.invalid && priceField.touched\">\n                            <div *ngIf=\"priceField.hasError('required')\">Price Is Required</div>\n                            <div *ngIf=\"!priceField.hasError('min')\">Price Must not equal zero </div>\n                            <div *ngIf=\"priceField.hasError('pattern')\">Price Must Be Number & not more than 7 numbers</div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mb-4\">\n                        <div class=\"form-group\">\n                            <label for=\"comment\">Details</label>\n                            <textarea #pdetails [(ngModel)]=\"newproduct.details\" class=\"form-control\" name=\"details\" rows=\"5\" id=\"comment\" style=\"resize: none;\" #detailsField=\"ngModel\" minlength=\"5\" maxlength=\"300\" required pattern=\"(^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};.,':/?\\s]{5,300})\"\n                                [class.is-valid]=\"detailsField.valid\" [class.is-invaild]=\"detailsField.invalid && detailsField.touched\"></textarea>\n                            <div class=\"alert alert-danger mt-2 p-3\" *ngIf=\"detailsField.invalid && detailsField.touched\">\n                                <div *ngIf=\"detailsField.hasError('required')\">Product Details is Required</div>\n                                <div *ngIf=\"detailsField.hasError('pattern')\">Product Details Must be Characters and not less than 5</div>\n                                <div *ngIf=\"detailsField.hasError('maxlength')\">Product Details must not exceed 300 Characters</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mb-4\">\n                        <label for=\"image\">Image <span>*</span></label>\n                        <input #pimages type=\"file\" name=\"img\" multiple required (change)=\"changeImageInput($event)\" class=\"form-control\" id=\"customFile\" />\n                    </div>\n\n                    <div class=\"col-12 mb-4\">\n                        <ul *ngFor=\"let img of url ; let i=index\">\n                            <li style=\"display: inline;\">\n                                <img src=\"{{img}}\" alt=\"\" width=\"100\" height=\"100\">\n                                <!-- <i class=\"far fa-trash-alt\" (click)=\"delitem(i)\"></i> -->\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div *ngIf=\"edit == true\" class=\"col-12 mb-4\">\n                        <ul *ngFor=\"let img of newproduct.images\">\n                            <li style=\"display: inline;\">\n                                <img src=\"{{img.image}}\" alt=\"\" width=\"100\" height=\"100\"><i class=\"far fa-trash-alt\" (click)=\"delimg(img.id)\"></i>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"col-12 mb-4\">\n                        <div class=\"form-group row\">\n                            <label for=\"example-number-input\" class=\"col-2 col-form-label\">Age From<span>*</span></label>\n                            <input #pagefrom [(ngModel)]=\"newproduct.age_from\" class=\"form-control\" name=\"agefrom\" type=\"number\" id=\"example-date-input\" required min=\"0\" pattern=\"^((?!(0))[0-9]{1,2})$\" #ageFromField=\"ngModel\" [class.is-valid]=\"ageFromField.valid\" [class.is-invaild]=\"ageFromField.invalid && ageFromField.touched\">\n                            <div class=\"alert alert-danger mt-2 p-3\" *ngIf=\"ageFromField.invalid && ageFromField.touched\">\n                                <div *ngIf=\"ageFromField.hasError('required')\">Age Is Required</div>\n                                <div *ngIf=\"!ageFromField.hasError('min')\">Age Must not equal zero </div>\n                                <div *ngIf=\"ageFromField.hasError('pattern')\">Price Must Be Number & not exceed 2 numbers</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mb-4\">\n                        <div class=\"form-group row\">\n                            <label for=\"example-number-input\" class=\"col-2 col-form-label\">Age To<span>*</span></label>\n                            <input #pageto (change)=\"ageCheck(ageFromField.value , ageToField.value)\" [(ngModel)]=\"newproduct.age_to\" class=\"form-control\" name=\"ageto\" type=\"number\" id=\"example-date-input\" min=\"0\" pattern=\"^((?!(0))[0-9]{1,2})$\" #ageToField=\"ngModel\" [class.is-valid]=\"ageToField.valid\"\n                                [class.is-invaild]=\"ageToField.invalid && ageToField.touched\" required>\n                            <div class=\"alert alert-danger mt-2 p-3\" *ngIf=\"ageError == true\">error age</div>\n\n                            <div class=\"alert alert-danger mt-2 p-3\" *ngIf=\"ageToField.invalid && ageToField.touched\">\n\n                                <div *ngIf=\"ageToField.hasError('required')\">Age Is Required</div>\n                                <div *ngIf=\"!ageToField.hasError('min')\">Age Must not equal zero </div>\n                                <div *ngIf=\"ageToField.hasError('pattern')\">Price Must Be Number & not exceed 2 numbers</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mb-4\">\n                        <div class=\"form-group\">\n                            <label for=\"occassion\">Occassion<span>*</span></label>\n                            <select multiple #poccassions [(ngModel)]=\"newproduct.occassions\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"occassion\" required>                                       \n                                      <option *ngFor=\"let occ of occassions\" [value]=\"occ.id\" >{{occ.name}}</option>\n                                    </select>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mb-4\">\n                        <div class=\"form-group\">\n                            <label for=\"gender\">gender<span>*</span></label>\n                            <select #pgender [(ngModel)]=\"newproduct.gender\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"gender\" required>\n                                      <option [Value]=\"m\" value=\"m\">male</option>\n                                      <option [Value]=\"f\" value=\"f\">female</option>\n                                      <option [Value]=\"b\" value=\"b\">both</option>\n                                    </select>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mb-4\">\n                        <div class=\"form-group\">\n                            <label for=\"relationship\">Relationship <span>*</span></label>\n                            <select #prelationship multiple [(ngModel)]=\"newproduct.relationships\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"relationship\" required>\n                                        <option *ngFor=\"let rel of relationships\" [value]=\"rel.id\" >{{rel.name}}</option>\n                                      </select>\n                        </div>\n                    </div>\n                    <div class=\"col-12 mb-4\">\n                        <div class=\"form-group\">\n                            <label for=\"Category\">Categories <span>*</span></label>\n                            <select #pcategory [(ngModel)]=\"newproduct.category\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"Category\" required>\n                                        <option *ngFor=\"let cat of categories\" [value]=\"cat.id\">{{cat.title}}</option>\n                                    </select>\n                        </div>\n                    </div>\n\n                    <button *ngIf=\"edit == false\" (click)=\"addNewProduct()\" class=\"btn karl-checkout\" [disabled]=\"myForm.invalid\">ADD</button><br><br>\n                    <button *ngIf=\"edit == false\" class=\"btn karl-checkout\" (click)=\"myForm.resetForm({})\">Reset</button>\n\n                    <button *ngIf=\"edit == true\" (click)=\"editProduct()\" class=\"btn karl-checkout\">Save Edit</button><br><br>\n                    <button *ngIf=\"edit == true\" (click)=\"cancel()\" class=\"btn karl-checkout\">Cancel</button><br><br>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-md-1 sub\"></div>\n        <div class=\"col-md-5 rules p-3\">\n            <h4 style=\"text-align:center;\">PLEASE CARFULLY! READ THIS NOTES BEFORE ADD YOUR PRODUCT</h4><br>\n            <hr>\n            <hr>\n            <hr><br>\n            <ol>\n                <li>Product Name :\n                    <ul>\n                        <li> Must Be at least 3 Characters </li>\n                        <li> Must Not EXCEED 30 Characters </li>\n                    </ul>\n                </li><br>\n                <hr>\n                <hr>\n                <hr><br>\n                <li> Price :\n                    <ul>\n                        <li> Must Be Numbers Only </li>\n                        <li> Must Not Equal ZERO </li>\n                        <li>Must Not EXCEED 7 Numbers </li>\n                    </ul>\n                </li><br>\n                <hr>\n                <hr>\n                <hr><br>\n                <li> Details :\n                    <ul>\n                        <li> Must Be at least 5 Characters </li>\n                        <li> Must Not EXCEED 300 Characters</li>\n                    </ul>\n                </li><br>\n                <hr>\n                <hr>\n                <hr><br>\n                <li> Images :\n                    <ul>\n                        <li> Must Be at least 3 Images </li>\n                    </ul>\n                </li><br>\n                <hr>\n                <hr>\n                <hr><br>\n                <li> Age From :\n                    <ul>\n                        <li> Must Be Numbers Only </li>\n                        <li> Must Not Equal ZERO </li>\n                        <li>Must Not EXCEED 2 Numbers </li>\n                    </ul>\n                </li><br>\n                <hr>\n                <hr>\n                <hr><br>\n                <li> Age To :\n                    <ul>\n                        <li> Must Be Numbers Only </li>\n                        <li> Must Not Equal ZERO </li>\n                        <li>Must Not EXCEED 2 Numbers </li>\n                    </ul>\n                </li>\n            </ol><br>\n            <hr>\n            <hr>\n            <hr><br>\n            <div style=\"font-size:20px;\"> PLEASE MAKE SURE TO SELECT OCCASION , GENDER , RELATIONSHIP , CATEGORIES FROM THE AVAILABLE CHOICES<br><br> PLEASE NOTE YOU CAN SELECT MULTIPLE OCCASSIONS & RELATIONSHIPS FOR PRODUCT</div>\n        </div>\n    </div>\n</div>\n<br>");

/***/ }),

/***/ "S3Px":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    viewProducts() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/products/`);
    }
    viewProductsByPage(url) {
        return this.http.get(url);
    }
    viewProductById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/products/${id}/`);
    }
    myProducts() {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/my/products/`, requestOptions);
    }
    order(product, quantity, status = 'p') {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/orders/`, { product: product, quantity: quantity, status: status }, requestOptions);
    }
    showorders() {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/my/orders/`, requestOptions);
    }
    showIncomingOrders() {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/orders/`, requestOptions);
    }
    deleteOrder(order_id) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/orders/${order_id}/`, requestOptions);
    }
    searchProducts(searchparams) {
        let query_string = "";
        for (let i in searchparams) {
            query_string += `${i}=${searchparams[i]}&`;
        }
        // console.log(`${environment.apiUrl}/products/?${query_string}`);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/product/search/?${query_string}`);
    }
    createProduct(data) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/products/`, data, requestOptions);
    }
    editProduct(pdr_id, data) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/products/${pdr_id}/`, { name: data.name, details: data.details, age_from: data.age_from, age_to: data.age_to, price: data.price, occassions: data.occassions, gender: data.gender, relationships: data.relationships, category: data.category }, requestOptions);
    }
    deletimg(img_id) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/product_imgs/${img_id}/`, requestOptions);
    }
    createProductImages(data) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/product_imgs/`, data, requestOptions);
    }
    showcategories() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/categories/`);
    }
    showrelations() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/RelationShips/`);
    }
    showoccassions() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/occassions/`);
    }
    ReviewProduct(body, rate, product) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/product/reviews/`, { body: body, rate: rate, product: product }, requestOptions);
    }
    showreviews(product_id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/product/reviews/?product=${product_id}`);
    }
    Report(user, body, product) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/productreports/`, { user: user, body: body, product: product }, requestOptions);
    }
    reviewReport(body, review) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/reviewreport/`, { body: body, review: review }, requestOptions);
    }
    showReports() {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/productreports/`, requestOptions);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "Sttr":
/*!*****************************************************!*\
  !*** ./src/app/Components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.component.html */ "B0Zt");
/* harmony import */ var _about_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.scss */ "wuI8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'HdyaFront';
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TwXj":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section><br>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"card formcard col-lg-6 col-sm-12\" width=\"40rem\">\n                <header class=\"headerform\"> Sign Up</header>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"profileForm\">\n                        <div class=\"row g-3\">\n                            <div class=\"col\">\n                                <div class=\"input-group mb-3\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"> <i class=\"fa fa-user\"></i></span>\n                                    <input #first_name type=\"text\" class=\"form-control ng-untouched ng-pristine ng-valid\" placeholder=\"Firstname\" aria-label=\"Firstname\" aria-describedby=\"basic-addon1\" formControlName=\"firstname\" required>\n\n                                </div>\n                                <p *ngIf=\"! profileForm.controls.firstname.pristine && profileForm.controls.firstname.errors?.minlength\" class=\"alert alert-danger\">Firstname should be greater than 2 character!</p>\n                                <p *ngIf=\"!profileForm.controls.firstname.pristine && profileForm.controls.firstname.errors?.required\" class=\"alert alert-danger\">Firstname is required!</p>\n                                <p *ngIf=\"!profileForm.controls.firstname.pristine && profileForm.controls.firstname.errors?.maxlength\" class=\"alert alert-danger\">Firstname should be less than 15 character!</p>\n                            </div>\n\n                            <div class=\"col\">\n\n                                <div class=\"input-group mb-3\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-user\"></i></span>\n                                    <input type=\"text\" #last_name class=\"form-control ng-untouched ng-pristine ng-valid\" placeholder=\"Lastname\" aria-label=\"lastname\" aria-describedby=\"basic-addon1\" formControlName=\"lastname\" required>\n\n                                </div>\n                            </div>\n                            <p *ngIf=\"! profileForm.controls.lastname.pristine && profileForm.controls.lastname.errors?.minlength\" class=\"alert alert-danger\">Lastname should be greater than 2 character!</p>\n                            <p *ngIf=\"!profileForm.controls.lastname.pristine && profileForm.controls.lastname.errors?.required\" class=\"alert alert-danger\">Lastname is required!</p>\n                            <p *ngIf=\"!profileForm.controls.lastname.pristine && profileForm.controls.lastname.errors?.maxlength\" class=\"alert alert-danger\">Lastname should be less than 15 character!</p>\n\n                        </div>\n                        <div class=\"input-group mb-3\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i></span>\n                            <input type=\"text\" #username class=\"form-control ng-untouched ng-pristine ng-valid\" placeholder=\"username\" aria-label=\"username\" aria-describedby=\"basic-addon1\" formControlName=\"username\" required>\n\n                        </div>\n\n                        <p *ngIf=\"! profileForm.controls.username.pristine && profileForm.controls.username.errors?.minlength\" class=\"alert alert-danger\">Username should be greater than 2 character!</p>\n                        <p *ngIf=\"!profileForm.controls.username.pristine && profileForm.controls.username.errors?.required\" class=\"alert alert-danger\">Username is required!</p>\n                        <p *ngIf=\"!profileForm.controls.username.pristine && profileForm.controls.username.errors?.maxlength\" class=\"alert alert-danger\">Username should be less than 15 character!</p>\n\n\n                        <div class=\"input-group mb-3\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-envelope\"></i></span>\n                            <input type=\"text\" #email class=\"form-control ng-untouched ng-pristine ng-valid\" placeholder=\"E-mail\" aria-label=\"E-mail\" aria-describedby=\"basic-addon1\" formControlName=\"email\" required>\n\n                        </div>\n                        <p *ngIf=\"! profileForm.controls.email.pristine && profileForm.controls.email.errors?.pattern\" class=\"alert alert-danger\">Email should be like HDYA12@gmail.com</p>\n                        <p *ngIf=\"!profileForm.controls.email.pristine && profileForm.controls.email.errors?.required && profileForm.controls.email.errors?.email\" class=\"alert alert-danger\">E-mail is require!</p>\n\n                        <div class=\"input-group mb-3\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-lock\"></i></span>\n                            <input type=\"password\" #password class=\"form-control ng-untouched ng-pristine ng-valid\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\" formControlName=\"password\" required>\n\n\n                        </div>\n                        <p *ngIf=\"! profileForm.controls.password.pristine && profileForm.controls.password.errors?.minlength\" class=\"alert alert-danger help-block\">Password should be greater than 8 character or numbers!</p>\n                        <p *ngIf=\"!profileForm.controls.password.pristine && profileForm.controls.password.errors?.required\" class=\"alert alert-danger help-block\">Password is require!</p>\n                        <p *ngIf=\"!profileForm.controls.password.pristine && profileForm.controls.password.errors?.maxlength\" class=\"alert alert-danger help-block\">Password should be less than 30 character!</p>\n\n\n\n                        <div class=\"input-group mb-3\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-lock\"></i></span>\n                            <input #re_password type=\"password\" class=\"form-control ng-untouched ng-pristine ng-valid\" placeholder=\"Confirm Password\" aria-label=\"Confirm Password\" aria-describedby=\"basic-addon1\" formControlName=\"confirmpassword\" required>\n\n                            <p *ngIf=\"!profileForm.controls.confirmpassword.pristine && profileForm.controls.confirmpassword.errors?.required\" class=\"alert alert-danger help-block\">Password not matched</p>\n\n                        </div>\n\n                        <div class=\"input-group mb-3\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-phone\"></i> </span>\n                            <input #mobile type=\"text\" class=\"form-control ng-untouched ng-pristine ng-valid\" placeholder=\"Phone Number\" aria-label=\"Mobile Phone\" aria-describedby=\"basic-addon1\" formControlName=\"mobile\" required>\n\n                        </div>\n                        <p *ngIf=\"! profileForm.controls.mobile.pristine && profileForm.controls.mobile.errors?.pattern\" class=\"alert alert-danger help-block\">Mobil PHone should be like 01234567890!</p>\n                        <p *ngIf=\"!profileForm.controls.mobile.pristine && profileForm.controls.mobile.errors?.required\" class=\"alert alert-danger help-block\">Password is require!</p>\n\n                        <!-- confirmedValidator -->\n                        <p *ngIf=\"!profileForm.controls.mobile.pristine && profileForm.controls.mobile.errors?.passwordMatchValidator(password,re_password)\" class=\"alert alert-danger help-block\"> require!</p>\n\n\n\n\n                        <ul>\n                            <li *ngFor=\"let err of errors\" style=\"font-size: 15px; color: red;\">{{err}}\n                            </li>\n                        </ul>\n\n\n                        <div class=\"d-grid gap-2\">\n                            <button (click)=\"UserRegester(username.value,email.value, password.value ,re_password.value, first_name.value , last_name.value  , mobile.value)\" class=\"btn btn-primary sign_in\" type=\"button\" [disabled]=\"!profileForm.valid\">Sign Up </button>\n                        </div>\n                    </form>\n\n                    <!----------------------------------------------- google------------------------------------------------------ -->\n                    <!-- <div class=\"g\">\n                    <div class=\"google-btn\">\n                        <div class=\"google-icon-wrapper\">\n                            <img class=\"google-icon\" src=\"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg\" />\n                        </div>\n                        <p class=\"btn-text\"><b>Sign in with Google</b></p>\n                    </div>\n                </div>  -->\n                    <!-- --------------------------------------------------------------------------------------------------------- -->\n\n\n                    <div class=\"to_login\">\n                        Already have an account? <a routerLink=\"/login\">Sign in</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n</section>");

/***/ }),

/***/ "V4lg":
/*!*************************************************!*\
  !*** ./src/app/Components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "oqgY");
/* harmony import */ var _nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component.scss */ "I4Uo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_alert */ "06Np");








let NavComponent = class NavComponent {
    constructor(auth, _products, route, alertService) {
        this.auth = auth;
        this._products = _products;
        this.route = route;
        this.alertService = alertService;
        this.productList = [];
        this.filteredProductList = [];
        this.categoryList = [];
        this.cart = [];
        this.options = {
            autoClose: true,
            keepAfterRouteChange: true
        };
    }
    ngOnInit() {
        this._products.viewProducts().subscribe((data) => this.productList = data, (err) => console.log(err));
        this._products.showcategories().subscribe((data) => this.categoryList = data, (err) => console.log(err));
        if (localStorage.getItem("cart")) {
            this.cart = JSON.parse(localStorage.getItem("cart") || '{}');
        }
    }
    search(searchKey) {
        localStorage.setItem('searchKey', searchKey);
    }
    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        this.usertoken = localStorage.getItem('token');
        this.cart = JSON.parse(localStorage.getItem('cart') || '{}');
    }
    logout() {
        this.auth.logout().subscribe((data) => {
            localStorage.removeItem('token');
            this.route.navigate(['/login']);
            this.alertService.info('See you soon :)', this.options);
        }, (err) => console.log(err));
    }
};
NavComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav',
        template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavComponent);



/***/ }),

/***/ "VjM3":
/*!***********************************************************************!*\
  !*** ./src/app/Components/forgetpassword/forgetpassword.component.ts ***!
  \***********************************************************************/
/*! exports provided: ForgetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function() { return ForgetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgetpassword_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgetpassword.component.html */ "d9rO");
/* harmony import */ var _forgetpassword_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgetpassword.component.scss */ "2Mj0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_alert */ "06Np");






let ForgetpasswordComponent = class ForgetpasswordComponent {
    constructor(_auth, alertService) {
        this._auth = _auth;
        this.alertService = alertService;
        this.email = "";
        this.options = {
            autoClose: true,
            keepAfterRouteChange: false
        };
    }
    ngOnInit() {
    }
    reset() {
        this._auth.resetPassword(this.email).subscribe((data) => { this.alertService.info('Check Your Email !!', this.options); }, console.log);
    }
};
ForgetpasswordComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ForgetpasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgetpassword',
        template: _raw_loader_forgetpassword_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgetpassword_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgetpasswordComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n\n<alert></alert>\n\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "WcJ2":
/*!*********************************************************!*\
  !*** ./src/app/Components/signup/signup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  background-image: url('register.webp');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.formcard {\n  background-color: whitesmoke;\n  padding: 20px 20px;\n  border-radius: 20px;\n  font-size: 20px;\n  opacity: 0.9;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin: auto;\n}\n\n.headerform {\n  color: #d2393b;\n  margin: auto;\n  font-size: 50px;\n}\n\n.sign_in,\n.sign_with_google {\n  font-size: 20px;\n  background-color: #252a33;\n  margin: 20px 0;\n}\n\n.sign_in:hover,\n.sign_with_google:hover {\n  background-color: #d2393b;\n}\n\n.to_login {\n  font-size: 20px;\n  padding: 20px;\n  text-align: center;\n}\n\n.to_login a {\n  text-decoration: none;\n}\n\n.to_login a:hover {\n  color: #d2393b;\n}\n\n.mb-3 {\n  margin-bottom: 0.6rem !important;\n}\n\n.mb-3 i {\n  font-size: 20px;\n}\n\n.form-control {\n  padding: 10px;\n}\n\n.g {\n  padding-bottom: 6px;\n}\n\n.google-btn {\n  height: 42px;\n  background-color: #4285f4;\n  border-radius: 2px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  width: 100%;\n}\n\n.google-btn .google-icon-wrapper {\n  position: absolute;\n  margin-top: 1px;\n  margin-left: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.google-btn .google-icon {\n  position: absolute;\n  margin-top: 11px;\n  margin-left: 11px;\n  width: 18px;\n  height: 18px;\n}\n\n.google-btn .btn-text {\n  padding-top: 10px;\n  text-align: center;\n  margin: 11px 11px 0 0;\n  color: #fff;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-family: \"Roboto\";\n}\n\n.google-btn:hover {\n  box-shadow: 0 0 6px #4285f4;\n  cursor: pointer;\n}\n\n.google-btn:active {\n  background: #1669F2;\n}\n\n@media (max-width: 576px) {\n  .formcard {\n    width: 97%;\n  }\n}\n\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n\n.alert {\n  font-size: 13px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBRUk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBRUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDUjs7QUFFSTs7RUFFSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBRUk7O0VBRUkseUJBQUE7QUFDUjs7QUFFSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFFSTtFQUNJLHFCQUFBO0FBQ1I7O0FBRUk7RUFDSSxjQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQ0FBQTtBQUNSOztBQUVJO0VBQ0ksZUFBQTtBQUNSOztBQUVJO0VBQ0ksYUFBQTtBQUNSOztBQU1JO0VBQ0ksbUJBQUE7QUFIUjs7QUFNSTtFQUNJLFlBQUE7RUFDQSx5QkFSVTtFQVNWLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0FBSFI7O0FBSVE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFwQkE7QUFrQlo7O0FBSVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZaOztBQUlRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FqQ0E7RUFrQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFGWjs7QUFJUTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtBQUZaOztBQUlRO0VBQ0ksbUJBekNhO0FBdUN6Qjs7QUFNSTtFQUNJO0lBQ0ksVUFBQTtFQUhWO0FBQ0Y7O0FBVUM7RUFDTSw4QkFBQTtFQUFnQyxVQUFBO0FBUHZDOztBQVVNO0VBQ0UsOEJBQUE7RUFBZ0MsUUFBQTtBQU54Qzs7QUFVQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBUEoiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIHNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yZWdpc3Rlci53ZWJwKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybWNhcmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgb3BhY2l0eTogLjk7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlcmZvcm0ge1xuICAgICAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zaWduX2luLFxuICAgIC5zaWduX3dpdGhfZ29vZ2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbiAgICBcbiAgICAuc2lnbl9pbjpob3ZlcixcbiAgICAuc2lnbl93aXRoX2dvb2dsZTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgfVxuICAgIFxuICAgIC50b19sb2dpbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAudG9fbG9naW4gYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLnRvX2xvZ2luIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICB9XG4gICAgXG4gICAgLm1iLTMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNnJlbSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5tYi0zIGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAvL2dvb2dsZVxuICAgICR3aGl0ZTogI2ZmZjtcbiAgICAkZ29vZ2xlLWJsdWU6ICM0Mjg1ZjQ7XG4gICAgJGJ1dHRvbi1hY3RpdmUtYmx1ZTogIzE2NjlGMjtcbiAgICAuZyB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgfVxuICAgIFxuICAgIC5nb29nbGUtYnRuIHtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29vZ2xlLWJsdWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmdvb2dsZS1pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5nb29nbGUtaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLXRleHQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDExcHggMTFweCAwIDA7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4ICRnb29nbGUtYmx1ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYnV0dG9uLWFjdGl2ZS1ibHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIC5mb3JtY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICB9XG4gICAgfVxuXG4vLyAubmctdmFsaWRbcmVxdWlyZWRdLC5uZy12YWxpZC5yZXF1aXJlZCAge1xuLy8gICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG4vLyAgICAgICB9XG5cbiAubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG4gICAgICB9XG4gICAgICBcbiAgICAgIC5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xuICAgICAgfVxuXG5cbi5hbGVydCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "YOqH":
/*!*********************************************************!*\
  !*** ./src/app/Components/search/search.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-weight: 400;\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: rgb(37, 42, 51);\n    line-height: 1.2;\n    font-weight: 700;\n}\n\np {\n    color: rgb(37, 42, 51);\n    font-size: 1em;\n    line-height: 1.5;\n    font-weight: 400;\n}\n\na:focus {\n    outline: 0 solid;\n}\n\na,\na:hover,\na:focus {\n    transition: all 500ms ease 0s;\n    text-decoration: none;\n    outline: none;\n    color: rgb(37, 42, 51);\n    font-weight: 400;\n}\n\nul,\nol {\n    margin: 0;\n}\n\nol li,\nul li {\n    list-style: outside none none;\n}\n\nimg {\n    height: auto;\n    max-width: 100%;\n}\n\n.background-overlay,\n.background-overlay-white {\n    position: relative;\n    z-index: 2;\n    background-position: center center;\n    background-size: cover;\n}\n\n.background-overlay:before,\n.background-overlay-white:before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\";\n}\n\n.background-overlay:before {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.background-overlay-white:before {\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.mb-100 {\n    margin-bottom: 100px;\n}\n\n.bg-img {\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.bg-transparent {\n    background-color: transparent;\n}\n\n.bg-transparent-dark {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.bg-transparent-light {\n    background-color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.bg-dark3 {\n    background-color: rgba(0, 0, 0, 0.75) !important;\n}\n\n.bg-dark2 {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.font-bold {\n    font-weight: 700;\n}\n\n.font-light {\n    font-weight: 300;\n}\n\n.line,\n.line-mtb15 {\n    width: 100%;\n    height: 1px;\n    background-color: #ddd;\n    margin: 30px 0;\n}\n\n.line-mtb15 {\n    margin: 15px 0;\n}\n\n.height-500 {\n    height: 500px !important;\n}\n\n.height-600 {\n    height: 600px !important;\n}\n\n.height-700 {\n    height: 700px !important;\n}\n\n.height-800 {\n    height: 800px !important;\n}\n\n#scrollUp {\n    background-color: rgb(210, 57, 59);\n    border-radius: 0;\n    bottom: 0;\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n    color: #fff;\n    font-size: 24px;\n    height: 40px;\n    line-height: 40px;\n    right: 60px;\n    text-align: center;\n    width: 40px;\n}\n\n/* \n/////////////////////////////////////////\n//////////////// Modal  //////////////////////// */\n\n#quickview button.close {\n    box-shadow: none;\n    position: absolute;\n    right: 15px;\n    text-align: right;\n    top: 10px;\n    z-index: 9;\n}\n\n.fade {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%\n}\n\n.quickview_body {\n    overflow: hidden;\n    text-align: center;\n}\n\n.quickview_pro_img {\n    border: 1px solid #f6f6f6;\n    position: relative;\n    width: 100%;\n    z-index: 1;\n}\n\n.quickview_pro_img .hover_img {\n    left: 0;\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    position: absolute;\n    top: -30px;\n    transition-duration: 500ms;\n}\n\n.quickview_pro_img:hover .hover_img {\n    top: 0;\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.quickview_pro_des .title {\n    text-transform: capitalize;\n}\n\n.quickview_pro_des {\n    padding: 30px 0;\n}\n\n.quickview_pro_des .price>span {\n    color: #888;\n    font-size: 14px;\n    text-decoration: line-through;\n}\n\n.quickview_pro_des>p {\n    font-size: 13px;\n}\n\n.quickview_pro_des>a {\n    color: #19B5FE;\n    font-size: 13px;\n    text-decoration: underline;\n}\n\n.quickview_body .quantity>input {\n    -moz-appearance: textfield;\n    border: 1px solid #f6f6f6;\n    height: 35px;\n    text-align: center;\n    width: 40px;\n    font-size: 13px;\n}\n\n.quickview_body .quantity {\n    align-items: center;\n    display: flex;\n}\n\n.quickview_body .cart {\n    display: flex;\n}\n\n.quickview_body .qty-plus,\n.quickview_body .qty-minus {\n    background-color: transparent;\n    border: 1px solid #f6f6f6;\n    color: #000;\n    cursor: pointer;\n    height: 35px;\n    text-align: center;\n    width: 22px;\n}\n\n.quickview_body .qty-plus {\n    border-left: 0 solid transparent;\n}\n\n.quickview_body .qty-minus {\n    border-right: 0 solid transparent;\n}\n\n.quickview_body .cart-submit {\n    background-color: rgb(210, 57, 59);\n    border: medium none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 13px;\n    height: 35px;\n    margin-left: 15px;\n    width: 120px;\n    transition-duration: 500ms;\n}\n\n.quickview_body .cart-submit:hover {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n}\n\n.quickview_body .qty-minus i,\n.quickview_body .qty-plus i {\n    color: #888;\n    font-size: 10px;\n    line-height: 33px;\n}\n\n.quickview_body .modal_pro_wishlist>a,\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n    display: block;\n    height: 35px;\n    margin: 0 15px;\n    text-align: center;\n    width: 35px;\n    font-size: 22px;\n}\n\n.quickview_body .modal_pro_wishlist>a:hover,\n.quickview_body .modal_pro_compare>a:hover {\n    background-color: #000;\n    color: #fff;\n}\n\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(37, 42, 51);\n    margin: 0;\n}\n\n.quickview_body .modal_pro_wishlist>a i,\n.quickview_body .modal_pro_compare>a i {\n    line-height: 35px;\n}\n\n.quickview_body .share_wf>p {\n    font-size: 13px;\n    margin-bottom: 5px;\n    text-transform: capitalize;\n}\n\n.quickview_body .share_wf ._icon>a {\n    color: #888;\n    font-size: 14px;\n    margin-right: 5px;\n}\n\n.quickview_body .share_wf ._icon>a:hover {\n    color: #000;\n}\n\n.quickview_body .top_seller_product_rating>i {\n    color: #ff9800;\n    font-size: 13px;\n}\n\n.section_padding_100_0 {\n    padding: 100px 0 0;\n}\n\n.section_padding_0_100 {\n    padding: 0 0 100px;\n}\n\n.section_heading {\n    margin-bottom: 50px;\n    position: relative;\n    z-index: 1;\n}\n\n.section_heading h2 {\n    font-size: 48px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n}\n\n.section_heading.text-left {\n    text-align: left !important;\n}\n\n.karl-btn {\n    display: inline-block;\n    min-width: 170px;\n    height: 55px;\n    color: #fff;\n    border: 3px solid #fff;\n    border-radius: 2px;\n    padding: 0 30px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 49px;\n}\n\n.karl-btn:hover,\n.karl-btn:focus {\n    font-weight: 700;\n    color: #fff;\n    background-color: rgb(37, 42, 51);\n    border-color: rgb(37, 42, 51);\n}\n\n.product-img {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n}\n\n.product-img>img {\n    width: 100%;\n    transition-duration: 500ms;\n}\n\n.single_gallery_item:hover .product-img>img {\n    transform: scale(1.15);\n}\n\n.product-img .product-quicview {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(23, 24, 24, 0.6);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    transition-duration: 500ms;\n}\n\n.product-img:hover .product-quicview {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.product-img .product-quicview>a {\n    width: 72px;\n    height: 72px;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    border-radius: 50%;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 36px;\n    line-height: 72px;\n}\n\n.product-img .product-quicview>a:hover {\n    border: 2px solid rgba(255, 255, 255, 1);\n    color: rgba(255, 255, 255, 1);\n}\n\n.product-description {\n    margin-top: 20px;\n}\n\n.product-description h4 {\n    font-weight: 400;\n    color: rgb(210, 57, 59);\n    margin-bottom: 5px;\n    display: block;\n}\n\n.product-description p {\n    font-size: 20px;\n    margin: 0;\n    color: rgb(37, 42, 51)\n}\n\n.product-description .add-to-cart-btn {\n    margin-top: 50px;\n    font-size: 12px;\n    font-weight: 700;\n    color: rgb(210, 57, 59);\n    display: block;\n}\n\n.product-description .add-to-cart-btn:hover {\n    color: rgb(210, 57, 59);\n}\n\n/* ------------------------------\n:: 16.0 Product Sidebar Area CSS\n------------------------------ */\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=range] {\n    overflow: hidden;\n    width: 80px;\n    -webkit-appearance: none;\n    background-color: #fff;\n  }\n\n  input[type=range]::-webkit-slider-runnable-track {\n    height: 10px;\n    -webkit-appearance: none;\n    color: #d2393b;\n    margin-top: -1px;\n  }\n\n  input[type=range]::-webkit-slider-thumb {\n    width: 10px;\n    -webkit-appearance: none;\n    height: 10px;\n    cursor: ew-resize;\n    background: #434343;\n    box-shadow: -80px 0 0 80px #d2393b;\n  }\n}\n\n/** FF*/\n\ninput[type=range]::-moz-range-progress {\n  background-color: #d2393b;\n}\n\ninput[type=range]::-moz-range-track {\n  background-color: #252a33;\n}\n\n/* IE*/\n\ninput[type=range]::-ms-fill-lower {\n  background-color: #d2393b;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background-color: #252a33;\n}\n\n.section_padding_100 {\n  margin: auto;\n  padding: auto;\n  width: 80%;\n  padding: 100px 0px;\n}\n\na {\n  cursor: pointer;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.widget {\n  border-bottom: 2px solid #ebebeb;\n  padding-bottom: 50px;\n}\n\n.widget:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.custom-checkbox .custom-control-indicator {\n  border-radius: 50%;\n}\n\n.custom-control-input:checked ~ .custom-control-indicator {\n  background-color: #00bcd4;\n  color: #fff;\n  box-shadow: none !important;\n}\n\n.widget-title {\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.widget-desc .custom-control-description {\n  font-size: 14px;\n}\n\n.widget.rating .widget-desc a {\n  color: #ff9800;\n  font-size: 14px;\n}\n\n.widget.size .widget-desc li {\n  display: inline-block;\n}\n\n.widget.size .widget-desc a {\n  display: block;\n  font-size: 14px;\n  padding: 5px 10px;\n}\n\n.widget.size .widget-desc a:hover,\n.widget.size .widget-desc a:focus {\n  background-color: #d2393b;\n  color: #fff;\n}\n\n.widget.price .ui-slider-handle {\n  background-color: #3a3a3a;\n  border: none;\n  border-radius: 0;\n  top: -6px;\n  width: 15px;\n  height: 15px;\n}\n\n.widget.price .ui-slider-range.ui-corner-all.ui-widget-header {\n  background-color: #3a3a3a;\n}\n\n.widget.price .ui-slider-horizontal {\n  height: 5px;\n}\n\n.widget.price .range-price {\n  font-size: 14px;\n  font-weight: 700;\n  margin-top: 15px;\n  text-transform: uppercase;\n}\n\n.widget.color .widget-desc ul li a {\n  width: 25px;\n  height: 25px;\n  display: block;\n  background-color: #000;\n  position: relative;\n  z-index: 1;\n}\n\n.widget.color .widget-desc ul li.gray a {\n  background-color: #d7d7d7;\n}\n\n.widget.color .widget-desc ul li.red a {\n  background-color: #fd4f4f;\n}\n\n.widget.color .widget-desc ul li.yellow a {\n  background-color: #fcf29c;\n}\n\n.widget.color .widget-desc ul li.green a {\n  background-color: #8fc99c;\n}\n\n.widget.color .widget-desc ul li.teal a {\n  background-color: #bc83b1;\n}\n\n.widget.color .widget-desc ul li.cyan a {\n  background-color: #9ee7f4;\n}\n\n.widget.color .widget-desc ul li a:after {\n  width: calc(100% + 6px);\n  height: calc(100% + 6px);\n  display: block;\n  border: 2px solid #d2393b;\n  position: absolute;\n  z-index: -1;\n  top: -3px;\n  left: -3px;\n  content: \"\";\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n}\n\n.widget.color .widget-desc ul li a:hover:after,\n.widget.color .widget-desc ul li a:focus:after {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.widget.color .widget-desc ul li a span {\n  font-size: 12px;\n  display: block;\n  padding-top: 35px;\n}\n\n.single-recommended-product .single-recommended-thumb,\n.single-recommended-product .single-recommended-desc {\n  max-width: 50%;\n  flex: 0 0 50%;\n}\n\n.single-recommended-product .single-recommended-desc h6 {\n  font-size: 14px;\n}\n\n.pagination-sm .page-link {\n  padding: 0;\n  font-size: 15px;\n  line-height: 37px;\n  width: 37px;\n  text-align: center;\n  font-weight: 700;\n  color: #9f9f9f;\n  border: 2px solid #9f9f9f;\n  margin-right: 5px;\n  background-color: transparent;\n}\n\n.pagination-sm .page-link:hover,\n.pagination-sm .page-item.active .page-link,\n.pagination-sm .page-link:focus {\n  color: #d2393b;\n  border: 2px solid #d2393b;\n  background-color: transparent;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n#sidebar {\n  background: white;\n  color: #fff;\n  transition: all 0.3s;\n}\n\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #d2393b;\n}\n\n#sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 1px solid #252a33;\n}\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n}\n\n#sidebar ul li a:hover {\n  color: white;\n  background: #d2393b;\n}\n\n#sidebar ul li.active > a,\na[aria-expanded=true] {\n  color: #fff;\n  background: #d2393b;\n}\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #d2393b;\n}\n\n.shop_sidebar_area {\n  margin-right: 50px;\n  padding: 10px;\n}\n\n.shop_pagination_area {\n  margin: auto;\n  padding: auto;\n  width: 50%;\n}\n\n.add-to-cart-btn {\n  display: inline-block;\n  min-width: 170px;\n  height: 55px;\n  color: white !important;\n  border: 3px solid #fff;\n  border-radius: 2px;\n  padding: 0 30px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 49px;\n  background-color: #d2393b;\n}\n\n.add-to-cart-btn:hover,\n.add-to-cart-btn:focus {\n  font-weight: 700;\n  color: #fff;\n  background-color: #252a33;\n  border-color: #252a33;\n}\n\n.mt-50 {\n  margin-top: 30px;\n}\n\n.mb-30 {\n  margin-bottom: 30px;\n}\n\n.karl-checkout-btn {\n  width: 100%;\n  height: 60px;\n  background-color: #d2393b;\n  border-radius: 0;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 60px;\n  padding: 0;\n}\n\n.karl-checkout-btn:hover,\n.karl-checkout-btn:focus {\n  background-color: #252a33;\n  color: #fff;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4uY3NzIiwiLi4vLi4vLi4vLi4vc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7OztJQU1JLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFJSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7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Ujs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUNSOztBQUVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBQ1I7O0FBRUk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDUjs7QUFFSTs7RUFFSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQkFBQTtBQUNSOztBQUVJO0VBQ0ksbUJBQUE7QUFDUjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQVI7O0FBR0k7O0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBUiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnAge1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwIHNvbGlkO1xufVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UgMHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UgMHM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG51bCxcbm9sIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbm9sIGxpLFxudWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXksXG4uYmFja2dyb3VuZC1vdmVybGF5LXdoaXRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXk6YmVmb3JlLFxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogXCJcIjtcbn1cblxuLmJhY2tncm91bmQtb3ZlcmxheTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLm1iLTEwMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQtZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudC1saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyazIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9udC1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmxpbmUsXG4ubGluZS1tdGIxNSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBtYXJnaW46IDMwcHggMDtcbn1cblxuLmxpbmUtbXRiMTUge1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaGVpZ2h0LTUwMCB7XG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTYwMCB7XG4gICAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTcwMCB7XG4gICAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTgwMCB7XG4gICAgaGVpZ2h0OiA4MDBweCAhaW1wb3J0YW50O1xufVxuXG4jc2Nyb2xsVXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgcmlnaHQ6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG5cbi8qIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8gTW9kYWwgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4jcXVpY2t2aWV3IGJ1dHRvbi5jbG9zZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdG9wOiAxMHB4O1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi5mYWRlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJVxufVxuXG4ucXVpY2t2aWV3X2JvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXVpY2t2aWV3X3Byb19pbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2ltZyAuaG92ZXJfaW1nIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2ltZzpob3ZlciAuaG92ZXJfaW1nIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzIC50aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2RlcyB7XG4gICAgcGFkZGluZzogMzBweCAwO1xufVxuXG4ucXVpY2t2aWV3X3Byb19kZXMgLnByaWNlPnNwYW4ge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzPnAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzPmEge1xuICAgIGNvbG9yOiAjMTlCNUZFO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdWFudGl0eT5pbnB1dCB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y2ZjZmNjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdWFudGl0eSB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5jYXJ0IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzLFxuLnF1aWNrdmlld19ib2R5IC5xdHktbWludXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIycHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXR5LXBsdXMge1xuICAgIGJvcmRlci1sZWZ0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1taW51cyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLmNhcnQtc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuY2FydC1zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXR5LW1pbnVzIGksXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzIGkge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YSxcbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YTpob3Zlcixcbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fY29tcGFyZT5hIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb193aXNobGlzdD5hIGksXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb19jb21wYXJlPmEgaSB7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuc2hhcmVfd2Y+cCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5zaGFyZV93ZiAuX2ljb24+YSB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnNoYXJlX3dmIC5faWNvbj5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC50b3Bfc2VsbGVyX3Byb2R1Y3RfcmF0aW5nPmkge1xuICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlY3Rpb25fcGFkZGluZ18xMDBfMCB7XG4gICAgcGFkZGluZzogMTAwcHggMCAwO1xufVxuXG4uc2VjdGlvbl9wYWRkaW5nXzBfMTAwIHtcbiAgICBwYWRkaW5nOiAwIDAgMTAwcHg7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcgaDIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcudGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5rYXJsLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xufVxuXG4ua2FybC1idG46aG92ZXIsXG4ua2FybC1idG46Zm9jdXMge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LWltZz5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5zaW5nbGVfZ2FsbGVyeV9pdGVtOmhvdmVyIC5wcm9kdWN0LWltZz5pbWcge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4ucHJvZHVjdC1pbWcgLnByb2R1Y3QtcXVpY3ZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMjQsIDI0LCAwLjYpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5wcm9kdWN0LWltZzpob3ZlciAucHJvZHVjdC1xdWljdmlldyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3PmEge1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNzJweDtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3PmE6aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKVxufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiAuYWRkLXRvLWNhcnQtYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbn0iLCIgICAgQGltcG9ydCAnLi4vLi4vLi4vbWFpbi5jc3MnO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOjogMTYuMCBQcm9kdWN0IFNpZGViYXIgQXJlYSBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCkge1xuICAgICAgICBpbnB1dFt0eXBlPSdyYW5nZSddIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICByZ2IoMjEwLCA1NywgNTkpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPSdyYW5nZSddOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQzNDM0MztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC04MHB4IDAgMCA4MHB4ICByZ2IoMjEwLCA1NywgNTkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBGRiovXG4gICAgXG4gICAgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXByb2dyZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigyMTAsIDU3LCA1OSk7XG4gICAgfVxuICAgIFxuICAgIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICB9XG4gICAgLyogSUUqL1xuICAgIFxuICAgIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1zLWZpbGwtbG93ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDIxMCwgNTcsIDU5KTtcbiAgICB9XG4gICAgXG4gICAgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbXMtZmlsbC11cHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICB9XG4gICAgXG4gICAgLnNlY3Rpb25fcGFkZGluZ18xMDAge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IGF1dG87XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDBweDtcbiAgICB9XG4gICAgXG4gICAgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLm1iLTUwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgXG4gICAgLndpZGdldCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgXG4gICAgLndpZGdldDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICAgIFxuICAgIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgXG4gICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQtZGVzYyAuY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQucmF0aW5nIC53aWRnZXQtZGVzYyBhIHtcbiAgICAgICAgY29sb3I6ICNmZjk4MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLndpZGdldC5zaXplIC53aWRnZXQtZGVzYyBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgXG4gICAgLndpZGdldC5zaXplIC53aWRnZXQtZGVzYyBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQuc2l6ZSAud2lkZ2V0LWRlc2MgYTpob3ZlcixcbiAgICAud2lkZ2V0LnNpemUgLndpZGdldC1kZXNjIGE6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgLndpZGdldC5wcmljZSAudWktc2xpZGVyLWhhbmRsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAud2lkZ2V0LnByaWNlIC51aS1zbGlkZXItcmFuZ2UudWktY29ybmVyLWFsbC51aS13aWRnZXQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcbiAgICB9XG4gICAgXG4gICAgLndpZGdldC5wcmljZSAudWktc2xpZGVyLWhvcml6b250YWwge1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICB9XG4gICAgXG4gICAgLndpZGdldC5wcmljZSAucmFuZ2UtcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQuY29sb3IgLndpZGdldC1kZXNjIHVsIGxpIGEge1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICBcbiAgICAud2lkZ2V0LmNvbG9yIC53aWRnZXQtZGVzYyB1bCBsaS5ncmF5IGEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xuICAgIH1cbiAgICBcbiAgICAud2lkZ2V0LmNvbG9yIC53aWRnZXQtZGVzYyB1bCBsaS5yZWQgYSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDRmNGY7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQuY29sb3IgLndpZGdldC1kZXNjIHVsIGxpLnllbGxvdyBhIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjI5YztcbiAgICB9XG4gICAgXG4gICAgLndpZGdldC5jb2xvciAud2lkZ2V0LWRlc2MgdWwgbGkuZ3JlZW4gYSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZmM5OWM7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQuY29sb3IgLndpZGdldC1kZXNjIHVsIGxpLnRlYWwgYSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzgzYjE7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQuY29sb3IgLndpZGdldC1kZXNjIHVsIGxpLmN5YW4gYSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWU3ZjQ7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQuY29sb3IgLndpZGdldC1kZXNjIHVsIGxpIGE6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNnB4KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA2cHgpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIxMCwgNTcsIDU5KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICBsZWZ0OiAtM3B4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG4gICAgfVxuICAgIFxuICAgIC53aWRnZXQuY29sb3IgLndpZGdldC1kZXNjIHVsIGxpIGE6aG92ZXI6YWZ0ZXIsXG4gICAgLndpZGdldC5jb2xvciAud2lkZ2V0LWRlc2MgdWwgbGkgYTpmb2N1czphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICAgIH1cbiAgICBcbiAgICAud2lkZ2V0LmNvbG9yIC53aWRnZXQtZGVzYyB1bCBsaSBhIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzVweDtcbiAgICB9XG4gICAgXG4gICAgLnNpbmdsZS1yZWNvbW1lbmRlZC1wcm9kdWN0IC5zaW5nbGUtcmVjb21tZW5kZWQtdGh1bWIsXG4gICAgLnNpbmdsZS1yZWNvbW1lbmRlZC1wcm9kdWN0IC5zaW5nbGUtcmVjb21tZW5kZWQtZGVzYyB7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgICAgICAtbXMtZmxleDogMCAwIDUwJTtcbiAgICAgICAgZmxleDogMCAwIDUwJTtcbiAgICB9XG4gICAgXG4gICAgLnNpbmdsZS1yZWNvbW1lbmRlZC1wcm9kdWN0IC5zaW5nbGUtcmVjb21tZW5kZWQtZGVzYyBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLnBhZ2luYXRpb24tc20gLnBhZ2UtbGluayB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICAgIHdpZHRoOiAzN3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjOWY5ZjlmO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOWY5ZjlmO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIFxuICAgIC5wYWdpbmF0aW9uLXNtIC5wYWdlLWxpbms6aG92ZXIsXG4gICAgLnBhZ2luYXRpb24tc20gLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayxcbiAgICAucGFnaW5hdGlvbi1zbSAucGFnZS1saW5rOmZvY3VzIHtcbiAgICAgICAgY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTAsIDU3LCA1OSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICAucGFnaW5hdGlvbi1zbSAucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIH1cbiAgICBcbiAgICAucGFnaW5hdGlvbi1zbSAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gICAgXG4gICAgI3NpZGViYXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIH1cbiAgICBcbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIH1cbiAgICBcbiAgICAjc2lkZWJhciB1bC5jb21wb25lbnRzIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDM3LCA0MiwgNTEpO1xuICAgIH1cbiAgICBcbiAgICAjc2lkZWJhciB1bCBsaSBhIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFxuICAgICNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgfVxuICAgIFxuICAgICNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxuICAgIGFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICB9XG4gICAgXG4gICAgdWwgdWwgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgfVxuICAgIFxuICAgIC5zaG9wX3NpZGViYXJfYXJlYSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnNob3BfcGFnaW5hdGlvbl9hcmVhIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiBhdXRvO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICBcbiAgICAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNDlweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICB9XG4gICAgXG4gICAgLmFkZC10by1jYXJ0LWJ0bjpob3ZlcixcbiAgICAuYWRkLXRvLWNhcnQtYnRuOmZvY3VzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgfVxuICAgIFxuICAgIC5tdC01MCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC5tYi0zMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC8vZmlsdGVyIGJ0bm5cbiAgICAua2FybC1jaGVja291dC1idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIFxuICAgIC5rYXJsLWNoZWNrb3V0LWJ0bjpob3ZlcixcbiAgICAua2FybC1jaGVja291dC1idG46Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH0iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/nav/nav.component */ "V4lg");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/footer/footer.component */ "CVoa");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/login/login.component */ "Q/My");
/* harmony import */ var _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/signup/signup.component */ "0gwD");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/cart/cart.component */ "wbFS");
/* harmony import */ var _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/checkout/checkout.component */ "/cjv");
/* harmony import */ var _Components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/product-details/product-details.component */ "4si3");
/* harmony import */ var _Components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/search/search.component */ "M6HQ");
/* harmony import */ var _Components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/profile/profile.component */ "nUDU");
/* harmony import */ var _Components_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/edit/edit.component */ "lGuJ");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ng_validate_equal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-validate-equal */ "BnZo");
/* harmony import */ var _Components_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/create-product/create-product.component */ "1qOR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-animate-on-scroll */ "wR1u");
/* harmony import */ var _Components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Components/pagenotfound/pagenotfound.component */ "bzsV");
/* harmony import */ var angular_reactive_validation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-reactive-validation */ "9Yzh");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-validation */ "ywVC");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _Pipes_dollartoegp_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Pipes/dollartoegp.pipe */ "FuVj");
/* harmony import */ var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Components/about/about.component */ "Sttr");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_alert */ "06Np");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Components/popup/popup.component */ "5iAN");
/* harmony import */ var _Components_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Components/loader/loader.component */ "inVL");
/* harmony import */ var _Components_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Components/forgetpassword/forgetpassword.component */ "VjM3");






































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _Components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
            _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _Components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _Components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
            _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
            _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"],
            _Components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"],
            _Components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
            _Components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
            _Components_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__["EditComponent"],
            _Components_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_25__["CreateProductComponent"],
            _Components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_28__["PagenotfoundComponent"],
            _Pipes_dollartoegp_pipe__WEBPACK_IMPORTED_MODULE_31__["DollartoegpPipe"],
            _Components_about_about_component__WEBPACK_IMPORTED_MODULE_32__["AboutComponent"],
            _Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_35__["PopupComponent"],
            _Components_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__["LoaderComponent"],
            _Components_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_37__["ForgetpasswordComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            ng_validate_equal__WEBPACK_IMPORTED_MODULE_24__["ValidateEqualModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_27__["AnimateOnScrollModule"].forRoot(),
            ng2_validation__WEBPACK_IMPORTED_MODULE_30__["CustomFormsModule"],
            angular_reactive_validation__WEBPACK_IMPORTED_MODULE_29__["ReactiveValidationModule"],
            _alert__WEBPACK_IMPORTED_MODULE_33__["AlertModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_Components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"]]
    })
], AppModule);



/***/ }),

/***/ "bFfU":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/checkout/checkout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"checkout_area section_padding_100\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-12 col-md-6\">\n                <div class=\"checkout_details_area  clearfix\" data-aos=\"fade-right\" data-aos-offset=\"300\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"1000\">\n\n                    <div class=\"cart-page-heading mb-5\">\n                        <h5>Billing Address</h5>\n                    </div>\n\n                    <form action=\"#\" method=\"post\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6 mb-2 pr-4\">\n                                <label for=\"first_name\">First Name <span>*</span></label>\n                                <input [(ngModel)]=\"myProfile.first_name\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"first_name\" value=\"{{myProfile.first_name}}\" required>\n                            </div>\n                            <div class=\"col-md-6 mb-2\">\n                                <label for=\"last_name\">Last Name <span>*</span></label>\n                                <input [(ngModel)]=\"myProfile.last_name\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"last_name\" value=\"{{myProfile.last_name}}\" required>\n                            </div>\n\n                            <div class=\"col-12 mb-2\">\n                                <label for=\"country\">Country <span>*</span></label>\n                                <input type=\"text\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" id=\"country\" value=\"Egypt\" readonly>\n                            </div>\n                            <div class=\"col-12 mb-2\">\n                                <label for=\"street_address\">Address <span>*</span></label>\n                                <input [(ngModel)]=\"myProfile.address\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control mb-3\" id=\"street_address\" value=\"{{myProfile.address}}\" required>\n                            </div>\n                            <div class=\"col-12 mb-3\">\n                                <label for=\"phone_number\">Phone No <span>*</span></label>\n                                <input [(ngModel)]=\"myProfile.mobile\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"phone_number\" min=\"0\" value=\"{{myProfile.mobile}}\" required>\n                            </div>\n                            <div class=\"col-12 mb-4\">\n                                <label for=\"email_address\">Email Address <span>*</span></label>\n                                <input type=\"email\" class=\"form-control\" id=\"email_address\" value=\"{{myProfile.email}}\" readonly>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n\n            <div class=\"col-12 col-md-6 col-lg-5 ml-lg-auto\" style=\"background-color:#E3EBF9 ;\">\n                <div class=\"order-details-confirmation\" data-aos=\"fade-left\" data-aos-offset=\"300\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"1000\">\n\n                    <div class=\"cart-page-heading\">\n                        <h4>Your Order</h4><br>\n                        <p> Details</p>\n                    </div>\n\n                    <ul class=\"order-details-form mb-4\">\n                        <li><span>Total Products</span> <span>{{checkout.totalOrders}}</span></li>\n                        <li><span>Shipping</span> <span>Free</span></li>\n                        <li><span>Total</span> <span>{{checkout.totalPrice | currency:'EGP ' }}</span></li>\n                    </ul>\n                    <img src=\"../../../assets/images/Order-Button-to-Top-Down-View-Delivery-Truck-on-Road-Animation.gif\" (click)=\"orderNow()\" style=\"height: 200px;width: 100%; cursor: pointer;\" alt=\"\">\n                    <a (click)=\"orderNow()\" class=\"btn karl-checkout text-white\">Place Order</a>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br>");

/***/ }),

/***/ "bzsV":
/*!*******************************************************************!*\
  !*** ./src/app/Components/pagenotfound/pagenotfound.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagenotfound_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "2ZRt");
/* harmony import */ var _pagenotfound_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagenotfound.component.scss */ "4LVL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PagenotfoundComponent = class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagenotfoundComponent.ctorParameters = () => [];
PagenotfoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagenotfound',
        template: _raw_loader_pagenotfound_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagenotfound_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PagenotfoundComponent);



/***/ }),

/***/ "cTQ8":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section><br>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card formcard\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"2000\">\n                    <header class=\"headerform\"> Sign in</header>\n                    <hr>\n                    <div class=\"example-container\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Enter Your Email\" #email>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"example-container\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Enter Your Password\" #password [type]=\"hide ? 'password' : 'text'\">\n                            <mat-icon class=\"eye\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </mat-form-field>\n                    </div>\n\n                    <button type=\"button\" (click)=\"UserLogin(email.value , password.value)\" class=\"btn btn-primary btn-sm sign_in\">Sign In</button>\n\n                    <div class=\"row or_div\">\n                        <div class=\"col-md-4 col-sm-6 col-xs-4\">\n                            <hr>\n                        </div>\n                        <div class=\"col-md-4 col-sm-6 col-xs-8\">\n                            <h3 class=\"or\">or</h3>\n                        </div>\n                        <div class=\"col-md-4 col-sm-6 col-xs-4\">\n                            <hr>\n                        </div>\n                    </div>\n                    <!-- google -->\n                    <!-- <div class=\"g\">\n                        <div class=\"google-btn\">\n                            <div class=\"google-icon-wrapper\">\n                                <img class=\"google-icon\" src=\"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg\" />\n                            </div>\n                            <p class=\"btn-text\"><b>Sign in with Google</b></p>\n                        </div>\n                    </div> -->\n\n                    <div class=\"to_login\">\n                        <a [routerLink]=\"[ '/forgetpassword' ]\"> Forget Password?</a>\n                    </div>\n\n                    <div class=\"to_login\">\n                        <a routerLink=\"/signup\">Creat New Account ?</a>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n</section>");

/***/ }),

/***/ "d9rO":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forgetpassword/forgetpassword.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"row\">\n        <div class=\"empty\"></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4 container\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    <div class=\"text-center\">\n                        <h3><i class=\"fa fa-lock fa-4x\"></i></h3>\n                        <h2 class=\"text-center\">Forgot Password</h2>\n                        <p>You can reset your password here</p>\n                        <div class=\"panel-body\">\n\n                            <form id=\"register-form\" role=\"form\" autocomplete=\"off\" class=\"form\" method=\"post\">\n\n                                <div class=\"form-group\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i class=\"fas fa-envelope fa-3x pr-2\"></i></span>\n                                        <input [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" id=\"email\" name=\"email\" placeholder=\" Email address\" class=\"form-control\" type=\"email\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input (click)=\"reset()\" name=\"recover-submit\" class=\"btn btn-lg btn-primary btn-block\" value=\"Reset Password\" type=\"submit\">\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>");

/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



// import {} from '@';

let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
    }
    // createAuthorizationHeader(headers: Headers) {
    //   headers.append('Authorization', 'Basic ' +
    //     btoa('username:password')); 
    // }
    login(email, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/token/login/`, { email: email, password: password });
    }
    register(username, email, password, re_password, first_name, last_name, mobile) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/users/`, { username: username, email: email, password: password, re_password: re_password, first_name: first_name, last_name: last_name, mobile: mobile });
    }
    logout() {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/token/logout/`, {}, requestOptions);
    }
    showUserById(id) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/users/3/`, requestOptions);
    }
    userProfile() {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/users/me/`, requestOptions);
    }
    resetPassword(email) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/users/reset_password/`, { email: email });
    }
    // getDataForuser():Observable<any>{
    //   const headerDict = {
    //     'Authorization':'Token ' +  localStorage.getItem('token')
    //   }
    //   const requestOptions = {                                                                                                                                                                                 
    //     headers: new HttpHeaders(headerDict), 
    //   };
    //   return this.http.get<any>(`${environment.apiUrl}/auth/users/me/`, requestOptions)
    // }
    editprofile(data) {
        const headerDict = {
            'Authorization': 'Token ' + localStorage.getItem('token')
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict),
        };
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/users/me/`, data, requestOptions);
        // if (data:any){
        // return this.http.patch<any>(`${environment.apiUrl}/auth/users/me/`, 
        // {first_name:data.first_name,last_name:data.last_name,address:data.address,mobile:data.mobile,birthdate:data.birthdate} 
        // , requestOptions)
        // }
        // else if(avatar) {
        //   return this.http.patch<any>(`${environment.apiUrl}/auth/users/me/`,avatar, requestOptions)
        // }
        // else {
        //   return console.log("error")
        // }
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "hKzT":
/*!*********************************************************!*\
  !*** ./src/app/Components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "hN6I":
/*!****************************************!*\
  !*** ./src/app/_alert/alert.module.ts ***!
  \****************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "D+GR");




let AlertModule = class AlertModule {
};
AlertModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })
], AlertModule);



/***/ }),

/***/ "i7uH":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/loader/loader.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-overlay-wrapper\">\n    <div class=\"bee-spinner\"></div>\n</div>");

/***/ }),

/***/ "inVL":
/*!*******************************************************!*\
  !*** ./src/app/Components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loader.component.html */ "i7uH");
/* harmony import */ var _loader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component.scss */ "4LSX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoaderComponent.ctorParameters = () => [];
LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loader',
        template: _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoaderComponent);



/***/ }),

/***/ "kTqk":
/*!***********************************************************!*\
  !*** ./src/app/Components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: transparent;\n  color: #252a33;\n}\n\n.emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff;\n}\n\n.profile-img {\n  text-align: center;\n}\n\n.profile-img img {\n  width: 75%;\n  height: 100%;\n}\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  width: 75%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background-color: #252a33;\n}\n\n.profile-img .file:hover {\n  background-color: #d2393b;\n}\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n}\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #252a33;\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%;\n}\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none;\n}\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #d2393b;\n}\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%;\n}\n\n.profile-work p {\n  font-size: 12px;\n  color: #f4f2f8;\n  font-weight: 600;\n  margin-top: 10%;\n}\n\n.profile-work a {\n  text-decoration: none;\n  color: #252a33;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.profile-work ul {\n  list-style: none;\n}\n\n.profile-tab label {\n  font-weight: 600;\n}\n\n.profile-tab p {\n  font-weight: 600;\n  color: #d2393b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQU1KOztBQUhBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFIQTtFQUNJLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBV0o7O0FBVEE7RUFDSSxnQkFBQTtBQVlKOztBQVZBO0VBQ0ksZ0JBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQWNKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBjb2xvcjpyZ2IoMzcsNDIsNTEpO1xufVxuLmVtcC1wcm9maWxle1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnByb2ZpbGUtaW1ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlLWltZyBpbWd7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUgeyAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDo3NSU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyw0Miw1MSk7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjEwLDU3LDU5KTtcbn1cbi5wcm9maWxlLWltZyAuZmlsZSBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5wcm9maWxlLWVkaXQtYnRue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2IoMzcsNDIsNTEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFic3tcbiAgICBtYXJnaW4tYm90dG9tOjUlO1xufVxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5re1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZ2IoMjEwLDU3LDU5KTtcbn1cbi5wcm9maWxlLXdvcmt7XG4gICAgcGFkZGluZzogMTQlO1xuICAgIG1hcmdpbi10b3A6IC0xNSU7XG59XG4ucHJvZmlsZS13b3JrIHB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiNmNGYyZjg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG4ucHJvZmlsZS13b3JrIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMzcsNDIsNTEpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2ZpbGUtd29yayB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnByb2ZpbGUtdGFiIGxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvZmlsZS10YWIgcHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2IoMjEwLDU3LDU5KTtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "lGuJ":
/*!***************************************************!*\
  !*** ./src/app/Components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit.component.html */ "mX+5");
/* harmony import */ var _edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.component.scss */ "B8YX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let EditComponent = class EditComponent {
    constructor(auth, activerouter, route) {
        this.auth = auth;
        this.activerouter = activerouter;
        this.route = route;
        this.url = '';
        this.isdisplayed = false;
        this.editparams = {};
        // selectfile(event:any){
        //   if (event.target.files){
        //     var reader = new FileReader()
        //     reader.readAsDataURL(event.target.files[0])
        //       reader.onload = (event:any) =>{
        //         this.url = event.target.result
        //       }
        //   }
        // }
        this.profileList = {
            username: "",
            first_name: "",
            last_name: "",
            address: "",
            mobile: "",
            birth_date: "",
            id: 0,
            email: "",
        };
    }
    // profileList:Profile[]= [];
    toggledispayed() {
        this.isdisplayed = !this.isdisplayed;
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.route.navigate(['/search']);
        }
        this.auth.userProfile().subscribe((data) => {
            this.profileList = data;
            console.log(this.profileList);
        }, (err) => console.log(err));
    }
    // ngDoCheck(): void {
    //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //   //Add 'implements DoCheck' to the class.
    //    if(this.newavatar){
    //     this.profileList.avatar = this.newavatar
    //     console.log(this.profileList.avatar)
    //   }
    // }
    imageupload(event) {
        this.newavatar = event.target.files[0];
        //  this.profileList.avatar = this.newavatar
        console.log(this.newavatar);
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url = event.target.result;
            };
        }
    }
    updateprofile(first_name, last_name, mobile, address, birthdate) {
        //  console.log(first_name)
        //  console.log(first_name instanceof Array);
        //  console.log(this.newavatar)
        if (first_name) {
            this.editparams.first_name = first_name;
        }
        if (last_name) {
            this.editparams.last_name = last_name;
        }
        if (address) {
            this.editparams.address = address;
        }
        if (mobile) {
            this.editparams.mobile = mobile;
        }
        if (birthdate) {
            this.editparams.birth_date = birthdate;
        }
        //  let newdata={
        //    "first_name":first_name,
        //    "last_name":last_name,
        //    "mobile":mobile,
        //    "adress":address,
        //    "birth_date":birthdate,
        //  }
        this.auth.editprofile(this.editparams).subscribe((data) => console.log(data), (err) => console.log(err));
        const fd = new FormData();
        fd.append('avatar', this.newavatar, this.newavatar.name);
        // console.log(this.newavatar)
        // console.log(fd)
        this.auth.editprofile(fd).subscribe((data) => console.log(data), (err) => console.log(err));
    }
};
EditComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditComponent);



/***/ }),

/***/ "mX+5":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/edit/edit.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container border border-danger\">\n    <div class=\"row\">\n\n        <div class=\"col-sm-12 d-flex justify-content-center\">\n\n            <div class=\"style_card rounded text-center\" style=\"width: 18rem;\">\n                <img [src]=\"url\" class=\"img-top \" style=\"border-radius: 60%;width: 50%;margin: auto;\" alt=\"profile image\">\n\n                <div *ngIf=\"isdisplayed\">\n                    <input type=\"file\" (change)=\"selectfile($event)\">\n\n                </div>\n\n                <div class=\"card-body\">\n                    <input type=\"button\" class=\"btn btn-primary change_image\" (click)=\"toggledispayed()\" value=\"Change your profile image\">\n\n                </div>\n            </div>\n\n        </div>\n        <div class=\"mb-3 row\">\n            <label for=\"inputFirstname\" class=\"col-sm-2 col-form-label\">First Name</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"inputFirstname\">\n            </div>\n        </div>\n\n\n        <div class=\"mb-3 row\">\n            <label for=\"inputLastname\" class=\"col-sm-2 col-form-label\">Last Name</label>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control\" id=\"inputLastname\">\n            </div>\n        </div>\n\n        <div class=\"mb-3 row\">\n            <label for=\"inputEmail\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control\" id=\"inputEmail\">\n            </div>\n        </div>\n\n\n        <div class=\"mb-3 row\">\n            <label for=\"inputAdress\" class=\"col-sm-2 col-form-label\">Adress</label>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control\" id=\"inputAdress\">\n            </div>\n        </div>\n\n\n        <div class=\"mb-3 row\">\n            <label for=\"inputMobile\" class=\"col-sm-2 col-form-label\">Mobile</label>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control\" id=\"inputMobile\">\n            </div>\n        </div>\n\n        <div class=\"changed text-center\">\n            <button type=\"submit\" class=\"btn btn-primary mb-3 save_change \">Save Changes</button>\n        </div>\n    </div>\n</div> -->\n\n\n\n\n\n\n<div class=\"container rounded bg-white mt-5 mb-5\">\n    <div class=\"row\">\n        <div class=\"col-md-3 border-right\">\n            <div class=\"profile-img\">\n\n                <img *ngIf=\"url.length == 0\" src=\"{{profileList.avatar}}\" alt=\"\" />\n                <img *ngIf=\"url.length > 0\" src=\"{{url}}\" alt=\"\" />\n                <div class=\"file btn btn-lg btn-primary\">\n                    Change Photo\n                    <input type=\"file\" name=\"file\" (change)=\"imageupload($event)\" />\n                </div>\n\n                <br><br>\n                <h4 style=\"color: rgb(37,42,51);\">{{profileList.username}}</h4>\n                <!-- <br><br><h4 style=\"color: rgb(37,42,51);\">{{myprofile.username}}</h4> -->\n            </div>\n        </div>\n        <div class=\"col-md-9 border-right\">\n            <div class=\"p-3 py-5\">\n                <div class=\"d-flex justify-content-between align-items-center mb-3\">\n                    <h4 class=\"text-right\">Profile Settings</h4>\n                </div>\n                <form>\n                    <div class=\"row mt-2\">\n\n\n                        <div class=\"col-md-6\"><label class=\"labels\">First Name</label><input #first_name type=\"text\" class=\"form-control\" placeholder=\"\" value=\"{{profileList.first_name}}\" required></div><br>\n                        <div class=\"col-md-6\"><label class=\"labels\">Last Name</label><input type=\"text\" #last_name class=\"form-control\" placeholder=\"\" value=\"{{profileList.last_name}}\" required></div><br>\n                        <div class=\"col-md-6\"><label class=\"labels\">Username</label><input type=\"text\" class=\"form-control\" value=\"{{profileList.username}}\" placeholder=\"\" readonly></div><br>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"col-md-12\"><label class=\"labels\">PhoneNumber</label><input type=\"text\" #mobile class=\"form-control\" placeholder=\"\" value=\"{{profileList.mobile}}\" required></div><br>\n                        <div class=\"col-md-12\"><label class=\"labels\">Address</label><input type=\"text\" #address class=\"form-control\" placeholder=\"\" value=\"{{profileList.address}}\"></div><br>\n                        <div class=\"col-md-12\"><label class=\"labels\">Email </label><input type=\"email\" class=\"form-control\" placeholder=\"\" value=\"{{profileList.email}}\" readonly></div><br>\n                        <div class=\"col-md-12\"><label class=\"labels\">Birthday</label><input type=\"date\" #birthdate class=\"form-control\" placeholder=\"\" value=\"{{profileList.birth_date}}\"></div><br>\n                    </div>\n                    <div class=\"mt-5 text-center \">\n                        <button class=\"btn  profile-button\" type=\"submit\" routerLink='../../profile' (click)=\"updateprofile(first_name.value,last_name.value,mobile.value,address.value,birthdate.value)\">Save Profile</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "n/dm":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-weight: 400;\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: rgb(37, 42, 51);\n    line-height: 1.2;\n    font-weight: 700;\n}\n\np {\n    color: rgb(37, 42, 51);\n    font-size: 1em;\n    line-height: 1.5;\n    font-weight: 400;\n}\n\na:focus {\n    outline: 0 solid;\n}\n\na,\na:hover,\na:focus {\n    transition: all 500ms ease 0s;\n    text-decoration: none;\n    outline: none;\n    color: rgb(37, 42, 51);\n    font-weight: 400;\n}\n\nul,\nol {\n    margin: 0;\n}\n\nol li,\nul li {\n    list-style: outside none none;\n}\n\nimg {\n    height: auto;\n    max-width: 100%;\n}\n\n.background-overlay,\n.background-overlay-white {\n    position: relative;\n    z-index: 2;\n    background-position: center center;\n    background-size: cover;\n}\n\n.background-overlay:before,\n.background-overlay-white:before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\";\n}\n\n.background-overlay:before {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.background-overlay-white:before {\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.mb-100 {\n    margin-bottom: 100px;\n}\n\n.bg-img {\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.bg-transparent {\n    background-color: transparent;\n}\n\n.bg-transparent-dark {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.bg-transparent-light {\n    background-color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.bg-dark3 {\n    background-color: rgba(0, 0, 0, 0.75) !important;\n}\n\n.bg-dark2 {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.font-bold {\n    font-weight: 700;\n}\n\n.font-light {\n    font-weight: 300;\n}\n\n.line,\n.line-mtb15 {\n    width: 100%;\n    height: 1px;\n    background-color: #ddd;\n    margin: 30px 0;\n}\n\n.line-mtb15 {\n    margin: 15px 0;\n}\n\n.height-500 {\n    height: 500px !important;\n}\n\n.height-600 {\n    height: 600px !important;\n}\n\n.height-700 {\n    height: 700px !important;\n}\n\n.height-800 {\n    height: 800px !important;\n}\n\n#scrollUp {\n    background-color: rgb(210, 57, 59);\n    border-radius: 0;\n    bottom: 0;\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n    color: #fff;\n    font-size: 24px;\n    height: 40px;\n    line-height: 40px;\n    right: 60px;\n    text-align: center;\n    width: 40px;\n}\n\n/* \n/////////////////////////////////////////\n//////////////// Modal  //////////////////////// */\n\n#quickview button.close {\n    box-shadow: none;\n    position: absolute;\n    right: 15px;\n    text-align: right;\n    top: 10px;\n    z-index: 9;\n}\n\n.fade {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%\n}\n\n.quickview_body {\n    overflow: hidden;\n    text-align: center;\n}\n\n.quickview_pro_img {\n    border: 1px solid #f6f6f6;\n    position: relative;\n    width: 100%;\n    z-index: 1;\n}\n\n.quickview_pro_img .hover_img {\n    left: 0;\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    position: absolute;\n    top: -30px;\n    transition-duration: 500ms;\n}\n\n.quickview_pro_img:hover .hover_img {\n    top: 0;\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.quickview_pro_des .title {\n    text-transform: capitalize;\n}\n\n.quickview_pro_des {\n    padding: 30px 0;\n}\n\n.quickview_pro_des .price>span {\n    color: #888;\n    font-size: 14px;\n    text-decoration: line-through;\n}\n\n.quickview_pro_des>p {\n    font-size: 13px;\n}\n\n.quickview_pro_des>a {\n    color: #19B5FE;\n    font-size: 13px;\n    text-decoration: underline;\n}\n\n.quickview_body .quantity>input {\n    -moz-appearance: textfield;\n    border: 1px solid #f6f6f6;\n    height: 35px;\n    text-align: center;\n    width: 40px;\n    font-size: 13px;\n}\n\n.quickview_body .quantity {\n    align-items: center;\n    display: flex;\n}\n\n.quickview_body .cart {\n    display: flex;\n}\n\n.quickview_body .qty-plus,\n.quickview_body .qty-minus {\n    background-color: transparent;\n    border: 1px solid #f6f6f6;\n    color: #000;\n    cursor: pointer;\n    height: 35px;\n    text-align: center;\n    width: 22px;\n}\n\n.quickview_body .qty-plus {\n    border-left: 0 solid transparent;\n}\n\n.quickview_body .qty-minus {\n    border-right: 0 solid transparent;\n}\n\n.quickview_body .cart-submit {\n    background-color: rgb(210, 57, 59);\n    border: medium none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 13px;\n    height: 35px;\n    margin-left: 15px;\n    width: 120px;\n    transition-duration: 500ms;\n}\n\n.quickview_body .cart-submit:hover {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n}\n\n.quickview_body .qty-minus i,\n.quickview_body .qty-plus i {\n    color: #888;\n    font-size: 10px;\n    line-height: 33px;\n}\n\n.quickview_body .modal_pro_wishlist>a,\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n    display: block;\n    height: 35px;\n    margin: 0 15px;\n    text-align: center;\n    width: 35px;\n    font-size: 22px;\n}\n\n.quickview_body .modal_pro_wishlist>a:hover,\n.quickview_body .modal_pro_compare>a:hover {\n    background-color: #000;\n    color: #fff;\n}\n\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(37, 42, 51);\n    margin: 0;\n}\n\n.quickview_body .modal_pro_wishlist>a i,\n.quickview_body .modal_pro_compare>a i {\n    line-height: 35px;\n}\n\n.quickview_body .share_wf>p {\n    font-size: 13px;\n    margin-bottom: 5px;\n    text-transform: capitalize;\n}\n\n.quickview_body .share_wf ._icon>a {\n    color: #888;\n    font-size: 14px;\n    margin-right: 5px;\n}\n\n.quickview_body .share_wf ._icon>a:hover {\n    color: #000;\n}\n\n.quickview_body .top_seller_product_rating>i {\n    color: #ff9800;\n    font-size: 13px;\n}\n\n.section_padding_100_0 {\n    padding: 100px 0 0;\n}\n\n.section_padding_0_100 {\n    padding: 0 0 100px;\n}\n\n.section_heading {\n    margin-bottom: 50px;\n    position: relative;\n    z-index: 1;\n}\n\n.section_heading h2 {\n    font-size: 48px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n}\n\n.section_heading.text-left {\n    text-align: left !important;\n}\n\n.karl-btn {\n    display: inline-block;\n    min-width: 170px;\n    height: 55px;\n    color: #fff;\n    border: 3px solid #fff;\n    border-radius: 2px;\n    padding: 0 30px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 49px;\n}\n\n.karl-btn:hover,\n.karl-btn:focus {\n    font-weight: 700;\n    color: #fff;\n    background-color: rgb(37, 42, 51);\n    border-color: rgb(37, 42, 51);\n}\n\n.product-img {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n}\n\n.product-img>img {\n    width: 100%;\n    transition-duration: 500ms;\n}\n\n.single_gallery_item:hover .product-img>img {\n    transform: scale(1.15);\n}\n\n.product-img .product-quicview {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(23, 24, 24, 0.6);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    transition-duration: 500ms;\n}\n\n.product-img:hover .product-quicview {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.product-img .product-quicview>a {\n    width: 72px;\n    height: 72px;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    border-radius: 50%;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 36px;\n    line-height: 72px;\n}\n\n.product-img .product-quicview>a:hover {\n    border: 2px solid rgba(255, 255, 255, 1);\n    color: rgba(255, 255, 255, 1);\n}\n\n.product-description {\n    margin-top: 20px;\n}\n\n.product-description h4 {\n    font-weight: 400;\n    color: rgb(210, 57, 59);\n    margin-bottom: 5px;\n    display: block;\n}\n\n.product-description p {\n    font-size: 20px;\n    margin: 0;\n    color: rgb(37, 42, 51)\n}\n\n.product-description .add-to-cart-btn {\n    margin-top: 50px;\n    font-size: 12px;\n    font-weight: 700;\n    color: rgb(210, 57, 59);\n    display: block;\n}\n\n.product-description .add-to-cart-btn:hover {\n    color: rgb(210, 57, 59);\n}\n\n.animate__flash {\n  background-color: #d2393b;\n  color: whitesmoke;\n  text-align: center;\n  margin: 20px 0;\n  font-size: 30px;\n  padding: 15px;\n  font-style: italic;\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n  text-align: center;\n}\n\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  height: 40px;\n  width: 150px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n\n.card-small-rd {\n  background-color: #d2393b;\n}\n\n.card-container .card:not(:last-child) {\n  margin-right: 0;\n}\n\n.card-container .card:not(.highlight-card) {\n  cursor: pointer;\n}\n\n.card-container .card:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.carousel-item {\n  height: 600px;\n  width: 97%;\n  padding-left: 40px;\n}\n\n.carousel-item img {\n  height: 600px;\n  width: 100%;\n}\n\n.welcome_slide_text > h2,\n.single_catagory_area h2 {\n  font-size: 92px;\n  letter-spacing: 0;\n  margin-left: -5px;\n  text-transform: uppercase;\n  color: #252a33;\n  margin-bottom: 20px;\n}\n\n.welcome_slide_text h6,\n.single_catagory_area h6 {\n  color: white;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.welcome_slides.owl-carousel .owl-dot.active {\n  background-color: #d2393b;\n  border-color: #d2393b;\n}\n\n/* --------------------------\n Top Catagory Area CSS\n-------------------------- */\n\n.single_catagory_area {\n  padding: 150px 50px;\n  flex: 0 0 50%;\n  transition-duration: 500ms;\n  position: relative;\n  z-index: 1;\n}\n\n.single_catagory_area:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: #d2393b;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -8;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  transition-duration: 500ms;\n}\n\n.single_catagory_area:hover:after {\n  opacity: 0.7;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\n}\n\n.single_catagory_area h6 {\n  text-transform: uppercase;\n}\n\n/* ----------------------------\n::  New Deals Area Start\n---------------------------- */\n\n.new_deals {\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.portfolio-menu > .btn {\n  font-size: 14px;\n  font-weight: 700;\n  color: #252a33;\n  background-color: transparent;\n  padding: 0 15px;\n  text-transform: uppercase;\n}\n\n.portfolio-menu > .btn:hover {\n  color: #d2393b;\n  box-shadow: none;\n}\n\n.single_gallery_item {\n  margin-bottom: 50px;\n  overflow: hidden;\n}\n\n.animated {\n  visibility: visible !important;\n}\n\n.hide-on-init {\n  visibility: hidden;\n}\n\n@media (max-width: 768px) {\n  .flash_image {\n    font-size: 16px;\n  }\n\n  .catagory-content {\n    font-size: 10px;\n  }\n\n  .welcome_slide_text > h2,\n.single_catagory_area h2 {\n    font-size: 40px;\n    letter-spacing: 0;\n    text-transform: uppercase;\n    color: #252a33;\n    margin-bottom: 20px;\n  }\n\n  .top_catagory_area {\n    display: table;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4uY3NzIiwiLi4vLi4vLi4vLi4vaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7SUFNSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBSUksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0kscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztB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O0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBVko7O0FBYUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFhQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFhQTtFQUNJLDhCQUFBO0FBVko7O0FBYUE7RUFDSSxrQkFBQTtBQVZKOztBQVlBO0VBQ0k7SUFDSSxlQUFBO0VBVE47O0VBV0M7SUFDSSxlQUFBO0VBUkw7O0VBVUM7O0lBRUMsZUFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFQRjs7RUFTRjtJQUNJLGNBQUE7RUFORjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnAge1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwIHNvbGlkO1xufVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UgMHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UgMHM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG51bCxcbm9sIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbm9sIGxpLFxudWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXksXG4uYmFja2dyb3VuZC1vdmVybGF5LXdoaXRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXk6YmVmb3JlLFxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogXCJcIjtcbn1cblxuLmJhY2tncm91bmQtb3ZlcmxheTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLm1iLTEwMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQtZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudC1saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyazIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9udC1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmxpbmUsXG4ubGluZS1tdGIxNSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBtYXJnaW46IDMwcHggMDtcbn1cblxuLmxpbmUtbXRiMTUge1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaGVpZ2h0LTUwMCB7XG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTYwMCB7XG4gICAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTcwMCB7XG4gICAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTgwMCB7XG4gICAgaGVpZ2h0OiA4MDBweCAhaW1wb3J0YW50O1xufVxuXG4jc2Nyb2xsVXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgcmlnaHQ6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG5cbi8qIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8gTW9kYWwgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4jcXVpY2t2aWV3IGJ1dHRvbi5jbG9zZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdG9wOiAxMHB4O1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi5mYWRlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJVxufVxuXG4ucXVpY2t2aWV3X2JvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXVpY2t2aWV3X3Byb19pbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2ltZyAuaG92ZXJfaW1nIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2ltZzpob3ZlciAuaG92ZXJfaW1nIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzIC50aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2RlcyB7XG4gICAgcGFkZGluZzogMzBweCAwO1xufVxuXG4ucXVpY2t2aWV3X3Byb19kZXMgLnByaWNlPnNwYW4ge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzPnAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzPmEge1xuICAgIGNvbG9yOiAjMTlCNUZFO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdWFudGl0eT5pbnB1dCB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y2ZjZmNjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdWFudGl0eSB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5jYXJ0IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzLFxuLnF1aWNrdmlld19ib2R5IC5xdHktbWludXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIycHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXR5LXBsdXMge1xuICAgIGJvcmRlci1sZWZ0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1taW51cyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLmNhcnQtc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuY2FydC1zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXR5LW1pbnVzIGksXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzIGkge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YSxcbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YTpob3Zlcixcbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fY29tcGFyZT5hIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb193aXNobGlzdD5hIGksXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb19jb21wYXJlPmEgaSB7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuc2hhcmVfd2Y+cCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5zaGFyZV93ZiAuX2ljb24+YSB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnNoYXJlX3dmIC5faWNvbj5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC50b3Bfc2VsbGVyX3Byb2R1Y3RfcmF0aW5nPmkge1xuICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlY3Rpb25fcGFkZGluZ18xMDBfMCB7XG4gICAgcGFkZGluZzogMTAwcHggMCAwO1xufVxuXG4uc2VjdGlvbl9wYWRkaW5nXzBfMTAwIHtcbiAgICBwYWRkaW5nOiAwIDAgMTAwcHg7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcgaDIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcudGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5rYXJsLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xufVxuXG4ua2FybC1idG46aG92ZXIsXG4ua2FybC1idG46Zm9jdXMge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LWltZz5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5zaW5nbGVfZ2FsbGVyeV9pdGVtOmhvdmVyIC5wcm9kdWN0LWltZz5pbWcge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4ucHJvZHVjdC1pbWcgLnByb2R1Y3QtcXVpY3ZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMjQsIDI0LCAwLjYpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5wcm9kdWN0LWltZzpob3ZlciAucHJvZHVjdC1xdWljdmlldyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3PmEge1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNzJweDtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3PmE6aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKVxufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiAuYWRkLXRvLWNhcnQtYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vL0Jhc2ljIFN0eWxlLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuQGltcG9ydCAnLi4vLi4vLi4vbWFpbi5jc3MnO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vRW5kIE9mIEJhc2ljLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLmFuaW1hdGVfX2ZsYXNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogMCA4cHggMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2FyZC1zbWFsbC1yZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDk3JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5jYXJvdXNlbC1pdGVtIGltZyB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWVfc2xpZGVfdGV4dD5oMixcbi5zaW5nbGVfY2F0YWdvcnlfYXJlYSBoMiB7XG4gICAgZm9udC1zaXplOiA5MnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ud2VsY29tZV9zbGlkZV90ZXh0IGg2LFxuLnNpbmdsZV9jYXRhZ29yeV9hcmVhIGg2IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLndlbGNvbWVfc2xpZGVzLm93bC1jYXJvdXNlbCAub3dsLWRvdC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiBUb3AgQ2F0YWdvcnkgQXJlYSBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zaW5nbGVfY2F0YWdvcnlfYXJlYSB7XG4gICAgcGFkZGluZzogMTUwcHggNTBweDtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC1tcy1mbGV4OiAwIDAgNTAlO1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnNpbmdsZV9jYXRhZ29yeV9hcmVhOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtODtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4uc2luZ2xlX2NhdGFnb3J5X2FyZWE6aG92ZXI6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTcwKVwiO1xufVxuXG4uc2luZ2xlX2NhdGFnb3J5X2FyZWEgaDYge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIC5jYXRhZ29yeS1jb250ZW50IHtcbi8vICAgICB3aWR0aDogNTUlO1xuLy8gfVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjo6ICBOZXcgRGVhbHMgQXJlYSBTdGFydFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubmV3X2RlYWxzIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJVxufVxuXG4ucG9ydGZvbGlvLW1lbnU+LmJ0biB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnBvcnRmb2xpby1tZW51Pi5idG46aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zaW5nbGVfZ2FsbGVyeV9pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLmFuaW1hdGVkIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlLW9uLWluaXQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAuZmxhc2hfaW1hZ2V7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIH1cbiAgIC5jYXRhZ29yeS1jb250ZW50e1xuICAgICAgIGZvbnQtc2l6ZToxMHB4O1xuICAgfVxuICAgLndlbGNvbWVfc2xpZGVfdGV4dD5oMixcbiAgLnNpbmdsZV9jYXRhZ29yeV9hcmVhIGgyIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udG9wX2NhdGFnb3J5X2FyZWF7XG4gICAgZGlzcGxheTogdGFibGUgO1xufVxufSJdfQ== */");

/***/ }),

/***/ "nUDU":
/*!*********************************************************!*\
  !*** ./src/app/Components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "HLHb");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "kTqk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/products.service */ "S3Px");







let ProfileComponent = class ProfileComponent {
    constructor(_productService, auth, activerouter, route) {
        this._productService = _productService;
        this.auth = auth;
        this.activerouter = activerouter;
        this.route = route;
        this.orders = [];
        this.url = "../../../assets/images/login.jpg";
        this.isdisplayed = false;
        this.displayOrders = false;
        this.myProducts = [];
        // onlyOrders:Product[] = []
        this.myOrders = [];
        //pagination
        this.totalOrdersRecords = 0;
        this.totalProductsRecords = 0;
        this.totaloncomingOrdersRecords = 0;
        this.productpage = 1;
        this.orderpage = 1;
        this.incommingorderspage = 1;
        this.incomingOrders = [];
        this.incomingOrdersToHandle = [];
        this.usersList = [];
        this.loaderStatus = false;
        this.myprofile = {
            username: "",
            first_name: "",
            last_name: "",
            address: "",
            mobile: "",
            birth_date: "",
            id: 0,
            email: ""
        };
    }
    toggledispayed() {
        this.isdisplayed = !this.isdisplayed;
    }
    selectfile(event) {
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url = event.target.result;
            };
        }
    }
    togglePreviousOrders() {
        this.displayOrders = !this.displayOrders;
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.route.navigate(['/search']);
        }
        // let id = this.activerouter.snapshot.params['id']
        let usertoken = localStorage.getItem('token');
        this.auth.userProfile().subscribe((data) => this.myprofile = data, (err) => console.log(err));
        this._productService.showorders().subscribe((data) => {
            this.orders = data;
            for (let i = 0; i < this.orders.length; i++) {
                this._productService.viewProductById(this.orders[i].product).subscribe((data) => {
                    // this.onlyOrders.push(data)
                    this.myOrders.push({
                        'No': i + 1,
                        'product_name': data.name,
                        'product_price': data.price,
                        'Quantity': this.orders[i].quantity,
                        'created_at': this.orders[i].created_at,
                        'Total': data.price * this.orders[i].quantity,
                        'status': this.orders[i].status,
                        'order_id': this.orders[i].id,
                        'product_id': data.id,
                    });
                    //pagination
                    this.totalOrdersRecords = this.myOrders.length;
                    for (let i in this.myOrders) {
                        if (this.myOrders[i].status == 'p') {
                            this.myOrders[i].status = 'in processing';
                        }
                        else if (this.myOrders[i].status == 's') {
                            this.myOrders[i].status = 'shipped';
                        }
                        else if (this.myOrders[i].status == 'e') {
                            this.myOrders[i].status = 'delivered';
                        }
                        else if (this.myOrders[i].status == 'r') {
                            this.myOrders[i].status = 'returned';
                        }
                        else if (this.myOrders[i].status == 'c') {
                            this.myOrders[i].status = 'cancelled';
                        }
                    }
                }, (err) => console.log(err));
            }
        }, (err) => console.log(err));
        this._productService.showIncomingOrders().subscribe((data) => {
            this.incomingOrders = data;
            if (this.incomingOrders.length > 0) {
                this.loaderStatus = true;
            }
            else if (this.myOrders.length > 0) {
                this.loaderStatus = true;
            }
            else if (this.myProducts.length > 0) {
                this.loaderStatus = true;
            }
            else if (this.myprofile.id && this.myprofile.id > 0) {
                this.loaderStatus = true;
            }
            else {
                this.loaderStatus = false;
            }
            // console.log(this.incomingOrders);
            for (let i = 0; i < this.incomingOrders.length; i++) {
                this._productService.viewProductById(this.incomingOrders[i].product).subscribe((data) => {
                    this.incomingOrdersToHandle.push({
                        'No': i + 1,
                        'product_name': data.name,
                        'Quantity': this.incomingOrders[i].quantity,
                        'created_at': this.incomingOrders[i].created_at,
                        'status': this.incomingOrders[i].status,
                        'order_id': this.incomingOrders[i].id,
                        'product_id': data.id,
                    });
                    //pagination
                    this.totaloncomingOrdersRecords = this.incomingOrdersToHandle.length;
                    for (let i in this.incomingOrdersToHandle) {
                        if (this.incomingOrdersToHandle[i].status == 'p') {
                            this.incomingOrdersToHandle[i].status = 'in processing';
                        }
                        else if (this.incomingOrdersToHandle[i].status == 's') {
                            this.incomingOrdersToHandle[i].status = 'shipped';
                        }
                        else if (this.incomingOrdersToHandle[i].status == 'e') {
                            this.incomingOrdersToHandle[i].status = 'delivered';
                        }
                        else if (this.incomingOrdersToHandle[i].status == 'r') {
                            this.incomingOrdersToHandle[i].status = 'returned';
                        }
                        else if (this.incomingOrdersToHandle[i].status == 'c') {
                            this.incomingOrdersToHandle[i].status = 'cancelled';
                        }
                    }
                }, (err) => console.log(err));
            }
        }, (err) => console.log(err));
        this._productService.myProducts().subscribe((data) => {
            this.myProducts = data;
            //pagination
            this.totalProductsRecords = this.myProducts.length;
        }, (err) => console.log(err));
    }
    cancelOrder(order_id) {
        this._productService.deleteOrder(order_id).subscribe((data) => {
            location.reload();
        }, (err) => console.log(err));
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "niDO":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/product-details/product-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <<<<<<<<<<<<<<<<<<<< Breadcumb Area Start <<<<<<<<<<<<<<<<<<<< -->\n<div class=\"container main\">\n    <div class=\"breadcumb_area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <a [routerLink]=\"['/search']\" class=\"backToHome d-block\"><i class=\"fa fa-angle-double-left\"></i> Back to Category</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <<<<<<<<<<<<<<<<<<<< Breadcumb Area End <<<<<<<<<<<<<<<<<<<< -->\n\n    <!-- <<<<<<<<<<<<<<<<<<<< Single Product Details Area Start >>>>>>>>>>>>>>>>>>>>>>>>> -->\n\n\n    <section *ngIf=\"productdetails.name.length > 2\" class=\"single_product_details_area section_padding_0_100\" data-aos=\"fade-down\" data-aos-offset=\"300\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"1000\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col-12 col-md-6\">\n\n                    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                        <ol class=\"carousel-indicators\">\n                            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                            <li *ngFor=\"let image of productdetails.images ; let i=index\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"{{i+1}}\"></li>\n                        </ol>\n                        <div class=\"carousel-inner\">\n                            <div class=\"carousel-item active\">\n                                <img *ngIf=\"productdetails.images[0]\" class=\"d-block w-100\" src=\"{{productdetails.images[0].image}}\" alt=\"First slide\">\n                            </div>\n                            <div *ngFor=\"let image of productdetails.images\" class=\"carousel-item\">\n                                <img class=\"d-block w-100\" src=\"{{image.image}}\" alt=\"Second slide\">\n                            </div>\n\n                        </div>\n                        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </div><br><br>\n                    <div class=\"text-center\">\n                        <button *ngIf=\"is_Owner == true\" type=\"submit\" class=\"btn karl-checkout\" id=\"button1\" (click)=\"editPrd(productdetails.id)\">Edit Your Product</button>\n                        <button type=\"submit\" class=\"btn karl-checkout\" id=\"button2\" (click)=\"reportproduct()\">Report Product</button>\n                    </div>\n                </div>\n                <br>\n\n\n                <div class=\"col-12 col-md-6\">\n                    <div class=\"single_product_desc pl-5\">\n                        <p *ngIf=\"onSale == true\" class=\"animate__flash animate_animated animateflash animate_infinite\">Sale 10% </p>\n\n                        <h4 class=\"title\" style=\"font-weight: 600;\"><a>{{productdetails.name}}</a></h4>\n\n\n                        <p *ngIf=\"countOfReviews != 0\" style=\"font-weight: 600;\">count of Rates {{countOfReviews}}</p>\n                        <div>\n                            <i *ngFor=\"let star of avrOfReviewsList\" class=\"fa fa-star fa-lg\" style=\"color: rgb(210, 57, 59);\" aria-hidden=\"true\"></i>\n                            <i *ngIf=\"halfStar == true\" class=\"fas fa-star-half-alt fa-lg\" style=\"color: rgb(210, 57, 59);\" aria-hidden=\"true\"></i>\n                        </div>\n                        <br>\n                        <h4 *ngIf=\"onSale == true\" class=\"title\" style=\"font-weight: 600;\"><a><span style=\"text-decoration-line: line-through; \">{{productdetails.price + productdetails.price * 0.1}} EGP</span> {{productdetails.price | currency:'EGP '}}</a></h4>\n                        <h4 *ngIf=\"onSale == false\" class=\"price\">{{ productdetails.price | currency:'EGP ' }}</h4>\n\n\n                        <div class=\"widget size mb-50\">\n                            <h6 class=\"widget-title m-2\">Age</h6>\n                            <div class=\"widget-desc\">\n                                <a class=\"p-2 m-2\" routerLink=\"#\">{{productdetails.age_from}}-{{productdetails.age_to}}</a>\n                            </div>\n                        </div>\n                        <div class=\"widget size mb-50\">\n                            <h6 class=\"widget-title m-2\">Gender : {{productdetails.gender}}</h6>\n                        </div>\n                        <div class=\"widget size mb-50\">\n                            <h6 class=\"widget-title m-2\">occassion :\n                                <ul>\n                                    <li *ngFor=\"let occassion of filterdoccassionList\">\n                                        {{occassion.name}}\n                                    </li>\n                                </ul>\n                            </h6>\n                        </div>\n                        <div class=\"widget size mb-50\">\n                            <h6 class=\"widget-title m-2\">Relationships :\n                                <ul>\n                                    <li *ngFor=\"let rel of filterdrelList\">\n                                        {{rel.name}}\n                                    </li>\n                                </ul>\n                            </h6>\n                        </div>\n\n                        <!-- Add to Cart Form -->\n                        <form class=\"cart clearfix mb-50 d-flex\" method=\"post\">\n                            <div class=\"quantity\">\n                                <span class=\"qty-minus\" onclick=\"var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                                <input #pquntty type=\"number\" class=\"qty-text\" id=\"qty\" step=\"1\" min=\"1\" max=\"12\" name=\"quantity\" value=\"1\">\n                                <span class=\"qty-plus\" onclick=\"var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                            </div>\n                            <a (click)=\"addToCart(pquntty.value)\" class=\"btn cart-submit d-block p-2\">Add to cart</a>\n                        </form>\n\n                        <div id=\"accordion\" role=\"tablist\">\n                            <div class=\"card\">\n                                <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                                    <h6 class=\"mb-0\">\n                                        <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Information</a>\n                                    </h6>\n                                </div>\n\n                                <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                                    <div class=\"card-body\">\n                                        <p>{{productdetails.details}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                                    <h6 class=\"mb-0\">\n                                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">shipping &amp; Returns</a>\n                                    </h6>\n                                </div>\n                                <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                                    <div class=\"card-body\">\n                                        <p>Shipped To Any Governorate</p>\n                                        <p>ِAccept For Return Within a Maximum Period of 15 Days</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- <<<<<<<<<<<<<<<<<<<< Single Product Details Area End >>>>>>>>>>>>>>>>>>>>>>>>> -->\n    <div class=\"comment-form\">\n        <div class=\"comment-dialog modal-dialog-centered\">\n            <div class=\"modal-content\">\n                <div class=\"card-body text-center\">\n                    <div class=\"comment-box text-center\">\n                        <h4><i class=\"fas fa-comment\"></i> Add your comment </h4><br>\n                        <div class=\"comment-area\">\n                            <textarea #pcomment class=\"form-control\" placeholder=\"Add Your Comment\" rows=\"4\"></textarea>\n                        </div>\n                        <br>\n                        <h5><i class=\"fas fa-comment-alt-smile\"></i> Add Your FeedBack</h5>\n                        <div class=\"rating\">\n                            <input [(ngModel)]=\"reatValue\" type=\"radio\" name=\"rating\" value=\"5\" id=\"1\"><label for=\"1\">☆</label>\n                            <input [(ngModel)]=\"reatValue\" type=\"radio\" name=\"rating\" value=\"4\" id=\"2\"><label for=\"2\">☆</label>\n                            <input [(ngModel)]=\"reatValue\" type=\"radio\" name=\"rating\" value=\"3\" id=\"3\"><label for=\"3\">☆</label>\n                            <input [(ngModel)]=\"reatValue\" type=\"radio\" name=\"rating\" value=\"2\" id=\"4\"><label for=\"4\">☆</label>\n                            <input [(ngModel)]=\"reatValue\" type=\"radio\" name=\"rating\" value=\"1\" id=\"5\"><label for=\"5\">☆</label>\n                        </div>\n                    </div><br>\n                </div>\n                <button type=\"submit\" class=\"btn karl-checkout\" (click)=\"reviewFun(pcomment.value)\" style=\"width:50%;margin:auto;padding:auto;\">ok</button>\n            </div>\n        </div>\n    </div><br>\n\n    <!-- ****** Quick View Modal Area End ****** -->\n    <br>\n    <div class=\"row\">\n        <div class=\"panel panel-default widget\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title text-center\">\n                    <i class=\"fas fa-comments\"></i> Recent Comments</h3>\n            </div><br>\n\n\n\n            <div class=\"panel-body\">\n                <ul *ngIf=\"reviewList.length > 0\" class=\"list-group\">\n                    <li *ngFor=\"let rev of reviewList\" class=\"list-group-item\">\n                        <div class=\"row\">\n\n                            <div class=\"col-xs-10 col-md-11\">\n                                <div>\n                                    <h5>{{rev.body}}</h5>\n\n                                </div>\n                                <div class=\"comment-text\">\n                                    Rate: {{rev.rate}}\n                                </div>\n\n                            </div>\n                        </div>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- //////////////////////////////////////// -->\n    <section class=\"you_may_like_area clearfix\">\n        <div class=\"container text-center\">\n            <div class=\"section_heading text-center\">\n                <h1>Related Products</h1>\n            </div>\n            <div class=\"row\">\n                <owl-carousel-o [options]=\"customOptions\">\n                    <ng-template carouselSlide *ngFor=\"let product of filteredList\" class=\"relprd col-md-4 m-2\">\n                        <div style=\"width: 50% !important;\">\n                            <div class=\"product-img\">\n                                <img src=\"{{product.images[0].image}}\" alt=\"{{product.name}}\">\n\n                            </div>\n                            <!-- Product Description -->\n                            <div class=\"product-description\">\n                                <h4 class=\"product-price\">{{product.price}}</h4>\n                                <p>{{product.name}}</p>\n                                <!-- Add to Cart -->\n                                <a class=\"add-to-cart-btn\" (click)=\"reload()\" [routerLink]=\"['/productdetails',product.id]\">More Details</a>\n                            </div>\n                        </div>\n                    </ng-template>\n                </owl-carousel-o>\n            </div>\n        </div>\n    </section>");

/***/ }),

/***/ "nrat":
/*!*****************************************!*\
  !*** ./src/app/_alert/alert.service.ts ***!
  \*****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.model */ "y2ja");





let AlertService = class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
    }
    static success(arg0, Option) {
        throw new Error('Method not implemented.');
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message })));
    }
    // main alert method    
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ id }));
    }
};
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "oqgY":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/nav/nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: rgb(34, 34, 34);\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">\n        <img src=\"../../../assets/images/logo4.png\" alt=\"HDYA\" height=\"40px\" width=\"50px\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto nav-flex-icons text-light\">\n            <li class=\"nav-item active mr-4\">\n                <a class=\"nav-link nav-item navbar-collapse text-light\" routerLink=\"/home\">Home <span class=\"sr-only\"></span></a>\n            </li>\n            <li class=\"nav-item active mr-4\">\n                <a class=\"nav-link nav-item navbar-collapse text-light\" routerLink=\"/about\">About Us <span class=\"sr-only\"></span></a>\n            </li>\n            <li class=\"nav-item active mr-4\">\n                <a class=\"nav-link nav-item navbar-collapse text-light\" routerLink=\"/search\">Shopping<span class=\"sr-only\"></span></a>\n            </li>\n            <li class=\"nav-item active mr-4\">\n                <a class=\"nav-link\" routerLink=\"/product/createproduct\" *ngIf=\"usertoken\">Add Product<span class=\"sr-only\"></span></a>\n            </li>\n\n        </ul>\n        <ul class=\"navbar-nav ml-auto nav-flex-icons text-light\">\n            <form class=\"form-inline my-2 my-lg-0\">\n                <div id=\"example1\">\n                    <input #searchabout class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                    <button (click)=\"search(searchabout.value)\" class=\"btn btn-outline-light my-2 my-sm-0 mr-2\" type=\"submit\" routerLink=\"/search\"><i class=\"fas fa-search\"></i></button>\n                </div>\n            </form>\n            <li class=\"nav-item active \">\n                <a class=\"nav-link\" routerLink=\"/profile\" *ngIf=\"usertoken\"><i class=\"far fa-user-circle fa-2x\"></i><span class=\"sr-only\"></span></a>\n            </li>\n            <li class=\"nav-item active\">\n                <a class=\"nav-link nav-item navbar-collapse text-light \" routerLink=\"/cart\"><i class=\"fas fa-shopping-cart fa-2x\"></i> {{cart.length}}<span class=\"sr-only\"></span></a>\n            </li>\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" *ngIf=\"usertoken\" (click)=logout()><i class=\"fas fa-sign-out-alt fa-2x\"></i> <span class=\"sr-only\"></span></a>\n            </li>\n            <li *ngIf=\"usertoken === null\" class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink-333\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-user fa-2x\"></i>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right dropdown-default\" aria-labelledby=\"navbarDropdownMenuLink-333\">\n                    <a class=\"dropdown-item \" routerLink=\"/login\">Sign In</a>\n                    <a class=\"dropdown-item \" routerLink=\"/signup\">Sign Up</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "qC+i":
/*!*************************************************************!*\
  !*** ./src/app/Components/checkout/checkout.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-weight: 400;\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: rgb(37, 42, 51);\n    line-height: 1.2;\n    font-weight: 700;\n}\n\np {\n    color: rgb(37, 42, 51);\n    font-size: 1em;\n    line-height: 1.5;\n    font-weight: 400;\n}\n\na:focus {\n    outline: 0 solid;\n}\n\na,\na:hover,\na:focus {\n    transition: all 500ms ease 0s;\n    text-decoration: none;\n    outline: none;\n    color: rgb(37, 42, 51);\n    font-weight: 400;\n}\n\nul,\nol {\n    margin: 0;\n}\n\nol li,\nul li {\n    list-style: outside none none;\n}\n\nimg {\n    height: auto;\n    max-width: 100%;\n}\n\n.background-overlay,\n.background-overlay-white {\n    position: relative;\n    z-index: 2;\n    background-position: center center;\n    background-size: cover;\n}\n\n.background-overlay:before,\n.background-overlay-white:before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\";\n}\n\n.background-overlay:before {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.background-overlay-white:before {\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.mb-100 {\n    margin-bottom: 100px;\n}\n\n.bg-img {\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.bg-transparent {\n    background-color: transparent;\n}\n\n.bg-transparent-dark {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.bg-transparent-light {\n    background-color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.bg-dark3 {\n    background-color: rgba(0, 0, 0, 0.75) !important;\n}\n\n.bg-dark2 {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.font-bold {\n    font-weight: 700;\n}\n\n.font-light {\n    font-weight: 300;\n}\n\n.line,\n.line-mtb15 {\n    width: 100%;\n    height: 1px;\n    background-color: #ddd;\n    margin: 30px 0;\n}\n\n.line-mtb15 {\n    margin: 15px 0;\n}\n\n.height-500 {\n    height: 500px !important;\n}\n\n.height-600 {\n    height: 600px !important;\n}\n\n.height-700 {\n    height: 700px !important;\n}\n\n.height-800 {\n    height: 800px !important;\n}\n\n#scrollUp {\n    background-color: rgb(210, 57, 59);\n    border-radius: 0;\n    bottom: 0;\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n    color: #fff;\n    font-size: 24px;\n    height: 40px;\n    line-height: 40px;\n    right: 60px;\n    text-align: center;\n    width: 40px;\n}\n\n/* \n/////////////////////////////////////////\n//////////////// Modal  //////////////////////// */\n\n#quickview button.close {\n    box-shadow: none;\n    position: absolute;\n    right: 15px;\n    text-align: right;\n    top: 10px;\n    z-index: 9;\n}\n\n.fade {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%\n}\n\n.quickview_body {\n    overflow: hidden;\n    text-align: center;\n}\n\n.quickview_pro_img {\n    border: 1px solid #f6f6f6;\n    position: relative;\n    width: 100%;\n    z-index: 1;\n}\n\n.quickview_pro_img .hover_img {\n    left: 0;\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    position: absolute;\n    top: -30px;\n    transition-duration: 500ms;\n}\n\n.quickview_pro_img:hover .hover_img {\n    top: 0;\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.quickview_pro_des .title {\n    text-transform: capitalize;\n}\n\n.quickview_pro_des {\n    padding: 30px 0;\n}\n\n.quickview_pro_des .price>span {\n    color: #888;\n    font-size: 14px;\n    text-decoration: line-through;\n}\n\n.quickview_pro_des>p {\n    font-size: 13px;\n}\n\n.quickview_pro_des>a {\n    color: #19B5FE;\n    font-size: 13px;\n    text-decoration: underline;\n}\n\n.quickview_body .quantity>input {\n    -moz-appearance: textfield;\n    border: 1px solid #f6f6f6;\n    height: 35px;\n    text-align: center;\n    width: 40px;\n    font-size: 13px;\n}\n\n.quickview_body .quantity {\n    align-items: center;\n    display: flex;\n}\n\n.quickview_body .cart {\n    display: flex;\n}\n\n.quickview_body .qty-plus,\n.quickview_body .qty-minus {\n    background-color: transparent;\n    border: 1px solid #f6f6f6;\n    color: #000;\n    cursor: pointer;\n    height: 35px;\n    text-align: center;\n    width: 22px;\n}\n\n.quickview_body .qty-plus {\n    border-left: 0 solid transparent;\n}\n\n.quickview_body .qty-minus {\n    border-right: 0 solid transparent;\n}\n\n.quickview_body .cart-submit {\n    background-color: rgb(210, 57, 59);\n    border: medium none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 13px;\n    height: 35px;\n    margin-left: 15px;\n    width: 120px;\n    transition-duration: 500ms;\n}\n\n.quickview_body .cart-submit:hover {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n}\n\n.quickview_body .qty-minus i,\n.quickview_body .qty-plus i {\n    color: #888;\n    font-size: 10px;\n    line-height: 33px;\n}\n\n.quickview_body .modal_pro_wishlist>a,\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n    display: block;\n    height: 35px;\n    margin: 0 15px;\n    text-align: center;\n    width: 35px;\n    font-size: 22px;\n}\n\n.quickview_body .modal_pro_wishlist>a:hover,\n.quickview_body .modal_pro_compare>a:hover {\n    background-color: #000;\n    color: #fff;\n}\n\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(37, 42, 51);\n    margin: 0;\n}\n\n.quickview_body .modal_pro_wishlist>a i,\n.quickview_body .modal_pro_compare>a i {\n    line-height: 35px;\n}\n\n.quickview_body .share_wf>p {\n    font-size: 13px;\n    margin-bottom: 5px;\n    text-transform: capitalize;\n}\n\n.quickview_body .share_wf ._icon>a {\n    color: #888;\n    font-size: 14px;\n    margin-right: 5px;\n}\n\n.quickview_body .share_wf ._icon>a:hover {\n    color: #000;\n}\n\n.quickview_body .top_seller_product_rating>i {\n    color: #ff9800;\n    font-size: 13px;\n}\n\n.section_padding_100_0 {\n    padding: 100px 0 0;\n}\n\n.section_padding_0_100 {\n    padding: 0 0 100px;\n}\n\n.section_heading {\n    margin-bottom: 50px;\n    position: relative;\n    z-index: 1;\n}\n\n.section_heading h2 {\n    font-size: 48px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n}\n\n.section_heading.text-left {\n    text-align: left !important;\n}\n\n.karl-btn {\n    display: inline-block;\n    min-width: 170px;\n    height: 55px;\n    color: #fff;\n    border: 3px solid #fff;\n    border-radius: 2px;\n    padding: 0 30px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 49px;\n}\n\n.karl-btn:hover,\n.karl-btn:focus {\n    font-weight: 700;\n    color: #fff;\n    background-color: rgb(37, 42, 51);\n    border-color: rgb(37, 42, 51);\n}\n\n.product-img {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n}\n\n.product-img>img {\n    width: 100%;\n    transition-duration: 500ms;\n}\n\n.single_gallery_item:hover .product-img>img {\n    transform: scale(1.15);\n}\n\n.product-img .product-quicview {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(23, 24, 24, 0.6);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    transition-duration: 500ms;\n}\n\n.product-img:hover .product-quicview {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.product-img .product-quicview>a {\n    width: 72px;\n    height: 72px;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    border-radius: 50%;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 36px;\n    line-height: 72px;\n}\n\n.product-img .product-quicview>a:hover {\n    border: 2px solid rgba(255, 255, 255, 1);\n    color: rgba(255, 255, 255, 1);\n}\n\n.product-description {\n    margin-top: 20px;\n}\n\n.product-description h4 {\n    font-weight: 400;\n    color: rgb(210, 57, 59);\n    margin-bottom: 5px;\n    display: block;\n}\n\n.product-description p {\n    font-size: 20px;\n    margin: 0;\n    color: rgb(37, 42, 51)\n}\n\n.product-description .add-to-cart-btn {\n    margin-top: 50px;\n    font-size: 12px;\n    font-weight: 700;\n    color: rgb(210, 57, 59);\n    display: block;\n}\n\n.product-description .add-to-cart-btn:hover {\n    color: rgb(210, 57, 59);\n}\n\n.container {\n  margin: auto;\n  padding: auto;\n  width: 70%;\n}\n\n.checkout_details_area form label {\n  font-size: 16px;\n  text-transform: uppercase;\n}\n\n.checkout_details_area form label span {\n  color: #ff084e;\n}\n\n.checkout_details_area form .form-control,\n.checkout_details_area form .custom-select {\n  height: 52px;\n  border: none;\n  background-color: #f4f2f8;\n  border-radius: 0;\n}\n\n.order-details-confirmation {\n  width: 100%;\n  border: 2px solid #ebebeb;\n  padding: 40px;\n}\n\n.order-details-confirmation .order-details-form li {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  font-size: 16px;\n  text-transform: uppercase;\n  padding: 30px 0;\n  border-bottom: 2px solid #ebebeb;\n}\n\n.karl-checkout {\n  background-color: #d2393b;\n  display: block;\n  height: 55px;\n  border: 3px solid #fff;\n  border-radius: 2px;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 49px;\n}\n\n.karl-checkout:hover,\n.karl-checkout:focus {\n  font-weight: 700;\n  background-color: #252a33;\n  border-color: #d8332e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4uY3NzIiwiLi4vLi4vLi4vLi4vY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7O0lBTUksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUlJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksU0FBUztBQUNiOztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNw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RUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTs7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUdJLGFBQUE7RUFHQSxtQkFBQTtFQUdBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBOztFQUVJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5wIHtcbiAgICBjb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYTpmb2N1cyB7XG4gICAgb3V0bGluZTogMCBzb2xpZDtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlIDBzO1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlIDBzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxudWwsXG5vbCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5vbCBsaSxcbnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uYmFja2dyb3VuZC1vdmVybGF5LFxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmFja2dyb3VuZC1vdmVybGF5OmJlZm9yZSxcbi5iYWNrZ3JvdW5kLW92ZXJsYXktd2hpdGU6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXk6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXktd2hpdGU6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi5tYi0xMDAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uYmctaW1nIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJnLXRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJnLXRyYW5zcGFyZW50LWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQtbGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyazMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSkgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhcmsyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvbnQtbGlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5saW5lLFxuLmxpbmUtbXRiMTUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5saW5lLW10YjE1IHtcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmhlaWdodC01MDAge1xuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlaWdodC02MDAge1xuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlaWdodC03MDAge1xuICAgIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlaWdodC04MDAge1xuICAgIGhlaWdodDogODAwcHggIWltcG9ydGFudDtcbn1cblxuI3Njcm9sbFVwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHJpZ2h0OiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuXG4vKiBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vIE1vZGFsICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cblxuI3F1aWNrdmlldyBidXR0b24uY2xvc2Uge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRvcDogMTBweDtcbiAgICB6LWluZGV4OiA5O1xufVxuXG4uZmFkZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCVcbn1cblxuLnF1aWNrdmlld19ib2R5IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnF1aWNrdmlld19wcm9faW1nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjZmNmY2O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucXVpY2t2aWV3X3Byb19pbWcgLmhvdmVyX2ltZyB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4ucXVpY2t2aWV3X3Byb19pbWc6aG92ZXIgLmhvdmVyX2ltZyB7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2RlcyAudGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucXVpY2t2aWV3X3Byb19kZXMge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzIC5wcmljZT5zcGFuIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2Rlcz5wIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2Rlcz5hIHtcbiAgICBjb2xvcjogIzE5QjVGRTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXVhbnRpdHk+aW5wdXQge1xuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXVhbnRpdHkge1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuY2FydCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdHktcGx1cyxcbi5xdWlja3ZpZXdfYm9keSAucXR5LW1pbnVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjZmNmY2O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMnB4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzIHtcbiAgICBib3JkZXItbGVmdDogMCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdHktbWludXMge1xuICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5jYXJ0LXN1Ym1pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLmNhcnQtc3VibWl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1taW51cyBpLFxuLnF1aWNrdmlld19ib2R5IC5xdHktcGx1cyBpIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX3dpc2hsaXN0PmEsXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb19jb21wYXJlPmEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzVweDtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX3dpc2hsaXN0PmE6aG92ZXIsXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb19jb21wYXJlPmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YSBpLFxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fY29tcGFyZT5hIGkge1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnNoYXJlX3dmPnAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuc2hhcmVfd2YgLl9pY29uPmEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5zaGFyZV93ZiAuX2ljb24+YTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAudG9wX3NlbGxlcl9wcm9kdWN0X3JhdGluZz5pIHtcbiAgICBjb2xvcjogI2ZmOTgwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zZWN0aW9uX3BhZGRpbmdfMTAwXzAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMDtcbn1cblxuLnNlY3Rpb25fcGFkZGluZ18wXzEwMCB7XG4gICAgcGFkZGluZzogMCAwIDEwMHB4O1xufVxuXG4uc2VjdGlvbl9oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uc2VjdGlvbl9oZWFkaW5nIGgyIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2VjdGlvbl9oZWFkaW5nLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ua2FybC1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbn1cblxuLmthcmwtYnRuOmhvdmVyLFxuLmthcmwtYnRuOmZvY3VzIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBib3JkZXItY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZHVjdC1pbWc+aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4uc2luZ2xlX2dhbGxlcnlfaXRlbTpob3ZlciAucHJvZHVjdC1pbWc+aW1nIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDI0LCAyNCwgMC42KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4ucHJvZHVjdC1pbWc6aG92ZXIgLnByb2R1Y3QtcXVpY3ZpZXcge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG59XG5cbi5wcm9kdWN0LWltZyAucHJvZHVjdC1xdWljdmlldz5hIHtcbiAgICB3aWR0aDogNzJweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDcycHg7XG59XG5cbi5wcm9kdWN0LWltZyAucHJvZHVjdC1xdWljdmlldz5hOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24gaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSlcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24gLmFkZC10by1jYXJ0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24gLmFkZC10by1jYXJ0LWJ0bjpob3ZlciB7XG4gICAgY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vbWFpbi5jc3MnO1xuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLmNoZWNrb3V0X2RldGFpbHNfYXJlYSBmb3JtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNoZWNrb3V0X2RldGFpbHNfYXJlYSBmb3JtIGxhYmVsIHNwYW4ge1xuICAgIGNvbG9yOiAjZmYwODRlO1xufVxuXG4uY2hlY2tvdXRfZGV0YWlsc19hcmVhIGZvcm0gLmZvcm0tY29udHJvbCxcbi5jaGVja291dF9kZXRhaWxzX2FyZWEgZm9ybSAuY3VzdG9tLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMmY4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5vcmRlci1kZXRhaWxzLWNvbmZpcm1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ViZWJlYjtcbiAgICBwYWRkaW5nOiA0MHB4O1xufVxuXG4ub3JkZXItZGV0YWlscy1jb25maXJtYXRpb24gLm9yZGVyLWRldGFpbHMtZm9ybSBsaSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xufVxuXG4ua2FybC1jaGVja291dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbn1cblxuLmthcmwtY2hlY2tvdXQ6aG92ZXIsXG4ua2FybC1jaGVja291dDpmb2N1cyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE2LCA1MSwgNDYpO1xufSJdfQ== */");

/***/ }),

/***/ "smYa":
/*!*************************************************!*\
  !*** ./src/app/services/add-to-cart.service.ts ***!
  \*************************************************/
/*! exports provided: AddToCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartService", function() { return AddToCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "S3Px");
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_alert */ "06Np");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AddToCartService = class AddToCartService {
    constructor(_products, alertService, _route) {
        this._products = _products;
        this.alertService = alertService;
        this._route = _route;
        this.cart = [];
        this.options = {
            autoClose: true,
            keepAfterRouteChange: false
        };
    }
    addProductToCart(product_id, quantity = 1) {
        let addtocart;
        let finaldetails = {};
        this._products.viewProductById(product_id).subscribe((data) => {
            addtocart = data;
            finaldetails.productDetails = addtocart;
            finaldetails.quantity = quantity;
            console.log(finaldetails);
            this.cart.push(finaldetails);
            localStorage.setItem("cart", JSON.stringify(this.cart));
            this.cart = [];
            this.alertService.success('Success!!', this.options);
        }, (err) => console.log(err));
    }
    addCart(product_id, quantity = 1) {
        if (localStorage.getItem("cart")) {
            this.cart = JSON.parse(localStorage.getItem("cart") || '{}');
            if (this.cart.length > 0) {
                let found = false;
                for (let i in this.cart) {
                    if (this.cart[i].productDetails.id == product_id) {
                        found = true;
                        break;
                    }
                }
                if (found == false) {
                    this.addProductToCart(product_id, quantity);
                }
                else {
                    this._route.navigate(['/cart']);
                    alert("This Product already exits in the cart");
                }
            }
            else {
                this.addProductToCart(product_id, quantity);
            }
        }
        else {
            this.addProductToCart(product_id, quantity);
        }
    }
};
AddToCartService.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddToCartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddToCartService);



/***/ }),

/***/ "ts21":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/cart/cart.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n\n\n<div *ngIf=\"cart.length == 0\" class=\"emptycart text-center mt-5\">\n    <img src=\"../../../assets/images/emptycart.jpg\" alt=\"empty cart\">\n    <h6>Ooops! No items in cart. Keep shopping with us and grab exciting offers.!</h6>\n    <a class=\"btn btn-danger m-2 p-2\" routerLink=\"/search\" style=\"color:white;\">Continue Shopping</a>\n</div>\n\n<div *ngIf=\"cart.length > 0\" class=\"cart_area section_padding_100 clearfix\" data-aos=\"fade-down\" data-aos-easing=\"linear\" data-aos-duration=\"600\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"cart-table clearfix\">\n                    <table class=\"table table-responsive\">\n                        <tr>\n                            <th style=\"width: 10%;\">NO</th>\n                            <th style=\"width: 10%;\">Product Image</th>\n                            <th style=\"width: 30%;\">Product Name</th>\n                            <th style=\"width: 10%;\">Price</th>\n                            <th style=\"width: 10%;\">Quantity</th>\n                            <th style=\"width: 20%;\">Total</th>\n                            <th style=\"width: 10%;\">Delete</th>\n                        </tr>\n                        <tr *ngFor=\"let product of cart; let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <a *ngIf=\"product.productDetails.images[0]\"><img src=\"{{product.productDetails.images[0].image}}\" alt=\"Product\"></a>\n                            </td>\n                            <td class=\"cart_product_img d-flex align-items-center\">\n                                <h6><a [routerLink]=\"[ '/productdetails', product.productDetails.id ]\">{{product.productDetails.name}}</a></h6>\n                            </td>\n                            <td class=\"price\"><span>{{product.productDetails.price}}</span></td>\n                            <td class=\"qty\">\n                                <div class=\"quantity\">\n                                    <input (change)=\"changeQntty(product.productDetails.id , product.productDetails.price , pquantity.value , i)\" #pquantity type=\"number\" class=\"qty-text\" id=\"qty\" step=\"1\" min=\"0\" max=\"99\" name=\"quantity\" value=\"{{product.quantity}}\">\n                                </div>\n                            </td>\n                            <td class=\"total_price\"><span>{{total[i]}}</span></td>\n                            <td><a (click)=\"removeitem(product.productDetails.id)\"><i class=\"fas fa-trash-alt\"></i></a></td>\n                        </tr>\n                    </table>\n                </div>\n\n                <div class=\"cart-footer d-flex mt-30\">\n                    <div class=\"back-to-shop w-50\">\n                        <a routerLink=\"/search\">Continue shooping</a>\n                    </div>\n                    <div class=\"back-to-shop w-50 text-right\">\n                        <a (click)=\"emptyCart()\">clear cart</a>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <!-- ---------------------------------------promo code-----------------------------------------  -->\n\n            <!-- <div class=\"col-12 col-md-6 col-lg-4 col-sm-4\">\n                <div class=\"coupon-code-area mt-70\">\n                    <div class=\"cart-page-heading\">\n                        <h5>Coupon code</h5><br>\n                        <p>Enter your Coupon code</p>\n                    </div>\n                    <form action=\"#\">\n                        <input type=\"search\" name=\"search\" placeholder=\"#945bd45\">\n                        <button disabled>Check</button>\n                    </form>\n                </div>\n            </div> -->\n            <!-- ------------------------------------------------------------------------------------------- -->\n\n            <div class=\"col-12 col-lg-4 col-sm-8 cart_total\">\n                <div class=\"cart-total-area mt-70\">\n                    <div class=\"cart-page-heading\">\n                        <h5>Cart total</h5><br>\n                    </div>\n                    <ul class=\"cart-total-chart\">\n                        <li><span>Shipping</span> <span>Free</span></li>\n                        <li><span><strong>Total</strong></span> <span><strong>{{totalPrice}}</strong></span></li>\n                    </ul>\n                    <button (click)=\"toCheckout()\" routerLink=\"/checkout\" class=\"btn karl-checkout-btn\">Proceed to checkout</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br>");

/***/ }),

/***/ "u3yF":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-loader *ngIf=\"!saleList.length > 0\"></app-loader> -->\n\n<!-- ******* Start of Categories********** -->\n<div class=\"container-fluid\">\n    <input type=\"hidden\" #selection>\n    <div class=\"card-container\">\n        <div *ngFor=\"let cat of categoryList\" class=\"card card-small border border-dark\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n            <a (click)=\"catSearch(cat.id)\" routerLink=\"/search\">{{cat.title}} </a>\n        </div>\n\n    </div>\n</div>\n<!-- ******* End  of Categories********** -->\n<section class=\"welcome_area\">\n    <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ul class=\"carousel-indicators\">\n            <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n        </ul>\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n                <img src=\"../../../assets/images/hand1.jpg\" alt=\"hand1\" width=\"1100\" height=\"500\">\n                <div class=\"carousel-caption\">\n                    <div class=\"welcome_slide_text\">\n                        <h2 data-animation=\"fadeInUp\" data-delay=\"500ms\" data-duration=\"500ms\">Accessories Trends</h2>\n                        <a routerLink=\"/search\" class=\"btn karl-btn\" style=\"background-color:rgb(210,57,59);\" data-animation=\"fadeInUp\" data-delay=\"1s\" data-duration=\"500ms\">Shop Now</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"../../../assets/images/hand2.jpg\" alt=\"hand2\" width=\"1100\" height=\"500\">\n                <div class=\"carousel-caption\">\n                    <div class=\"welcome_slide_text\">\n                        <h2 data-animation=\"fadeInUp\" data-delay=\"500ms\" data-duration=\"500ms\">New Recycling Collection</h2>\n                        <a routerLink=\"/search\" class=\"btn karl-btn\" style=\"background-color:rgb(210,57,59);\" data-animation=\"fadeInLeftBig\" data-delay=\"1s\" data-duration=\"500ms\">Check Collection</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"../../../assets/images/hand3.jpg\" alt=\"hand3\" width=\"1100\" height=\"500\">\n                <div class=\"carousel-caption\">\n                    <div class=\"welcome_slide_text\">\n                        <h2 data-animation=\"bounceInDown\" data-delay=\"500ms\" data-duration=\"500ms\">New Year Collection</h2>\n                        <a routerLink=\"/search\" class=\"btn karl-btn\" style=\"background-color:rgb(210,57,59);\" data-animation=\"fadeInRightBig\" data-delay=\"1s\" data-duration=\"500ms\">Show Now </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\"></span>\n        </a>\n    </div>\n\n</section>\n<br>\n\n<!-- ****** Top Catagory Area Start ****** -->\n<div class=\"row\">\n    <section class=\"top_catagory_area d-md-flex clearfix\" style=\"width: 97%; padding-left: 40px;\">\n        <!-- Single Catagory -->\n        <div class=\"single_catagory_area d-flex align-items-center bg-img col-md-6\" style=\"background-image: url(../../../assets/images/hand4.jpg);\" data-aos=\"fade-right\" data-aos-offset=\"300\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"700\">\n            <div class=\"catagory-content\">\n                <h6>On Accesories</h6>\n                <h2>Sale 30%</h2>\n                <a routerLink=\"/search\" (click)=\"catSearch(1)\" class=\"btn karl-btn\">SHOP NOW</a>\n            </div>\n        </div>\n        <!-- Single Catagory -->\n        <div class=\"single_catagory_area  d-flex align-items-center bg-img col-md-6\" style=\"background-image: url(../../../assets/images/hand5.jpg);\" data-aos=\"fade-left\" data-aos-easing=\"ease-in-sine\" data-aos-offset=\"300\" data-aos-duration=\"700\">\n            <div class=\"catagory-content\">\n                <h6>in Bags excepting the new collection</h6>\n                <h2>Designer bags</h2>\n                <a routerLink=\"/search\" class=\"btn karl-btn\">SHOP NOW</a>\n            </div>\n        </div>\n    </section>\n</div>\n<!-- ****** Top Catagory Area End ****** -->\n\n<!-- ****** Quick View Modal Area Start ****** -->\n<div class=\"modal fade\" id=\"quickview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"quickview\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content \">\n            <button type=\"button\" class=\"close btn\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"modal-body \">\n                <div class=\"quickview_body \">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-lg-5\">\n                                <div class=\"quickview_pro_img\">\n                                    <!-- <img src=\"../../../assets/images/hand12.jpg\" alt=\"hand12\"> -->\n                                </div>\n                            </div>\n                            <div class=\"col-12 col-lg-7\">\n                                <div class=\"quickview_pro_des\">\n                                    <h4 class=\"title\">Wooden Gift</h4>\n                                    <div class=\"top_seller_product_rating mb-15\">\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    </div>\n                                    <h5 class=\"price\">$120.99 <span>$130</span></h5>\n                                    <p>Wooden gift made by Egyptian Hands , Very good material and delivered to any place you need</p>\n                                    <a href=\"#\">View Full Product Details</a>\n                                </div>\n                                <!-- Add to Cart Form -->\n                                <form class=\"cart d-flex text-center\" method=\"post\">\n                                    <div class=\"quantity\">\n                                        <span class=\"qty-minus\" onclick=\"var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n\n                                        <input type=\"number\" class=\"qty-text\" id=\"qty\" step=\"1\" min=\"1\" max=\"12\" name=\"quantity\" value=\"1\">\n\n                                        <span class=\"qty-plus\" onclick=\"var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                                    </div>\n                                    <a routerLink=\"/home\" style=\"background-color:rgb(210,57,59);\">Add to cart</a>\n                                    <!-- Wishlist -->\n                                    <div class=\"modal_pro_wishlist\">\n                                        <a><i class=\"fas fa-heart\"></i></a>\n                                    </div>\n                                    <!-- Compare -->\n                                    <div class=\"modal_pro_compare\">\n                                        <a><i class=\"fas fa-chart-line\"></i></a>\n                                    </div>\n                                </form>\n\n                                <div class=\"share_wf mt-30\">\n                                    <p>Share With Friend</p>\n                                    <div class=\"_icon\">\n                                        <a href=\"#\"> <i class=\"fab fa-facebook\" style=\"color:rgb(66,103,178);\"> </i> </a>\n                                        <a href=\"#\"><i class=\"fab fa-twitter\" style=\"color:rgb(29,161,242)\"> </i> </a>\n                                        <a href=\"#\"> <i class=\"fab fa-pinterest\" style=\"color:rgb(221, 75, 57)\"> </i> </a>\n                                        <a href=\"#\"> <i class=\"fab fa-google-plus-square\" style=\"color:rgb(189,8,28)\"> </i> </a>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- ****** Quick View Modal Area End ****** -->\n\n<!-- ****** New Arrivals Area Start ****** -->\n<section class=\"new_arrivals_area section_padding_100_0 clearfix\">\n    <div class=\"section_heading text-center font-italic\">\n        <h2 class=\"animate__heartBeat\" data-aos=\"zoom-in-up\" data-aos-duration=\"1000\">NEW DEALS</h2>\n    </div>\n\n    <div class=\"container new_deals text-center\">\n        <div class=\"row karl-new-arrivals\">\n            <!-- Single gallery Item Start -->\n            <div *ngFor=\"let prd of saleList\" class=\"col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig m-2 mb-3\" style=\"width: 30%; text-align: center;\" data-wow-delay=\"0.2s\" data-aos=\"fade-down\" data-aos-easing=\"linear\" data-aos-duration=\"1000\">\n                <!-- Product Image -->\n                <div class=\"product-img\">\n                    <!-- <a (click)=\"orderNow()\" class=\"btn karl-checkout text-white\">Place Order</a> -->\n                    <img *ngIf=\"prd.images[0]\" src=\"{{prd.images[0].image}}\" alt=\"hand6\" style=\"width:250px;height:200px;\">\n                </div>\n\n                <!-- Product Description -->\n                <div class=\"product-description\">\n                    <a class=\"add-to-cart-btn\" [routerLink]=\"['/productdetails',prd.id]\">More Details</a>\n\n                    <!-- Add to Cart -->\n                    <a class=\"add-to-cart-btn\" (click)=\"add(prd.id)\" style=\"cursor: pointer;\">ADD TO CART</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- ****** New Arrivals Area End ****** -->");

/***/ }),

/***/ "uvzM":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\n<footer class=\"page-footer font-small cyan darken-3\" style=\"background-color: rgb(240, 74, 74);\">\n\n    <!-- Footer Elements -->\n    <div class=\"container\">\n\n        <!-- Grid row-->\n        <div class=\"row\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-12 py-4 text-center\">\n                <div class=\"flex-center\">\n\n                    <!-- Facebook -->\n                    <a class=\"fb-ic\">\n                        <i class=\"fab fa-facebook-f fa-lg white-text mr-3 fa-2x\"> </i>\n                    </a>\n                    <!-- Twitter -->\n                    <a class=\"tw-ic\">\n                        <i class=\"fab fa-twitter fa-lg white-text mr-3 fa-2x\"> </i>\n                    </a>\n                    <!--Instagram-->\n                    <a class=\"ins-ic\">\n                        <i class=\"fab fa-instagram fa-lg white-text mr-3 fa-2x\"> </i>\n                    </a>\n                </div>\n            </div>\n            <!-- Grid column -->\n\n        </div>\n        <!-- Grid row-->\n\n    </div>\n    <!-- Footer Elements -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-1 \">© 2020 Copyright:\n        <a routerLink=\"/home\" class=\"text-light\"> HDYA !</a>\n    </div>\n    <!-- Copyright -->\n\n</footer>\n<!-- Footer -->");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Components_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/forgetpassword/forgetpassword.component */ "VjM3");
/* harmony import */ var _Components_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/create-product/create-product.component */ "1qOR");
/* harmony import */ var _Components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/search/search.component */ "M6HQ");
/* harmony import */ var _Components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/product-details/product-details.component */ "4si3");
/* harmony import */ var _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/checkout/checkout.component */ "/cjv");
/* harmony import */ var _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/cart/cart.component */ "wbFS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/login/login.component */ "Q/My");
/* harmony import */ var _Components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/profile/profile.component */ "nUDU");
/* harmony import */ var _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/signup/signup.component */ "0gwD");
/* harmony import */ var _Components_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/edit/edit.component */ "lGuJ");
/* harmony import */ var _Components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/pagenotfound/pagenotfound.component */ "bzsV");
/* harmony import */ var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/about/about.component */ "Sttr");
















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'profile', component: _Components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] },
    { path: 'about', component: _Components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"] },
    { path: 'profile/edit', component: _Components_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__["EditComponent"] },
    { path: 'home', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'login', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'product/createproduct', component: _Components_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_2__["CreateProductComponent"] },
    { path: 'signup', component: _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"] },
    { path: 'cart', component: _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
    { path: 'checkout', component: _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"] },
    { path: 'productdetails/:id', component: _Components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"] },
    { path: 'search', component: _Components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'forgetpassword', component: _Components_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_1__["ForgetpasswordComponent"] },
    { path: '**', component: _Components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_14__["PagenotfoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wbFS":
/*!***************************************************!*\
  !*** ./src/app/Components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.component.html */ "ts21");
/* harmony import */ var _cart_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component.scss */ "IKN5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_alert */ "06Np");








let CartComponent = class CartComponent {
    constructor(_products, route, alertService) {
        this._products = _products;
        this.route = route;
        this.alertService = alertService;
        this.cart = [];
        this.total = [];
        this.totalPrice = 0;
        this.orders = [];
        this.options = {
            autoClose: true,
            keepAfterRouteChange: false
        };
        this.checkout = {};
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
        if (localStorage.getItem("cart")) {
            this.cart = JSON.parse(localStorage.getItem("cart") || '{}');
            for (let i in this.cart) {
                this.calcPrice(this.cart[i].productDetails.id, this.cart[i].productDetails.price, this.cart[i].quantity, parseInt(i));
            }
        }
    }
    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        if (!localStorage.getItem("cart")) {
            this.cart = [];
        }
        else {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    }
    changeQntty(prd_id, Prd_price, quantaty, index) {
        for (let i in this.cart) {
            if (this.cart[i].productDetails.id == prd_id) {
                this.cart[i].quantity = quantaty;
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        }
        this.calcPrice(prd_id, Prd_price, quantaty, index);
    }
    calcPrice(prd_id, Prd_price, quantaty, index) {
        this.total[index] = quantaty * Prd_price;
        this.totalPrice = 0;
        for (let i = 0; i < this.total.length; i++) {
            this.totalPrice += this.total[i];
        }
        if (this.orders.length > 0) {
            let found = false;
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].product == prd_id) {
                    this.orders[i] = { product: prd_id, quantaty: quantaty };
                    found = true;
                    break;
                }
            }
            if (found == false) {
                this.orders.push({ product: prd_id, quantaty: quantaty });
            }
        }
        else {
            this.orders.push({ product: prd_id, quantaty: quantaty });
        }
    }
    toCheckout() {
        let sumtotalQuantity = [];
        for (let i in this.cart) {
            sumtotalQuantity.push(parseInt(this.cart[i].quantity));
        }
        var sum = sumtotalQuantity.reduce(function (a, b) {
            return a + b;
        }, 0);
        this.checkout.totalPrice = this.totalPrice;
        this.checkout.totalOrders = sum;
        localStorage.setItem('orders', JSON.stringify(this.orders));
        localStorage.setItem('checkout', JSON.stringify(this.checkout));
    }
    emptyCart() {
        localStorage.removeItem("cart");
        this.alertService.warn('Cart is Empty!!', this.options);
    }
    removeitem(prd_id) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].productDetails.id == prd_id)
                this.cart.splice(i, 1);
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.alertService.info('Removed !!', this.options);
    }
};
CartComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_alert__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartComponent);



/***/ }),

/***/ "wuI8":
/*!*******************************************************!*\
  !*** ./src/app/Components/about/about.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".social-link {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #666;\n  border-radius: 50%;\n  transition: all 0.3s;\n  font-size: 0.9rem;\n}\n\n.social-link:hover,\n.social-link:focus {\n  background: #ddd;\n  text-decoration: none;\n  color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBOztFQUVJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLWxpbmsge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5zb2NpYWwtbGluazpob3Zlcixcbi5zb2NpYWwtbGluazpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM1NTU7XG59Il19 */");

/***/ }),

/***/ "xZFE":
/*!*************************************************************************!*\
  !*** ./src/app/Components/create-product/create-product.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-weight: 400;\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: rgb(37, 42, 51);\n    line-height: 1.2;\n    font-weight: 700;\n}\n\np {\n    color: rgb(37, 42, 51);\n    font-size: 1em;\n    line-height: 1.5;\n    font-weight: 400;\n}\n\na:focus {\n    outline: 0 solid;\n}\n\na,\na:hover,\na:focus {\n    transition: all 500ms ease 0s;\n    text-decoration: none;\n    outline: none;\n    color: rgb(37, 42, 51);\n    font-weight: 400;\n}\n\nul,\nol {\n    margin: 0;\n}\n\nol li,\nul li {\n    list-style: outside none none;\n}\n\nimg {\n    height: auto;\n    max-width: 100%;\n}\n\n.background-overlay,\n.background-overlay-white {\n    position: relative;\n    z-index: 2;\n    background-position: center center;\n    background-size: cover;\n}\n\n.background-overlay:before,\n.background-overlay-white:before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\";\n}\n\n.background-overlay:before {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.background-overlay-white:before {\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.mb-100 {\n    margin-bottom: 100px;\n}\n\n.bg-img {\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.bg-transparent {\n    background-color: transparent;\n}\n\n.bg-transparent-dark {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.bg-transparent-light {\n    background-color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.bg-dark3 {\n    background-color: rgba(0, 0, 0, 0.75) !important;\n}\n\n.bg-dark2 {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.font-bold {\n    font-weight: 700;\n}\n\n.font-light {\n    font-weight: 300;\n}\n\n.line,\n.line-mtb15 {\n    width: 100%;\n    height: 1px;\n    background-color: #ddd;\n    margin: 30px 0;\n}\n\n.line-mtb15 {\n    margin: 15px 0;\n}\n\n.height-500 {\n    height: 500px !important;\n}\n\n.height-600 {\n    height: 600px !important;\n}\n\n.height-700 {\n    height: 700px !important;\n}\n\n.height-800 {\n    height: 800px !important;\n}\n\n#scrollUp {\n    background-color: rgb(210, 57, 59);\n    border-radius: 0;\n    bottom: 0;\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n    color: #fff;\n    font-size: 24px;\n    height: 40px;\n    line-height: 40px;\n    right: 60px;\n    text-align: center;\n    width: 40px;\n}\n\n/* \n/////////////////////////////////////////\n//////////////// Modal  //////////////////////// */\n\n#quickview button.close {\n    box-shadow: none;\n    position: absolute;\n    right: 15px;\n    text-align: right;\n    top: 10px;\n    z-index: 9;\n}\n\n.fade {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%\n}\n\n.quickview_body {\n    overflow: hidden;\n    text-align: center;\n}\n\n.quickview_pro_img {\n    border: 1px solid #f6f6f6;\n    position: relative;\n    width: 100%;\n    z-index: 1;\n}\n\n.quickview_pro_img .hover_img {\n    left: 0;\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    position: absolute;\n    top: -30px;\n    transition-duration: 500ms;\n}\n\n.quickview_pro_img:hover .hover_img {\n    top: 0;\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.quickview_pro_des .title {\n    text-transform: capitalize;\n}\n\n.quickview_pro_des {\n    padding: 30px 0;\n}\n\n.quickview_pro_des .price>span {\n    color: #888;\n    font-size: 14px;\n    text-decoration: line-through;\n}\n\n.quickview_pro_des>p {\n    font-size: 13px;\n}\n\n.quickview_pro_des>a {\n    color: #19B5FE;\n    font-size: 13px;\n    text-decoration: underline;\n}\n\n.quickview_body .quantity>input {\n    -moz-appearance: textfield;\n    border: 1px solid #f6f6f6;\n    height: 35px;\n    text-align: center;\n    width: 40px;\n    font-size: 13px;\n}\n\n.quickview_body .quantity {\n    align-items: center;\n    display: flex;\n}\n\n.quickview_body .cart {\n    display: flex;\n}\n\n.quickview_body .qty-plus,\n.quickview_body .qty-minus {\n    background-color: transparent;\n    border: 1px solid #f6f6f6;\n    color: #000;\n    cursor: pointer;\n    height: 35px;\n    text-align: center;\n    width: 22px;\n}\n\n.quickview_body .qty-plus {\n    border-left: 0 solid transparent;\n}\n\n.quickview_body .qty-minus {\n    border-right: 0 solid transparent;\n}\n\n.quickview_body .cart-submit {\n    background-color: rgb(210, 57, 59);\n    border: medium none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 13px;\n    height: 35px;\n    margin-left: 15px;\n    width: 120px;\n    transition-duration: 500ms;\n}\n\n.quickview_body .cart-submit:hover {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n}\n\n.quickview_body .qty-minus i,\n.quickview_body .qty-plus i {\n    color: #888;\n    font-size: 10px;\n    line-height: 33px;\n}\n\n.quickview_body .modal_pro_wishlist>a,\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n    display: block;\n    height: 35px;\n    margin: 0 15px;\n    text-align: center;\n    width: 35px;\n    font-size: 22px;\n}\n\n.quickview_body .modal_pro_wishlist>a:hover,\n.quickview_body .modal_pro_compare>a:hover {\n    background-color: #000;\n    color: #fff;\n}\n\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(37, 42, 51);\n    margin: 0;\n}\n\n.quickview_body .modal_pro_wishlist>a i,\n.quickview_body .modal_pro_compare>a i {\n    line-height: 35px;\n}\n\n.quickview_body .share_wf>p {\n    font-size: 13px;\n    margin-bottom: 5px;\n    text-transform: capitalize;\n}\n\n.quickview_body .share_wf ._icon>a {\n    color: #888;\n    font-size: 14px;\n    margin-right: 5px;\n}\n\n.quickview_body .share_wf ._icon>a:hover {\n    color: #000;\n}\n\n.quickview_body .top_seller_product_rating>i {\n    color: #ff9800;\n    font-size: 13px;\n}\n\n.section_padding_100_0 {\n    padding: 100px 0 0;\n}\n\n.section_padding_0_100 {\n    padding: 0 0 100px;\n}\n\n.section_heading {\n    margin-bottom: 50px;\n    position: relative;\n    z-index: 1;\n}\n\n.section_heading h2 {\n    font-size: 48px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n}\n\n.section_heading.text-left {\n    text-align: left !important;\n}\n\n.karl-btn {\n    display: inline-block;\n    min-width: 170px;\n    height: 55px;\n    color: #fff;\n    border: 3px solid #fff;\n    border-radius: 2px;\n    padding: 0 30px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 49px;\n}\n\n.karl-btn:hover,\n.karl-btn:focus {\n    font-weight: 700;\n    color: #fff;\n    background-color: rgb(37, 42, 51);\n    border-color: rgb(37, 42, 51);\n}\n\n.product-img {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n}\n\n.product-img>img {\n    width: 100%;\n    transition-duration: 500ms;\n}\n\n.single_gallery_item:hover .product-img>img {\n    transform: scale(1.15);\n}\n\n.product-img .product-quicview {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(23, 24, 24, 0.6);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    transition-duration: 500ms;\n}\n\n.product-img:hover .product-quicview {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n\n.product-img .product-quicview>a {\n    width: 72px;\n    height: 72px;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    border-radius: 50%;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 36px;\n    line-height: 72px;\n}\n\n.product-img .product-quicview>a:hover {\n    border: 2px solid rgba(255, 255, 255, 1);\n    color: rgba(255, 255, 255, 1);\n}\n\n.product-description {\n    margin-top: 20px;\n}\n\n.product-description h4 {\n    font-weight: 400;\n    color: rgb(210, 57, 59);\n    margin-bottom: 5px;\n    display: block;\n}\n\n.product-description p {\n    font-size: 20px;\n    margin: 0;\n    color: rgb(37, 42, 51)\n}\n\n.product-description .add-to-cart-btn {\n    margin-top: 50px;\n    font-size: 12px;\n    font-weight: 700;\n    color: rgb(210, 57, 59);\n    display: block;\n}\n\n.product-description .add-to-cart-btn:hover {\n    color: rgb(210, 57, 59);\n}\n\n.container {\n  margin: auto;\n  padding: auto;\n  width: 100%;\n}\n\n.main {\n  margin-left: -40px;\n}\n\n.sub {\n  margin-right: 40px;\n}\n\nform label {\n  font-size: 16px;\n  font-weight: 600;\n}\n\nform label span {\n  color: #ff084e;\n}\n\nform input {\n  height: 40px;\n  font-size: 20px;\n}\n\n.karl-checkout {\n  background-color: #d2393b;\n  display: block;\n  height: 55px;\n  color: #fff;\n  border: 3px solid #fff;\n  border-radius: 2px;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 49px;\n}\n\n.karl-checkout:hover,\n.karl-checkout:focus {\n  font-weight: 700;\n  color: #fff;\n  background-color: #252a33;\n  border-color: #252a33;\n}\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n\n.alert {\n  font-size: 15px;\n  display: block;\n}\n\n.rules {\n  border: 5px double black;\n  font-weight: 600;\n  margin: auto;\n}\n\nbutton:disabled {\n  background-color: #e6e1e1;\n  color: #615d5d;\n  cursor: auto;\n}\n\n@media (max-width: 768px) {\n  .main {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4uY3NzIiwiLi4vLi4vLi4vLi4vY3JlYXRlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7O0lBTUksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUlJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksU0FBUztBQUNiOztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFn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Q0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTs7RUFFSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7O0VBRUksOEJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxnQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiY3JlYXRlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnAge1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwIHNvbGlkO1xufVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UgMHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UgMHM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG51bCxcbm9sIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbm9sIGxpLFxudWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXksXG4uYmFja2dyb3VuZC1vdmVybGF5LXdoaXRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXk6YmVmb3JlLFxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogXCJcIjtcbn1cblxuLmJhY2tncm91bmQtb3ZlcmxheTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLm1iLTEwMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQtZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudC1saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyazIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9udC1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmxpbmUsXG4ubGluZS1tdGIxNSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBtYXJnaW46IDMwcHggMDtcbn1cblxuLmxpbmUtbXRiMTUge1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaGVpZ2h0LTUwMCB7XG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTYwMCB7XG4gICAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTcwMCB7XG4gICAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVpZ2h0LTgwMCB7XG4gICAgaGVpZ2h0OiA4MDBweCAhaW1wb3J0YW50O1xufVxuXG4jc2Nyb2xsVXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgcmlnaHQ6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG5cbi8qIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8gTW9kYWwgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4jcXVpY2t2aWV3IGJ1dHRvbi5jbG9zZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdG9wOiAxMHB4O1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi5mYWRlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJVxufVxuXG4ucXVpY2t2aWV3X2JvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXVpY2t2aWV3X3Byb19pbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2ltZyAuaG92ZXJfaW1nIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2ltZzpob3ZlciAuaG92ZXJfaW1nIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzIC50aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2RlcyB7XG4gICAgcGFkZGluZzogMzBweCAwO1xufVxuXG4ucXVpY2t2aWV3X3Byb19kZXMgLnByaWNlPnNwYW4ge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzPnAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzPmEge1xuICAgIGNvbG9yOiAjMTlCNUZFO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdWFudGl0eT5pbnB1dCB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y2ZjZmNjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdWFudGl0eSB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5jYXJ0IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzLFxuLnF1aWNrdmlld19ib2R5IC5xdHktbWludXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIycHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXR5LXBsdXMge1xuICAgIGJvcmRlci1sZWZ0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1taW51cyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLmNhcnQtc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuY2FydC1zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXR5LW1pbnVzIGksXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzIGkge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YSxcbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YTpob3Zlcixcbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fY29tcGFyZT5hIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb193aXNobGlzdD5hIGksXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb19jb21wYXJlPmEgaSB7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuc2hhcmVfd2Y+cCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5zaGFyZV93ZiAuX2ljb24+YSB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnNoYXJlX3dmIC5faWNvbj5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC50b3Bfc2VsbGVyX3Byb2R1Y3RfcmF0aW5nPmkge1xuICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlY3Rpb25fcGFkZGluZ18xMDBfMCB7XG4gICAgcGFkZGluZzogMTAwcHggMCAwO1xufVxuXG4uc2VjdGlvbl9wYWRkaW5nXzBfMTAwIHtcbiAgICBwYWRkaW5nOiAwIDAgMTAwcHg7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcgaDIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uX2hlYWRpbmcudGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5rYXJsLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xufVxuXG4ua2FybC1idG46aG92ZXIsXG4ua2FybC1idG46Zm9jdXMge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LWltZz5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5zaW5nbGVfZ2FsbGVyeV9pdGVtOmhvdmVyIC5wcm9kdWN0LWltZz5pbWcge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4ucHJvZHVjdC1pbWcgLnByb2R1Y3QtcXVpY3ZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMjQsIDI0LCAwLjYpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbi5wcm9kdWN0LWltZzpob3ZlciAucHJvZHVjdC1xdWljdmlldyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3PmEge1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNzJweDtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3PmE6aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKVxufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiAuYWRkLXRvLWNhcnQtYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9tYWluLmNzcyc7XG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnN1YiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZm9ybSBsYWJlbCBzcGFuIHtcbiAgICBjb2xvcjogI2ZmMDg0ZTtcbn1cblxuZm9ybSBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmthcmwtY2hlY2tvdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG5cbi5rYXJsLWNoZWNrb3V0OmhvdmVyLFxuLmthcmwtY2hlY2tvdXQ6Zm9jdXMge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xufVxuXG4ubmctdmFsaWRbcmVxdWlyZWRdLFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XG4gICAgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gICAgLyogcmVkICovXG59XG5cbi5hbGVydCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucnVsZXMge1xuICAgIGJvcmRlcjogNXB4IGRvdWJsZSBibGFjaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMjUsIDIyNSk7XG4gICAgY29sb3I6IHJnYig5NywgOTMsIDkzKTtcbiAgICBjdXJzb3I6IGF1dG87XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLm1haW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "y2ja":
/*!***************************************!*\
  !*** ./src/app/_alert/alert.model.ts ***!
  \***************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yu9E":
/*!***************************************************************************!*\
  !*** ./src/app/Components/product-details/product-details.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    font-weight: 400;\n    overflow-x: hidden;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: rgb(37, 42, 51);\n    line-height: 1.2;\n    font-weight: 700;\n}\np {\n    color: rgb(37, 42, 51);\n    font-size: 1em;\n    line-height: 1.5;\n    font-weight: 400;\n}\na:focus {\n    outline: 0 solid;\n}\na,\na:hover,\na:focus {\n    transition: all 500ms ease 0s;\n    text-decoration: none;\n    outline: none;\n    color: rgb(37, 42, 51);\n    font-weight: 400;\n}\nul,\nol {\n    margin: 0;\n}\nol li,\nul li {\n    list-style: outside none none;\n}\nimg {\n    height: auto;\n    max-width: 100%;\n}\n.background-overlay,\n.background-overlay-white {\n    position: relative;\n    z-index: 2;\n    background-position: center center;\n    background-size: cover;\n}\n.background-overlay:before,\n.background-overlay-white:before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\";\n}\n.background-overlay:before {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n.background-overlay-white:before {\n    background-color: rgba(255, 255, 255, 0.9);\n}\n.mb-100 {\n    margin-bottom: 100px;\n}\n.bg-img {\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.bg-transparent {\n    background-color: transparent;\n}\n.bg-transparent-dark {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.bg-transparent-light {\n    background-color: rgba(255, 255, 255, 0.5) !important;\n}\n.bg-dark3 {\n    background-color: rgba(0, 0, 0, 0.75) !important;\n}\n.bg-dark2 {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.font-bold {\n    font-weight: 700;\n}\n.font-light {\n    font-weight: 300;\n}\n.line,\n.line-mtb15 {\n    width: 100%;\n    height: 1px;\n    background-color: #ddd;\n    margin: 30px 0;\n}\n.line-mtb15 {\n    margin: 15px 0;\n}\n.height-500 {\n    height: 500px !important;\n}\n.height-600 {\n    height: 600px !important;\n}\n.height-700 {\n    height: 700px !important;\n}\n.height-800 {\n    height: 800px !important;\n}\n#scrollUp {\n    background-color: rgb(210, 57, 59);\n    border-radius: 0;\n    bottom: 0;\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n    color: #fff;\n    font-size: 24px;\n    height: 40px;\n    line-height: 40px;\n    right: 60px;\n    text-align: center;\n    width: 40px;\n}\n/* \n/////////////////////////////////////////\n//////////////// Modal  //////////////////////// */\n#quickview button.close {\n    box-shadow: none;\n    position: absolute;\n    right: 15px;\n    text-align: right;\n    top: 10px;\n    z-index: 9;\n}\n.fade {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%\n}\n.quickview_body {\n    overflow: hidden;\n    text-align: center;\n}\n.quickview_pro_img {\n    border: 1px solid #f6f6f6;\n    position: relative;\n    width: 100%;\n    z-index: 1;\n}\n.quickview_pro_img .hover_img {\n    left: 0;\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    position: absolute;\n    top: -30px;\n    transition-duration: 500ms;\n}\n.quickview_pro_img:hover .hover_img {\n    top: 0;\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n.quickview_pro_des .title {\n    text-transform: capitalize;\n}\n.quickview_pro_des {\n    padding: 30px 0;\n}\n.quickview_pro_des .price>span {\n    color: #888;\n    font-size: 14px;\n    text-decoration: line-through;\n}\n.quickview_pro_des>p {\n    font-size: 13px;\n}\n.quickview_pro_des>a {\n    color: #19B5FE;\n    font-size: 13px;\n    text-decoration: underline;\n}\n.quickview_body .quantity>input {\n    -moz-appearance: textfield;\n    border: 1px solid #f6f6f6;\n    height: 35px;\n    text-align: center;\n    width: 40px;\n    font-size: 13px;\n}\n.quickview_body .quantity {\n    align-items: center;\n    display: flex;\n}\n.quickview_body .cart {\n    display: flex;\n}\n.quickview_body .qty-plus,\n.quickview_body .qty-minus {\n    background-color: transparent;\n    border: 1px solid #f6f6f6;\n    color: #000;\n    cursor: pointer;\n    height: 35px;\n    text-align: center;\n    width: 22px;\n}\n.quickview_body .qty-plus {\n    border-left: 0 solid transparent;\n}\n.quickview_body .qty-minus {\n    border-right: 0 solid transparent;\n}\n.quickview_body .cart-submit {\n    background-color: rgb(210, 57, 59);\n    border: medium none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 13px;\n    height: 35px;\n    margin-left: 15px;\n    width: 120px;\n    transition-duration: 500ms;\n}\n.quickview_body .cart-submit:hover {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n}\n.quickview_body .qty-minus i,\n.quickview_body .qty-plus i {\n    color: #888;\n    font-size: 10px;\n    line-height: 33px;\n}\n.quickview_body .modal_pro_wishlist>a,\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(210, 57, 59);\n    color: #fff;\n    display: block;\n    height: 35px;\n    margin: 0 15px;\n    text-align: center;\n    width: 35px;\n    font-size: 22px;\n}\n.quickview_body .modal_pro_wishlist>a:hover,\n.quickview_body .modal_pro_compare>a:hover {\n    background-color: #000;\n    color: #fff;\n}\n.quickview_body .modal_pro_compare>a {\n    background-color: rgb(37, 42, 51);\n    margin: 0;\n}\n.quickview_body .modal_pro_wishlist>a i,\n.quickview_body .modal_pro_compare>a i {\n    line-height: 35px;\n}\n.quickview_body .share_wf>p {\n    font-size: 13px;\n    margin-bottom: 5px;\n    text-transform: capitalize;\n}\n.quickview_body .share_wf ._icon>a {\n    color: #888;\n    font-size: 14px;\n    margin-right: 5px;\n}\n.quickview_body .share_wf ._icon>a:hover {\n    color: #000;\n}\n.quickview_body .top_seller_product_rating>i {\n    color: #ff9800;\n    font-size: 13px;\n}\n.section_padding_100_0 {\n    padding: 100px 0 0;\n}\n.section_padding_0_100 {\n    padding: 0 0 100px;\n}\n.section_heading {\n    margin-bottom: 50px;\n    position: relative;\n    z-index: 1;\n}\n.section_heading h2 {\n    font-size: 48px;\n    margin-bottom: 0;\n    text-transform: uppercase;\n}\n.section_heading.text-left {\n    text-align: left !important;\n}\n.karl-btn {\n    display: inline-block;\n    min-width: 170px;\n    height: 55px;\n    color: #fff;\n    border: 3px solid #fff;\n    border-radius: 2px;\n    padding: 0 30px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 49px;\n}\n.karl-btn:hover,\n.karl-btn:focus {\n    font-weight: 700;\n    color: #fff;\n    background-color: rgb(37, 42, 51);\n    border-color: rgb(37, 42, 51);\n}\n.product-img {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n}\n.product-img>img {\n    width: 100%;\n    transition-duration: 500ms;\n}\n.single_gallery_item:hover .product-img>img {\n    transform: scale(1.15);\n}\n.product-img .product-quicview {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(23, 24, 24, 0.6);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    transition-duration: 500ms;\n}\n.product-img:hover .product-quicview {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n}\n.product-img .product-quicview>a {\n    width: 72px;\n    height: 72px;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    border-radius: 50%;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 36px;\n    line-height: 72px;\n}\n.product-img .product-quicview>a:hover {\n    border: 2px solid rgba(255, 255, 255, 1);\n    color: rgba(255, 255, 255, 1);\n}\n.product-description {\n    margin-top: 20px;\n}\n.product-description h4 {\n    font-weight: 400;\n    color: rgb(210, 57, 59);\n    margin-bottom: 5px;\n    display: block;\n}\n.product-description p {\n    font-size: 20px;\n    margin: 0;\n    color: rgb(37, 42, 51)\n}\n.product-description .add-to-cart-btn {\n    margin-top: 50px;\n    font-size: 12px;\n    font-weight: 700;\n    color: rgb(210, 57, 59);\n    display: block;\n}\n.product-description .add-to-cart-btn:hover {\n    color: rgb(210, 57, 59);\n}\n/* ------------------------\n:: 15.0 Breadcumb Area CSS\n------------------------ */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.relprd {\n  width: 30%;\n  margin: 10px;\n}\n.main {\n  margin: auto;\n  padding: auto;\n  width: 70%;\n}\n.breadcumb_area {\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n.breadcumb_area .breadcrumb {\n  margin-bottom: 0;\n  background-color: transparent;\n  padding: 0;\n}\n.breadcumb_area .breadcrumb-item,\n.breadcumb_area .breadcrumb-item > a {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.backToHome {\n  font-size: 12px;\n  margin-top: 25px;\n}\n/* ------------------------------\n:: 17.0 Product Details Area CSS\n------------------------------ */\n.single_product_thumb {\n  margin-bottom: 100px;\n}\n.single_product_thumb .carousel-indicators {\n  bottom: -86px;\n  justify-content: left;\n  left: 0;\n  margin: 0;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  width: 100%;\n}\n.animate__flash {\n  background-color: #d2393b;\n  color: whitesmoke;\n  text-align: center;\n  margin: 20px 0;\n  font-size: 30px;\n  padding: 15px;\n  font-style: italic;\n}\n.single_product_thumb .carousel-indicators li {\n  background-position: center center;\n  background-size: cover;\n  height: 80px;\n  width: 25%;\n}\n.single_product_thumb .carousel-inner {\n  border: 1px solid #ddd;\n  margin: 0 3px;\n  width: calc(100% - 6px);\n}\n.single_product_thumb .carousel-indicators li.active {\n  border: 1px solid #ddd;\n}\n.single_product_thumb .product_badge {\n  top: 30px;\n}\n.single_product_desc {\n  position: relative;\n  z-index: 1;\n}\n.single_product_desc .title {\n  font-size: 24px;\n  margin-bottom: 15px;\n}\n.single_product_desc .price {\n  margin-bottom: 15px;\n}\n.single_product_desc .available {\n  margin-bottom: 15px;\n  font-size: 12px;\n}\n.single_product_desc .single_product_ratings i {\n  color: #ff9800;\n  font-size: 14px;\n}\n.single_product_desc .single_product_ratings span {\n  font-size: 13px;\n}\n.single_product_desc .single_product_desc .price {\n  font-size: 18px;\n}\n.single_product_desc .short_overview > h6 {\n  font-size: 14px;\n}\n.single_product_desc .short_overview > p {\n  color: #888;\n  font-size: 14px;\n  font-weight: 300;\n}\n.single_product_desc .custom-control {\n  margin-right: 0;\n}\n.single_product_desc .widget.size .widget-desc a {\n  font-size: 12px;\n  padding: 0;\n  width: 37px;\n  height: 37px;\n  border: 2px solid #3a3a3a;\n  font-weight: 700;\n  text-align: center;\n  line-height: 33px;\n}\n.single_product_desc .widget.size .widget-desc a:hover,\n.single_product_desc .widget.size .widget-desc a:focus {\n  border: 2px solid #d2393b;\n  background-color: #d2393b;\n}\n.single_product_desc .widget.size {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.single_product_desc .cart .qty-text {\n  border: 1px solid #ddd;\n  height: 40px;\n  padding: 5px 15px;\n  width: 140px;\n  -moz-appearance: textfield;\n  -webkit-appearance: textfield;\n  appearance: textfield;\n  font-size: 14px;\n}\n.single_product_desc .cart .quantity {\n  display: inline-block;\n  float: left;\n  position: relative;\n  z-index: 1;\n}\n.single_product_desc .cart .qty-minus,\n.single_product_desc .cart .qty-plus {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  display: block;\n  height: 20px;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 30px;\n  z-index: 99;\n  cursor: pointer;\n  font-size: 10px;\n  line-height: 20px;\n  color: #888;\n}\n.single_product_desc .cart .qty-plus {\n  top: auto;\n  bottom: 0;\n}\n.single_product_desc .cart .cart-submit {\n  background-color: #d2393b;\n  border: medium none;\n  color: #fff;\n  font-size: 14px;\n  height: 40px;\n  margin-left: 15px;\n  text-transform: uppercase;\n  width: 150px;\n  cursor: pointer;\n  border-radius: 0;\n}\n.single_product_desc .card-header {\n  padding: 30px 15px;\n  margin-bottom: 0;\n  background-color: transparent;\n  border-bottom: 2px solid #ebebeb;\n}\n.single_product_desc .card-header h6 a {\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.single_product_desc .card-body p {\n  font-size: 14px;\n  color: #9f9f9f;\n}\n.single_product_desc .card {\n  border: none;\n}\n.single_product_desc .card:first-child {\n  border-top: 2px solid #ebebeb;\n  border-bottom: none;\n  border-left: none;\n  border-radius: 0;\n  border-right: none;\n}\n.modal-backdrop.show {\n  display: none !important;\n}\n.modal-content {\n  box-shadow: 1px 10px 30px rgba(0, 0, 0, 0.15);\n  border: 1px solid #ebebeb;\n}\n.mb-50 {\n  margin-bottom: 30px;\n}\n.karl-checkout {\n  background-color: #d2393b;\n  display: block;\n  height: 55px;\n  color: #fff;\n  border: 3px solid #fff;\n  border-radius: 2px;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 49px;\n}\n.karl-checkout:hover,\n.karl-checkout:focus {\n  font-weight: 700;\n  color: #fff;\n  background-color: #252a33;\n  border-color: #252a33;\n}\n.comment-box {\n  padding: 5px;\n}\n.comment-area textarea {\n  resize: none;\n  border: 1px solid #252a33;\n}\n.form-control:focus {\n  color: #252a33;\n  background-color: #fff;\n  border-color: #ffffff;\n  outline: 0;\n  box-shadow: 0 0 0 1px #0cb30c !important;\n}\n.send {\n  color: #fff;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n.send:hover {\n  color: #fff;\n  background-color: #f50202;\n  border-color: #f50202;\n}\n.rating {\n  display: inline-flex;\n  flex-direction: row-reverse;\n  text-align: center;\n}\n.rating > input {\n  display: none;\n}\n.rating > label {\n  position: relative;\n  width: 28px;\n  font-size: 35px;\n  color: #d2393b;\n  cursor: pointer;\n}\n.rating > label::before {\n  content: \"★\";\n  position: absolute;\n  opacity: 0;\n}\n.rating > label:hover:before,\n.rating > label:hover ~ label:before {\n  opacity: 1 !important;\n}\n.rating > input:checked ~ label:before {\n  opacity: 1;\n}\n.rating:hover > input:checked ~ label:before {\n  opacity: 0.4;\n}\n.widget .panel-body {\n  padding: 0px;\n}\n.widget .list-group {\n  margin-bottom: 0;\n}\n.widget .label-info {\n  float: right;\n}\n.widget li.list-group-item {\n  border-radius: 0;\n  border: 0;\n  border-top: 1px solid #ddd;\n}\n.widget li.list-group-item:hover {\n  background-color: rgba(86, 61, 124, 0.1);\n}\n.widget .mic-info {\n  color: #666666;\n  font-size: 11px;\n}\n.widget .action {\n  margin-top: 5px;\n}\n.widget .comment-text {\n  font-size: 12px;\n}\n.widget .btn-block {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n#button1 {\n  display: inline-block;\n  padding-bottom: 5px;\n  padding-left: 7px;\n  padding-right: 7px;\n  margin-right: 44px;\n}\n#button2 {\n  display: inline-block;\n  padding-bottom: 5px;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL21haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTs7Ozs7O0lBTUksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7OztJQUlJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxTQUFTO0FBQ2I7QUFFQTs7SUFFSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7QUFFQTtJQUNJLHFEQUFxRDtBQUN6RDtBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEO0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BC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Z0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUZKO0FBS0E7RUFDSSxZQUFBO0FBRko7QUFLQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQUZKO0FBS0E7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQUZKO0FBS0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUZKO0FBS0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUZKO0FBS0E7RUFDSSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtBO0VBQ0ksYUFBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGSjtBQUtBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZKO0FBS0E7O0VBRUkscUJBQUE7QUFGSjtBQUtBO0VBQ0ksVUFBQTtBQUZKO0FBS0E7RUFDSSxZQUFBO0FBRko7QUFLQTtFQUNJLFlBQUE7QUFGSjtBQUtBO0VBQ0ksZ0JBQUE7QUFGSjtBQUtBO0VBQ0ksWUFBQTtBQUZKO0FBS0E7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQUZKO0FBS0E7RUFDSSx3Q0FBQTtBQUZKO0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0E7RUFDSSxlQUFBO0FBRko7QUFLQTtFQUNJLGVBQUE7QUFGSjtBQUtBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQUZKO0FBS0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRkoiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vbWFpbi5jc3MnO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjo6IDE1LjAgQnJlYWRjdW1iIEFyZWEgQ1NTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnJlbHByZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5tYWluIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogYXV0bztcbiAgICB3aWR0aDogNzAlO1xufVxuXG4uYnJlYWRjdW1iX2FyZWEge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuLmJyZWFkY3VtYl9hcmVhIC5icmVhZGNydW1iIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5icmVhZGN1bWJfYXJlYSAuYnJlYWRjcnVtYi1pdGVtLFxuLmJyZWFkY3VtYl9hcmVhIC5icmVhZGNydW1iLWl0ZW0+YSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYmFja1RvSG9tZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG46OiAxNy4wIFByb2R1Y3QgRGV0YWlscyBBcmVhIENTU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zaW5nbGVfcHJvZHVjdF90aHVtYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5zaW5nbGVfcHJvZHVjdF90aHVtYiAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgYm90dG9tOiAtODZweDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBsZWZ0O1xuICAgIC1tcy1mbGV4LXBhY2s6IGxlZnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbmltYXRlX19mbGFzaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfdGh1bWIgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLnNpbmdsZV9wcm9kdWN0X3RodW1iIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfdGh1bWIgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfdGh1bWIgLnByb2R1Y3RfYmFkZ2Uge1xuICAgIHRvcDogMzBweDtcbn1cblxuLnNpbmdsZV9wcm9kdWN0X2Rlc2Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAucHJpY2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zaW5nbGVfcHJvZHVjdF9kZXNjIC5hdmFpbGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAuc2luZ2xlX3Byb2R1Y3RfcmF0aW5ncyBpIHtcbiAgICBjb2xvcjogI2ZmOTgwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zaW5nbGVfcHJvZHVjdF9kZXNjIC5zaW5nbGVfcHJvZHVjdF9yYXRpbmdzIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNpbmdsZV9wcm9kdWN0X2Rlc2MgLnNpbmdsZV9wcm9kdWN0X2Rlc2MgLnByaWNlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaW5nbGVfcHJvZHVjdF9kZXNjIC5zaG9ydF9vdmVydmlldz5oNiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAuc2hvcnRfb3ZlcnZpZXc+cCB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zaW5nbGVfcHJvZHVjdF9kZXNjIC5jdXN0b20tY29udHJvbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAud2lkZ2V0LnNpemUgLndpZGdldC1kZXNjIGEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAzN3B4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2EzYTNhO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAud2lkZ2V0LnNpemUgLndpZGdldC1kZXNjIGE6aG92ZXIsXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAud2lkZ2V0LnNpemUgLndpZGdldC1kZXNjIGE6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTAsIDU3LCA1OSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbn1cblxuLnNpbmdsZV9wcm9kdWN0X2Rlc2MgLndpZGdldC5zaXplIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAuY2FydCAucXR5LXRleHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAuY2FydCAucXVhbnRpdHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnNpbmdsZV9wcm9kdWN0X2Rlc2MgLmNhcnQgLnF0eS1taW51cyxcbi5zaW5nbGVfcHJvZHVjdF9kZXNjIC5jYXJ0IC5xdHktcGx1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjODg4O1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAuY2FydCAucXR5LXBsdXMge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG59XG5cbi5zaW5nbGVfcHJvZHVjdF9kZXNjIC5jYXJ0IC5jYXJ0LXN1Ym1pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5zaW5nbGVfcHJvZHVjdF9kZXNjIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmViZWI7XG59XG5cbi5zaW5nbGVfcHJvZHVjdF9kZXNjIC5jYXJkLWhlYWRlciBoNiBhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2luZ2xlX3Byb2R1Y3RfZGVzYyAuY2FyZC1ib2R5IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzlmOWY5Zjtcbn1cblxuLnNpbmdsZV9wcm9kdWN0X2Rlc2MgLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnNpbmdsZV9wcm9kdWN0X2Rlc2MgLmNhcmQ6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWJlYmViO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgICBib3gtc2hhZG93OiAxcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbn1cblxuLm1iLTUwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ua2FybC1jaGVja291dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbn1cblxuLmthcmwtY2hlY2tvdXQ6aG92ZXIsXG4ua2FybC1jaGVja291dDpmb2N1cyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG59XG5cbi5jb21tZW50LWJveCB7XG4gICAgcGFkZGluZzogNXB4XG59XG5cbi5jb21tZW50LWFyZWEgdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzcsIDQyLCA1MSlcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2IoMTIsIDE3OSwgMTIpICFpbXBvcnRhbnRcbn1cblxuLnNlbmQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmYwMDAwXG59XG5cbi5zZW5kOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwMjAyO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1MDIwMlxufVxuXG4ucmF0aW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmF0aW5nPmlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmF0aW5nPmxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGN1cnNvcjogcG9pbnRlclxufVxuXG4ucmF0aW5nPmxhYmVsOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyNjA1XCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDBcbn1cblxuLnJhdGluZz5sYWJlbDpob3ZlcjpiZWZvcmUsXG4ucmF0aW5nPmxhYmVsOmhvdmVyfmxhYmVsOmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50XG59XG5cbi5yYXRpbmc+aW5wdXQ6Y2hlY2tlZH5sYWJlbDpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDFcbn1cblxuLnJhdGluZzpob3Zlcj5pbnB1dDpjaGVja2VkfmxhYmVsOmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMC40XG59XG5cbi53aWRnZXQgLnBhbmVsLWJvZHkge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLndpZGdldCAubGlzdC1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLndpZGdldCAubGFiZWwtaW5mbyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ud2lkZ2V0IGxpLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi53aWRnZXQgbGkubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg2LCA2MSwgMTI0LCAuMSk7XG59XG5cbi53aWRnZXQgLm1pYy1pbmZvIHtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi53aWRnZXQgLmFjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ud2lkZ2V0IC5jb21tZW50LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLndpZGdldCAuYnRuLWJsb2NrIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbn1cblxuI2J1dHRvbjEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQ0cHg7XG59XG5cbiNidXR0b24yIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG59IiwiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5wIHtcbiAgICBjb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYTpmb2N1cyB7XG4gICAgb3V0bGluZTogMCBzb2xpZDtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlIDBzO1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlIDBzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxudWwsXG5vbCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5vbCBsaSxcbnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uYmFja2dyb3VuZC1vdmVybGF5LFxuLmJhY2tncm91bmQtb3ZlcmxheS13aGl0ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmFja2dyb3VuZC1vdmVybGF5OmJlZm9yZSxcbi5iYWNrZ3JvdW5kLW92ZXJsYXktd2hpdGU6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXk6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5iYWNrZ3JvdW5kLW92ZXJsYXktd2hpdGU6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi5tYi0xMDAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uYmctaW1nIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJnLXRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJnLXRyYW5zcGFyZW50LWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQtbGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyazMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSkgIWltcG9ydGFudDtcbn1cblxuLmJnLWRhcmsyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvbnQtbGlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5saW5lLFxuLmxpbmUtbXRiMTUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5saW5lLW10YjE1IHtcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmhlaWdodC01MDAge1xuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlaWdodC02MDAge1xuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlaWdodC03MDAge1xuICAgIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlaWdodC04MDAge1xuICAgIGhlaWdodDogODAwcHggIWltcG9ydGFudDtcbn1cblxuI3Njcm9sbFVwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHJpZ2h0OiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuXG4vKiBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vIE1vZGFsICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cblxuI3F1aWNrdmlldyBidXR0b24uY2xvc2Uge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRvcDogMTBweDtcbiAgICB6LWluZGV4OiA5O1xufVxuXG4uZmFkZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCVcbn1cblxuLnF1aWNrdmlld19ib2R5IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnF1aWNrdmlld19wcm9faW1nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjZmNmY2O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucXVpY2t2aWV3X3Byb19pbWcgLmhvdmVyX2ltZyB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4ucXVpY2t2aWV3X3Byb19pbWc6aG92ZXIgLmhvdmVyX2ltZyB7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2RlcyAudGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucXVpY2t2aWV3X3Byb19kZXMge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbn1cblxuLnF1aWNrdmlld19wcm9fZGVzIC5wcmljZT5zcGFuIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2Rlcz5wIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5xdWlja3ZpZXdfcHJvX2Rlcz5hIHtcbiAgICBjb2xvcjogIzE5QjVGRTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXVhbnRpdHk+aW5wdXQge1xuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjY7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAucXVhbnRpdHkge1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuY2FydCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdHktcGx1cyxcbi5xdWlja3ZpZXdfYm9keSAucXR5LW1pbnVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjZmNmY2O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMnB4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1wbHVzIHtcbiAgICBib3JkZXItbGVmdDogMCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5xdHktbWludXMge1xuICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5jYXJ0LXN1Ym1pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLmNhcnQtc3VibWl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA1NywgNTkpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnF0eS1taW51cyBpLFxuLnF1aWNrdmlld19ib2R5IC5xdHktcGx1cyBpIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX3dpc2hsaXN0PmEsXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb19jb21wYXJlPmEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzVweDtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX3dpc2hsaXN0PmE6aG92ZXIsXG4ucXVpY2t2aWV3X2JvZHkgLm1vZGFsX3Byb19jb21wYXJlPmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAubW9kYWxfcHJvX2NvbXBhcmU+YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MiwgNTEpO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fd2lzaGxpc3Q+YSBpLFxuLnF1aWNrdmlld19ib2R5IC5tb2RhbF9wcm9fY29tcGFyZT5hIGkge1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4ucXVpY2t2aWV3X2JvZHkgLnNoYXJlX3dmPnAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAuc2hhcmVfd2YgLl9pY29uPmEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnF1aWNrdmlld19ib2R5IC5zaGFyZV93ZiAuX2ljb24+YTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5xdWlja3ZpZXdfYm9keSAudG9wX3NlbGxlcl9wcm9kdWN0X3JhdGluZz5pIHtcbiAgICBjb2xvcjogI2ZmOTgwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zZWN0aW9uX3BhZGRpbmdfMTAwXzAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMDtcbn1cblxuLnNlY3Rpb25fcGFkZGluZ18wXzEwMCB7XG4gICAgcGFkZGluZzogMCAwIDEwMHB4O1xufVxuXG4uc2VjdGlvbl9oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uc2VjdGlvbl9oZWFkaW5nIGgyIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2VjdGlvbl9oZWFkaW5nLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ua2FybC1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbn1cblxuLmthcmwtYnRuOmhvdmVyLFxuLmthcmwtYnRuOmZvY3VzIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbiAgICBib3JkZXItY29sb3I6IHJnYigzNywgNDIsIDUxKTtcbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZHVjdC1pbWc+aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4uc2luZ2xlX2dhbGxlcnlfaXRlbTpob3ZlciAucHJvZHVjdC1pbWc+aW1nIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXF1aWN2aWV3IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDI0LCAyNCwgMC42KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuXG4ucHJvZHVjdC1pbWc6aG92ZXIgLnByb2R1Y3QtcXVpY3ZpZXcge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG59XG5cbi5wcm9kdWN0LWltZyAucHJvZHVjdC1xdWljdmlldz5hIHtcbiAgICB3aWR0aDogNzJweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDcycHg7XG59XG5cbi5wcm9kdWN0LWltZyAucHJvZHVjdC1xdWljdmlldz5hOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24gaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiByZ2IoMzcsIDQyLCA1MSlcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24gLmFkZC10by1jYXJ0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogcmdiKDIxMCwgNTcsIDU5KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24gLmFkZC10by1jYXJ0LWJ0bjpob3ZlciB7XG4gICAgY29sb3I6IHJnYigyMTAsIDU3LCA1OSk7XG59Il19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map