import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  colClass:any = "collapse navbar-dark navbar-collapse col col-3 shadow";
  fontSize:any = 5;
  constructor() { }

  //set height for sidebar https://stackoverflow.com/a/45350792/10432596
  //https://stackoverflow.com/questions/58414395/can-i-adjust-the-displayed-columns-of-a-mat-table-depending-on-screen-size
  public winHeight: any;
  ngOnInit(): void {
    this.winHeight = .8*window.innerHeight;
    if(window.innerWidth < 600){
      this.colClass = "collapse navbar-dark navbar-collapse text-left col col-5 shadow";
      this.fontSize = 7.5;
    }else{
      this.fontSize = 3;
    }
    
  }

  

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.winHeight = .8*window.innerHeight;
    if(window.innerWidth < 600){
      this.colClass = "collapse navbar-dark navbar-collapse text-left col col-5 shadow";
      this.fontSize = 7.5;
    }else{
      this.fontSize = 3;
      this.colClass = "collapse navbar-dark navbar-collapse text-center col col-3 shadow";
    }
  }

}
