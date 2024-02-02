// partners.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  public pageTitle = 'Our Partners';
  public pageDescription = 'You can achieve a very impressive effect by using our animated navbar, which is transparent on start and changes the color after the scroll.';
  public sponsorButtonText = 'Become a Sponsor';

  
  public partners = [
    { name: 'Microsoft', logo: 'assets/microsoft-logo.png', sponsorship: 'Platinum', website: 'https://www.microsoft.com' },
    { name: 'Apple, Inc.', logo: 'assets/apple-logo.jpg', sponsorship: 'Gold', website: 'https://www.apple.com' },
    { name: 'Amazon', logo: 'assets/amazon-logo.jpg', sponsorship: 'Silver', website: 'https://www.amazon.com' },
    { name: 'Google, Inc.', logo: 'assets/google-logo.jpg', sponsorship: 'Bronze', website: 'https://www.google.com' }
  ];
}
