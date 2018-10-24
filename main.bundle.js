webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/action-bar/action-bar-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionBarStateEnum; });
var ActionBarStateEnum;
(function (ActionBarStateEnum) {
    ActionBarStateEnum[ActionBarStateEnum["IDLE"] = 0] = "IDLE";
    ActionBarStateEnum[ActionBarStateEnum["TYPE"] = 1] = "TYPE";
    ActionBarStateEnum[ActionBarStateEnum["PROCESS"] = 2] = "PROCESS";
})(ActionBarStateEnum || (ActionBarStateEnum = {}));


/***/ }),

/***/ "./src/app/action-bar/action-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/action-bar/action-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" style=\"text-align:center;\">\r\n    <div class=\"col-12\" *ngIf=\"state === 0\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"newElementBtn()\" style=\"height: 50px; width: 30%;\">New Element</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"deleteElement()\" style=\"height: 50px; width: 30%;\" >Remove Element</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"beginSimulation()\" style=\"height: 50px; width: 30%;\">Simulate</button>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"state === 1\">\r\n        <span *ngFor=\"let type of types\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"typeBtn(type)\" style=\"height: 50px;\">\r\n                {{ type.name }}\r\n            </button>\r\n        </span>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"back()\" style=\"height: 50px;\">Back</button>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"state === 2\">\r\n        <span *ngFor=\"let process of processes\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addProcessBtn(process)\" style=\"height: 50px;\">\r\n                {{ process.name }}\r\n            </button>\r\n        </span>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"back()\" style=\"height: 50px;\">Back</button>\r\n    </div>\r\n    <!-- <div class=\"col-12\" *ngIf=\"state !== 0\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"back()\" style=\"height: 50px;\">Back</button>\r\n    </div> -->\r\n</nav>"

/***/ }),

/***/ "./src/app/action-bar/action-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action_bar_state__ = __webpack_require__("./src/app/action-bar/action-bar-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_scope__ = __webpack_require__("./src/app/classes/scope.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_process__ = __webpack_require__("./src/app/classes/process.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_process_service__ = __webpack_require__("./src/app/services/process.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_simulator_service__ = __webpack_require__("./src/app/services/simulator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toaster_js__ = __webpack_require__("./node_modules/toaster-js/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(processService, simulatorService) {
        this.processService = processService;
        this.simulatorService = simulatorService;
        this.processCache = new Array();
    }
    ActionBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.state = __WEBPACK_IMPORTED_MODULE_2__action_bar_state__["a" /* ActionBarStateEnum */].IDLE;
        this.processService.getProcessTypes()
            .subscribe(function (processTypes) { return _this.types = processTypes; });
    };
    ActionBarComponent.prototype.newElementBtn = function () {
        this.state = __WEBPACK_IMPORTED_MODULE_2__action_bar_state__["a" /* ActionBarStateEnum */].TYPE;
    };
    ActionBarComponent.prototype.typeBtn = function (type) {
        this.processes = type.processes;
        this.state = __WEBPACK_IMPORTED_MODULE_2__action_bar_state__["a" /* ActionBarStateEnum */].PROCESS;
    };
    ActionBarComponent.prototype.addProcessBtn = function (processContract) {
        var _this = this;
        this.state = __WEBPACK_IMPORTED_MODULE_2__action_bar_state__["a" /* ActionBarStateEnum */].IDLE;
        this.getProcess(processContract.id).subscribe(function (p) {
            var process = new __WEBPACK_IMPORTED_MODULE_4__classes_process__["a" /* Process */](p);
            _this.scope.stageHandler.newProcess(process);
        });
    };
    ActionBarComponent.prototype.deleteElement = function () {
        this.scope.stageHandler.deleteElement();
    };
    ActionBarComponent.prototype.beginSimulation = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_7_toaster_js__["a" /* Toast */]('Simulation start', __WEBPACK_IMPORTED_MODULE_7_toaster_js__["a" /* Toast */].TYPE_INFO, __WEBPACK_IMPORTED_MODULE_7_toaster_js__["a" /* Toast */].TIME_LONG);
        this.simulatorService.simulate(this.scope.stageHandler.stage.processes(), this.scope.stageHandler.stage.relationships)
            .subscribe(function (result) { return _this.scope.stageHandler.stage.setSimulationResults(result); });
    };
    ActionBarComponent.prototype.getProcess = function (processId) {
        var index = this.processCache.findIndex(function (p) { return p.id == processId; });
        if (index == -1) {
            return this.processService.getProcessById(processId);
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.processCache[index]);
        }
    };
    ActionBarComponent.prototype.back = function () {
        this.state = __WEBPACK_IMPORTED_MODULE_2__action_bar_state__["a" /* ActionBarStateEnum */].IDLE;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__classes_scope__["a" /* Scope */])
    ], ActionBarComponent.prototype, "scope", void 0);
    ActionBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-action-bar',
            template: __webpack_require__("./src/app/action-bar/action-bar.component.html"),
            styles: [__webpack_require__("./src/app/action-bar/action-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_process_service__["a" /* ProcessService */], __WEBPACK_IMPORTED_MODULE_6__services_simulator_service__["a" /* SimulatorService */]])
    ], ActionBarComponent);
    return ActionBarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simulator_interface_simulator_interface_component__ = __webpack_require__("./src/app/simulator-interface/simulator-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_editor_process_editor_component__ = __webpack_require__("./src/app/process-editor/process-editor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'simulator', component: __WEBPACK_IMPORTED_MODULE_2__simulator_interface_simulator_interface_component__["a" /* SimulatorInterfaceComponent */] },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_3__process_editor_process_editor_component__["a" /* ProcessEditorComponent */] },
    { path: '*', redirectTo: '/index.html' },
    { path: '', redirectTo: '/index.html', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LTSim';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pipes__ = __webpack_require__("./node_modules/ngx-pipes/ngx-pipes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__simulator_interface_simulator_interface_component__ = __webpack_require__("./src/app/simulator-interface/simulator-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__simulator_canvas_simulator_canvas_component__ = __webpack_require__("./src/app/simulator-canvas/simulator-canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__process_detail_process_detail_component__ = __webpack_require__("./src/app/process-detail/process-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__action_bar_action_bar_component__ = __webpack_require__("./src/app/action-bar/action-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_process_service__ = __webpack_require__("./src/app/services/process.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_simulator_service__ = __webpack_require__("./src/app/services/simulator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__parameter_detail_parameter_detail_component__ = __webpack_require__("./src/app/parameter-detail/parameter-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__process_editor_process_editor_component__ = __webpack_require__("./src/app/process-editor/process-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__parameter_editor_parameter_editor_component__ = __webpack_require__("./src/app/parameter-editor/parameter-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__result_editor_result_editor_component__ = __webpack_require__("./src/app/result-editor/result-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__script_editor_script_editor_component__ = __webpack_require__("./src/app/script-editor/script-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__result_detail_result_detail_component__ = __webpack_require__("./src/app/result-detail/result-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__input_detail_input_detail_component__ = __webpack_require__("./src/app/input-detail/input-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__output_detail_output_detail_component__ = __webpack_require__("./src/app/output-detail/output-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__simulator_interface_simulator_interface_component__["a" /* SimulatorInterfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_11__simulator_canvas_simulator_canvas_component__["a" /* SimulatorCanvasComponent */],
                __WEBPACK_IMPORTED_MODULE_12__process_detail_process_detail_component__["a" /* ProcessDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__action_bar_action_bar_component__["a" /* ActionBarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__parameter_detail_parameter_detail_component__["a" /* ParameterDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__process_editor_process_editor_component__["a" /* ProcessEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_18__parameter_editor_parameter_editor_component__["a" /* ParameterEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_19__result_editor_result_editor_component__["a" /* ResultEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_20__script_editor_script_editor_component__["a" /* ScriptEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__result_detail_result_detail_component__["a" /* ResultDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_22__input_detail_input_detail_component__["a" /* InputDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__output_detail_output_detail_component__["a" /* OutputDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pipes__["a" /* NgPipesModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__process_detail_process_detail_component__["a" /* ProcessDetailComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_process_service__["a" /* ProcessService */], __WEBPACK_IMPORTED_MODULE_15__services_simulator_service__["a" /* SimulatorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/containers/container-borders.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Borders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphs_container_border_line__ = __webpack_require__("./src/app/classes/graphs/container-border-line.ts");

var Borders = /** @class */ (function () {
    function Borders(parent) {
        this.parent = parent;
        this.top = new __WEBPACK_IMPORTED_MODULE_0__graphs_container_border_line__["a" /* ContainerBorderLine */]("top", this.parent);
        this.right = new __WEBPACK_IMPORTED_MODULE_0__graphs_container_border_line__["a" /* ContainerBorderLine */]("right", this.parent);
        this.bottom = new __WEBPACK_IMPORTED_MODULE_0__graphs_container_border_line__["a" /* ContainerBorderLine */]("bottom", this.parent);
        this.left = new __WEBPACK_IMPORTED_MODULE_0__graphs_container_border_line__["a" /* ContainerBorderLine */]("left", this.parent);
    }
    Borders.prototype.getBorders = function () {
        return [this.top, this.right, this.bottom, this.left];
    };
    return Borders;
}());



/***/ }),

