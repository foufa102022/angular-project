import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { ListeProjectComponent } from './liste-project/liste-project.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home',component:HomeComponent},
  { path:'ajout',component:AjoutComponent},
  { path:'ajout/:id',component:AjoutComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'finance',component:FinanceComponent},
  { path:'login',component:LoginComponent},
  { path:'admin',component:AdminComponent},
  { path:'sign',component:SignComponent},
  { path:'sign/:id',component:SignComponent},
  { path:'liste-project',component:ListeProjectComponent},
  { path:'liste-utilisateur',component:ListeUtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
