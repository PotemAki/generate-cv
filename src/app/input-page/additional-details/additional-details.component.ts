import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent {
  @ViewChild('a') a: any;
  isPlus1 = false;
  isPlus2 = false;
  isPlus3 = false;
  infoPlus1 = false;
  infoPlus2 = false;
  infoPlus3 = false;
  selectedOption = 'add'

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


  getAdditionalDetails(a: NgForm) {
    this.dataService.addAdditionalInfo(a)
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