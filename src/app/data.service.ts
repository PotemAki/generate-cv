import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { dataUser, eduData, infoData, jobData } from "./dataUser.model";



@Injectable({providedIn: 'root'})
export class DataService { 
  userData = new BehaviorSubject<dataUser>(null)
  _previewUrl: string | ArrayBuffer | null = null;
  eduData = new BehaviorSubject<eduData>(null)
  workData = new BehaviorSubject<jobData>(null)
  infoData = new BehaviorSubject<infoData>(null)

  addUserData(form: NgForm) {
    const loadUserData = new dataUser(
      form.value.name,
      form.value.surname,
      form.value.email,
      form.value.phone,
      form.value.birth,
      form.value.city,
      form.value.position,
      form.value.dropdown,
      form.value.aboutme
    )
    this.userData.next(loadUserData)
  }
  addUserPhoto(previewUrl: string | ArrayBuffer | null) {
    this._previewUrl = previewUrl
  }
  get previewUrl(): string | ArrayBuffer | null {
    return this._previewUrl;
  }
  addEduData(form: NgForm) {
    const loadEduData = new eduData(
      form.value.eduname1,
      form.value.edutype1,
      form.value.eduname2,
      form.value.edutype2,
      form.value.eduname3,
      form.value.edutype3,
      form.value.eduname4,
      form.value.edutype4,
      form.value.coursename1,
      form.value.coursename2,
      form.value.coursename3,
      form.value.coursename4,
      form.value.dropdown
    )
    this.eduData.next(loadEduData)
  }
  addWorkData(form: NgForm) {
    const loadWorkData = new jobData(
      form.value.jobtitle1,
      form.value.jobtitle2,
      form.value.jobtitle3,
      form.value.jobtitle4,
      form.value.jobdate1,
      form.value.jobdate2,
      form.value.jobdate3,
      form.value.jobdate4,
      form.value.jobwhere1,
      form.value.jobwhere2,
      form.value.jobwhere3,
      form.value.jobwhere4,
      form.value.jobdetail11,
      form.value.jobdetail12,
      form.value.jobdetail13,
      form.value.jobdetail21,
      form.value.jobdetail22,
      form.value.jobdetail23,
    )
    this.workData.next(loadWorkData)
  }
  addAdditionalInfo(form: NgForm){
    const loadInfoData = new infoData(
      form.value.langname1,
      form.value.langname2,
      form.value.langname3,
      form.value.langname4,
      form.value.langlvl1,
      form.value.langlvl2,
      form.value.langlvl3,
      form.value.langlvl4,
      form.value.info1,
      form.value.info2,
      form.value.info3,
      form.value.info4,
      form.value.info5,
      form.value.info6,
      form.value.info7,
      form.value.dropdownEnclosure,
      form.value.enclosure
    )
    this.infoData.next(loadInfoData)
  }
}
