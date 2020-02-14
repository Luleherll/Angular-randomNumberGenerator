import { Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('down', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/caret-down.svg'));
    this.matIconRegistry.addSvgIcon('up', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sort-up.svg'));
  }
  numberList: number[];
  sortAsc: number[];
  sortDesc: number[];

  ngOnInit(): void {}

  newNumber = () => parseInt(((Math.random() * 9 + 1) * Math.pow(10, 6)).toString(), 10);

  getNumbers = (numbers: number[]) => {
    this.numberList = numbers;
    this.sortAsc = numbers;
  }

  getDESC = BST => {
    this.sortDesc = BST.traverseInOrder('MAX');
  }

  sort = value =>
    value === 'DESC' ? (this.numberList = this.sortDesc) : value === 'ASC' ? (this.numberList = this.sortAsc) : null

  downloadNumbers = (content: Set<any>, fileName, contentType) => {
    const brk = Array.from(content)
      .map(no => '0' + no)
      .toString()
      .split(',');
    const newContent = brk.join(' \n');
    const a = document.createElement('a');
    const file = new Blob([newContent], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}
