import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  selectedOption = 'add'
  imageUrl: string
  previewUrl: string | ArrayBuffer | null = null;
  @ViewChild('u') u: any;
  @ViewChild('photoInput', { static: false }) photoInput: ElementRef<HTMLInputElement>;
  constructor(private dataService: DataService, private http: HttpClient) { }

  getUserDetails(form: NgForm) {
    this.dataService.addUserData(form)
    this.dataService.addUserPhoto(this.previewUrl)
  }
  //photo related:
  onFileSelected(event: any) {
    if (event.target.files) {
      let reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.previewUrl = event.target.result
      }
    }
  }
  deletePhoto() {
    this.previewUrl = null; 
    this.photoInput.nativeElement.value = ''
  }
  resetButton() {
    this.u.resetForm();
  
  }
}
