import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { AppComponent } from './app';

export const routes: Routes = [

    {path:'', component:AppComponent },
    {path: 'home', component:Home}, 
    {path:'about', component:About}

];
