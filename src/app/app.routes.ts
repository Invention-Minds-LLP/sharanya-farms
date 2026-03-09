import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Project1 } from './project-1/project-1';

export const routes: Routes = [
    { path: 'contact', component: Contact },
    { path: 'project-1', component: Project1}
];
