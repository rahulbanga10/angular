import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-formmodel',
  template: `
  <div class="container-fluid">
  <h1>BootCamp Enrollment Form</h1>
  <form #userform="ngForm"  >
  {{ name.untouched }}

   <hr/>
   {{userform.form.invalid}}
  {{userform.value | json}}
    <hr/>
    {{userData | json}}
    <div class="form-group">
      <label>Name</label>
      <input type="text" [(ngModel)]="userData.name"  required  #name="ngModel" name="Name"  [class.is-invalid]="name.invalid && name.touched" class="form-control">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" [(ngModel)]="userData.email" name="Email" class="form-control">
    </div>
    <div class="form-group">
      <label>PhoneNo</label>
      <input type="tel" required [(ngModel)]="userData.phone" #phonee="ngModel" pattern="^[0-9]{10}$" [class.is-invalid]="phonee.invalid && phonee.touched" name="PhoneNo" class="form-control">
     <small [class.d-none]="!(phonee.errors.pattern) || phonee.untouched">Please required and fill correct 10 digit no</small>
     <div [class.d-none]="!(phonee.errors.required)"><small>Filled required</small></div>
      </div>

    <div class="form-group">
      <select class="custom-select"  #sol  name="Topics">
      <option selected > I am interested in</option>
      <option *ngFor="let topic of topics">{{topic}}</option>
      </select>
    </div>


<button [disabled]="userform.form.invalid" class="btn btn-primary" type="submit" >Submit</button>
</form>
</div>

  `,
  styles: []
})
export class FormmodelComponent implements OnInit {
topics=[];
  userData=new User('','rahul@gmal.com','988999','asfsdf');
  constructor(public t:AppComponent ) {
    this.topics=t.topics;
   }

  ngOnInit() {
  }

}
