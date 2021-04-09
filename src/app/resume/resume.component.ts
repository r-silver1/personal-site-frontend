import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styles: [
  ]
})
export class ResumeComponent implements OnInit {
  skillsArr:any = [
    {
      title: "CSE 101: Data Structures and Algorithms",
      description: "Algorithms, sorting and efficiency in C/C++",
      grade: "A",
    },
    {
      title: "CSE 58: Analysis and Design",
      description: `Lead a three person team of coders developing a basic cryptocurrency price app using Flutter/Dart with cross-platform functionality between 
      Android and iOS`,
      grade: "A",
    },
    {
      title: "CSE 140: Artificial Intelligence",
      description: `Developed programs using Python, NumPy and various algorithms to build AI agents for
      zero-sum games as well as evaluate optimal policy and run simulations`,
      grade: "B+",
    },
    {
      title: "CSE 145: Intro to Data Mining",
      description: `Used Python to perform complex operations on data including preprocessing, generating predictive models,
      clustering, classification and regression analysis`,
      grade: 'A',
    },
    {
      title: "CSE 160: Computer Graphics",
      description: `Used WebGL, ThreeJS, Blender and Photoshop to build graphics apps and games run natively on the browser using
      client side GPU`,
      grade: 'A+',
    },
    {
      title: "CSE 171A/B: Intro Mgmt of Tech",
      description: `IT Product Development/Strategy; led a team of six through the full process of designing and planning the prototyping
      of a mock 3D-scanner based company`,
      grade: 'A/A-',
    },
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