/***/ "./src/app/classes/containers/process-container.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module__ = __webpack_require__("./node_modules/createjs-module/createjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_createjs_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_strongly_typed_events__ = __webpack_require__("./node_modules/strongly-typed-events/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_strongly_typed_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_strongly_typed_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_borders__ = __webpack_require__("./src/app/classes/containers/container-borders.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphs_point_border_point__ = __webpack_require__("./src/app/classes/graphs/point/border-point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extensions_container_extension__ = __webpack_require__("./src/app/classes/extensions/container-extension.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var ProcessContainer = /** @class */ (function (_super) {
    __extends(ProcessContainer, _super);
    function ProcessContainer() {
        var _this = _super.call(this) || this;
        _this._onShowDetail = new __WEBPACK_IMPORTED_MODULE_2_strongly_typed_events__["SimpleEventDispatcher"]();
        return _this;
    }
    ProcessContainer.prototype.start = function (process) {
        var _this = this;
        this.process = process;
        this.setBitmap(this.process.imagePath);
        this.x = 20;
        this.y = 20;
        this.process.modelStartup();
        this.addEventHandlersToProcessContainer(this);
        var borders = this.createBorders();
        borders.then(function (v) {
            _this.createRelationshipPoints();
        });
    };
    ProcessContainer.prototype.setBitmap = function (path) {
        var bitmap = new __WEBPACK_IMPORTED_MODULE_0_createjs_module__["Bitmap"](path);
        this.addChild(bitmap);
    };
    ProcessContainer.prototype.createRelationshipPoints = function () {
        this.createInputPoints();
        this.createOutputPoints();
    };
    ProcessContainer.prototype.createInputPoints = function () {
        var isInput = true;
        var posX = 0;
        for (var i = 0; i < this.process.inputLimit; i++) {
            var posY = (i + 1) / (this.process.inputLimit + 1);
            this.createPoint(i, isInput, posX, posY);
        }
    };
    ProcessContainer.prototype.createOutputPoints = function () {
        var isInput = false;
        var posX = 1;
        for (var i = 0; i < this.process.outputLimit; i++) {
            var posY = (i + 1) / (this.process.outputLimit + 1);
            this.createPoint(i, isInput, posX, posY);
        }
    };
    ProcessContainer.prototype.createPoint = function (arrayId, isInput, posX, posY) {
        var point = new __WEBPACK_IMPORTED_MODULE_4__graphs_point_border_point__["a" /* BorderPoint */](arrayId, isInput);
        this.addChild(point);
        point.setPosition(posX, posY);
        return point;
    };
    ProcessContainer.prototype.createBorders = function () {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            var bounds = _this.getBounds();
            if (bounds && bounds != null) {
                _this.borders = new __WEBPACK_IMPORTED_MODULE_3__container_borders__["a" /* Borders */](_this);
                resolve();
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_timer__["a" /* timer */])(50).subscribe(function (val) {
                    resolve(_this.createBorders());
                });
            }
        });
        return p;
    };
    ProcessContainer.prototype.addEventHandlersToProcessContainer = function (container) {
        container.on("mousedown", function (evt) {
            if (evt.nativeEvent.button == 0
                && this.stage.creatingRelationship == false
                && evt.target.parent == container) {
                this.stage.selectElement(this);
                this.offset = { x: this.x - evt.stageX, y: this.y - evt.stageY };
            }
            else if (evt.nativeEvent.button == 2) {
                var stage = this.stage;
                this.offset = null;
                stage.selectProcessContainer(this);
                this._onShowDetail.dispatch(this);
            }
        });
        // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
        container.on("pressmove", function (evt) {
            if (this.offset && this.offset != null && evt.target.parent == container) {
                this.x = evt.stageX + this.offset.x;
                this.y = evt.stageY + this.offset.y;
            }
        });
        container.on("dblclick", function (evt) {
            if (this.stage.creatingRelationship == false) {
                this.stage.selselectedElement(this);
                this.stage.creatingRelationship = true;
            }
            else if (this.stage.creatingRelationship == true) {
                this.addInputRelationship(this.stage.selectedElement);
                this.stage.creatingRelationship = false;
            }
        });
    };
    Object.defineProperty(ProcessContainer.prototype, "onShowDetail", {
        get: function () {
            return this._onShowDetail.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    ProcessContainer.prototype.deleteSelf = function () {
        var stage = this.stage;
        stage.removeChild(this);
        stage.removeProcess(this.process);
    };
    return ProcessContainer;
}(__WEBPACK_IMPORTED_MODULE_5__extensions_container_extension__["a" /* ContainerExtension */]));



/***/ }),

/***/ "./src/app/classes/default/distribution-default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultDistribution; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__distribution__ = __webpack_require__("./src/app/classes/distribution.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DefaultDistribution = /** @class */ (function (_super) {
    __extends(DefaultDistribution, _super);
    function DefaultDistribution() {
        var _this = this;
        var fixedIncrement = true;
        var increment = 10;
        var size = 15;
        var limit = 100;
        var startFromUp = false;
        _this = _super.call(this, fixedIncrement, increment, size, limit, startFromUp) || this;
        _this.SerDistributionTulio();
        return _this;
    }
    DefaultDistribution.prototype.SerDistributionTulio = function () {
        this.array[0].key = '2';
        this.array[1].key = '1';
        this.array[2].key = '0.5';
        this.array[3].key = '0.3';
        this.array[4].key = '0.15';
        this.array[5].key = '0.106';
        this.array[6].key = '0.075';
        this.array[7].key = '0.063';
        this.array[8].key = '0.045';
        this.array[9].key = '0.038';
        this.array[10].key = '0.02';
        this.array[11].key = '0.01';
        this.array[12].key = '0.005';
        this.array[13].key = '0.002';
        this.array[14].key = '0.001';
        this.array[15].key = '< 0.001';
        this.array[0].name = '2';
        this.array[1].name = '1';
        this.array[2].name = '0.5';
        this.array[3].name = '0.3';
        this.array[4].name = '0.15';
        this.array[5].name = '0.106';
        this.array[6].name = '0.075';
        this.array[7].name = '0.063';
        this.array[8].name = '0.045';
        this.array[9].name = '0.038';
        this.array[10].name = '0.02';
        this.array[11].name = '0.01';
        this.array[12].name = '0.005';
        this.array[13].name = '0.002';
        this.array[14].name = '0.001';
        this.array[15].name = '< 0.001';
    };
    return DefaultDistribution;
}(__WEBPACK_IMPORTED_MODULE_0__distribution__["a" /* Distribution */]));



/***/ }),

/***/ "./src/app/classes/distribution.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Distribution; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parameter__ = __webpack_require__("./src/app/classes/parameter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs__ = __webpack_require__("./node_modules/mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mathjs__);


var Distribution = /** @class */ (function () {
    function Distribution(fixedIncrement, increment, size, limit, startFromUp) {
        this.fixedIncrement = fixedIncrement;
        this.increment = increment;
        this.size = size;
        this.limit = limit;
        this.startFromUp = startFromUp;
        this.array = new Array(size + 1);
        this.setKeysFromArray();
    }
    Distribution.prototype.setKeysFromArray = function () {
        if (this.startFromUp) {
            this.setKeysFromArrayFromUp();
        }
        else {
            this.setKeysFromArrayFromDown();
        }
    };
    Distribution.prototype.setKeysFromArrayFromDown = function () {
        for (var i = 0; i < this.size; i++) {
            if (!this.array[i]) {
                this.array[i] = new __WEBPACK_IMPORTED_MODULE_0__parameter__["a" /* Parameter */]();
            }
            this.array[i].key = this.getKeyFromDown(i);
            this.array[i].name = this.array[i].key;
            this.array[i].value = 0;
        }
        this.array[this.size] = new __WEBPACK_IMPORTED_MODULE_0__parameter__["a" /* Parameter */]();
        this.array[this.size].key = '< ' + this.array[1].key;
        this.array[this.size].name = this.array[this.size].key;
        this.calculateFirst();
    };
    Distribution.prototype.setKeysFromArrayFromUp = function () {
        for (var i = this.size - 1; i >= 0; i--) {
            if (!this.array[i]) {
                this.array[i] = new __WEBPACK_IMPORTED_MODULE_0__parameter__["a" /* Parameter */]();
            }
            this.array[i].key = this.getKeyFromUp(i);
            this.array[i].name = this.array[i].key;
            this.array[i].value = 0;
        }
        this.array[this.size] = new __WEBPACK_IMPORTED_MODULE_0__parameter__["a" /* Parameter */]();
        this.array[this.size].key = '< ' + this.array[1].key;
        this.array[this.size].name = this.array[this.size].key;
        this.calculateFirst();
    };
    Distribution.prototype.getKey = function (term) {
        var sign = 0;
        if (this.startFromUp) {
            sign = -1;
        }
        else {
            sign = 1;
        }
        if (this.fixedIncrement) {
            return (this.limit + sign * this.increment * term).toString();
        }
        else {
            var pow = __WEBPACK_IMPORTED_MODULE_1_mathjs__["pow"](this.increment, term);
            return (this.limit + sign * pow).toString();
        }
    };
    Distribution.prototype.getKeyFromUp = function (term) {
        var sign = -1;
        if (this.fixedIncrement) {
            return (this.limit + sign * this.increment * (this.array.length - term)).toString();
        }
        else {
            var pow = __WEBPACK_IMPORTED_MODULE_1_mathjs__["pow"](this.increment, (this.array.length - term));
            return (this.limit + sign * pow).toString();
        }
    };
    Distribution.prototype.getKeyFromDown = function (term) {
        var sign = 1;
        if (this.fixedIncrement) {
            return (this.limit + sign * this.increment * term).toString();
        }
        else {
            var pow = __WEBPACK_IMPORTED_MODULE_1_mathjs__["pow"](this.increment, term);
            return (this.limit + sign * pow).toString();
        }
    };
    Distribution.prototype.calculateFirst = function () {
        var sum = 0;
        for (var i = 0; i < this.array.length - 1; i++) {
            var term = parseFloat(this.array[i].value);
            if (!isNaN(term)) {
                sum = sum + term;
            }
            else {
                this.array[i].value = 0;
            }
        }
        this.array[this.array.length - 1].value = 100 - sum;
    };
    return Distribution;
}());



/***/ }),

/***/ "./src/app/classes/extensions/container-extension.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerExtension; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module__ = __webpack_require__("./node_modules/createjs-module/createjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_createjs_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphs_two_d_vector__ = __webpack_require__("./src/app/classes/graphs/two-d-vector.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ContainerExtension = /** @class */ (function (_super) {
    __extends(ContainerExtension, _super);
    function ContainerExtension() {
        var _this = _super.call(this) || this;
        _this._isContainerExtension = true;
        return _this;
    }
    ContainerExtension.prototype.getOffset = function () {
        if (this.parent && this.parent != null) {
            var parent = this.parent;
            if (parent._isContainerExtension) {
                this._offset = parent.getAbs();
                return this._offset;
            }
            else {
                this._offset = new __WEBPACK_IMPORTED_MODULE_1__graphs_two_d_vector__["a" /* twoDVector */]([0, 0]);
                return this._offset;
            }
        }
        else {
            this._offset = new __WEBPACK_IMPORTED_MODULE_1__graphs_two_d_vector__["a" /* twoDVector */]([0, 0]);
            return this._offset;
        }
    };
    ContainerExtension.prototype.getAbs = function () {
        var offset = this.getOffset();
        var absX = offset.x + this.x;
        var absY = offset.y + this.y;
        return new __WEBPACK_IMPORTED_MODULE_1__graphs_two_d_vector__["a" /* twoDVector */]([absX, absY]);
    };
    return ContainerExtension;
}(__WEBPACK_IMPORTED_MODULE_0_createjs_module__["Container"]));



/***/ }),

