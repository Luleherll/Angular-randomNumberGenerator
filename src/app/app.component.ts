import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('down', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/caret-down.svg'));
    this.matIconRegistry.addSvgIcon('up', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sort-up.svg'));
  }
  title = 'randomNumberGenerator';
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
