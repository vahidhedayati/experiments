import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    TodoModule
],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
