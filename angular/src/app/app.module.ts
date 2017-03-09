import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionModule } from './modules/session/session.module';
import { MainModule } from './modules/main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app_component/app.component'
import { AuthGuard } from './guard/auth.guard';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    /*TodoContainerComponent,
    TodoItemComponent,
    LoginComponent,
    LoginLayoutComponent,
    AppLayoutComponent*/
  ],
  imports: [
    MainModule,
    SessionModule
  ],
  providers: [
    AuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
