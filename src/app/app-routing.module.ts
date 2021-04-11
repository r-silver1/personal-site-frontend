import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { GraphicsComponent } from './graphics/graphics.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'resume', component: ResumeComponent},
  {
    path: 'projects', 
    children: [
      {path: '', component: ProjectsComponent, pathMatch: 'full'},
      {path: 'graphics', component: GraphicsComponent}
    ]
  },
  
  {path: '**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
