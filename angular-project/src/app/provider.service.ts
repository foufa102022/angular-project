// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProviderService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProviderService {
  

    constructor(private http: HttpClient) {}

    getData(url : string ): Observable<any> {
        return this.http.get(url);
    }
    postData(url : string ,data: any): Observable<any> {
      return this.http.post(url, data);
  }
}