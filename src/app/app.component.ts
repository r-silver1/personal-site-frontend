import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'personal-site-frontend';


  
  //set height for sidebar https://stackoverflow.com/a/45350792/10432596
  public winHeight: any;
  ngOnInit(): void {
    this.winHeight = window.innerHeight;
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.winHeight = window.innerHeight;
  }
}
