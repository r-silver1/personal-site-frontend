import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styles: [
  ]
})
export class GraphicsComponent implements OnInit {
  public showWarnCS:boolean = false;
  public showWarnSol:boolean = false;
  constructor() { }

  nav(link:string){
    window.open(link, "_blank")
  }

  ngOnInit(): void {
  }

}
