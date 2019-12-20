import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbtableslist',
  templateUrl: './dbtableslist.component.html',
  styleUrls: ['./dbtableslist.component.css']
})
export class DbtableslistComponent implements OnInit {

  tableList = ['tableA', 'tableB', 'tableC', 'tableD', 'tableE','tableA', 'tableB', 'tableC', 'tableD', 'tableE','tableA', 'tableB', 'tableC', 'tableD', 'tableE'];
  constructor() { }

  ngOnInit() {

  }

}
