import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MainMaterialModule} from '../../main-material.module';
import {StartAppComponent} from './start-app.component';
import {HomeComponent} from '../home/home.component';
import   {START_APP_ROUTES}   from    './routes';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(START_APP_ROUTES),
    MainMaterialModule,
    LayoutModule,
    FlexLayoutModule
  ],
  declarations: [
StartAppComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  entryComponents: [
    StartAppComponent
  ]
})
export class StartModule { }




