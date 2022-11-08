import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  username: '';

  constructor(){
    this.username= '';
  }

  isStringEmpty(){
    if(this.username.length === 0) return true;
    else return false;
  }

  onResetUsername(){
    this.username = '';
  }
}