/***/ "./src/app/classes/extensions/stage-extension.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StageExtension; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module__ = __webpack_require__("./node_modules/createjs-module/createjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_createjs_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_strongly_typed_events__ = __webpack_require__("./node_modules/strongly-typed-events/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_strongly_typed_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_strongly_typed_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_process_container__ = __webpack_require__("./src/app/classes/containers/process-container.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphs_line_properties_cursor_line__ = __webpack_require__("./src/app/classes/graphs/line-properties/cursor-line.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var StageExtension = /** @class */ (function (_super) {
    __extends(StageExtension, _super);
    function StageExtension(canvasName) {
        var _this = _super.call(this, canvasName) || this;
        _this._onShowDetail = new __WEBPACK_IMPORTED_MODULE_1_strongly_typed_events__["SimpleEventDispatcher"]();
        _this.creatingRelationship = false;
        // this.processes = [];
        _this.relationships = [];
        _this.updateOnTick();
        _this.createRelationshipLineIndicator();
        return _this;
    }
    // processes: Process[];
    StageExtension.prototype.processContainers = function () {
        return this.children.filter(function (child) {
            if (child instanceof __WEBPACK_IMPORTED_MODULE_2__containers_process_container__["a" /* ProcessContainer */]) {
                return true;
            }
            else {
                return false;
            }
        }).map(function (container) {
            return container;
        });
    };
    StageExtension.prototype.processes = function () {
        return this.processContainers().map(function (container) {
            return container.process;
        });
    };
    StageExtension.prototype.addProcess = function (process) {
        process.stageId = this.getNextIdFromArray(-1, this.processes());
        // this.processes.push(process);
    };
    StageExtension.prototype.removeProcess = function (process) {
        var index = this.processes().indexOf(process);
        // this.processes.splice(index, 1);
    };
    StageExtension.prototype.addRelationship = function (relationship) {
        relationship.stageId = this.getNextIdFromArray(-1, this.relationships);
        this.relationships.push(relationship);
    };
    StageExtension.prototype.addRelationships = function (relationships) {
        for (var i = 0; i < relationships.length; i++) {
            if (relationships[i] && relationships[i] != null) {
                this.addRelationship(relationships[i]);
            }
        }
    };
    StageExtension.prototype.removeRelationship = function (relationship) {
        var index = this.relationships.indexOf(relationship);
        this.relationships.splice(index, 1);
    };
    StageExtension.prototype.selectElement = function (element) {
        this.selectedElement = element;
    };
    StageExtension.prototype.selectBorderPoint = function (borderPoint) {
        this.selectElement(borderPoint);
        this.creatingRelationship = (borderPoint != null);
        if (this.creatingRelationship) {
            this.createRelationshipLineIndicator();
            var absolutePosition = borderPoint.getAbs();
            this.creatingRelationshipLine.updateStart(absolutePosition.x, absolutePosition.y);
            this.creatingRelationshipLine.updateEnd(absolutePosition.x, absolutePosition.y);
        }
        else {
            this.deleteRelationshipLineIndicator();
        }
    };
    StageExtension.prototype.selectProcessContainer = function (processContainer) {
        var _this = this;
        this.selectElement(processContainer);
        this.selectedElement.onShowDetail.one(function (s) { return _this._onShowDetail.dispatch(s); });
    };
    Object.defineProperty(StageExtension.prototype, "onShowDetail", {
        get: function () {
            return this._onShowDetail.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    StageExtension.prototype.getNextIdFromArray = function (feed, array) {
        {
            if (feed > 10) {
                return 10;
            }
            if (feed == -1) {
                return this.getNextIdFromArray(array.length, array);
            }
            else if (feed > 0 && (array.length == 0 ||
                array.every(function (item, index, array) {
                    if (item.stageId != feed) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }))) {
                return feed;
            }
            else {
                return this.getNextIdFromArray(feed + 1, array);
            }
        }
    };
    StageExtension.prototype.getProcessStageId = function (feed) {
        if (feed > 10) {
            return 10;
        }
        if (feed == -1) {
            return this.getProcessStageId(this.processes.length);
        }
        else if (feed > 0 && (this.processes().length == 0 ||
            this.processes().every(function (process, index, array) {
                if (process.stageId != feed) {
                    return true;
                }
                else {
                    return false;
                }
            }))) {
            return feed;
        }
        else {
            return this.getProcessStageId(feed + 1);
        }
    };
    StageExtension.prototype.checkStageId = function (item, index, array, feed) {
        if (item.stageId != feed) {
            return true;
        }
        else {
            return false;
        }
    };
    StageExtension.prototype.updateOnTick = function () {
        var stage = this;
        __WEBPACK_IMPORTED_MODULE_0_createjs_module__["Ticker"].framerate = 120;
        __WEBPACK_IMPORTED_MODULE_0_createjs_module__["Ticker"].addEventListener('tick', function (evt) {
            stage.update();
        });
    };
    StageExtension.prototype.setSimulationResults = function (result) {
        var newProcesses = result.processes;
        var newRelationships = result.relationships;
        this.updateProcesses(newProcesses);
        this.updateRelationships(newRelationships);
    };
    StageExtension.prototype.updateProcesses = function (newProcesses) {
        this.processContainers().forEach(function (c) {
            var result = newProcesses.find(function (np) {
                if (np.stageId == c.process.stageId) {
                    return true;
                }
                else {
                    return false;
                }
            });
            c.process.setSimulationResult(result);
        });
    };
    StageExtension.prototype.updateRelationships = function (newRelationships) {
        this.relationships.forEach(function (r) {
            var result = newRelationships.find(function (nr) {
                if (nr.stageId == r.stageId) {
                    return true;
                }
                else {
                    return false;
                }
            });
            r.setSimulationResult(result);
        });
    };
    StageExtension.prototype.createRelationshipLineIndicator = function () {
        this.creatingRelationshipLine = new __WEBPACK_IMPORTED_MODULE_3__graphs_line_properties_cursor_line__["a" /* CursorLineProperties */]();
        this.addChild(this.creatingRelationshipLine.shape);
    };
    StageExtension.prototype.deleteRelationshipLineIndicator = function () {
        this.removeChild(this.creatingRelationshipLine.shape);
        this.creatingRelationshipLine = null;
    };
    return StageExtension;
}(__WEBPACK_IMPORTED_MODULE_0_createjs_module__["Stage"]));



/***/ }),

/***/ "./src/app/classes/flow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parameter__ = __webpack_require__("./src/app/classes/parameter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_distribution_default__ = __webpack_require__("./src/app/classes/default/distribution-default.ts");


var Flow = /** @class */ (function () {
    function Flow() {
        this.GetInstances();
    }
    Flow.prototype.GetInstances = function () {
        if (!this.waterFlow) {
            this.waterFlow = new __WEBPACK_IMPORTED_MODULE_0__parameter__["a" /* Parameter */]();
            this.SetDefaultWaterFlow();
        }
        if (!this.massFlow) {
            this.massFlow = new __WEBPACK_IMPORTED_MODULE_0__parameter__["a" /* Parameter */]();
            this.SetDefaultMassFlow();
        }
        if (!this.sizeDistribution) {
            this.sizeDistribution = new __WEBPACK_IMPORTED_MODULE_0__parameter__["a" /* Parameter */]();
            this.SetDefaultSizeDistribution();
        }
    };
    Flow.prototype.SetDefaultValues = function () {
        this.SetDefaultWaterFlow();
        this.SetDefaultMassFlow();
        this.SetDefaultSizeDistribution();
    };
    Flow.prototype.SetDefaultWaterFlow = function () {
        this.waterFlow.key = 'waterFlow';
        this.waterFlow.name = 'Water Flow';
        this.waterFlow.unit = 't/h';
        this.waterFlow.type = 1;
    };
    Flow.prototype.SetDefaultMassFlow = function () {
        this.massFlow.key = 'massFlow';
        this.massFlow.name = 'Mass Flow';
        this.massFlow.unit = 't/h';
        this.massFlow.type = 1;
    };
    Flow.prototype.SetDefaultSizeDistribution = function () {
        this.sizeDistribution.key = 'sizeDistribution';
        this.sizeDistribution.name = 'Size Distribution';
        this.sizeDistribution.unit = 'mm';
        this.sizeDistribution.type = 4;
        this.sizeDistribution.value = new __WEBPACK_IMPORTED_MODULE_1__default_distribution_default__["a" /* DefaultDistribution */]();
    };
    return Flow;
}());



/***/ }),

/***/ "./src/app/classes/graphs/container-border-line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerBorderLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_properties_rotated_line__ = __webpack_require__("./src/app/classes/graphs/line-properties/rotated-line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs__ = __webpack_require__("./node_modules/mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mathjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__two_d_vector__ = __webpack_require__("./src/app/classes/graphs/two-d-vector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extensions_container_extension__ = __webpack_require__("./src/app/classes/extensions/container-extension.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ContainerBorderLine = /** @class */ (function (_super) {
    __extends(ContainerBorderLine, _super);
    function ContainerBorderLine(side, parent) {
        var _this = _super.call(this) || this;
        var start = new __WEBPACK_IMPORTED_MODULE_2__two_d_vector__["a" /* twoDVector */]([0, 0]);
        var length = 0;
        var rotation = 0;
        // var width = 40;
        // var height = 40;
        var width = parent.getBounds().width;
        var height = parent.getBounds().height;
        if (side.toLowerCase() == "top") {
            // start.x = 0;
            // start.y = 0;
            length = width;
            rotation = 0;
        }
        else if (side.toLowerCase() == "right") {
            start.x = width;
            // start.y = 0;
            length = height;
            rotation = __WEBPACK_IMPORTED_MODULE_1_mathjs__["pi"] / 2;
        }
        else if (side.toLowerCase() == "bottom") {
            start.x = width;
            length = width;
            start.y = height;
            rotation = __WEBPACK_IMPORTED_MODULE_1_mathjs__["pi"];
        }
        else if (side.toLowerCase() == "left") {
            // start.x = 0;
            start.y = height;
            length = height;
            rotation = 3 * __WEBPACK_IMPORTED_MODULE_1_mathjs__["pi"] / 2;
        }
        _this.properties = new __WEBPACK_IMPORTED_MODULE_0__line_properties_rotated_line__["a" /* RotatedLineProperties */](start, length, rotation);
        parent.addChild(_this);
        _this.addChild(_this.properties.shape);
        _this.properties.drawLine();
        return _this;
    }
    ContainerBorderLine.prototype.deleteSelf = function () {
    };
    return ContainerBorderLine;
}(__WEBPACK_IMPORTED_MODULE_3__extensions_container_extension__["a" /* ContainerExtension */]));



/***/ }),

/***/ "./src/app/classes/graphs/line-properties/cursor-line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursorLineProperties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__workflow_line__ = __webpack_require__("./src/app/classes/graphs/line-properties/workflow-line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__two_d_vector__ = __webpack_require__("./src/app/classes/graphs/two-d-vector.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CursorLineProperties = /** @class */ (function (_super) {
    __extends(CursorLineProperties, _super);
    function CursorLineProperties() {
        return _super.call(this) || this;
    }
    CursorLineProperties.prototype.updateStart = function (posX, posY) {
        this.start = new __WEBPACK_IMPORTED_MODULE_1__two_d_vector__["a" /* twoDVector */]([posX, posY]);
        this.drawIfValid();
    };
    CursorLineProperties.prototype.updateEnd = function (posX, posY) {
        this.end = new __WEBPACK_IMPORTED_MODULE_1__two_d_vector__["a" /* twoDVector */]([posX, posY]);
        this.drawIfValid();
    };
    CursorLineProperties.prototype.drawIfValid = function () {
        if (this.checkIfLineIsValid()) {
            this.drawLine();
        }
    };
    return CursorLineProperties;
}(__WEBPACK_IMPORTED_MODULE_0__workflow_line__["a" /* WfLineProperties */]));



/***/ }),

/***/ "./src/app/classes/graphs/line-properties/line-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineProperties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module__ = __webpack_require__("./node_modules/createjs-module/createjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_createjs_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workflow_line__ = __webpack_require__("./src/app/classes/graphs/line-properties/workflow-line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__two_d_vector__ = __webpack_require__("./src/app/classes/graphs/two-d-vector.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var LineProperties = /** @class */ (function (_super) {
    __extends(LineProperties, _super);
    function LineProperties() {
        var _this = _super.call(this) || this;
        _this.forceTickerHandle();
        return _this;
    }
    LineProperties.prototype.forceTickerHandle = function () {
        var container = this;
        __WEBPACK_IMPORTED_MODULE_0_createjs_module__["Ticker"].framerate = 60;
        __WEBPACK_IMPORTED_MODULE_0_createjs_module__["Ticker"].addEventListener('tick', function (evt) {
            if (container.startContainer && container.endContainer) {
                container.start = new __WEBPACK_IMPORTED_MODULE_2__two_d_vector__["a" /* twoDVector */]([container.startContainer.getAbs().x, container.startContainer.getAbs().y]);
                container.end = new __WEBPACK_IMPORTED_MODULE_2__two_d_vector__["a" /* twoDVector */]([container.endContainer.getAbs().x, container.endContainer.getAbs().y]);
                container.drawLine();
            }
        });
    };
    LineProperties.prototype.deleteSelf = function () {
    };
    return LineProperties;
}(__WEBPACK_IMPORTED_MODULE_1__workflow_line__["a" /* WfLineProperties */]));



/***/ }),

