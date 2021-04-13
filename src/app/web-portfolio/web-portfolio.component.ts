import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-portfolio',
  templateUrl: './web-portfolio.component.html',
  styleUrls: ['./web-portfolio.component.css']
})
export class WebPortfolioComponent implements OnInit {

  nav(link:string){
    window.open(link, "_blank")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
