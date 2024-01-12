import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AjoutComponent } from './ajout/ajout.component';
import { FinanceComponent } from './finance/finance.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { FormsModule } from '@angular/forms';
import { ListeProjectComponent } from './liste-project/liste-project.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AjoutComponent,
    FinanceComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    SignComponent,
    ListeProjectComponent,
    ListeUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
