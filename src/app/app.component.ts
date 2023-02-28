import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pages';
  showListOnUI: boolean = false;
  public userData: Array<string> = [];
  showListCount : number = 0;
  showImage: boolean = false;

  start() {
    this.showImage = true;
  }

  showList(): void {
    this.showListOnUI = true;
    this.showListCount = this.showListCount + 1;
    if(document.getElementById('img')) {
     const imageID = document.getElementById('img') as HTMLElement; 
     imageID['style'].border = '10px solid #58ef71';
    }
  }

}

