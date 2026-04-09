import { Routes } from '@angular/router';
import { App } from './app';
import { Attribute } from './attribute/attribute';

export const routes: Routes = [

    {path: '', component: App},
    {path:'attribute', component: Attribute}
];