/***/ "./src/app/classes/graphs/line-properties/rotated-line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotatedLineProperties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs__ = __webpack_require__("./node_modules/mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mathjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__two_d_vector__ = __webpack_require__("./src/app/classes/graphs/two-d-vector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_line__ = __webpack_require__("./src/app/classes/graphs/line-properties/workflow-line.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RotatedLineProperties = /** @class */ (function (_super) {
    __extends(RotatedLineProperties, _super);
    function RotatedLineProperties(start, length, rotation) {
        var _this = _super.call(this) || this;
        _this.start = start;
        _this.rotation = rotation;
        _this.length = length;
        _this.normal = _this.getNormal(_this.rotation);
        _this.end = _this.getEnd(_this.start, _this.length, _this.rotation);
        return _this;
    }
    RotatedLineProperties.prototype.getNormal = function (rotation) {
        var normal = new __WEBPACK_IMPORTED_MODULE_1__two_d_vector__["a" /* twoDVector */]([0, 1]);
        normal.rotateThis(rotation);
        return normal;
    };
    RotatedLineProperties.prototype.getEnd = function (start, length, rotation) {
        var distance = new __WEBPACK_IMPORTED_MODULE_1__two_d_vector__["a" /* twoDVector */]([length, 0]).rotate(rotation);
        var endMat = __WEBPACK_IMPORTED_MODULE_0_mathjs__["add"](start.array, distance.array);
        return new __WEBPACK_IMPORTED_MODULE_1__two_d_vector__["a" /* twoDVector */](endMat);
    };
    RotatedLineProperties.prototype.deleteSelf = function () {
    };
    return RotatedLineProperties;
}(__WEBPACK_IMPORTED_MODULE_2__workflow_line__["a" /* WfLineProperties */]));



/***/ }),

/***/ "./src/app/classes/graphs/line-properties/workflow-line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WfLineProperties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module__ = __webpack_require__("./node_modules/createjs-module/createjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_createjs_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions_container_extension__ = __webpack_require__("./src/app/classes/extensions/container-extension.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var WfLineProperties = /** @class */ (function (_super) {
    __extends(WfLineProperties, _super);
    function WfLineProperties() {
        var _this = _super.call(this) || this;
        _this.shape = new __WEBPACK_IMPORTED_MODULE_0_createjs_module__["Shape"]();
        return _this;
    }
    WfLineProperties.prototype.drawLine = function () {
        this.shape.graphics.clear()
            .beginStroke("black")
            .moveTo(this.start.x, this.start.y)
            .lineTo(this.end.x, this.end.y);
    };
    WfLineProperties.prototype.checkIfLineIsValid = function () {
        if (this.start && this.start.x && this.start.y && this.end && this.end.x && this.end.y) {
            return true;
        }
        else {
            return false;
        }
    };
    WfLineProperties.prototype.deleteSelf = function () {
    };
    return WfLineProperties;
}(__WEBPACK_IMPORTED_MODULE_1__extensions_container_extension__["a" /* ContainerExtension */]));



/***/ }),

/***/ "./src/app/classes/graphs/point/border-point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorderPoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("./src/app/classes/graphs/point/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__relationship__ = __webpack_require__("./src/app/classes/relationship.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BorderPoint = /** @class */ (function (_super) {
    __extends(BorderPoint, _super);
    function BorderPoint(arrayId, isInput) {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.arrayId = arrayId;
        _this.isInput = isInput;
        if (_this.isInput) {
            _this.color = 'LawnGreen';
        }
        else {
            _this.color = 'red';
        }
        _this.radius = 4;
        _this.createShape();
        _this.addEventHandlersToContainer(_this);
        return _this;
    }
    BorderPoint.prototype.createShape = function () {
        this.addChild(this.shape);
        // this.shape.visible = false;
        this.shape.graphics.beginStroke('black')
            .beginFill(this.color)
            .drawCircle(this.x, this.y, this.radius);
    };
    BorderPoint.prototype.setPosition = function (posX, posY) {
        var bounds = this.parent.getBounds();
        var height = bounds.height;
        var width = bounds.width;
        this.x = posX * width;
        this.y = posY * height;
    };
    BorderPoint.prototype.addEventHandlersToContainer = function (container) {
        container.on('mousedown', function (evt) {
            if (evt.target.parent == container) {
                var stage = container.parent.stage;
                stage.selectBorderPoint(this);
            }
        });
        container.on('pressup', function (evt) {
            if (evt.target.parent == container) {
                var stage = container.parent.stage;
                if (container.isInput) {
                    this.createRelationship(container.targetBorderPoint, container);
                }
                else {
                    this.createRelationship(container, container.targetBorderPoint);
                }
                stage.selectBorderPoint(null);
            }
        });
        container.on('mouseover', function (evt) {
            if (evt.target.parent == container) {
                var stage = container.parent.stage;
                var selectedPoint = stage.selectedElement;
                if (selectedPoint && (selectedPoint.targetBorderPoint || selectedPoint.targetBorderPoint == null)) {
                    selectedPoint.targetBorderPoint = container;
                }
            }
        });
        container.on('mouseout', function (evt) {
            if (evt.target.parent == container) {
                var stage = container.parent.stage;
                var selectedPoint = stage.selectedElement;
                if (selectedPoint && (selectedPoint.targetBorderPoint || selectedPoint.targetBorderPoint == null)) {
                    selectedPoint.targetBorderPoint = container;
                }
            }
        });
        container.on('pressmove', function (evt) {
            var stage = container.parent.stage;
            var selectedPoint = stage.selectedElement;
            if (selectedPoint && (selectedPoint.targetBorderPoint || selectedPoint.targetBorderPoint == null)) {
                stage.creatingRelationshipLine.updateEnd(evt.rawX, evt.rawY);
            }
        });
    };
    BorderPoint.prototype.createRelationship = function (source, destination) {
        if (this.validateRelationship(source, destination)) {
            var stage = source.parent.stage;
            var relationship = new __WEBPACK_IMPORTED_MODULE_1__relationship__["a" /* Relationship */]();
            relationship.setPoints(source, destination);
            stage.addRelationship(relationship);
        }
    };
    BorderPoint.prototype.validateRelationship = function (source, destination) {
        if (source.isInput == destination.isInput) {
            return true;
        }
        else {
            return true;
        }
    };
    BorderPoint.prototype.deleteSelf = function () {
    };
    return BorderPoint;
}(__WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]));



/***/ }),

/***/ "./src/app/classes/graphs/point/point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module__ = __webpack_require__("./node_modules/createjs-module/createjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_createjs_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions_container_extension__ = __webpack_require__("./src/app/classes/extensions/container-extension.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Point = /** @class */ (function (_super) {
    __extends(Point, _super);
    function Point() {
        var _this = _super.call(this) || this;
        _this.shape = new __WEBPACK_IMPORTED_MODULE_0_createjs_module__["Shape"]();
        return _this;
    }
    Point.prototype.deleteSelf = function () {
    };
    return Point;
}(__WEBPACK_IMPORTED_MODULE_1__extensions_container_extension__["a" /* ContainerExtension */]));



/***/ }),

/***/ "./src/app/classes/graphs/two-d-vector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twoDVector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs__ = __webpack_require__("./node_modules/mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mathjs__);

var twoDVector = /** @class */ (function () {
    function twoDVector(array) {
        this.x = array[0];
        this.y = array[1];
    }
    Object.defineProperty(twoDVector.prototype, "array", {
        get: function () {
            return [this.x, this.y];
        },
        enumerable: true,
        configurable: true
    });
    twoDVector.prototype.rotate = function (rotation) {
        var rotationMatrix = __WEBPACK_IMPORTED_MODULE_0_mathjs__["matrix"]([[this.cos(rotation), this.sin(rotation)],
            [this.sin(rotation), -this.cos(rotation)]]);
        var rotatedArray = this.getRowFromMatrix(__WEBPACK_IMPORTED_MODULE_0_mathjs__["multiply"](rotationMatrix, this.array));
        return new twoDVector(rotatedArray);
    };
    twoDVector.prototype.rotateThis = function (rotation) {
        var vector = this.rotate(rotation);
        this.x = vector.x;
        this.y = vector.y;
    };
    twoDVector.prototype.getRowFromMatrix = function (mat) {
        var x = __WEBPACK_IMPORTED_MODULE_0_mathjs__["round"](mat.get([0]));
        var y = __WEBPACK_IMPORTED_MODULE_0_mathjs__["round"](mat.get([1]));
        return [x, y];
    };
    twoDVector.prototype.sin = function (angle) {
        return __WEBPACK_IMPORTED_MODULE_0_mathjs__["round"](__WEBPACK_IMPORTED_MODULE_0_mathjs__["sin"](angle));
    };
    twoDVector.prototype.cos = function (angle) {
        return __WEBPACK_IMPORTED_MODULE_0_mathjs__["round"](__WEBPACK_IMPORTED_MODULE_0_mathjs__["cos"](angle));
    };
    return twoDVector;
}());



/***/ }),

/***/ "./src/app/classes/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typescript_string_operations__ = __webpack_require__("./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typescript_string_operations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typescript_string_operations__);

