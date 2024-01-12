import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProviderService } from '../provider.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  ProjectArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  public project={
    titre:"",
    date_created:new Date('yyyy-MM-dd:00:00.000+00:00'),
    etat: 0,
    description : "",
  }
  public idProject! :number;
constructor(private providerService :ProviderService,private router:Router,private route :ActivatedRoute)
 {
 
  }
  ngOnInit() {
    this.idProject = +this.route.snapshot.params['id'];
    if(this.idProject)
    this.getProjects();
     }
     getProjects(){
       this.providerService.getProjects().subscribe((result) => {
         const data = result;
         const proj =result.find((el:any)=>el.id==this.idProject);
         console.log(proj);
         
         if(proj)
         this.project=proj
     });
    }
  save(){
    this.providerService.saveProject(this.project).subscribe((result) => {
      this.router.navigate(['finance']);
  },err=>{
    
  });
  }
  update(){
    this.providerService.editProjects(this.idProject,this.project).subscribe((result) => {
      console.log('updated');
      this.router.navigate(['liste-project']);

      
  },err=>{
    
  });
  }
 
 }