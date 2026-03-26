import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Profile } from './profile/profile';
import { Lifecycle } from './lifecycle/lifecycle';

export const routes: Routes = [

    {path:' ', component:App},
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'contact',component:Contact},
    {path:'profile', component:Profile},
    {path:'lifecycle', component:Lifecycle}
   
];
