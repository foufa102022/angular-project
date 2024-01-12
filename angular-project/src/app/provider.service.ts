
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProviderService {
  private url = 'http://localhost:2424/api'

    constructor(private http: HttpClient) {}

    getUtilisateur(): Observable<any> {
        return this.http.get(this.url+'/utilisateurs');
    }
    saveUtilisateur(data: any): Observable<any> {
        return this.http.post(this.url+'/utilisateurs', data);
    }
    editUtilisateur(id:number,data:any): Observable<any> {
        return this.http.put(this.url+'/utilisateurs/'+id,data);
    }
    deleteUtilisateur(id:number): Observable<any> {
        return this.http.delete(this.url+'/utilisateurs/'+id);
    }
    
    getProjects(): Observable<any> {
        return this.http.get(this.url+'/interventions');
    }
    deleteProjects(id:number): Observable<any> {
        return this.http.delete(this.url+'/interventions/'+id);
    }
    editProjects(id:number,data:any): Observable<any> {
        return this.http.put(this.url+'/interventions/'+id,data);
    }
  
    postData(url : string ,data: any): Observable<any> {
      return this.http.post(url, data);
  }
    saveProject(data: any): Observable<any> {
      return this.http.post(this.url+'/interventions', data);
  }
}