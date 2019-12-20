import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service-test',
  template: `{{errorMsg}}<div *ngFor="let employee of employeesDetail; " >
  <p>{{employee.id}}:{{employee.name}}:{{employee.age}}</p>
  </div>`,
  styleUrls: ['./service-test.component.css']
})
export class ServiceTestComponent implements OnInit {
errorMsg='';
  public employeesDetail=[];
  constructor(private empl:EmployeeService) {
    //this.empl.getEmployees().subscribe(data=>this.employeesDetail=data )
  }

  ngOnInit() {
     this.empl.getEmployees().subscribe(data=>this.employeesDetail=data )
  }

}
