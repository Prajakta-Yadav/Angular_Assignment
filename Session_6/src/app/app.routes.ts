import { Routes } from '@angular/router';
import { App } from './app';
import { ReactiveFormDemo } from './reactive-form-demo/reactive-form-demo';
import { FormGroupDemo } from './form-group-demo/form-group-demo';

export const routes: Routes = [

    {path: '', component: App},
    {path: 'reactive-form-demo', component: ReactiveFormDemo},
    {path: 'form-group-demo', component: FormGroupDemo}
];
