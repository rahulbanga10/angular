import { Component, OnInit } from '@angular/core';
import { TableListService } from '../table-list.service';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
public columnValues;
public test:string[];
public testValues:string[];
public formValues:string;
public key;
public tablename;
public isUpdated;
  constructor(private tableList: TableListService,public route: ActivatedRoute) {



    }

  ngOnInit() {
    this.route.params.subscribe(param=> {this.key=param.id; this.tablename=param.tname} );
    console.log(this.key);
   // this.columnValues= this.tableList.tables.find(function(element){if(element.key=='1'){return element; }});
   // this.columnValues= this.tableList.tables.filter(element=>element.key===this.key)[0];
    this.tableList.getTableRecord('/api/table/' + this.tablename + '/' + this.key).subscribe(respVideo => {
      console.log(respVideo);  this.columnValues = respVideo;
      this.test = Object.keys(this.columnValues[0]);
      this.testValues = Object.values(this.columnValues[0]);
    });

  }



  updateData(form) {
    this.formValues= form;
    console.log(this.formValues);
    this.tableList.updateTableRecord(this.formValues,'/api/table/' + this.tablename + '/' + this.key).subscribe(retVideo=>{
      this.isUpdated=retVideo.nModified;
      console.log("update Data");
      this.columnValues = retVideo;
      this.test = Object.keys(this.columnValues[0]);
      this.testValues = Object.values(this.columnValues[0]);

    });
  }
}
