import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'task/:id', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
