"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputPageComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var InputPageComponent = /** @class */ (function () {
    function InputPageComponent(dialogService, dataService) {
        this.dialogService = dialogService;
        this.dataService = dataService;
        this.isActiveButton1 = true;
        this.isActiveButton2 = false;
        this.isActiveButton3 = false;
        this.isActiveButton4 = false;
    }
    InputPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.moveToNextButton.subscribe(function (button) {
            if (button === 'button2') {
                _this.activateButton2();
            }
            else if (button === 'button3') {
                _this.activateButton3();
            }
            else if (button === 'button4') {
                _this.activateButton4();
            }
            else if (button === 'button5') {
                _this.generateButton();
            }
        });
    };
    InputPageComponent.prototype.activateButton1 = function () {
        this.isActiveButton1 = true;
        this.isActiveButton2 = false;
        this.isActiveButton3 = false;
        this.isActiveButton4 = false;
    };
    InputPageComponent.prototype.activateButton2 = function () {
        this.isActiveButton1 = false;
        this.isActiveButton2 = true;
        this.isActiveButton3 = false;
        this.isActiveButton4 = false;
    };
    InputPageComponent.prototype.activateButton3 = function () {
        this.isActiveButton1 = false;
        this.isActiveButton2 = false;
        this.isActiveButton3 = true;
        this.isActiveButton4 = false;
    };
    InputPageComponent.prototype.activateButton4 = function () {
        this.isActiveButton1 = false;
        this.isActiveButton2 = false;
        this.isActiveButton3 = false;
        this.isActiveButton4 = true;
    };
    InputPageComponent.prototype.generateButton = function () {
        this.dialogService.openGenerate();
    };
    InputPageComponent.prototype.closeButton1 = function () {
        // this.isGenerating = false
    };
    InputPageComponent = __decorate([
        core_1.Component({
            selector: 'app-input-page',
            templateUrl: './input-page.component.html',
            styleUrls: ['./input-page.component.css'],
            animations: [
                animations_1.trigger('fadeInOut', [
                    animations_1.state('void', animations_1.style({ opacity: 0, backgroundColor: 'transparent' })),
                    animations_1.transition('void => *', [
                        animations_1.animate(200, animations_1.style({ opacity: 1, backgroundColor: 'white' }))
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate(0, animations_1.style({ opacity: 1, backgroundColor: 'white' }))
                    ]),
                ])
            ]
        })
    ], InputPageComponent);
    return InputPageComponent;
}());
exports.InputPageComponent = InputPageComponent;
