import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  fontSize: any = 5;
  //set height for sidebar https://stackoverflow.com/a/45350792/10432596
  //https://stackoverflow.com/questions/58414395/can-i-adjust-the-displayed-columns-of-a-mat-table-depending-on-screen-size
  public winHeight: any;
  public winWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.fixClasses();

  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.fixClasses();
  }

  fixClasses() {
    this.winHeight = .8 * window.innerHeight;
    this.winWidth = .8 * window.innerWidth;
    if (window.innerWidth < 600) {
      this.swapClasses("mainNavbar", "text-center", "text-left");

      this.fontSize = 7.5;
    } else {
      this.fontSize = 3;
      this.swapClasses("mainNavbar", "text-left", "text-center");
    }
  }

  public max(numA: number, numB: number) {
    return Math.max(numA, numB);
  }

  private swapClasses(input: string, swapOld: string, swapNew: string) {
    let classArr: string[] | undefined = document.getElementById(input)?.getAttribute("class")?.split(' ');
    var inIndx = classArr!.indexOf(swapNew);
    if (inIndx < 0) {
      classArr?.push(swapNew);
    }
    inIndx = classArr!.indexOf(swapOld);
    if (inIndx > -1) {
      classArr?.splice(inIndx, 1);
    }

    document.getElementById(input)?.setAttribute('class', classArr!.join(" "));
  }

  closeAll(arr: string[]) {
    arr.forEach((input) => {
      this.swapClasses(input, "in", "collapse");

    })
  }

  mouseEnter(input: string) {
    this.swapClasses(input, "collapse", "in");
    if (input == "mainNavbar") {
      this.swapClasses("topNav", "shadow", "");
    }

  }

  mouseLeave(input: string) {
    this.swapClasses(input, "in", "collapse");
    if (input == "mainNavbar") {
      this.swapClasses("topNav", "", "shadow");
    }

  }

}
