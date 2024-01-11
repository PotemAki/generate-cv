import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent {
  message = '';
  isTimeOut: any;
  @ViewChild('a') a: any;
  isPlus1 = false;
  isPlus2 = false;
  isPlus3 = false;
  infoPlus1 = false;
  infoPlus2 = false;
  infoPlus3 = false;
  selectedOption = 'add'
  addLink = false
  enclosure = 'I hereby give consent for my personal data to be processed for the purpose of conducting recruitment for the position for which I am applying.'

  constructor(private dataService: DataService) { }

  onPlus1() {
    this.isPlus1 = !this.isPlus1
  }
  onPlus2() {
    this.isPlus2 = !this.isPlus2
  }
  onPlus3() {
    this.isPlus3 = !this.isPlus3
  }
  infoOnPlus1() {
    this.infoPlus1 = !this.infoPlus1
  }  
  infoOnPlus2() {
    this.infoPlus2 = !this.infoPlus2
  }
  infoOnPlus3() {
    this.infoPlus3 = !this.infoPlus3
  }
  checkLink() {
    this.addLink = !this.addLink
  }

  getAdditionalDetails(a: NgForm) {
    this.dataService.addAdditionalInfo(a)
    // this.message = 'Your additional info added!'
    // clearTimeout(this.isTimeOut)
    // this.isTimeOut = setTimeout(() => {
    //   this.message = '';
    // }, 1000)
    this.dataService.moveToNextButton.next('button5')
  }
  resetButton() {
    this.a.resetForm();
    this.isPlus1 = false;
    this.isPlus2 = false;
    this.isPlus3 = false;
    this.infoPlus1 = false;
    this.infoPlus2 = false;
    this.infoPlus3 = false;
  }
}
