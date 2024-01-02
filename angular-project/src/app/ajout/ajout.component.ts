import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  ProjectArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  
  titre: string ="";
  date: string ="";
  etat: number =0;
  description : string ="";
 
  ID = "";
constructor(private http: HttpClient )
  {
    this.getAllProject();
 
  }
  getAllProject()
  {
    
    this.http.get("http://localhost:2424/api/interventions")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.ProjectArray= resultData;
    });
  }
 
  register()
  {
  
    let bodyData = {
      "titre" : this.titre,
      "date" : this.date,
      "etat" : this.etat,
      "description" : this.description
    };
 
    this.http.post("http://localhost:2424/api/interventions/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("project Registered Successfully");
        this.getAllProject();
        this.titre = '';
      this.date = '';
      this.etat = 0;
        this.description = '';
    });
  }
  setUpdate(data: any)
  {
   this.titre = data.titre;
   this.date = data.date;
   this.etat = data.etat
   this.description = data.description;
   this.ID = data.id;
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "id" : this.ID,
      "titre" : this.titre,
      "date" : this.date,
      "etat" : this.etat,
      "description" : this.description
    };
    
    this.http.put("http://localhost:2424/api/intervention/update",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("project Registered Updateddd")
        this.getAllProject();
        this.titre = '';
        this.date = '';
        this.etat = 0;
        this.description = '';
    });
  }
 
  save()
  {
    if(this.ID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:2424/api/intervention/deletecustomer"+ "/"+ data.id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Project Deletedddd")
        this.getAllProject();
        this.titre = '';
      this.date = '';
      this.etat = 0;
        this.description  = '';
  
    });
 
  }
 }

