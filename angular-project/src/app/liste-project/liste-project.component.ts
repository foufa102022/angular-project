import { Component,OnInit } from '@angular/core';
import { ProviderService } from '../../../src/app/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-project',
  templateUrl: './liste-project.component.html',
  styleUrls: ['./liste-project.component.css']
})
export class ListeProjectComponent implements OnInit {

  data: any;
  

  constructor(private providerService: ProviderService,private router :Router) {}

  ngOnInit() {
 this.getProjects();
  }
  getProjects(){
    this.providerService.getProjects().subscribe((result) => {
      this.data = result;
  });
  }
  deleteProject(id:number){
    this.providerService.deleteProjects(id).subscribe((result) => {
      this.getProjects();
  })
  }
  goToAddPage(id:number){
    this.router.navigate(['ajout/'+id]);

  }
}



