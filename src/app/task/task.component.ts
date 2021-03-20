import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './../model/TaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  /**
   * Constructor
   */
  constructor(private taskService: TaskService) { }

  /**
   * Overrides on init
   *
   * @return {void}
   */
  ngOnInit(): void {
    this.tasks = this.taskService.getAll();
  }
}
