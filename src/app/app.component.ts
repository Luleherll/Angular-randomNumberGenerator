import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('down', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/caret-down.svg'));
    this.matIconRegistry.addSvgIcon('up', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sort-up.svg'));
  }
  title = 'randomNumberGenerator';
  numberList: Set<any>;
  times = [];

  ngOnInit(): void {
    this.numberList = new Set();
  }

  newNumber = (code: string = '075') => {
    const random = parseInt(((Math.random() * 9 + 1) * Math.pow(10, 6)).toString(), 10);
    return code + random.toString();
  }

  generateNumbers = (total: number) => {
    const iterations = total / 100;
    this.times = new Array(iterations).fill(100);
    while (this.numberList.size < total) {
      this.times.forEach(number => {
      const i = this.runLoop(number);
      i.forEach(value => this.numberList.add(value));
    });
    }
  }

  runLoop = (number) => {
      const arr = new Set();
      for (let i = 0; i < number; i++) {
      arr.add(this.newNumber());
    }
      return arr;
    }

}
