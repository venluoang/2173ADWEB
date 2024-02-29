import { Component } from '@angular/core';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent {
  title = 'HHTP Client Demonstration';
  httpusers: any;
  
  constructor(private httpclientList: HttpclientService) {
    this.httpclientList.getUsersfromServer().subscribe((data: any) => {
      this.httpusers = data;
    });
  }
}
