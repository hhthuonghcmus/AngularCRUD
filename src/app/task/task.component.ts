import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

import { TaskService } from './task.service';
import { Task } from './../model/TaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskList!: Task[];
  taskInputForm = new FormGroup({
    name: new FormControl(''),
    duration: new FormControl(''),
  });

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.updateViewSubject.subscribe(() => this.UpdateView());
    this.UpdateView();
  }

  UpdateView() {
    this.taskList = this.taskService.GetTaskList();
  }
}
