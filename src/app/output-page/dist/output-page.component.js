"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OutputPageComponent = void 0;
var core_1 = require("@angular/core");
var html2pdf = require("html2pdf.js");
var rxjs_1 = require("rxjs");
var OutputPageComponent = /** @class */ (function () {
    function OutputPageComponent(dataService) {
        this.dataService = dataService;
        this.closeButton = new rxjs_1.Subject();
        this.userName = 'Your';
        this.userSurname = 'Name';
        this.userPosition = '';
        this.userPhone = '';
        this.userEmail = '';
        this.userBirth = '';
        this.userCity = '';
        this.previewUrl = null;
        this.addAboutMe = 'add';
        this.aboutMe = 'Write something about yourself.';
        this.eduName1 = 'Name of your Uni';
        this.eduType1 = 'Your degree';
        this.eduName2 = '';
        this.eduType2 = '';
        this.eduName3 = '';
        this.eduType3 = '';
        this.eduName4 = '';
        this.eduType4 = '';
        this.isCourses = 'courses';
        this.courseName1 = '';
        this.courseName2 = '';
        this.courseName3 = '';
        this.courseName4 = '';
        this.jobTitle1 = '';
        this.jobTitle2 = '';
        this.jobTitle3 = '';
        this.jobTitle4 = '';
        this.jobDate1 = '';
        this.jobDate2 = '';
        this.jobDate3 = '';
        this.jobDate4 = '';
        this.jobWhere1 = '';
        this.jobWhere2 = '';
        this.jobWhere3 = '';
        this.jobWhere4 = '';
        this.jobDetail11 = '';
        this.jobDetail12 = '';
        this.jobDetail13 = '';
        this.jobDetail21 = '';
        this.jobDetail22 = '';
        this.jobDetail23 = '';
        this.langName1 = 'English';
        this.langName2 = '';
        this.langName3 = '';
        this.langName4 = '';
        this.langlvl1 = 'Native';
        this.langlvl2 = '';
        this.langlvl3 = '';
        this.langlvl4 = '';
        this.info1 = 'Driving license, cat. B';
        this.info2 = 'Professional knowledge of Excel';
        this.info3 = '';
        this.info4 = '';
        this.info5 = '';
        this.info6 = '';
        this.info7 = '';
        this.link = '';
        this.linkName = '';
        this.dropdownEnclosure = 'add';
        this.enclosure = 'I hereby give consent for my personal data included in the application to be processed by (company name) for the purposes of the recruitment process.';
        this.previewUrl = this.dataService.previewUrl;
    }
    OutputPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.dataService.userData.subscribe(function (userData) {
            if (!userData) {
                return;
            }
            _this.userName = userData.name;
            _this.userSurname = userData.surname;
            _this.userPosition = userData.position;
            _this.userPhone = userData.phone;
            _this.userEmail = userData.email;
            _this.userCity = userData.city;
            _this.userBirth = userData.birth;
            _this.addAboutMe = userData.addAboutMe;
            _this.aboutMe = userData.aboutme;
        });
        this.eduSub = this.dataService.eduData.subscribe(function (eduData) {
            if (!eduData) {
                return;
            }
            _this.eduName1 = eduData.eduname1;
            _this.eduType1 = eduData.edutype1;
            _this.eduName2 = eduData.eduname2;
            _this.eduType2 = eduData.edutype2;
            _this.eduName3 = eduData.eduname3;
            _this.eduType3 = eduData.edutype3;
            _this.eduName4 = eduData.eduname4;
            _this.eduType4 = eduData.edutype4;
            _this.isCourses = eduData.dropdown;
            _this.courseName1 = eduData.coursename1;
            _this.courseName2 = eduData.coursename2;
            _this.courseName3 = eduData.coursename3;
            _this.courseName4 = eduData.coursename4;
        });
        this.workSub = this.dataService.workData.subscribe(function (workData) {
            if (!workData) {
                return;
            }
            _this.jobTitle1 = workData.jobtitle1;
            _this.jobDate1 = workData.jobdate1;
            _this.jobWhere1 = workData.jobwhere1;
            _this.jobDetail11 = workData.jobdetail11;
            _this.jobDetail12 = workData.jobdetail12;
            _this.jobDetail13 = workData.jobdetail13;
            _this.jobTitle2 = workData.jobtitle2;
            _this.jobDate2 = workData.jobdate2;
            _this.jobWhere2 = workData.jobwhere2;
            _this.jobDetail21 = workData.jobdetail21;
            _this.jobDetail22 = workData.jobdetail22;
            _this.jobDetail23 = workData.jobdetail23;
            _this.jobTitle3 = workData.jobtitle3;
            _this.jobDate3 = workData.jobdate3;
            _this.jobWhere3 = workData.jobwhere3;
            _this.jobTitle4 = workData.jobtitle4;
            _this.jobDate4 = workData.jobdate4;
            _this.jobWhere4 = workData.jobwhere4;
        });
        this.infoSub = this.dataService.infoData.subscribe(function (infoData) {
            if (!infoData) {
                return;
            }
            _this.langName1 = infoData.langname1;
            _this.langName2 = infoData.langname2;
            _this.langName3 = infoData.langname3;
            _this.langName4 = infoData.langname4;
            _this.langlvl1 = infoData.langlvl1;
            _this.langlvl2 = infoData.langlvl2;
            _this.langlvl3 = infoData.langlvl3;
            _this.langlvl4 = infoData.langlvl4;
            _this.info1 = infoData.info1;
            _this.info2 = infoData.info2;
            _this.info3 = infoData.info3;
            _this.info4 = infoData.info4;
            _this.info5 = infoData.info5;
            _this.info6 = infoData.info6;
            _this.info7 = infoData.info7;
            _this.dropdownEnclosure = infoData.dropdownEnclosure;
            _this.enclosure = infoData.enclosure;
            _this.link = infoData.link;
            _this.linkName = infoData.linkname;
        });
    };
    OutputPageComponent.prototype.closeButto = function () {
        this.closeButton.next();
    };
    OutputPageComponent.prototype.download = function () {
        var element = document.getElementById('printCV');
        var options = {
            filename: 'Generated-CV.pdf',
            image: { type: 'jpeg', quality: 2 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            enableLinks: true,
            pagebreak: { mode: 'avoid-all' }
        };
        html2pdf().set(options).from(element).save();
    };
    OutputPageComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe;
        this.eduSub.unsubscribe;
        this.workSub.unsubscribe;
        this.infoSub.unsubscribe;
    };
    __decorate([
        core_1.Output()
    ], OutputPageComponent.prototype, "closeButton");
    __decorate([
        core_1.ViewChild('myCV', { static: true })
    ], OutputPageComponent.prototype, "myTempRef");
    OutputPageComponent = __decorate([
        core_1.Component({
            selector: 'app-output-page',
            templateUrl: './output-page.component.html',
            styleUrls: ['./output-page.component.css']
        })
    ], OutputPageComponent);
    return OutputPageComponent;
}());
exports.OutputPageComponent = OutputPageComponent;
