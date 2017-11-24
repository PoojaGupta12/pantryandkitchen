import {ApplicationRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import   {ALL_ROUTES}  from  './app/start-app/routes';
import  {EntryAppComponent}  from  './app/start-app/entry-app.component';
import   {StartModule}  from './app/start-app/start.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    HttpClientModule,
    StartModule,
    RouterModule.forRoot(ALL_ROUTES),
  ],
  declarations: [
    EntryAppComponent
  ],
  entryComponents: [
    EntryAppComponent,
  ],
})
export class MainAppModule {
  constructor(private _appRef: ApplicationRef) { }

    ngDoBootstrap() {
      this._appRef.bootstrap(EntryAppComponent);
    }

}



