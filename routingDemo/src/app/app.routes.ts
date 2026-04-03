import { Routes } from '@angular/router';
import { AdminLayout } from '../layout/admin-layout/admin-layout';
import { Dashboard } from '../layout/dashboard/dashboard';

import { User } from '../layout/user/user';
import { Reports } from '../layout/reports/reports';
import { Users } from '../layout/users/users';

export const routes: Routes = [
    {path: '',
        loadComponent: () => import('../layout/main-layout/main-layout').then(m =>m.MainLayout),

        children: [
            {path: 'admin', component: AdminLayout,
                children:[
                    {path:'', component: Dashboard},
                    {path: 'reports', component: Reports},
                    {path: 'users', component: Users},
                ]
            },
            {path: 'employee', component:User},
        ],
    },

];
