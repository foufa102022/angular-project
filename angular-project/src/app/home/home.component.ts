import { AfterViewChecked, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  

  openModel(){
    const modelDiv=document.getElementById('exampleModal');
    if(modelDiv!=null) {
      modelDiv.style.display= 'block';

    }
  }
  closeModel(){
    const modelDiv=document.getElementById('exampleModal');
    if(modelDiv!=null) {
      modelDiv.style.display= 'none';

    }



  }

  
}
