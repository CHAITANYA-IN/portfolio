import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'hobbies', component: HobbiesComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: HomeComponent, pathMatch: 'full'}
];
