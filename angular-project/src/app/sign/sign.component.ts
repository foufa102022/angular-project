import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProviderService } from '../../../src/app/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
// import '~ngx-toastr/toastr';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  UtilisateurArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  
  public utilisateur={
    nom:"",
    prenom:"",
    role:"",
    email:"",
    password:"",
    isarchived:"",
    isblocked:"",
    date_created:new Date('yyyy-MM-dd:00:00.000+00:00'),

  
  }
  public idUtilisateur! :number;
  constructor(private providerService :ProviderService,private router:Router,private route :ActivatedRoute)
   {
   
    }
    ngOnInit() {
      this.idUtilisateur = +this.route.snapshot.params['id'];
      if(this.idUtilisateur)
      this.getUtilisateur();
       }
       getUtilisateur(){
         this.providerService.getUtilisateur().subscribe((result) => {
           const data = result;
           const util =result.find((el:any)=>el.id==this.idUtilisateur);
           console.log(util);
           
           if(util)
           this.utilisateur=util
       });
      }
      save(){
        this.providerService.saveUtilisateur(this.utilisateur).subscribe((result) => {
         
          this.router.navigate(['liste-utilisateur']);
          // this.toastrService.success('Bonjour !')
      },err=>{
        
      });
      }
      update(){
        this.providerService.editUtilisateur(this.idUtilisateur,this.utilisateur).subscribe((result) => {
          console.log('updated');
          this.router.navigate(['liste-utilisateur']);
          
      },err=>{
        
      });
      }


  
 }