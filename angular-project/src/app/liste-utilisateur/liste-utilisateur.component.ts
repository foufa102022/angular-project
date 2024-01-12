import { Component,OnInit } from '@angular/core';
import { ProviderService } from '../../../src/app/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})

export class ListeUtilisateurComponent implements OnInit {

  data: any;
  

  constructor(private providerService: ProviderService,private router :Router) {}

  ngOnInit() {
 this.getUtilisateur();
  }
  getUtilisateur(){
    this.providerService.getUtilisateur().subscribe((result) => {
      this.data = result;
  });
  }
  deleteUtilisateur(id:number){
    this.providerService.deleteUtilisateur(id).subscribe((result) => {
      this.getUtilisateur();
  })
  }
  goToAddPage(id:number){
    this.router.navigate(['sign/'+id]);

  }
  
}



