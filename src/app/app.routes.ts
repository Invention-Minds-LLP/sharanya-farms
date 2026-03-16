import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { AboutPage } from './about-page/about-page';
import { HomePage } from './home-page/home-page';
import { Project1 } from './project-1/project-1';
import { GalleryPage } from './gallery-page/gallery-page';
import { RegisterForm } from './register-form/register-form';
import { ImagePage } from './project-1/image-page/image-page';
import { Project2 } from './project-2/project-2';
import { Project3 } from './project-3/project-3';
import { ImagePage3 } from './project-3/image-page3/image-page3';
import { ImagePage2 } from './project-2/image-page2/image-page2';



export const routes: Routes = [
    { path: '', component: HomePage },
    { path: '', component: HomePage },
    { path: 'contact', component: Contact },
    { path: 'about', component: AboutPage },
    // { path: 'hillview', component: Project1},
    { path: 'gallery', component: GalleryPage},
    { path: 'registration-link', component: RegisterForm},
    { path: 'sandalvalley', component: Project1},
    { path: 'image-page', component: ImagePage , data: { hideLayout: true }},
    { path: 'hillview', component: Project2},
    { path: 'image-page2', component: ImagePage2, data: { hideLayout: true }},
    { path: 'weekendvillage', component: Project3},
    { path: 'image-page3', component: ImagePage3, data: { hideLayout: true }} ,
];


