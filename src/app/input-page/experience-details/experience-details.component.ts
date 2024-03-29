import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent {
  message = '';
  isTimeOut: any;
  isMoreJobs = false;
  buttonContent = 'Add more jobs'
  isPlus1 = false;
  isPlus2 = false;
  @ViewChild('w') w: any;
  expForm: NgForm 
  constructor(private dataService: DataService) { }


  moreJobs() {
    
    if (this.isMoreJobs) {
      this.isMoreJobs = false
      this.buttonContent = 'Add more jobs'
      return
    }
    if (!this.isMoreJobs) {
      this.isMoreJobs = true
      this.buttonContent = 'Remove jobs'
      return
    }
  }
  onPlus1() {
    this.isPlus1 = !this.isPlus1
  }
  onPlus2() {
    this.isPlus2 = !this.isPlus2
  }

  getEduDetails(w: NgForm) {
    this.dataService.addWorkData(w)
    this.message = 'Your experience added!'
    clearTimeout(this.isTimeOut)
    this.isTimeOut = setTimeout(() => {
      this.message = '';
    }, 1000);
    this.dataService.moveToNextButton.next('button4')
  }
  resetButton() {
    this.w.resetForm()
  }
}
