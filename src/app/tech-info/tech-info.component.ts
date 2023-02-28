import { AfterViewInit, Component, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-info',
  templateUrl: './tech-info.component.html',
  styleUrls: ['./tech-info.component.scss']
})
export class TechInfoComponent implements AfterViewInit {
  public list: Array<string> = [];
  private userData: { context: string, list: Array<any> };

  @ViewChild('#progressBar') progressBar: ElementRef;
  @Input() showListOnUI: boolean = false;
  @Input() listId: number | string;


  constructor() { }

  ngOnInit(): void {

  }
  getData() {
    fetch('assets/userInfo.json').then((res) => res.json())
      .then((data) => {
        console.log('Data', data);
        this.userData = data;
        this.list = data[this.listId].list;

      }).catch((err) => console.warn(err))
  }
  ngAfterViewInit() {
    console.log('progressBar', this.progressBar);
  }
  // ngOnChanges() {
  //   console.log(this.Info);
  //   this.list = this.Info.list;
  // }
  ngOnChanges(changes: SimpleChange | any): void {
    console.log('chnag', changes);
    console.log('listId', changes.listId.currentValue);
    if (changes.listId && changes.listId.currentValue)
      this.listId = changes.listId.currentValue
    //listId
    this.showListOnUI = true;
    this.getData();
    console.log('progressBar', this.progressBar);
  }
}
