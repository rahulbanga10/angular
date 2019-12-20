import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: ` {{errorMsg}}<div *ngFor="let employee of employees;" >
  <p>{{employee.id}}<p>
  </div>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
errorMsg='';
  public employees=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
   this._employeeService.getEmployees().subscribe(data=>this.employees=data,
                                                  error=>this.errorMsg=error)
  }

}
