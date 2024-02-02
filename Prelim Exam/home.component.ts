// home.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public pageTitle = 'Research Conferences Inc.';
  public earlyBirdButtonText = 'Early Bird Registration';
  public conferenceDescription = 'Join our online events this 2024!';

  public places = [
    { name: 'France', image: 'assets/france.jpg', description: 'France encompasses medieval cities, alpine villages and Mediterranean beaches. ' },
    { name: 'Seoul', image: 'assets/seoul.jpg', description: 'Seoul is the capital of South Korea with modern skyscrapers, high-tech subways and pop culture.'},
    { name: 'San Francisco', image: 'assets/san-francisco.jpeg', description: 'San Francisco is the commercial, financial, and cultural center of Northern California.' },
    { name: 'Boston', image: 'assets/boston.jpg', description: 'Boston serves as the cultural and financial center of the Northeastern United States.' }
  ];
}
