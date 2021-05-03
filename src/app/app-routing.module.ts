import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { AiPortfolioComponent } from './ai-portfolio/ai-portfolio.component';
import { WebPortfolioComponent } from './web-portfolio/web-portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuestsComponent } from './guests/guests.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'resume', component: ResumeComponent},
  {path: 'guest-book', component: GuestsComponent},
  {
    path: 'projects', 
    children: [
      {path: '', component: ProjectsComponent, pathMatch: 'full'},
      {path: 'graphics', component: GraphicsComponent},
      {path: 'ai', component: AiPortfolioComponent},
      {path: 'web', component: WebPortfolioComponent}
    ]
  },
  
  {path: '**', component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
