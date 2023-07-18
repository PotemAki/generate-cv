"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var dataUser_model_1 = require("./dataUser.model");
var DataService = /** @class */ (function () {
    function DataService() {
        this.userData = new rxjs_1.BehaviorSubject(null);
        this._previewUrl = null;
        this.eduData = new rxjs_1.BehaviorSubject(null);
        this.workData = new rxjs_1.BehaviorSubject(null);
        this.infoData = new rxjs_1.BehaviorSubject(null);
    }
    DataService.prototype.addUserData = function (form) {
        this.expForm = form;
        var loadUserData = new dataUser_model_1.dataUser(form.value.name, form.value.surname, form.value.email, form.value.phone, form.value.birth, form.value.city, form.value.position, form.value.dropdown, form.value.aboutme);
        this.userData.next(loadUserData);
    };
    DataService.prototype.addUserPhoto = function (previewUrl) {
        this._previewUrl = previewUrl;
    };
    Object.defineProperty(DataService.prototype, "previewUrl", {
        get: function () {
            return this._previewUrl;
        },
        enumerable: false,
        configurable: true
    });
    DataService.prototype.addEduData = function (form) {
        var loadEduData = new dataUser_model_1.eduData(form.value.eduname1, form.value.edutype1, form.value.eduname2, form.value.edutype2, form.value.eduname3, form.value.edutype3, form.value.eduname4, form.value.edutype4, form.value.coursename1, form.value.coursename2, form.value.coursename3, form.value.coursename4, form.value.dropdown);
        this.eduData.next(loadEduData);
    };
    DataService.prototype.addWorkData = function (form) {
        var loadWorkData = new dataUser_model_1.jobData(form.value.jobtitle1, form.value.jobtitle2, form.value.jobtitle3, form.value.jobtitle4, form.value.jobdate1, form.value.jobdate2, form.value.jobdate3, form.value.jobdate4, form.value.jobwhere1, form.value.jobwhere2, form.value.jobwhere3, form.value.jobwhere4, form.value.jobdetail11, form.value.jobdetail12, form.value.jobdetail13, form.value.jobdetail21, form.value.jobdetail22, form.value.jobdetail23);
        this.workData.next(loadWorkData);
    };
    DataService.prototype.addAdditionalInfo = function (form) {
        var loadInfoData = new dataUser_model_1.infoData(form.value.langname1, form.value.langname2, form.value.langname3, form.value.langname4, form.value.langlvl1, form.value.langlvl2, form.value.langlvl3, form.value.langlvl4, form.value.info1, form.value.info2, form.value.info3, form.value.info4, form.value.info5, form.value.info6, form.value.info7, form.value.dropdownEnclosure, form.value.enclosure);
        this.infoData.next(loadInfoData);
    };
    DataService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
