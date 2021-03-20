import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskInputFormComponent } from './task/task-input-form/task-input-form.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    TaskInputFormComponent,
    TaskItemComponent,
    TaskDetailComponent,
  ],
  imports: [ 

  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
