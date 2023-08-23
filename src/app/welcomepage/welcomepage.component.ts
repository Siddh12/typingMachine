import { Component } from '@angular/core';
import {ApiService} from "../api.service"
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {

  constructor(private api:ApiService){
  }

  showPopup: boolean = false;
  showLoginForm: boolean= true;
  showOtpForm: boolean = false;
  showApiProgressanimation :boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  getOtp(value : any){
    console.log(value);
    console.log("button geting clicked");
    
    
      this.showLoginForm = false;
      this.showOtpForm = true;
      this.showApiProgressanimation = true
      setTimeout(() => {
        this.showApiProgressanimation = false;
        this.showOtpForm = true;
      }, 2000);

    //   this.api.apicall({
    //     "email" : "sid.singh9099@gmail.com"
    // }).subscribe(data=>{
    //   console.log(data);
    // })
  }
}
