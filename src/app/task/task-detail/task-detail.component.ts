import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from './../task.service';
import { Task } from './../../model/TaskModel';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  taskEditForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    duration: new FormControl("")
  })

  constructor(private router: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const id: string = this.router.snapshot.params["id"];
    const task = this.taskService.GetDetail(id);
    this.taskEditForm.setValue({
      id: id,
      name: String(task?.name),
      duration: Number(task?.duration)
    })
    
  }

  Save(){
    this.taskService.Save(this.taskEditForm);
    alert("Save successfully");
  }
}
