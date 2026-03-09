import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { AboutPage } from './about-page/about-page';
import { HomePage } from './home-page/home-page';
import { Project1 } from './project-1/project-1';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'contact', component: Contact },
    { path: 'about', component: AboutPage },
    { path: 'hillview', component: Project1}
];
