import { Component, Input } from '@angular/core';

import { Task } from './../../model/TaskModel';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;

  /**
   * Constructor
   */
  constructor(private taskService: TaskService) { }

  /**
   * Delete a task
   *
   * @param  {string} id  The task id
   * @return {void}
   */
  public delete(): void {
    this.taskService.delete(this.task.id);
  }
}
