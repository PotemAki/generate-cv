"use strict";
exports.__esModule = true;
exports.infoData = exports.jobData = exports.eduData = exports.dataUser = void 0;
var dataUser = /** @class */ (function () {
    function dataUser(name, surname, email, phone, birth, city, position, addAboutMe, aboutme) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.city = city;
        this.position = position;
        this.addAboutMe = addAboutMe;
        this.aboutme = aboutme;
    }
    return dataUser;
}());
exports.dataUser = dataUser;
var eduData = /** @class */ (function () {
    function eduData(eduname1, edutype1, eduname2, edutype2, eduname3, edutype3, eduname4, edutype4, coursename1, coursename2, coursename3, coursename4, dropdown) {
        this.eduname1 = eduname1;
        this.edutype1 = edutype1;
        this.eduname2 = eduname2;
        this.edutype2 = edutype2;
        this.eduname3 = eduname3;
        this.edutype3 = edutype3;
        this.eduname4 = eduname4;
        this.edutype4 = edutype4;
        this.coursename1 = coursename1;
        this.coursename2 = coursename2;
        this.coursename3 = coursename3;
        this.coursename4 = coursename4;
        this.dropdown = dropdown;
    }
    return eduData;
}());
exports.eduData = eduData;
var jobData = /** @class */ (function () {
    function jobData(jobtitle1, jobtitle2, jobtitle3, jobtitle4, jobdate1, jobdate2, jobdate3, jobdate4, jobwhere1, jobwhere2, jobwhere3, jobwhere4, jobdetail11, jobdetail12, jobdetail13, jobdetail21, jobdetail22, jobdetail23) {
        this.jobtitle1 = jobtitle1;
        this.jobtitle2 = jobtitle2;
        this.jobtitle3 = jobtitle3;
        this.jobtitle4 = jobtitle4;
        this.jobdate1 = jobdate1;
        this.jobdate2 = jobdate2;
        this.jobdate3 = jobdate3;
        this.jobdate4 = jobdate4;
        this.jobwhere1 = jobwhere1;
        this.jobwhere2 = jobwhere2;
        this.jobwhere3 = jobwhere3;
        this.jobwhere4 = jobwhere4;
        this.jobdetail11 = jobdetail11;
        this.jobdetail12 = jobdetail12;
        this.jobdetail13 = jobdetail13;
        this.jobdetail21 = jobdetail21;
        this.jobdetail22 = jobdetail22;
        this.jobdetail23 = jobdetail23;
    }
    return jobData;
}());
exports.jobData = jobData;
var infoData = /** @class */ (function () {
    function infoData(langname1, langname2, langname3, langname4, langlvl1, langlvl2, langlvl3, langlvl4, info1, info2, info3, info4, info5, info6, info7, dropdownEnclosure, enclosure) {
        this.langname1 = langname1;
        this.langname2 = langname2;
        this.langname3 = langname3;
        this.langname4 = langname4;
        this.langlvl1 = langlvl1;
        this.langlvl2 = langlvl2;
        this.langlvl3 = langlvl3;
        this.langlvl4 = langlvl4;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
        this.info5 = info5;
        this.info6 = info6;
        this.info7 = info7;
        this.dropdownEnclosure = dropdownEnclosure;
        this.enclosure = enclosure;
    }
    return infoData;
}());
exports.infoData = infoData;
