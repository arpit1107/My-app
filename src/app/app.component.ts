import { Component } from '@angular/core';
import { TestService } from './Services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string ='';
  constructor(test : TestService){
    this.name = test.printdata();
  }
  title = 'my-app';
  
}
