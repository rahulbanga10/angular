import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <ul  *ngFor="let department of departments">
    <li [class.success]="isSelected(department.id)" (click)="selectDepartment(department)">{{department.id+"  "+department.name}}</li>
    </ul>
    <p>
      department-list works!
    </p>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
selectedId=0;
  public departments=[
{id:1,name:"Nodejs"},
{id:2,name:"Angularjs"},
{id:3,name:"Java"},
{id:4,name:"PHP"},
{id:5,name:"Visual"}
];



  constructor(public router: Router, public route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.selectedId=parseInt(param.get('id'));})
  }
selectDepartment(department){
this.router.navigate(['/department',parseInt(department.id)]);
}

isSelected(department){
  return this.selectedId===department;
}
}
