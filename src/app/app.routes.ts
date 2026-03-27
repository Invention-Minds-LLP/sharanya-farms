import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { AboutPage } from './about-page/about-page';
import { GalleryPage } from './gallery-page/gallery-page';
import { RegisterForm } from './register-form/register-form';
import { PageForm } from './page-form/page-form';
import { HillView } from './project-2/hill-view/hill-view';
import { SandalValley } from './project-1/sandal-valley/sandal-valley';
import { WeekendVillage } from './project-3/weekend-village/weekend-village';
import { HomePage } from './home-page/home-page';
import { Project1 } from './project-1/project-1';
import { Project2 } from './project-2/project-2';
import { Project3 } from './project-3/project-3';

export const routes: Routes = [

    // {
    //     path: '',
    //     loadComponent: () =>
    //         import('./home-page/home-page').then(m => m.HomePage)
    // },
    // {
    //     path: 'sandalvalley',
    //     loadComponent: () =>
    //         import('./project-1/project-1').then(m => m.Project1)
    // },
    // {
    //     path: 'hillview',
    //     loadComponent: () =>
    //         import('./project-2/project-2').then(m => m.Project2)
    // },
    // {
    //     path: 'weekendvillage',
    //     loadComponent: () =>
    //         import('./project-3/project-3').then(m => m.Project3)
    // },



    { path: '', component: HomePage },
    { path: 'sandalvalley', component: Project1 },
    { path: 'hillview', component: Project2 },
    { path: 'weekendvillage', component: Project3 },
    { path: 'contact', component: Contact },
    { path: 'about', component: AboutPage },
    { path: 'gallery', component: GalleryPage },
    { path: 'page-form', component: PageForm },

    { path: 'registration-link', component: RegisterForm, data: { hideLayout: true } },


    { path: 'hillview-map', component: HillView, data: { hideLayout: true } },
    { path: 'sandalvalley-map', component: SandalValley, data: { hideLayout: true } },
    { path: 'weekendvillage-map', component: WeekendVillage, data: { hideLayout: true } }
];