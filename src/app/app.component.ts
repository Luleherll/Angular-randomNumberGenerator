import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { quickSort } from './helpers/sort';

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
  numberList: Set<any>;
  sortedArr = [];
  minimumNumber;
  maximumNumber;
  code = 'O75';
  total = 11000;

  ngOnInit(): void {
    this.numberList = new Set();
  }

  newNumber = () => parseInt(((Math.random() * 9 + 1) * Math.pow(10, 6)).toString(), 10);

  generateNumbers = () => {
    const t0 = performance.now();
    while (--this.total) {
      this.numberList.add(this.newNumber());
    }
    this.minimumNumber = this.getNumber('min');
    this.maximumNumber = this.getNumber('max');
    this.sortedArr = quickSort(Array.from(this.numberList), 0, this.numberList.size - 1);
    console.log((performance.now() - t0) + ' milliseconds.');
  }
  getNumber = (value) => Math[value](...Array.from(this.numberList));

  sortNumbers = (order) => {
    if (order === 'ASC' ) {
      const arr = [...this.sortedArr];
      const clone = arr.reverse();
      this.numberList = new Set(clone);
      return;
    }
    this.numberList = new Set(this.sortedArr);
  }

}
