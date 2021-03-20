import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../model/TaskModel';
import { TaskQuery } from './state/query';
import { TaskStore } from './state/store';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [
    { id: '1', name: 'Go', duration: 1 },
    { id: '2', name: 'Went', duration: 2 },
    { id: '3', name: 'Gone', duration: 3 },
  ];

  public updateViewSubject = new Subject();

  constructor(private taskQuery: TaskQuery, private taskStore: TaskStore) {}

  public GetTaskList(): Task[]{
      let taskList: Task[] = [];
      this.taskQuery.selectAll().subscribe(t => { return taskList = t});
      return taskList;
  }

  public AddNewTask(taskInputForm: FormGroup): void {
    let newTask: Task = {
      id: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5),
      name: taskInputForm['value']['name'],
      duration: taskInputForm['value']['duration'],
    };
    this.taskStore.add(newTask);
  }
  
  public Delete(id: string): void {
    this.taskStore.remove(id);
  }

  public GetTaskById(id: string): Task | undefined {
    let result: Task| undefined ;
    this.taskQuery.selectEntity(id).subscribe(t => {result = t});
    
    return result;
  }

  public Save(task: FormGroup): void{
    this.taskStore.update(task['value']['id'], {
      name: task['value']['name'],
      duration: task['value']['duration']
    });
  }
}


