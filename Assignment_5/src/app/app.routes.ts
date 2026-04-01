import { Routes } from '@angular/router';
import { App } from './app';
import { Directive } from './directive/directive';
import { Practice } from './practice/practice';

export const routes: Routes = [
    {path:'', component:App},
    {path:'directive', component:Directive},
    {path: 'practice', component: Practice}

];
