import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-input-form',
  templateUrl: './task-input-form.component.html',
  styleUrls: ['./task-input-form.component.css'],
})
export class TaskInputFormComponent implements OnInit {
  @Output() updateView = new EventEmitter();

  taskInputForm = new FormGroup({
    name: new FormControl(''),
    duration: new FormControl(''),
  });

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  Submit(): void {
    this.taskService.AddNewTask(this.taskInputForm);
    this.taskService.updateViewSubject.next();
    this.taskInputForm = new FormGroup({
      name: new FormControl(''),
      duration: new FormControl(''),
    });
  }
}
