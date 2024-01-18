import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  staff = [ 
    { firstName: 'Venice', lastName: 'Luoang', email: 'vlluoang@lv.com', role: 'Web Developer' },   
    { firstName: 'Mariah', lastName: 'Carey', email: 'mmcarey@lv.com', role: 'Admin' }, 
    { firstName: 'Gian', lastName: 'Manuel', email: 'gimanuel@lv.com', role: 'Web Designer' }, 
    { firstName: 'Kharlie', lastName: 'Manabat', email: 'khmanabat@lv.com', role: 'Tester' }, 
    ];

}