var Model = /** @class */ (function () {
    function Model() {
        this.parameters = new Array();
        this.results = new Array();
        this.scriptBody = '';
        this.blank = '';
    }
    Object.defineProperty(Model.prototype, "Script", {
        get: function () {
            this.script = this.ScriptHead + this.scriptBody + this.ScriptTail + this.blank;
            return this.script;
        },
        set: function (newStr) {
            if (newStr.includes(this.ScriptHead) && newStr.includes(this.ScriptTail)) {
                newStr = newStr.replace(this.ScriptHead, __WEBPACK_IMPORTED_MODULE_0_typescript_string_operations__["String"].Empty);
                newStr = newStr.replace(this.ScriptTail, __WEBPACK_IMPORTED_MODULE_0_typescript_string_operations__["String"].Empty);
                this.scriptBody = newStr;
            }
            else {
                if (this.blank == '') {
                    this.blank = ' ';
                }
                else {
                    this.blank = '';
                }
            }
            this.script = this.Script;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Model.prototype, "ScriptHead", {
        get: function () {
            var sb = new __WEBPACK_IMPORTED_MODULE_0_typescript_string_operations__["StringBuilder"]();
            sb.Append('function simulation_result = f(input_information)' + '\n');
            sb.Append('input_flow = input_information{1};' + '\n');
            sb.Append('water_flow = input_flow{1};' + '\n');
            sb.Append('mass_flow = input_flow{2};' + '\n');
            sb.Append('size_distribution = input_flow{3};' + '\n');
            sb.Append('\n');
            sb.Append('parameter_input = input_information{2};' + '\n');
            for (var i = 1; i <= this.parameters.length; i++) {
                sb.AppendFormat("{0} = parameter_input{{1}};\n", this.parameters[i - 1].key, i.toString());
            }
            this.scriptHead = sb.ToString();
            return this.scriptHead;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Model.prototype, "ScriptTail", {
        get: function () {
            var sb = new __WEBPACK_IMPORTED_MODULE_0_typescript_string_operations__["StringBuilder"]();
            sb.Append('\n');
            sb.Append('output_flow = {};\n');
            var outputLimit = Math.max(this.outputLimit, 1);
            for (var i = 1; i <= outputLimit; i++) {
                sb.AppendFormat("output_flow_{0} = {};\n", i.toString());
                sb.AppendFormat("output_flow_{0}{{1}} = out_water_flow_{0};\n", i.toString(), (1).toString());
                sb.AppendFormat("output_flow_{0}{{1}} = out_mass_flow_{0};\n", i.toString(), (2).toString());
                sb.AppendFormat("output_flow_{0}{{1}} = out_size_distribution_{0};\n", i.toString(), (3).toString());
                sb.AppendFormat("output_flow{{0}} = output_flow_{0};\n", i.toString());
            }
            sb.Append('output_parameters = {');
            var resultKeys = this.results.map(function (r) {
                return __WEBPACK_IMPORTED_MODULE_0_typescript_string_operations__["String"].Format('{0}', r.key);
            });
            sb.Append(__WEBPACK_IMPORTED_MODULE_0_typescript_string_operations__["String"].Join(', ', resultKeys));
            sb.Append('};\n');
            sb.Append('simulation_result = {output_flow, output_parameters};');
            this.scriptTail = sb.ToString();
            return this.scriptTail;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Model.prototype.mapFromBaseObject = function (model) {
        this.id = model.id;
        this.name = model.name;
        this.parameters = model.parameters;
        this.results = model.results;
        this.scriptHead = model.scriptHead;
        this.scriptBody = model.scriptBody;
        this.scriptTail = model.scriptTail;
    };
    Model.prototype.GetLines = function (str) {
        var array = str.split('\n');
        return array;
    };
    return Model;
}());



/***/ }),

/***/ "./src/app/classes/parameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parameter; });
var Parameter = /** @class */ (function () {
    function Parameter() {
    }
    return Parameter;
}());



/***/ }),

/***/ "./src/app/classes/process.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Process; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relationship__ = __webpack_require__("./src/app/classes/relationship.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/classes/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__distribution__ = __webpack_require__("./src/app/classes/distribution.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_distribution_default__ = __webpack_require__("./src/app/classes/default/distribution-default.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flow__ = __webpack_require__("./src/app/classes/flow.ts");





var Process = /** @class */ (function () {
    function Process(process) {
        this.id = process.id;
        this.name = process.name;
        this.processTypeId = process.processTypeId;
        this.imagePath = process.imagePath;
        this.inputLimit = process.inputLimit;
        this.input = new Array(this.inputLimit);
        this.outputLimit = process.outputLimit;
        this.output = new Array(this.outputLimit);
        this.models = process.models.map(function (m) {
            var newModel = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Model */]();
            newModel.mapFromBaseObject(m);
            newModel.outputLimit = process.outputLimit;
            return newModel;
        });
        if (this.models.length > 0) {
            this.model = this.models[0];
        }
        else {
            this.models = new Array();
            this.models.push(new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Model */]());
        }
        this.inputFlow = new __WEBPACK_IMPORTED_MODULE_4__flow__["a" /* Flow */]();
    }
    Process.prototype.addInput = function (relationship, index) {
        if (index < this.inputLimit) {
            this.input[index] = relationship;
        }
    };
    Process.prototype.addOutput = function (relationship, index) {
        if (index < this.outputLimit) {
            this.output[index] = relationship;
        }
    };
    Process.prototype.checkInputLimit = function () {
        if (this.inputLimit == -1) {
            return true;
        }
        else if (this.input.length < this.inputLimit) {
            return true;
        }
        else {
            return false;
        }
    };
    Process.prototype.checkOutputLimit = function () {
        if (this.outputLimit == -1) {
            return true;
        }
        else if (this.output.length < this.outputLimit) {
            return true;
        }
        else {
            return false;
        }
    };
    Process.prototype.modelStartup = function () {
        if (this.model) {
            this.model.parameters.forEach(function (p) {
                if (p.type == 4 && !(p.value instanceof __WEBPACK_IMPORTED_MODULE_2__distribution__["a" /* Distribution */])) {
                    p.value = new __WEBPACK_IMPORTED_MODULE_3__default_distribution_default__["a" /* DefaultDistribution */]();
                }
            });
            this.model.results.forEach(function (r) {
                if (r.type == 4 && !(r.value instanceof __WEBPACK_IMPORTED_MODULE_2__distribution__["a" /* Distribution */])) {
                    r.value = new __WEBPACK_IMPORTED_MODULE_3__default_distribution_default__["a" /* DefaultDistribution */]();
                }
            });
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Model */]();
        }
    };
    Process.prototype.setInOutRelationships = function () {
        if (this.inputLimit == 0) {
            this.input = new Array(1);
            this.input[0] = new __WEBPACK_IMPORTED_MODULE_0__relationship__["a" /* Relationship */]();
            this.input[0].setOnlyDestination(this);
        }
        if (this.outputLimit == 0) {
            this.output = new Array(1);
            this.output[0] = new __WEBPACK_IMPORTED_MODULE_0__relationship__["a" /* Relationship */]();
            this.output[0].setOnlySource(this);
        }
    };
    Process.prototype.setSimulationResult = function (result) {
        this.setInputResult(result.input);
        this.setOutputResult(result.output);
        this.setSimulationResults(result.model.results);
    };
    Process.prototype.setInputResult = function (inputResult) {
        for (var i = 0; i < this.input.length; i++) {
            this.input[i].flow = inputResult[i].flow;
        }
    };
    Process.prototype.setOutputResult = function (outputResult) {
        for (var i = 0; i < this.output.length; i++) {
            this.output[i].flow = outputResult[i].flow;
        }
    };
    Process.prototype.setSimulationResults = function (results) {
        for (var i = 0; i < this.model.results.length; i++) {
            this.model.results[i].value = results[i].value;
        }
    };
    return Process;
}());



/***/ }),

/***/ "./src/app/classes/relationship.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relationship; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphs_line_properties_line_properties__ = __webpack_require__("./src/app/classes/graphs/line-properties/line-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flow__ = __webpack_require__("./src/app/classes/flow.ts");


var Relationship = /** @class */ (function () {
    function Relationship() {
        this.flow = new __WEBPACK_IMPORTED_MODULE_1__flow__["a" /* Flow */]();
    }
    Relationship.prototype.setOnlySource = function (sourceProcess) {
        this.sourceId = sourceProcess.stageId;
        this.destinationId = 0;
    };
    Relationship.prototype.setOnlyDestination = function (destinationProcess) {
        this.sourceId = 0;
        this.destinationId = destinationProcess.stageId;
    };
    Relationship.prototype.setPoints = function (sourcePoint, destinationPoint) {
        var sourceContainer = sourcePoint.parent;
        this.sourceId = sourceContainer.process.stageId;
        var destinationContainer = destinationPoint.parent;
        this.destinationId = destinationContainer.process.stageId;
        sourceContainer.process.addOutput(this, sourcePoint.arrayId);
        destinationContainer.process.addInput(this, destinationPoint.arrayId);
        this.getPath(sourcePoint, destinationPoint);
    };
    Relationship.prototype.getPath = function (sourcePoint, destinationPoint) {
        var line = new __WEBPACK_IMPORTED_MODULE_0__graphs_line_properties_line_properties__["a" /* LineProperties */]();
        line.startContainer = sourcePoint;
        line.endContainer = destinationPoint;
        sourcePoint.stage.addChild(line.shape);
    };
    Relationship.prototype.setSimulationResult = function (result) {
        this.flow = result.flow;
    };
    return Relationship;
}());



/***/ }),

/***/ "./src/app/classes/scope.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scope; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_strongly_typed_events__ = __webpack_require__("./node_modules/strongly-typed-events/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_strongly_typed_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_strongly_typed_events__);

var Scope = /** @class */ (function () {
    function Scope() {
        this._onShowDetail = new __WEBPACK_IMPORTED_MODULE_0_strongly_typed_events__["SimpleEventDispatcher"]();
    }
    Scope.prototype.setStageHandler = function (stageHandler) {
        var _this = this;
        this.stageHandler = stageHandler;
        this.stageHandler.onShowDetail.subscribe(function (s) { return _this._onShowDetail.dispatch(s); });
    };
    Object.defineProperty(Scope.prototype, "onShowDetail", {
        get: function () {
            return this._onShowDetail.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    return Scope;
}());



/***/ }),

/***/ "./src/app/classes/simulation-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulationObject; });
var SimulationObject = /** @class */ (function () {
    function SimulationObject(processes, relationships) {
        this.processes = processes;
        this.relationships = relationships;
    }
    return SimulationObject;
}());



/***/ }),

