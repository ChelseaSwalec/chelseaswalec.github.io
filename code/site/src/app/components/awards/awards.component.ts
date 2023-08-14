import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  public title:string = "Awards & Certifications";
  public awards:string[] = new Array<string>(
    "Shipping Hazmat By Air IATA Certified",
    "Shipping Hazmat By Vessel IMDG Certified",
    "Shipping Hazmat By Ground DOT Certified"
  );
}
