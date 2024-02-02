// about.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public pageTitle = 'About the Organization';
  public pageDescription = 'Discover how the team and committee leadership are innovating in the world of conferences. Stay informed with the latest conference news and updates on our blog.';
  public learnMoreButtonText = 'Learn More';
  

  // Event Binding Integration
  public onClickGift(): void {
    alert('Congratulations! You got a FREE Gift!');
  }

  public onLearnMoreClick(): void {
    alert('Learn More button clicked!');
  }

  // Property for 'Click Here to Get a FREE Gift' button text
  public clickGiftButtonText = 'Click Here to Get a FREE Gift';
}

