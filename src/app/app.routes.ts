import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'hobbies', component: HobbiesComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: HomeComponent, pathMatch: 'full'}
];
