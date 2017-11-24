import {Routes} from '@angular/router';
import {StartAppComponent} from './start-app.component';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';

import {UserDashboardComponent} from '../user-dashboard/user-dashboard.component';

export const START_APP_ROUTES: Routes = [
  {path: '', component:StartAppComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'item1', component: LoginComponent},
    {path: 'udash', component: UserDashboardComponent},
    {path: 'register', component: RegisterComponent}
  ]},

  ];

  export const ALL_ROUTES: Routes = [
    {path: '',  component: StartAppComponent, children: START_APP_ROUTES}
  ];

