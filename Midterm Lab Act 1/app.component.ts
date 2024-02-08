import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm1';
  presentDate = new Date(); 
  time$: Observable<Date>
  price : number = 20000; 
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegrenate"]; 
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 3.01;
  percentNum1: number = 0.65;
  percentNum2: number = 0.55;
  percentNum3: number = 0.087;
  
  data: object = {
    name: 'Venice', age:21, food:'Ramen',
    languages: [
      {lname: 'JS', level:'Wizard'},
      {lname: 'Python',level:'Professional'},
      {lname: 'Cobol',level:'Beginner'}
    ]
  }

  data2: object = {
    name: 'Kharla', age:21, food:'Pancit Canton',
    languages: [
      {lname: 'JS', level:'Beginner'},
      {lname: 'Python',level:'Professional'},
      {lname: 'Cobol',level:'Wizzard'}
    ]
  }

  data3: object = {
    name: 'Denise', age:22, food:'Carbonara',
    languages: [
      {lname: 'JS', level:'Beginner'},
      {lname: 'Python',level:'Wizzard'},
      {lname: 'Java',level:'Wizzard'}
    ]
  }

  constructor() {
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    );
  }
}


