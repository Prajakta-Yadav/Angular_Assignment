import { Routes } from '@angular/router';
import { App } from './app';
import { User } from './user/user';

export const routes: Routes = [
    {path:'', component:App},
    {path: 'user', component:User},
];
