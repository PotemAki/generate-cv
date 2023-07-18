import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent {
  selectedOption = 'edu'
  @ViewChild('e') e: any;

  constructor(private dataService: DataService) {

  }

  getEduDetails(e: NgForm) {
    this.dataService.addEduData(e)
  }
  resetButton() {
    this.e.resetForm();
    this.e.value.dropdown = 'edu'
  }
}


