import { HashMap, Query, QueryEntity } from "@datorama/akita";
import { observable, Observable } from "rxjs";
import { TaskState, TaskStore } from './store';
import { Injectable } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { Task } from './../../model/TaskModel';


@Injectable({
    providedIn: 'root'
})

export class TaskQuery extends QueryEntity<TaskState, Task>{
    constructor(private taskStore: TaskStore){
        super(taskStore);
    }


}