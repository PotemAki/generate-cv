"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdditionalDetailsComponent = void 0;
var core_1 = require("@angular/core");
var AdditionalDetailsComponent = /** @class */ (function () {
    function AdditionalDetailsComponent(dataService) {
        this.dataService = dataService;
        this.message = '';
        this.isPlus1 = false;
        this.isPlus2 = false;
        this.isPlus3 = false;
        this.infoPlus1 = false;
        this.infoPlus2 = false;
        this.infoPlus3 = false;
        this.selectedOption = 'add';
        this.addLink = false;
        this.enclosure = 'I hereby give consent for my personal data to be processed for the purpose of conducting recruitment for the position for which I am applying.';
    }
    AdditionalDetailsComponent.prototype.onPlus1 = function () {
        this.isPlus1 = !this.isPlus1;
    };
    AdditionalDetailsComponent.prototype.onPlus2 = function () {
        this.isPlus2 = !this.isPlus2;
    };
    AdditionalDetailsComponent.prototype.onPlus3 = function () {
        this.isPlus3 = !this.isPlus3;
    };
    AdditionalDetailsComponent.prototype.infoOnPlus1 = function () {
        this.infoPlus1 = !this.infoPlus1;
    };
    AdditionalDetailsComponent.prototype.infoOnPlus2 = function () {
        this.infoPlus2 = !this.infoPlus2;
    };
    AdditionalDetailsComponent.prototype.infoOnPlus3 = function () {
        this.infoPlus3 = !this.infoPlus3;
    };
    AdditionalDetailsComponent.prototype.checkLink = function () {
        this.addLink = !this.addLink;
    };
    AdditionalDetailsComponent.prototype.getAdditionalDetails = function (a) {
        var _this = this;
        this.dataService.addAdditionalInfo(a);
        this.message = 'Your additional info added!';
        clearTimeout(this.isTimeOut);
        this.isTimeOut = setTimeout(function () {
            _this.message = '';
        }, 1000);
    };
    AdditionalDetailsComponent.prototype.resetButton = function () {
        this.a.resetForm();
        this.isPlus1 = false;
        this.isPlus2 = false;
        this.isPlus3 = false;
        this.infoPlus1 = false;
        this.infoPlus2 = false;
        this.infoPlus3 = false;
    };
    __decorate([
        core_1.ViewChild('a')
    ], AdditionalDetailsComponent.prototype, "a");
    AdditionalDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-additional-details',
            templateUrl: './additional-details.component.html',
            styleUrls: ['./additional-details.component.css']
        })
    ], AdditionalDetailsComponent);
    return AdditionalDetailsComponent;
}());
exports.AdditionalDetailsComponent = AdditionalDetailsComponent;
