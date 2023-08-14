import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public firstAndMiddleInitial:string = "Chelsea";
  public lastName:string = "Swalec";
  public email: string = "swalecchelsea@gmail.com";
  public about: string = "Team leader with a decade of experience in shipping and logistics. Shipping hazardous materials has made me extremely detail oriented to make sure our customers are receiving top quality service. As a leader I strive to innovate more efficient and cost effective ways to accomplish our tasks, while maintaining safe handling of the dangerous items we work with.";
}