/***/ "./src/app/classes/stage-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StageHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_strongly_typed_events__ = __webpack_require__("./node_modules/strongly-typed-events/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_strongly_typed_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_strongly_typed_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions_stage_extension__ = __webpack_require__("./src/app/classes/extensions/stage-extension.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_process_container__ = __webpack_require__("./src/app/classes/containers/process-container.ts");



var StageHandler = /** @class */ (function () {
    function StageHandler(canvasName) {
        var _this = this;
        this._onShowDetail = new __WEBPACK_IMPORTED_MODULE_0_strongly_typed_events__["SimpleEventDispatcher"]();
        this.stage = new __WEBPACK_IMPORTED_MODULE_1__extensions_stage_extension__["a" /* StageExtension */](canvasName);
        this.stage.canvas.style.width = '100%';
        this.stage.canvas.width = this.stage.canvas.offsetWidth;
        this.stage.canvas.height = window.innerHeight * 0.5;
        this.stage.enableMouseOver(10); // enabled mouse over / out events
        this.stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
        this.stage.onShowDetail.subscribe(function (s) { return _this._onShowDetail.dispatch(s); });
    }
    StageHandler.prototype.newProcess = function (process) {
        var container = new __WEBPACK_IMPORTED_MODULE_2__containers_process_container__["a" /* ProcessContainer */]();
        this.stage.addChild(container);
        container.start(process);
        this.stage.addProcess(process);
        process.setInOutRelationships();
        this.stage.addRelationships(process.input);
        this.stage.addRelationships(process.output);
    };
    StageHandler.prototype.deleteElement = function () {
        this.stage.selectedElement.deleteSelf();
        this.stage.selectElement(null);
    };
    Object.defineProperty(StageHandler.prototype, "onShowDetail", {
        get: function () {
            return this._onShowDetail.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    return StageHandler;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">LTMSim Open</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"/simulator\">Simulator</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"/editor\">Editor</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"/editor\">About</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/input-detail/input-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/input-detail/input-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" *ngIf=\"process\">\r\n  <div *ngFor=\"let input of inputs; index as i\" [attr.data-index]=\"i\">\r\n    <label class=\"col-sm-4 control-label\" for=\"inputTitle\" style=\"margin-bottom: 20px;\">Input {{i+1}}</label>\r\n    <div class=\"form-group form-group-sm row col-sm-12\">\r\n      <label class=\"col-sm-4 control-label\" for=\"waterFlow\">Water Flow</label>\r\n      <div class=\"col-sm-8\">\r\n        <label class=\"col-sm-4 control-label\" for=\"waterFlowValue\" *ngIf=\"!allowEdit\">{{input.flow.waterFlow.value}}</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"waterFlow\" [(ngModel)]=\"input.flow.waterFlow.value\" *ngIf=\"allowEdit\">\r\n        <!-- <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"waterFlow\" [(ngModel)]=\"input.flow.waterFlow.value\" placeholder=\"Waiting for simulation\"\r\n          *ngIf=\"!allowEdit\" readonly> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group form-group-sm row col-sm-12\">\r\n      <label class=\"col-sm-4 control-label\" for=\"massFlow\">Mass Flow</label>\r\n      <div class=\"col-sm-8\">\r\n        <label class=\"col-sm-4 control-label\" for=\"massFlowValue\" *ngIf=\"!allowEdit\">{{input.flow.massFlow.value}}</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"massFlow\" [(ngModel)]=\"input.flow.massFlow.value\" *ngIf=\"allowEdit\">\r\n        <!-- <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"massFlow\" [(ngModel)]=\"input.flow.massFlow.value\" placeholder=\"Waiting for simulation\"\r\n          *ngIf=\"!allowEdit\" readonly> -->\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <label class=\"col-sm-4 control-label\" for=\"sizeDistribution\">Size Distribution</label>\r\n      <div style=\"border-width: 1px; border-style: solid; border-radius: 16px; margin: 5px;\">\r\n        <br/>\r\n        <div *ngFor=\"let item of input.flow.sizeDistribution.value.array; last as isLast\">\r\n          <div class=\"form-group row col-sm-12\" *ngIf=\"item\">\r\n            <label class=\"col-sm-4 control-label\" style=\"margin-top: 8px;\" for=\"item\">{{item.name}} ({{input.flow.sizeDistribution.unit}})</label>\r\n            <div class=\"col-sm-8\">\r\n              <label class=\"col-sm-4 control-label\" style=\"margin-top: 8px;\" for=\"itemValue\" *ngIf=\"!allowEdit\">{{item.value}}</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"parameterName\" name=\"{{item.key}}\" (input)=\"calculateFirst(input.flow.sizeDistribution.value)\"\r\n                [(ngModel)]=\"item.value\" [readonly]=\"isLast\" *ngIf=\"allowEdit\">\r\n              <!-- <input type=\"number\" class=\"form-control\" id=\"parameterName\" name=\"{{item.key}}\" [(ngModel)]=\"item.value\" [readonly]=\"!allowEdit\"\r\n                placeholder=\"Waiting for simulation\" *ngIf=\"!allowEdit\"> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/input-detail/input-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_process__ = __webpack_require__("./src/app/classes/process.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_relationship__ = __webpack_require__("./src/app/classes/relationship.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputDetailComponent = /** @class */ (function () {
    function InputDetailComponent() {
    }
    InputDetailComponent.prototype.ngOnInit = function () {
        if (this.process.inputLimit == 0) {
            this.allowEdit = true;
            this.inputs = this.process.input;
        }
        else {
            this.allowEdit = false;
            this.SetEmptyInputs(this.process.input);
        }
    };
    InputDetailComponent.prototype.SetEmptyInputs = function (inputs) {
        this.inputs = new Array();
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i]) {
                this.inputs[i] = inputs[i];
            }
            else {
                this.inputs[i] = new __WEBPACK_IMPORTED_MODULE_2__classes_relationship__["a" /* Relationship */]();
            }
        }
    };
    InputDetailComponent.prototype.calculateFirst = function (distribution) {
        distribution.calculateFirst();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_process__["a" /* Process */])
    ], InputDetailComponent.prototype, "process", void 0);
    InputDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-detail',
            template: __webpack_require__("./src/app/input-detail/input-detail.component.html"),
            styles: [__webpack_require__("./src/app/input-detail/input-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputDetailComponent);
    return InputDetailComponent;
}());



/***/ }),

/***/ "./src/app/output-detail/output-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/output-detail/output-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" *ngIf=\"process\">\n  <div *ngFor=\"let output of outputs; index as i\" [attr.data-index]=\"i\">\n    <label class=\"col-sm-4 control-label\" for=\"outputTitle\" style=\"margin-bottom: 20px;\">Output {{i+1}}</label>\n    <div class=\"form-group form-group-sm row col-sm-12\">\n      <label class=\"col-sm-4 control-label\" for=\"waterFlow\">Water Flow</label>\n      <div class=\"col-sm-8\">\n        <label class=\"col-sm-4 control-label\" for=\"waterFlowValue\">{{output.flow.waterFlow.value}}</label>\n        <!-- <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"waterFlow\" [(ngModel)]=\"output.flow.waterFlow.value\" *ngIf=\"allowEdit\">\n        <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"waterFlow\" [(ngModel)]=\"output.flow.waterFlow.value\" placeholder=\"Waiting for simulation\"\n          *ngIf=\"!allowEdit\" readonly> -->\n      </div>\n    </div>\n    <div class=\"form-group form-group-sm row col-sm-12\">\n      <label class=\"col-sm-4 control-label\" for=\"massFlow\">Mass Flow</label>\n      <div class=\"col-sm-8\">\n        <label class=\"col-sm-4 control-label\" for=\"massFlowValue\">{{output.flow.massFlow.value}}</label>\n        <!-- <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"massFlow\" [(ngModel)]=\"output.flow.massFlow.value\" *ngIf=\"allowEdit\">\n        <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"massFlow\" [(ngModel)]=\"output.flow.massFlow.value\" placeholder=\"Waiting for simulation\" *ngIf=\"!allowEdit\"\n          readonly> -->\n      </div>\n    </div>\n    <div>\n      <label class=\"col-sm-4 control-label\" for=\"sizeDistribution\">Size Distribution</label>\n      <div style=\"border-width: 1px; border-style: solid; border-radius: 16px; margin: 5px;\">\n        <br/>\n        <div *ngFor=\"let item of output.flow.sizeDistribution.value.array; last as isLast\">\n          <div class=\"form-group row col-sm-12\" *ngIf=\"item\">\n            <label class=\"col-sm-4 control-label\" style=\"margin-top: 8px;\" for=\"item\">{{item.name}} ({{output.flow.sizeDistribution.unit}})</label>\n            <div class=\"col-sm-8\">\n                <label class=\"col-sm-4 control-label\" style=\"margin-top: 8px;\" for=\"itemValue\">{{item.value}}</label>\n              <!-- <input type=\"number\" class=\"form-control\" id=\"parameterName\" name=\"{{item.key}}\" (input)=\"calculateFirst(output.flow.sizeDistribution.value)\"\n                [(ngModel)]=\"item.value\" [readonly]=\"isLast\" *ngIf=\"allowEdit\">\n              <input type=\"number\" class=\"form-control\" id=\"parameterName\" name=\"{{item.key}}\" [(ngModel)]=\"item.value\" [readonly]=\"!allowEdit\"\n                [(ngModel)]=\"item.value\" placeholder=\"Waiting for simulation\" *ngIf=\"!allowEdit\"> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/output-detail/output-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_process__ = __webpack_require__("./src/app/classes/process.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_relationship__ = __webpack_require__("./src/app/classes/relationship.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutputDetailComponent = /** @class */ (function () {
    function OutputDetailComponent() {
    }
    OutputDetailComponent.prototype.ngOnInit = function () {
        this.allowEdit = false;
        this.SetEmptyOutputs(this.process.output);
    };
    OutputDetailComponent.prototype.SetEmptyOutputs = function (outputs) {
        this.outputs = new Array();
        for (var i = 0; i < outputs.length; i++) {
            if (outputs[i]) {
                this.outputs[i] = outputs[i];
            }
            else {
                this.outputs[i] = new __WEBPACK_IMPORTED_MODULE_2__classes_relationship__["a" /* Relationship */]();
            }
        }
    };
    OutputDetailComponent.prototype.calculateFirst = function (distribution) {
        distribution.calculateFirst();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_process__["a" /* Process */])
    ], OutputDetailComponent.prototype, "process", void 0);
    OutputDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-output-detail',
            template: __webpack_require__("./src/app/output-detail/output-detail.component.html"),
            styles: [__webpack_require__("./src/app/output-detail/output-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OutputDetailComponent);
    return OutputDetailComponent;
}());



/***/ }),

/***/ "./src/app/parameter-detail/parameter-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parameter-detail/parameter-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" *ngIf=\"model\">\r\n<div *ngFor=\"let parameter of model.parameters\">\r\n  <div class=\"form-group form-group-sm row col-sm-12\" *ngIf=\"parameter.type != 4\">\r\n    <label class=\"col-sm-4 control-label\" for=\"parameter\">{{parameter.name}} ({{parameter.unit}})</label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"{{parameter.name}}\" [(ngModel)]=\"parameter.value\" *ngIf=\"parameter.type != 5\">\r\n      <input type=\"text\" class=\"form-control\" id=\"parameterName\" name=\"{{parameter.name}}\" placeholder=\"Input parameter\" *ngIf=\"parameter.type == 5\"\r\n        readonly>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"parameter.type == 4\">\r\n    <label class=\"col-sm-4 control-label\" for=\"parameter\">{{parameter.name}} ({{parameter.unit}})</label>\r\n    <div style=\"border-width: 1px; border-style: solid; border-radius: 16px; margin: 5px;\">\r\n      <br/>\r\n      <div *ngFor=\"let item of parameter.value.array; last as isLast\">\r\n        <!-- <div class=\"form-group form-group-sm row col-sm-12\" *ngIf=\"item\"> -->\r\n        <div class=\"form-group row col-sm-12\" *ngIf=\"item\">\r\n          <label class=\"col-sm-4 control-label\" style=\"margin-top: 8px;\" for=\"item\">{{item.name}} ({{parameter.unit}})</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"number\" class=\"form-control\" id=\"parameterName\" name=\"{{item.key}}\" (input)=\"calculateFirst(parameter.value)\"\r\n              [(ngModel)]=\"item.value\" [readonly]=\"isLast\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</form>"

/***/ }),

/***/ "./src/app/parameter-detail/parameter-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_model__ = __webpack_require__("./src/app/classes/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParameterDetailComponent = /** @class */ (function () {
    function ParameterDetailComponent() {
    }
    ParameterDetailComponent.prototype.ngOnInit = function () {
    };
    ParameterDetailComponent.prototype.calculateFirst = function (distribution) {
        distribution.calculateFirst();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_model__["a" /* Model */])
    ], ParameterDetailComponent.prototype, "model", void 0);
    ParameterDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parameter-detail',
            template: __webpack_require__("./src/app/parameter-detail/parameter-detail.component.html"),
            styles: [__webpack_require__("./src/app/parameter-detail/parameter-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParameterDetailComponent);
    return ParameterDetailComponent;
}());



/***/ }),

