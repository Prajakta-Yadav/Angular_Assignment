import { Routes } from '@angular/router';
import { App } from './app';
import { ControlIf } from './pages/control-if/control-if';
import { ControlFor } from './pages/control-for/control-for';
import { ControlSwitch } from './pages/control-switch/control-switch';
import { TodiList } from './pages/todi-list/todi-list';
import { DataBinding } from './pages/data-binding/data-binding';

export const routes: Routes = [

    {path: '', component: App},
    {path: 'control-if', component: ControlIf},
    {path: 'control-for', component: ControlFor},
    {path: 'control-switch', component: ControlSwitch},
    {path: 'data-binding', component: DataBinding},
    {path: 'todo-list', component: TodiList}

];
