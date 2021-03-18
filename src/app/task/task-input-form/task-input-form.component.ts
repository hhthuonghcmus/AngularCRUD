import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, FormControl }  from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input-form',
  templateUrl: './task-input-form.component.html',
  styleUrls: ['./task-input-form.component.css']
})
export class TaskInputFormComponent implements OnInit {
    taskInputForm = new FormGroup({
      name: new FormControl(""),
      duration: new FormControl("")
    })

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {

    }

    OnSubmit(): void{
        this.taskService.AddNewTask(this.taskInputForm);
        this.taskInputForm = new FormGroup({
            name: new FormControl(""),
            duration: new FormControl("")
        })
    }

}



