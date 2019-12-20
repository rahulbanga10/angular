import { Component, OnInit } from '@angular/core';
import { TableListService } from '../table-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dbtable',
  templateUrl: './dbtable.component.html',
  styleUrls: ['./dbtable.component.css']
})
export class DbtableComponent implements OnInit {
  tables =  [];
  public tablename;
  public columnName;
  constructor(private tableList: TableListService,public route: ActivatedRoute) {
    //this.tables = tableList.tables;

    this.route.params.subscribe(param=> this.tablename=param.tname );
    this.tableList.getVideos('/api/table/'+this.tablename).subscribe(respVideo => {console.log(respVideo); this.tables = respVideo; this.columnName=Object.keys(respVideo[0]); 
    });

   }

   ngOnInit() {


  }

deleteData(url){
  console.log("delete Data"+url);
  this.tableList.deleteTableRecord(url).subscribe(respVideo => {console.log(respVideo); window.location.reload();});

}

}
