import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: '', component:App},
    {path:'home', component:Home},
    {path:'about', component:About},
    {path: 'contact', component:Contact}
];
