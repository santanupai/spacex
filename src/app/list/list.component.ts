import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listdata: any = [];
  allfilterlists: any = [];
  toggle = false;
  yearvalue: any = "1"
  constructor(private service: CommonService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getListData();
  }

  //toggle button with filter
  btnToggle(year: any) {
    this.toggle = !this.toggle;

    this.service.filterAll(year).subscribe(data => {
      this.allfilterlists = data;
    })
  }

  //get all data first time form load
  getListData() {
    this.service.getfullList().subscribe(data => {
      this.listdata = data;
    })
  }

}
