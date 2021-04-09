import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styles: [
  ]
})
export class ResumeComponent implements OnInit {
  eduArr:any = [
    {
      title: "VENTURA COMMUNITY COLLEGE DISTRICT",
      description: "Foundational classes in Object Oriented Programming and electives",
      years: "2017-2018"
    },
    {
      title: "UC Santa Cruz Baskin SOE",
      description: `Technology Information Management B.S./Computer Science Minor class of
      2021 University of California, Santa Cruz. Non-contiguous. GPA 3.4 cumulative; Dean's 
      Honors Summer '19, Winter '20, Spring '20`,
      years: "2011-2020"
    }
  ]

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

  jobArr:any = [
    {
      employer: "Tata Consultancy Services",
      location: "Thousand Oaks, California",
      description: "Software Engineering",
      years: "Jan 2021-Present"
    },
    {
      employer: "Many Mansions",
      location: "Thousand Oaks, California",
      description: "Volunteer tutor for non-profit org helping K-12 students with math (mainly)",
      years: "Feb-Apr 2019"
    },
    {
      employer: "Pipeline Santa Cruz",
      location: "Santa Cruz, CA",
      description: "Cashier/sales",
      years: "Oct 2015-Jun 2016"
    },
    {
      employer: "Chipotle Mexican Grill",
      location: "Santa Cruz, CA",
      description: "Cashier/chip fryer",
      years: "Feb-Jul 2014"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
