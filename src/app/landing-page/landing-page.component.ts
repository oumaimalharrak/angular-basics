import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  emailInput! : string;
  userName!:string;
//two-two binding

  constructor(private router : Router){}
ngOnInit(): void {
  
}

onContinue():void{
  this.router.navigateByUrl('facesnaps')
}

onSubmitform(form : NgForm):void{
  console.log("Email is Submitted", form.value);
}

}
