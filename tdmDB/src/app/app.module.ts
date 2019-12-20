import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbtableComponent } from './dbtable/dbtable.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { FormsModule } from '@angular/forms';
import { DbtableslistComponent } from './dbtableslist/dbtableslist.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDataComponent } from './add-data/add-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DbtableComponent,
    UpdateDataComponent,
    DbtableslistComponent,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
