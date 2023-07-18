"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDetailsComponent = void 0;
var core_1 = require("@angular/core");
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.selectedOption = 'add';
        this.previewUrl = null;
    }
    UserDetailsComponent.prototype.getUserDetails = function (form) {
        this.dataService.addUserData(form);
        this.dataService.addUserPhoto(this.previewUrl);
    };
    //photo related:
    UserDetailsComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.previewUrl = event.target.result;
            };
        }
    };
    UserDetailsComponent.prototype.deletePhoto = function () {
        this.previewUrl = null;
        this.photoInput.nativeElement.value = '';
    };
    UserDetailsComponent.prototype.resetButton = function () {
        this.u.resetForm();
    };
    __decorate([
        core_1.ViewChild('u')
    ], UserDetailsComponent.prototype, "u");
    __decorate([
        core_1.ViewChild('photoInput', { static: false })
    ], UserDetailsComponent.prototype, "photoInput");
    UserDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.css']
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
