import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryComponent } from './history/history.component';
import { InboxComponent } from './inbox/inbox.component';
import { DetailComponent } from './detail/detail.component';
import { ContainerComponent } from './container/container.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StatusChangedDirective } from './directives/status-changed.directive';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    InboxComponent,
    DetailComponent,
    ContainerComponent,
    StatusChangedDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
