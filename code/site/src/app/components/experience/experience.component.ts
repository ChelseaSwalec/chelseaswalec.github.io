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
    new Experience("Dispatch Supervisor", "Vibra-Tite", new Array<string>("Organizing and distributing daily workload", "Maintaining EDI data accuracy", "Handling and packaging of restricted hazardous materials", "Managing all DGIS reporting", "Performing logistics analysis to optimize shipping throughput", "Performing evaluations of team members as needed"), "June 2019", "Present"),
    new Experience("Dispatch Clerk", "Vibra-Tite", new Array<string>("Packing orders for shipping", "Creating labels for orders", "Maintaining inventory accuracy"), "June 2015", "June 2019"),
    new Experience("Data Entry Clerk", "Vibra-Tite", new Array<string>("Entering data in various systems", "Ensuring data accuracy and validity"), "June 2014", "June 2015"),
    new Experience("Production Team Member", "Vibra-Tite", new Array<string>("Operating small machines in the production of various products", "Inspecting products for quality"), "June 2013", "June 2014")
  );
}
