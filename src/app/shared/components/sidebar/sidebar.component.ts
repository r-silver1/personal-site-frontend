import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  //set height for sidebar https://stackoverflow.com/a/45350792/10432596
  public winHeight: any;
  ngOnInit(): void {
    this.winHeight = window.outerHeight;
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.winHeight = window.outerHeight;
  }

}
