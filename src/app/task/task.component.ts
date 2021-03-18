import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, FormControl }  from '@angular/forms';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TaskService } from './task.service';
import { Task } from './../model/TaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    taskList: Task[] = [];
    taskInputForm = new FormGroup({
        name: new FormControl(""),
        duration: new FormControl("")
    })


    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
      this.taskList = this.taskService.GetTaskList();
    }

    OnSubmit(): void{
        this.taskService.AddNewTask(this.taskInputForm);
      //   this.taskInputForm = new FormGroup({
      //     name: new FormControl(""),
      //     duration: new FormControl("")
      // })
    
    }
}
