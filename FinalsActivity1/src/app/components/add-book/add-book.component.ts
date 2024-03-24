// import { Component, OnInit, NgZone } from '@angular/core';
// import { Router } from '@angular/router';
// import { CrudService } from './../../service/crud.service';
// import { FormGroup, FormBuilder } from "@angular/forms";
 
// @Component({
//   selector: 'app-add-book',
//   templateUrl: './add-book.component.html',
//   styleUrls: ['./add-book.component.css']
// })
 
// export class AddBookComponent implements OnInit {
 
//   bookForm: FormGroup;
   
//   constructor(
//     public formBuilder: FormBuilder,
//     private router: Router,
//     private ngZone: NgZone,
//     private crudService: CrudService
//   ) { 
//     this.bookForm = this.formBuilder.group({
//       title: [''],
//       price: [''],
//       description: [''],
//       book_type: ['']
//     })
//   }
 
//   ngOnInit() { }
 
//   onSubmit(): any {
//     this.crudService.AddBook(this.bookForm.value)
//     .subscribe(() => {
//         console.log('Data added successfully!')
//         this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
//       }, (err) => {
//         console.log(err);
//     });
//   }
 
// }

import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
 
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.bookForm = this.formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
      book_type: ['']
    })
  }

  ngOnInit() { }

  onSubmit(): any {
    console.log('Form data:', this.bookForm.value); // Log form data
    this.crudService.AddBook(this.bookForm.value)
      .subscribe((response) => {
        console.log('Response from server:', response); // Log response from server
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.error('Error:', err); // Log error if any
    });
  }
}