/***/ "./src/app/parameter-editor/parameter-editor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parameter-editor/parameter-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\" *ngIf=\"model && model != null\" style=\"margin-top: 24px;\">\r\n  <div class=\"row\">\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Key\" readonly>\r\n    </div>\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Name\" readonly>\r\n    </div>\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Unit\" readonly>\r\n    </div>\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Type\" readonly>\r\n    </div>\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Delete\" readonly>\r\n    </div>\r\n  </div>\r\n        \r\n  <div *ngFor=\"let parameter of model.parameters\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n        <input type=\"text\" class=\"form-control\" id=\"processName\" [(ngModel)]=\"parameter.key\">\r\n      </div>\r\n      <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n        <input type=\"text\" class=\"form-control\" id=\"processName\" [(ngModel)]=\"parameter.name\">\r\n      </div>\r\n      <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n        <input type=\"text\" class=\"form-control\" id=\"processName\" [(ngModel)]=\"parameter.unit\">\r\n      </div>\r\n      <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n        <input type=\"text\" class=\"form-control\" id=\"processName\" [(ngModel)]=\"parameter.type\">\r\n      </div>\r\n      <div>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteParameter(parameter)\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"form-group mx-sm-4 mb-4\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"addParameter()\">\r\n      Add Parameter\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/parameter-editor/parameter-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_model__ = __webpack_require__("./src/app/classes/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_parameter__ = __webpack_require__("./src/app/classes/parameter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParameterEditorComponent = /** @class */ (function () {
    function ParameterEditorComponent() {
    }
    ParameterEditorComponent.prototype.ngOnInit = function () {
    };
    ParameterEditorComponent.prototype.addParameter = function () {
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__classes_parameter__["a" /* Parameter */]();
        this.model.parameters.push(parameter);
    };
    ParameterEditorComponent.prototype.deleteParameter = function (parameter) {
        var index = this.model.parameters.indexOf(parameter);
        this.model.parameters.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_model__["a" /* Model */])
    ], ParameterEditorComponent.prototype, "model", void 0);
    ParameterEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parameter-editor',
            template: __webpack_require__("./src/app/parameter-editor/parameter-editor.component.html"),
            styles: [__webpack_require__("./src/app/parameter-editor/parameter-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParameterEditorComponent);
    return ParameterEditorComponent;
}());



/***/ }),

/***/ "./src/app/process-detail/process-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/process-detail/process-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{process.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\" *ngIf=\"!process.model\">\r\n    <label class=\"col-sm-12 control-label\" for=\"parameter\">This process has no models. Please go to the editor page and add a model to this process.</label>\r\n</div>\r\n<div class=\"modal-body\" *ngIf=\"process.model\">\r\n    <div ngbDropdown class=\"d-inline-block\" *ngIf=\"process.models.length > 0\">\r\n        <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>\r\n            {{process.model.name}}\r\n        </button>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n            <div *ngFor=\"let m of process.models\">\r\n                <button class=\"dropdown-item\" (click)=\"changeModel(m)\">{{m.name}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br/>\r\n<ngb-tabset *ngIf=\"process.model\">\r\n    <!-- *ngIf=\"process.inputLimit == 0\" -->\r\n    <ngb-tab title=\"Input\">\r\n        <ng-template ngbTabContent>\r\n            <br/>\r\n            <app-input-detail [process]=\"process\"></app-input-detail>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Parameters\" *ngIf=\"process.model.parameters\">\r\n        <ng-template ngbTabContent>\r\n            <br/>\r\n            <app-parameter-detail [model]=\"process.model\"></app-parameter-detail>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Output\">\r\n        <ng-template ngbTabContent>\r\n            <br/>\r\n            <app-output-detail [process]=\"process\"></app-output-detail>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Results\" *ngIf=\"process.model.results\">\r\n        <ng-template ngbTabContent>\r\n            <br/>\r\n            <app-result-detail [model]=\"process.model\"></app-result-detail>\r\n        </ng-template>\r\n    </ngb-tab>\r\n</ngb-tabset>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>"

/***/ }),

/***/ "./src/app/process-detail/process-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_process__ = __webpack_require__("./src/app/classes/process.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProcessDetailComponent = /** @class */ (function () {
    function ProcessDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ProcessDetailComponent.prototype.ngOnInit = function () {
        this.changeModel(this.process.model);
    };
    ProcessDetailComponent.prototype.changeModel = function (model) {
        if (model && model != null) {
            this.process.model = model;
        }
    };
    ProcessDetailComponent.prototype.calculateFirst = function (distribution) {
        distribution.calculateFirst();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_process__["a" /* Process */])
    ], ProcessDetailComponent.prototype, "process", void 0);
    ProcessDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-process-detail',
            template: __webpack_require__("./src/app/process-detail/process-detail.component.html"),
            styles: [__webpack_require__("./src/app/process-detail/process-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ProcessDetailComponent);
    return ProcessDetailComponent;
}());



/***/ }),

/***/ "./src/app/process-editor/process-editor.component.css":
/***/ (function(module, exports) {

module.exports = ".light-blue-backdrop \r\n{\r\n    background-color: #5cb3fd;\r\n}"

/***/ }),

/***/ "./src/app/process-editor/process-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<div class=\"row\">\r\n  <div class=\"col mx-sm-4 mb-4\">\r\n    <div ngbDropdown class=\"d-inline-block\" *ngFor=\"let type of types\">\r\n      <button class=\"btn btn-outline-primary\" style=\"margin-right: 15px;\" id=\"dropdownBasic1\" ngbDropdownToggle>{{type.name}}</button>\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n        <div  *ngFor=\"let process of type.processes\">\r\n          <button class=\"dropdown-item\" (click)=\"selectProcess(process)\">{{process.name}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br/>\r\n<div class=\"col mx-sm-4 mb-4\" *ngIf=\"process && process != null\">\r\n  <form class=\"form-inline\">\r\n      <label for=\"processName\">Name</label>\r\n      <input type=\"text\" class=\"form-control mx-sm-4 mb-4\" id=\"processName\" \r\n      placeholder=\"{{process.name}}\" style=\"margin: 24px;\" readonly>\r\n\r\n      <label for=\"processInput\">Inputs</label>\r\n      <input type=\"text\" class=\"form-control mx-sm-4 mb-4\" id=\"inputCount\" \r\n      placeholder=\"{{process.inputLimit}}\" style=\"margin: 24px;\" readonly>\r\n      \r\n      <label for=\"processOutput\">Outputs</label>\r\n      <input type=\"text\" class=\"form-control mx-sm-4 mb-4\" id=\"outputCount\" \r\n      placeholder=\"{{process.outputLimit}}\" style=\"margin: 24px;\" readonly>\r\n  </form>\r\n  <br/>\r\n  <div ngbDropdown class=\"row d-inline-block\">\r\n    <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>\r\n        <span *ngIf=\"process.model\">{{process.model.name}}</span>\r\n        <span *ngIf=\"!process.model\">No Models</span>\r\n    </button>\r\n    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n          <div *ngFor=\"let m of process.models\">\r\n              <button class=\"dropdown-item\" (click)=\"selectModel(m)\" >{{m.name}}</button>\r\n          </div>\r\n          <button class=\"dropdown-item\" (click)=\"newModel()\" >New Model</button>\r\n    </div>\r\n  </div>\r\n  \r\n  <div *ngIf=\"process.model && process.model != null\">\r\n    <div class=\"row\">\r\n      <div class=\"form-inline\">\r\n          <label for=\"modelName\">Model Name</label>\r\n          <input type=\"text\" class=\"form-control mx-sm-4 mb-4\" id=\"modelName\" \r\n          [(ngModel)]=\"process.model.name\" style=\"margin: 24px;\">\r\n      </div>\r\n    </div>\r\n    <ngb-tabset>\r\n      <ngb-tab title=\"Parameters\">\r\n        <ng-template ngbTabContent>\r\n          <app-parameter-editor [model]=\"process.model\"></app-parameter-editor>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Results\">\r\n        <ng-template ngbTabContent>\r\n          <app-result-editor [model]=\"process.model\"></app-result-editor>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Script\">\r\n        <ng-template ngbTabContent>\r\n          <app-script-editor [model]=\"process.model\"></app-script-editor>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"saveModel(process.model, process.id)\" style=\"margin-top: 24px;\">\r\n      Save Model\r\n    </button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/process-editor/process-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_process__ = __webpack_require__("./src/app/classes/process.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_process_service__ = __webpack_require__("./src/app/services/process.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_model__ = __webpack_require__("./src/app/classes/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toaster_js__ = __webpack_require__("./node_modules/toaster-js/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProcessEditorComponent = /** @class */ (function () {
    function ProcessEditorComponent(processService) {
        this.processService = processService;
        this.processCache = new Array();
    }
    ProcessEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.processService.getProcessTypes()
            .subscribe(function (processTypes) { return _this.types = processTypes; });
    };
    ProcessEditorComponent.prototype.selectProcess = function (processContract) {
        var _this = this;
        this.getProcess(processContract.id).subscribe(function (p) {
            var process = new __WEBPACK_IMPORTED_MODULE_2__classes_process__["a" /* Process */](p);
            _this.process = process;
        });
    };
    ProcessEditorComponent.prototype.getProcess = function (processId) {
        var index = this.processCache.findIndex(function (p) { return p.id == processId; });
        if (index == -1) {
            return this.processService.getProcessById(processId);
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.processCache[index]);
        }
    };
    ProcessEditorComponent.prototype.selectModel = function (model) {
        this.process.model = model;
    };
    ProcessEditorComponent.prototype.newModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_4__classes_model__["a" /* Model */]();
        model.name = "Sample Model";
        this.process.model = model;
        this.process.models.push(model);
    };
    ProcessEditorComponent.prototype.saveModel = function (model, processId) {
        new __WEBPACK_IMPORTED_MODULE_5_toaster_js__["a" /* Toast */]('Saving model...', __WEBPACK_IMPORTED_MODULE_5_toaster_js__["a" /* Toast */].TYPE_INFO, __WEBPACK_IMPORTED_MODULE_5_toaster_js__["a" /* Toast */].TIME_LONG);
        model.Script = model.Script;
        this.processService.saveModel(model, processId);
    };
    ProcessEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-process-editor',
            template: __webpack_require__("./src/app/process-editor/process-editor.component.html"),
            styles: [__webpack_require__("./src/app/process-editor/process-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_process_service__["a" /* ProcessService */]])
    ], ProcessEditorComponent);
    return ProcessEditorComponent;
}());



/***/ }),

/***/ "./src/app/result-detail/result-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result-detail/result-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" *ngIf=\"model\">\r\n    <div *ngFor=\"let result of model.results\">\r\n        <div class=\"form-group form-group-sm row col-sm-12\" *ngIf=\"result.type != 4\">\r\n            <label class=\"col-sm-4 control-label\" for=\"result\">{{result.name}} ({{result.unit}})</label>\r\n            <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" id=\"resultName\" name=\"{{result.name}}\" placeholder=\"{{result.value}}\" *ngIf=\"result.value\" readonly>\r\n                <input type=\"text\" class=\"form-control\" id=\"resultName\" name=\"{{result.name}}\" placeholder=\"Waiting for simulation\" *ngIf=\"!result.value\" readonly>\r\n                <!-- <input type=\"text\" class=\"form-control\" id=\"resultName\" name=\"{{result.name}}\" placeholder=\"Input result\" *ngIf=\"result.type == 5\" readonly> -->\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"result.type == 4\">\r\n            <label class=\"col-sm-4 control-label\" for=\"result\">{{result.name}} ({{result.unit}})</label>\r\n            <div style=\"border-width: 1px; border-style: solid; border-radius: 16px; margin: 5px;\">\r\n                <br/>\r\n                <div *ngFor=\"let item of result.value.array; last as isLast\">\r\n                    <div class=\"form-group row col-sm-12\" *ngIf=\"item\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"margin-top: 8px;\" for=\"item\">{{item.name}} ({{result.unit}})</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"resultName\" name=\"{{item.key}}\" [(ngModel)]=\"item.value\" readonly>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/result-detail/result-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_model__ = __webpack_require__("./src/app/classes/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultDetailComponent = /** @class */ (function () {
    function ResultDetailComponent() {
    }
    ResultDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_model__["a" /* Model */])
    ], ResultDetailComponent.prototype, "model", void 0);
    ResultDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-result-detail',
            template: __webpack_require__("./src/app/result-detail/result-detail.component.html"),
            styles: [__webpack_require__("./src/app/result-detail/result-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultDetailComponent);
    return ResultDetailComponent;
}());



