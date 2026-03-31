import { Routes } from '@angular/router';
import { App } from './app';
import { Directive } from './directive/directive';

export const routes: Routes = [
    {path:'', component:App},
    {path:'directive', component:Directive}
];
