import { Routes } from '@angular/router';
import { App } from './app';
import { ReactiveFormDemo } from './reactive-form-demo/reactive-form-demo';
import { FormGroupDemo } from './form-group-demo/form-group-demo';
import { FormPractice } from './form-practice/form-practice';
import { SignalForms } from './signal-forms/signal-forms';

export const routes: Routes = [

    {path: '', component: App},
    {path: 'reactive-form-demo', component: ReactiveFormDemo},
    {path: 'form-group-demo', component: FormGroupDemo},
    {path: 'form-practice', component: FormPractice},
    {path: 'signal-forms', component: SignalForms}
];
