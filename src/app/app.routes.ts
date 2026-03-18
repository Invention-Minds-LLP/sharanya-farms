import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { AboutPage } from './about-page/about-page';
import { HomePage } from './home-page/home-page';
import { Project1 } from './project-1/project-1';
import { GalleryPage } from './gallery-page/gallery-page';
import { RegisterForm } from './register-form/register-form';
import { Project2 } from './project-2/project-2';
import { Project3 } from './project-3/project-3';
import { HillView } from './project-2/hill-view/hill-view';
import { PageForm } from './page-form/page-form';
import { SandalValley } from './project-1/sandal-valley/sandal-valley';
import { WeekendVillage } from './project-3/weekend-village/weekend-village';


export const routes: Routes = [
    { path: '', component: HomePage },
    { path: '', component: HomePage },
    { path: 'contact', component: Contact },
    { path: 'about', component: AboutPage },
    // { path: 'hillview', component: Project1},
    { path: 'page-form', component: PageForm},
    { path: 'gallery', component: GalleryPage},
    { path: 'registration-link', component: RegisterForm},
    { path: 'sandalvalley', component: Project1},
    { path: 'hillview', component: Project2},
    { path: 'weekendvillage', component: Project3},
    { path: 'hillview-map', component: HillView},
    { path: 'sandalvalley-map', component: SandalValley},
    { path: 'weekendvillage-map', component: WeekendVillage}
];


