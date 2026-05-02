import { Routes } from '@angular/router';
import { Login } from './SmartComponent/login/login';
import { RxjsOperator } from './SmartComponent/rxjs-operator/rxjs-operator';
import { SubBehReplay } from './SmartComponent/sub-beh-replay/sub-beh-replay';
import { CombineObs } from './SmartComponent/combine-obs/combine-obs';
export const routes: Routes = [

    {path:'login', component:Login},
    {path:'rxjs-operator', component:RxjsOperator},
    {path: 'sub-beh-replay', component: SubBehReplay},
    {path: 'combine-obs', component: CombineObs}
];
