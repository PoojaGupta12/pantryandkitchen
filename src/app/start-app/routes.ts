import {Routes} from '@angular/router';
import {StartAppComponent} from './start-app.component';
import {HomeComponent} from '../home/home.component';
import {UserDashboardComponent} from '../user-dashboard/user-dashboard.component';

export const START_APP_ROUTES: Routes = [
  {path: '', component:StartAppComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'udash', component: UserDashboardComponent}
  ]}
  ];

  export const ALL_ROUTES: Routes = [
    {path: '',  component: StartAppComponent, children: START_APP_ROUTES}
  ];

