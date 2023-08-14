import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  public title:string = "Experience";
  public elements: Experience[] = new Array<Experience>(
    new Experience("Shipping Lead", "Vibra-Tite", "", "June 2019", "Present"),
    new Experience("Shipping Clerk", "Vibra-Tite", "", "June 2015", "June 2019"),
    new Experience("Data Entry Clerk", "Vibra-Tite", "", "June 2014", "June 2015"),
    new Experience("Production Team Member", "Vibra-Tite", "", "June 2013", "June 2014")
  );
}
