"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_component_1 = require("./header/header.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var not_found_component_1 = require("./page-not-found/not-found/not-found.component");
var input_page_component_1 = require("./input-page/input-page.component");
var output_page_component_1 = require("./output-page/output-page.component");
var user_details_component_1 = require("./input-page/user-details/user-details.component");
var education_details_component_1 = require("./input-page/education-details/education-details.component");
var experience_details_component_1 = require("./input-page/experience-details/experience-details.component");
var additional_details_component_1 = require("./input-page/additional-details/additional-details.component");
var animations_1 = require("@angular/platform-browser/animations");
var dialog_1 = require("@angular/material/dialog");
var ngx_print_1 = require("ngx-print");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                not_found_component_1.NotFoundComponent,
                input_page_component_1.InputPageComponent,
                output_page_component_1.OutputPageComponent,
                user_details_component_1.UserDetailsComponent,
                education_details_component_1.EducationDetailsComponent,
                experience_details_component_1.ExperienceDetailsComponent,
                additional_details_component_1.AdditionalDetailsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbDropdownModule,
                animations_1.BrowserAnimationsModule,
                dialog_1.MatDialogModule,
                ngx_print_1.NgxPrintModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
