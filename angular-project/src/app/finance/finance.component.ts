import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../../src/app/provider.service';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
// export class FinanceComponent {

// }
export class FinanceComponent implements OnInit {
  data: any;
  

  constructor(private providerService: ProviderService) {}

  ngOnInit() {
      this.providerService.getData('http://localhost:2424/api/utilisateurs').subscribe((result) => {
          this.data = result;
      });
  }
}