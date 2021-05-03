import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ProjectsComponent } from './projects/projects.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { AiPortfolioComponent } from './ai-portfolio/ai-portfolio.component';
import { WebPortfolioComponent } from './web-portfolio/web-portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuestsComponent } from './guests/guests.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResumeComponent,
    SidebarComponent,
    ProjectsComponent,
    GraphicsComponent,
    AiPortfolioComponent,
    WebPortfolioComponent,
    NotFoundComponent,
    GuestsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
