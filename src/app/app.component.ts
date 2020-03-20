import { ApiServiceService } from './services/api-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: any = []
  constructor(
    private apiService: ApiServiceService
  ) {
    this.apiService.getData().subscribe(data => {
      console.log(data)
      this.userData = data
    }, error => {
      console.log(error)
    })
  }
}
