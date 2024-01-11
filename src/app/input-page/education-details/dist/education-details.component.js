"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EducationDetailsComponent = void 0;
var core_1 = require("@angular/core");
var EducationDetailsComponent = /** @class */ (function () {
    function EducationDetailsComponent(dataService) {
        this.dataService = dataService;
        this.message = '';
        this.selectedOption = 'edu';
    }
    EducationDetailsComponent.prototype.getEduDetails = function (e) {
        var _this = this;
        this.dataService.addEduData(e);
        this.message = 'Your education added!';
        clearTimeout(this.isTimeOut);
        this.isTimeOut = setTimeout(function () {
            _this.message = '';
        }, 1000);
        this.dataService.moveToNextButton.next('button3');
    };
    EducationDetailsComponent.prototype.resetButton = function () {
        this.e.resetForm();
        this.e.value.dropdown = 'edu';
    };
    __decorate([
        core_1.ViewChild('e')
    ], EducationDetailsComponent.prototype, "e");
    EducationDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-education-details',
            templateUrl: './education-details.component.html',
            styleUrls: ['./education-details.component.css']
        })
    ], EducationDetailsComponent);
    return EducationDetailsComponent;
}());
exports.EducationDetailsComponent = EducationDetailsComponent;
