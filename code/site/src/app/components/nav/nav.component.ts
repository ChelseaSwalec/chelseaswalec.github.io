import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public name:string = 'Chelsea Swalec';
  public links:string[] = new Array<string>(
    'about',
    'experience',
    'skills',
    'awards'
  );
  
  public itemNames:string[] = new Array<string>(
    'About',
    'Experience',
    'Skills',
    'Awards'
  );
}
