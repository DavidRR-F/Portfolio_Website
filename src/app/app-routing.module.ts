import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'resume', component: ResumeComponent, data: { animation: 'Resume' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
