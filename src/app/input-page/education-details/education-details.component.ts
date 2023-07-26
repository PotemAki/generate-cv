import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent {
  message = '';
  isTimeOut: any;
  selectedOption = 'edu'
  @ViewChild('e') e: any;

  constructor(private dataService: DataService) {

  }

  getEduDetails(e: NgForm) {
    this.dataService.addEduData(e)
    this.message = 'Your education added!'
    clearTimeout(this.isTimeOut)
    this.isTimeOut = setTimeout(() => {
      this.message = '';
    }, 1000);
  }
  resetButton() {
    this.e.resetForm();
    this.e.value.dropdown = 'edu'
  }
}


