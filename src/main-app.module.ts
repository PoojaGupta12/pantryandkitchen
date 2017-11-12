import {ApplicationRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import   {ALL_ROUTES}  from  './app/start-app/routes';
import  {EntryApp}  from  './app/start-app/start-app.component';
import   {StartModule}  from './app/start-app/start.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StartModule,
    RouterModule.forRoot(ALL_ROUTES),
  ],
  declarations: [
    EntryApp
  ],
  entryComponents: [
    EntryApp,
  ],
})
export class MainAppModule {
  constructor(private _appRef: ApplicationRef) { }

    ngDoBootstrap() {
      this._appRef.bootstrap(EntryApp);
    }

}



