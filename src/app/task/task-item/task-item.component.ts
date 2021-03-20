import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from './../../model/TaskModel';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  public Delete(id: string) {
    this.taskService.Delete(id);
    this.taskService.updateViewSubject.next();
  }
}
