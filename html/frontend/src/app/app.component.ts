import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router, matIconRegistry : MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'football_icon',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/sports_football-24px.svg")
    )
    matIconRegistry.addSvgIcon(
      'calendar',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/event-24px.svg")
    )
    matIconRegistry.addSvgIcon(
      'location',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/location_on-24px.svg")
    )
    matIconRegistry.addSvgIcon(
      'checkmark',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/check_circle-24px.svg")
    )
  }
    

  goToLogin() {
    this.router.navigate(['/login']); 
  }
}
