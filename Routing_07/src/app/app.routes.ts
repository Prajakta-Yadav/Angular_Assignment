import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { User } from './user/user';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'home', component:Home},
    {path: 'about', component: About},
    {path: 'contact/:id', loadComponent: () => import ('./contact/contact').then( m => m.Contact)},
    {path:'user', component: User },
    {path: '**', component: Home}
];