/***/ }),

/***/ "./src/app/result-editor/result-editor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result-editor/result-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\" *ngIf=\"model && model != null\" style=\"margin-top: 24px;\">\r\n  <div class=\"row\">\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Key\" readonly>\r\n    </div>\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Name\" readonly>\r\n    </div>\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Unit\" readonly>\r\n    </div>\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Type\" readonly>\r\n    </div>\r\n    <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n      <input type=\"text\" class=\"form-control\" id=\"processName\" placeholder=\"Delete\" readonly>\r\n    </div>\r\n  </div>\r\n        \r\n  <div *ngFor=\"let result of model.results\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n        <input type=\"text\" class=\"form-control\" id=\"processName\" [(ngModel)]=\"result.key\">\r\n      </div>\r\n      <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n        <input type=\"text\" class=\"form-control\" id=\"processName\" [(ngModel)]=\"result.name\">\r\n      </div>\r\n      <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n        <input type=\"text\" class=\"form-control\" id=\"processName\" [(ngModel)]=\"result.unit\">\r\n      </div>\r\n      <div class=\"form-group mx-sm-4 mb-4\" style=\"display: inline;\">\r\n        <input type=\"text\" class=\"form-control\" id=\"processName\" [(ngModel)]=\"result.type\">\r\n      </div>\r\n      <div>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteResult(result)\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"form-group mx-sm-4 mb-4\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"addResult()\">\r\n      Add Result\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/result-editor/result-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_model__ = __webpack_require__("./src/app/classes/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_parameter__ = __webpack_require__("./src/app/classes/parameter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultEditorComponent = /** @class */ (function () {
    function ResultEditorComponent() {
    }
    ResultEditorComponent.prototype.ngOnInit = function () {
    };
    ResultEditorComponent.prototype.addResult = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_2__classes_parameter__["a" /* Parameter */]();
        this.model.results.push(result);
    };
    ResultEditorComponent.prototype.deleteResult = function (result) {
        var index = this.model.results.indexOf(result);
        this.model.results.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_model__["a" /* Model */])
    ], ResultEditorComponent.prototype, "model", void 0);
    ResultEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-result-editor',
            template: __webpack_require__("./src/app/result-editor/result-editor.component.html"),
            styles: [__webpack_require__("./src/app/result-editor/result-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultEditorComponent);
    return ResultEditorComponent;
}());



/***/ }),

/***/ "./src/app/script-editor/script-editor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/script-editor/script-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" style=\"margin-top: 24px;\">\r\n  <label for=\"comment\">Script Code:</label>\r\n  <div *ngFor=\"let line of model.GetLines(model.ScriptHead)\">\r\n    <label>{{ line }}</label>\r\n  </div>\r\n  <textarea class=\"form-control\" rows=\"20\" id=\"comment\" [(ngModel)]=\"model.scriptBody\" (input)=\"validateScript($event)\" ></textarea>\r\n  <div *ngFor=\"let line of model.GetLines(model.ScriptTail)\">\r\n    <label>{{ line }}</label>\r\n  </div>\r\n  <!-- <label for=\"comment\">{{ model.ScriptTail }}</label> -->\r\n</div>"

/***/ }),

/***/ "./src/app/script-editor/script-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_model__ = __webpack_require__("./src/app/classes/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScriptEditorComponent = /** @class */ (function () {
    function ScriptEditorComponent() {
    }
    ScriptEditorComponent.prototype.ngOnInit = function () {
    };
    ScriptEditorComponent.prototype.validateScript = function (event) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_model__["a" /* Model */])
    ], ScriptEditorComponent.prototype, "model", void 0);
    ScriptEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-script-editor',
            template: __webpack_require__("./src/app/script-editor/script-editor.component.html"),
            styles: [__webpack_require__("./src/app/script-editor/script-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScriptEditorComponent);
    return ScriptEditorComponent;
}());



/***/ }),

/***/ "./src/app/services/endpoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndpointProvider; });
var EndpointProvider = /** @class */ (function () {
    function EndpointProvider() {
        // public url = 'http://localhost:5000/';
        this.url = "https://24f4845d.ngrok.io/";
        // public url = "";
    }
    return EndpointProvider;
}());



/***/ }),

/***/ "./src/app/services/process.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endpoint__ = __webpack_require__("./src/app/services/endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toaster_js__ = __webpack_require__("./node_modules/toaster-js/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessService = /** @class */ (function () {
    function ProcessService(http) {
        this.http = http;
        this.endpointProvider = new __WEBPACK_IMPORTED_MODULE_2__endpoint__["a" /* EndpointProvider */]();
    }
    // constructor() { }
    ProcessService.prototype.getProcessTypes = function () {
        var endpoint = this.endpointProvider.url + 'get_process_types';
        var result = this.http.get(endpoint);
        return result;
    };
    ProcessService.prototype.getProcessById = function (processId) {
        var endpoint = this.endpointProvider.url + 'get_process_by_id/' + processId.toString();
        var result = this.http.get(endpoint);
        return result;
    };
    ProcessService.prototype.saveModel = function (model, processId) {
        var endpoint = this.endpointProvider.url + 'post_model';
        var body = {
            model: model,
            processId: processId
        };
        var result = this.http.post(endpoint, body);
        result.toPromise().then(function (r) {
            console.log(r);
            new __WEBPACK_IMPORTED_MODULE_3_toaster_js__["a" /* Toast */]('Model saved', __WEBPACK_IMPORTED_MODULE_3_toaster_js__["a" /* Toast */].TYPE_DONE, __WEBPACK_IMPORTED_MODULE_3_toaster_js__["a" /* Toast */].TIME_LONG);
        })
            .catch(function (error) {
            new __WEBPACK_IMPORTED_MODULE_3_toaster_js__["a" /* Toast */](error.error.message, __WEBPACK_IMPORTED_MODULE_3_toaster_js__["a" /* Toast */].TYPE_ERROR, __WEBPACK_IMPORTED_MODULE_3_toaster_js__["a" /* Toast */].TIME_LONG);
        });
    };
    ProcessService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProcessService);
    return ProcessService;
}());



/***/ }),

/***/ "./src/app/services/simulator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_simulation_object__ = __webpack_require__("./src/app/classes/simulation-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__endpoint__ = __webpack_require__("./src/app/services/endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_toaster_js__ = __webpack_require__("./node_modules/toaster-js/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SimulatorService = /** @class */ (function () {
    function SimulatorService(http) {
        this.http = http;
        this.endpointProvider = new __WEBPACK_IMPORTED_MODULE_3__endpoint__["a" /* EndpointProvider */]();
    }
    SimulatorService.prototype.simulate = function (processes, relationships) {
        var endpoint = this.endpointProvider.url + 'simulate';
        var simulationObject = new __WEBPACK_IMPORTED_MODULE_2__classes_simulation_object__["a" /* SimulationObject */](processes, relationships);
        var result = this.http.post(endpoint, simulationObject);
        result.toPromise().then(function (r) {
            console.log(r);
            new __WEBPACK_IMPORTED_MODULE_4_toaster_js__["a" /* Toast */]('Simulation successful', __WEBPACK_IMPORTED_MODULE_4_toaster_js__["a" /* Toast */].TYPE_DONE, __WEBPACK_IMPORTED_MODULE_4_toaster_js__["a" /* Toast */].TIME_LONG);
        })
            .catch(function (error) {
            new __WEBPACK_IMPORTED_MODULE_4_toaster_js__["a" /* Toast */](error.error.message, __WEBPACK_IMPORTED_MODULE_4_toaster_js__["a" /* Toast */].TYPE_ERROR, __WEBPACK_IMPORTED_MODULE_4_toaster_js__["a" /* Toast */].TIME_LONG);
        });
        return result;
    };
    SimulatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SimulatorService);
    return SimulatorService;
}());



/***/ }),

/***/ "./src/app/simulator-canvas/simulator-canvas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/simulator-canvas/simulator-canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <canvas id=\"simulatorCanvas\" oncontextmenu=\"return false;\" #simulatorCanvas></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/simulator-canvas/simulator-canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulatorCanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_scope__ = __webpack_require__("./src/app/classes/scope.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_stage_handler__ = __webpack_require__("./src/app/classes/stage-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as createjs from 'createjs-module';


var SimulatorCanvasComponent = /** @class */ (function () {
    function SimulatorCanvasComponent() {
    }
    SimulatorCanvasComponent.prototype.ngAfterViewInit = function () {
        this.scope.setStageHandler(new __WEBPACK_IMPORTED_MODULE_2__classes_stage_handler__["a" /* StageHandler */]('simulatorCanvas'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_scope__["a" /* Scope */])
    ], SimulatorCanvasComponent.prototype, "scope", void 0);
    SimulatorCanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simulator-canvas',
            template: __webpack_require__("./src/app/simulator-canvas/simulator-canvas.component.html"),
            styles: [__webpack_require__("./src/app/simulator-canvas/simulator-canvas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimulatorCanvasComponent);
    return SimulatorCanvasComponent;
}());



/***/ }),

/***/ "./src/app/simulator-interface/simulator-interface.component.css":
/***/ (function(module, exports) {

module.exports = ".group-row\r\n{\r\n    text-align:center;\r\n}\r\n.row-element\r\n{\r\n    display:inline;\r\n}\r\n.light-blue-backdrop \r\n{\r\n    background-color: #5cb3fd;\r\n}"

/***/ }),

/***/ "./src/app/simulator-interface/simulator-interface.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <app-simulator-canvas [scope]=\"scope\">\r\n        </app-simulator-canvas>\r\n        <app-action-bar [scope]=\"scope\"></app-action-bar>\r\n      </div>\r\n      <!-- <app-process-detail [scope]=\"scope\"></app-process-detail>  -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/simulator-interface/simulator-interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulatorInterfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_scope__ = __webpack_require__("./src/app/classes/scope.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_detail_process_detail_component__ = __webpack_require__("./src/app/process-detail/process-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SimulatorInterfaceComponent = /** @class */ (function () {
    function SimulatorInterfaceComponent(modalService) {
        this.modalService = modalService;
        this.scope = new __WEBPACK_IMPORTED_MODULE_1__classes_scope__["a" /* Scope */]();
    }
    SimulatorInterfaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scope.onShowDetail.subscribe(function (p) { return _this.showProcessDetail(p.process); });
    };
    SimulatorInterfaceComponent.prototype.showProcessDetail = function (process) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__process_detail_process_detail_component__["a" /* ProcessDetailComponent */], { size: 'lg', backdropClass: 'light-blue-backdrop' });
        modalRef.componentInstance.process = process;
    };
    SimulatorInterfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simulator-interface',
            template: __webpack_require__("./src/app/simulator-interface/simulator-interface.component.html"),
            styles: [__webpack_require__("./src/app/simulator-interface/simulator-interface.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], SimulatorInterfaceComponent);
    return SimulatorInterfaceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return (err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
