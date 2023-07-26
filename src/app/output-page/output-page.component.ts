import { Component, ElementRef, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import * as html2pdf from 'html2pdf.js';
import { Subscription } from 'rxjs/internal/Subscription';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.css']
})
export class OutputPageComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  private eduSub: Subscription;
  private workSub: Subscription;
  private infoSub: Subscription
  @Output() closeButton = new Subject<void>()
  
    userName = 'Your';
    userSurname = 'Name'
    userPosition = '';
    userPhone = '';
    userEmail = ''; 
    userBirth = '';
    userCity = '';
    previewUrl: string | ArrayBuffer | null = null;
    addAboutMe = 'add'
    aboutMe = 'Write something about yourself.'
    
    eduName1 = 'Name of your Uni';
    eduType1 = 'Your degree';
    eduName2 = '';
    eduType2 = '';
    eduName3 = '';
    eduType3 = '';
    eduName4 = '';
    eduType4 = '';
    isCourses = 'courses'
    courseName1 = '';
    courseName2 = '';
    courseName3 = '';
    courseName4 = '';

    jobTitle1 = '';
    jobTitle2 = '';
    jobTitle3 = '';
    jobTitle4 = '';
    jobDate1 = '';
    jobDate2 = '';
    jobDate3 = '';
    jobDate4 = '';
    jobWhere1 = '';
    jobWhere2 = '';
    jobWhere3 = '';
    jobWhere4 = '';
    jobDetail11 = '';
    jobDetail12 = '';
    jobDetail13 = '';
    jobDetail21 = '';
    jobDetail22 = '';
    jobDetail23 = '';

    langName1 = 'English';
    langName2 = '';
    langName3 = '';
    langName4 = '';
    langlvl1 = 'Native';
    langlvl2 = '';
    langlvl3 = '';
    langlvl4 = '';
    info1 = 'Driving license, cat. B';
    info2 = 'Professional knowledge of Excel';
    info3 = '';
    info4 = '';
    info5 = '';
    info6 = '';
    info7 = '';
    link = '';
    linkName = '';
    dropdownEnclosure = 'add';
    enclosure = 'I hereby give consent for my personal data to be processed for the purpose of conducting recruitment for the position for which I am applying.'
  
    @ViewChild('myCV', { static: true }) myTempRef!: ElementRef;
  constructor(private dataService: DataService
          ) { 
    this.previewUrl = this.dataService.previewUrl;
  }

  ngOnInit(): void {
    this.userSub = this.dataService.userData.subscribe(
      userData => {
        if (!userData) {
          return
        }
        this.userName = userData.name
        this.userSurname = userData.surname
        this.userPosition = userData.position
        this.userPhone = userData.phone
        this.userEmail = userData.email
        this.userCity = userData.city
        this.userBirth = userData.birth
        this.addAboutMe = userData.addAboutMe
        this.aboutMe = userData.aboutme
      }
    )
    this.eduSub = this.dataService.eduData.subscribe(
      eduData => {
        if (!eduData) {
          return 
        }
          this.eduName1 = eduData.eduname1
          this.eduType1 = eduData.edutype1
          this.eduName2 = eduData.eduname2
          this.eduType2 = eduData.edutype2
          this.eduName3 = eduData.eduname3
          this.eduType3 = eduData.edutype3
          this.eduName4 = eduData.eduname4
          this.eduType4 = eduData.edutype4
          this.isCourses = eduData.dropdown
          this.courseName1 = eduData.coursename1
          this.courseName2 = eduData.coursename2
          this.courseName3 = eduData.coursename3
          this.courseName4 = eduData.coursename4
        }
    )
    this.workSub = this.dataService.workData.subscribe(
      workData => {
        if (!workData) {
          return 
        }
          this.jobTitle1 = workData.jobtitle1
          this.jobDate1 = workData.jobdate1
          this.jobWhere1 = workData.jobwhere1
          this.jobDetail11 = workData.jobdetail11
          this.jobDetail12 = workData.jobdetail12
          this.jobDetail13 = workData.jobdetail13
          this.jobTitle2 = workData.jobtitle2
          this.jobDate2 = workData.jobdate2
          this.jobWhere2 = workData.jobwhere2
          this.jobDetail21 = workData.jobdetail21
          this.jobDetail22 = workData.jobdetail22
          this.jobDetail23 = workData.jobdetail23
          this.jobTitle3 = workData.jobtitle3
          this.jobDate3 = workData.jobdate3
          this.jobWhere3 = workData.jobwhere3
          this.jobTitle4 = workData.jobtitle4
          this.jobDate4 = workData.jobdate4
          this.jobWhere4 = workData.jobwhere4
        }
    )
    this.infoSub = this.dataService.infoData.subscribe(
      infoData => {
        if (!infoData) {
          return 
        }
        this.langName1 = infoData.langname1
        this.langName2 = infoData.langname2
        this.langName3 = infoData.langname3
        this.langName4 = infoData.langname4
        this.langlvl1 = infoData.langlvl1
        this.langlvl2 = infoData.langlvl2
        this.langlvl3 = infoData.langlvl3
        this.langlvl4 = infoData.langlvl4
        this.info1 = infoData.info1
        this.info2 = infoData.info2
        this.info3 = infoData.info3
        this.info4 = infoData.info4
        this.info5 = infoData.info5
        this.info6 = infoData.info6
        this.info7 = infoData.info7
        this.dropdownEnclosure = infoData.dropdownEnclosure
        this.enclosure = infoData.enclosure
        this.link = infoData.link
        this.linkName = infoData.linkname
        }
    )
  }
  closeButto() {
    this.closeButton.next()
  }

  download() {
    const element = document.getElementById('printCV');
    const options = {
      filename: 'Generated-CV.pdf',
      image: { type: 'jpeg', quality: 2 }, 
      html2canvas: { scale: 3 }, 
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, 
      enableLinks: true,
      pagebreak: { mode: 'avoid-all'},
    };

    html2pdf().set(options).from(element).save();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe;
    this.eduSub.unsubscribe;
    this.workSub.unsubscribe;
    this.infoSub.unsubscribe
  }
}

