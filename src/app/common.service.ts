import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  //get full url
  endpoint = "https://api.spaceXdata.com/v3/launches?limit=100";

  //filter list url
  allfilter = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014";

  getfullList(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }

  filterAll(year): Observable<any> {
    return this.http.get<any>(this.allfilter, year);
  }
}
