import { Routes } from '@angular/router';
import { App } from './app';
import { DefineSignal } from './pages/define-signal/define-signal';
import { ComputedSignal } from './pages/computed-signal/computed-signal';
import { Effect } from './pages/effect/effect';
import { GetSet } from './pages/get-set/get-set';
import { CounterApp } from './pages/counter-app/counter-app';
import { Products } from './Services/products/products';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'define-signal', component: DefineSignal},
    {path: 'computed-signal', component: ComputedSignal},
    {path: 'effect', component: Effect},
    {path: 'get-set', component: GetSet},
    {path: 'counter-app', component: CounterApp},
    {path: 'products', component: Products}
];
