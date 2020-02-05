import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import BST from '../helpers/BinarySearchTree';


@Component({
  selector: 'app-sidecard',
  template: `
  <mat-card>
  <mat-card-header>
    <mat-card-title>Metrics</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <span>Minimum number: {{minimumNumber ? '0' + minimumNumber : 0}}</span>
    <span>Maximum number: {{maximumNumber ? '0' + maximumNumber : 0}}</span>
    <span>Total: {{generatedNums}}</span>
  </mat-card-content>
  <mat-card-actions>
    <button class="generator" mat-button (click)="generateNumbers()">Generate New Numbers</button>
  </mat-card-actions>
</mat-card>
  `,
  styles: [`
  .generator {
    margin-left: 27px !important;
    background-color: gray;
  }
  mat-card-content {
    margin-left: 16px;
  }

  span {
    display: block;
  }
  `]
})
export class SidecardComponent {

  @Output() newNumbers = new EventEmitter<Array<number>>();
  @Output() BST = new EventEmitter<BST>();
  total = 11000;
  minimumNumber: number;
  maximumNumber: number;
  generatedNums: number;

  newNumber = () => parseInt('75' + (((Math.random() * 9 + 1) * Math.pow(10, 6)).toString()), 10);

  generateNumbers = () => {
      const bst = new BST();
      while (this.total !== 0) {
        bst.insert(this.newNumber());
        this.total--;
      }
      const numbers = bst.traverseInOrder('MIN');
      this.maximumNumber = numbers[numbers.length - 1];
      this.minimumNumber = numbers[0];

      this.newNumbers.emit(numbers);
      this.BST.emit(bst);
      this.total = 11000;
      this.generatedNums = numbers.length;
    };
}

