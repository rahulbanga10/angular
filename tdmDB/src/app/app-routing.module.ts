import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDataComponent } from './update-data/update-data.component';
import { DbtableComponent } from './dbtable/dbtable.component';
import { DbtableslistComponent } from './dbtableslist/dbtableslist.component';
import { AddDataComponent } from './add-data/add-data.component';


const routes: Routes = [
  {path:"tableList/:tname/AddData", component: AddDataComponent},
  {path:"tableList/:tname/:id", component :UpdateDataComponent},
  {path: "tableList/:tname" , component: DbtableComponent},
  {path:"tableList", component: DbtableslistComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
