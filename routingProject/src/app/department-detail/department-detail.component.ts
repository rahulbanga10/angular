import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!{{departmentid}} {{test}}
    </p>
    <a (click)="goPrev()">Previous</a>
    <a (click)="goNext()">Next</a>
    <a (click)="goBack()">Back</a>
    <a (click)="goToOverview()">Overview</a>
    <a (click)="goToContact()">Contact</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
    departmentid=0;test=0;
  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {

   // this.departmentid= parseInt(this.router.snapshot.paramMap.get('id'));
    this.router.paramMap.subscribe((param: ParamMap)=>{
      this.departmentid=parseInt(param.get('id'));
    });
  }
    goPrev(){
      let id=this.departmentid-1;
      this.route.navigate(['department',id]);
    }

    goNext(){
      let nextId=this.departmentid+1;
      this.route.navigate(['department',nextId]);
    }

    goBack()
    {
      this.route.navigate(['department',{id:this.departmentid}]);
    }

    goToOverview(){
      this.route.navigate(['overview'],{relativeTo:this.router});
    }

    goToContact(){
      this.route.navigate(['contact'],{relativeTo:this.router} );
    }
}
