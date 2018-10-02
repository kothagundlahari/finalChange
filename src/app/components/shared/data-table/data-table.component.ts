import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() dataSource;
  @Input() columns;
  displayedColumns: any;


  constructor() { }

  ngOnInit() {
    // console.log(this.dataSource, this.displayedColumns);
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

}
