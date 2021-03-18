import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from './../task.service';
import { Task } from './../../model/TaskModel';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task!: Task|undefined;
  constructor(private router: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const id: string = this.router.snapshot.params["id"];
    this.task = this.taskService.GetDetail(id);
  }

}
