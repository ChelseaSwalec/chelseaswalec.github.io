import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public title:string = "Skills";
  public languagesHeader: string = "";
  public listLanguages: string[] = new Array<string>(
    'Hazardous Materials Operations',
    'International Logistics',
    'Operations Management',
    'Electronic Data Interchange (EDI)',
    'Epicor ERP',
    'Transportation Operations',
  );
}
