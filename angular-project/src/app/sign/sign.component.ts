import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  ProjectArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  
  nom: string ="";
  prenom: string ="";
  role: string ="";
  email: string ="";
  password: string ="";
  isarchived:string ="";
  isblocked:string ="";
  created_date: string =""; 
  ID = "";
constructor(private http: HttpClient )
  {
    this.getAllProject();
 
  }
  getAllProject()
  {
    
    this.http.get("http://localhost:2424/api/utilisateurs")
  
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
      "nom" : this.nom,
      "prenom" : this.prenom,
      "role" : this.role,
      "email" : this.email,
      "password" : this.password,
      "isarchived" : this.isarchived,
      "isblocked" : this.isblocked,
      "created_date" : this.created_date,
  
    };
 
    this.http.post("http://localhost:2424/api/utilisateurs/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("project Registered Successfully");
        this.getAllProject();
        this.nom = '';
      this.prenom = '';
      this.role = '';
      this.email = '';
      this.password = '';
      this.isarchived= '';
      this.isblocked = '';
        this.created_date = '';
    });
  }
  setUpdate(data: any)
  {
   this.nom = data.nom;
   this.prenom = data.prenom;
   this.role= data.role
   this.email = data.email;
   this.password = data.password;
   this.isarchived = data.isarchived;
   this.isblocked = data.isblocked;
   this.created_date = data.created_date;
   this.ID = data.id;
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "id" : this.ID,
      "nom" : this.nom,
      "prenom" : this.prenom,
      "role" : this.role,
      "email" : this.email,
      "password" : this.password,
      "isarchived" : this.isarchived,
      "isblocked" : this.isblocked,
      "created_date" : this.created_date
    };
    
    this.http.put("http://localhost:2424/api/utilisateur/id",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("project Registered Updateddd")
  this.getAllProject();
  this.nom = '';
   this.prenom = '';
   this.role= '';
   this.email = '';
   this.password = '';
   this.isarchived = '';
   this.isblocked = '';
   this.created_date = '';
  
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
    
    
    this.http.delete("http://localhost:2424/api/utilisateur/id"+ "/"+ data.id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Project Deletedddd")
        this.getAllProject();
    this.nom = '';
   this.prenom = '';
   this.role= '';
   this.email = '';
   this.password = '';
   this.isarchived = '';
   this.isblocked = '';
   this.created_date = '';
  
    });
 
  }
 }




