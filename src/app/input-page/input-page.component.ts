import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, backgroundColor: 'transparent' })),
      transition('void <=> *', [
        animate(200, style({ opacity: 1, backgroundColor: 'white' }))
      ])
    ])
  ]
})
export class InputPageComponent {
 
  isActiveButton1 = true
  isActiveButton2 = false
  isActiveButton3 = false
  isActiveButton4 = false
  isGenerating = false
  activateButton1() {
    this.isActiveButton1 = true
    this.isActiveButton2 = false
    this.isActiveButton3 = false
    this.isActiveButton4 = false
  
  }
  activateButton2() {
    this.isActiveButton1 = false
    this.isActiveButton2 = true
    this.isActiveButton3 = false
    this.isActiveButton4 = false
  }
  activateButton3() {
    this.isActiveButton1 = false
    this.isActiveButton2 = false
    this.isActiveButton3 = true
    this.isActiveButton4 = false
  }
  activateButton4() {
    this.isActiveButton1 = false
    this.isActiveButton2 = false
    this.isActiveButton3 = false
    this.isActiveButton4 = true
  }
  generateButton() {
    this.isGenerating = true
  }
  closeButton1() {
    this.isGenerating = false
   
  }
  
}
