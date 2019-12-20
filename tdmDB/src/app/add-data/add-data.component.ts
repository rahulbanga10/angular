import { Component, OnInit } from '@angular/core';
import { TableListService } from '../table-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
columnName;
tablename;
test;
testValues;
columnValues;
formValues;
isAdded;
  constructor(private tableList: TableListService,public route: ActivatedRoute) {
    //this.tables = tableList.tables;

    this.route.params.subscribe(param=> this.tablename=param.tname );
    this.tableList.getVideos('/api/table/'+this.tablename).subscribe(respVideo => {console.log(respVideo); this.columnName=Object.keys(respVideo[0]);});

   }
  ngOnInit() {
  }

  saveData(form){
    this.formValues= form;
    console.log(this.formValues);
    this.tableList.addTableRecord(this.formValues,'/api/table/' + this.tablename + '/' + 'AddData').subscribe(res=>{
console.log(res._id);
console.log(this.formValues);
this.isAdded=res._id;
    },retVideo=>{
      this.columnValues = retVideo;
      console.log(retVideo);
      this.test = Object.keys(this.columnValues[0]);
      this.testValues = Object.values(this.columnValues[0]);

    });
  }

  addSwitch(){
    this.isAdded=null;
  }

}
