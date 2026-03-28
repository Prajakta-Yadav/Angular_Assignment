import { Routes } from '@angular/router';
import { App } from './app';
import { Counter } from './Pages/counter/counter';
import { Profile } from './Pages/profile/profile';
import { DynamicButton } from './Pages/dynamic-button/dynamic-button';
import { Preview } from './Pages/preview/preview';
import { Login } from './Pages/login/login';
import { Userform } from './Pages/userform/userform';

export const routes: Routes = [

    {path:'', component:App},
    {path:'counter', component:Counter},
    {path: 'profile', component:Profile},
    {path:'dynamicbutton', component:DynamicButton},
    {path:'preview', component:Preview},
    {path:'login', component:Login},
    {path:'userform', component:Userform}
];
