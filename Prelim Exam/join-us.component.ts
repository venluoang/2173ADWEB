// join-us.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {
  public pageTitle = 'Join Our Mailing List';
  public pageDescription = 'Join and meet thousands of academicians around the globe and stay updated!';
  public joinButtonText = 'Click Here to Join';

  // Two-way data binding properties
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public institution: string = '';

  // Concatenated full name
  public fullName: string = '';

  // Event handling for the button in the header
  public onJoinClick(): void {
    // Concatenate the input values to form the full name
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

}
