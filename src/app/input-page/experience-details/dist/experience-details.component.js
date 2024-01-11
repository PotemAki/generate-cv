"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExperienceDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ExperienceDetailsComponent = /** @class */ (function () {
    function ExperienceDetailsComponent(dataService) {
        this.dataService = dataService;
        this.message = '';
        this.isMoreJobs = false;
        this.buttonContent = 'Add more jobs';
        this.isPlus1 = false;
        this.isPlus2 = false;
    }
    ExperienceDetailsComponent.prototype.moreJobs = function () {
        if (this.isMoreJobs) {
            this.isMoreJobs = false;
            this.buttonContent = 'Add more jobs';
            return;
        }
        if (!this.isMoreJobs) {
            this.isMoreJobs = true;
            this.buttonContent = 'Remove jobs';
            return;
        }
    };
    ExperienceDetailsComponent.prototype.onPlus1 = function () {
        this.isPlus1 = !this.isPlus1;
    };
    ExperienceDetailsComponent.prototype.onPlus2 = function () {
        this.isPlus2 = !this.isPlus2;
    };
    ExperienceDetailsComponent.prototype.getEduDetails = function (w) {
        var _this = this;
        this.dataService.addWorkData(w);
        this.message = 'Your experience added!';
        clearTimeout(this.isTimeOut);
        this.isTimeOut = setTimeout(function () {
            _this.message = '';
        }, 1000);
        this.dataService.moveToNextButton.next('button4');
    };
    ExperienceDetailsComponent.prototype.resetButton = function () {
        this.w.resetForm();
    };
    __decorate([
        core_1.ViewChild('w')
    ], ExperienceDetailsComponent.prototype, "w");
    ExperienceDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-experience-details',
            templateUrl: './experience-details.component.html',
            styleUrls: ['./experience-details.component.css']
        })
    ], ExperienceDetailsComponent);
    return ExperienceDetailsComponent;
}());
exports.ExperienceDetailsComponent = ExperienceDetailsComponent;
