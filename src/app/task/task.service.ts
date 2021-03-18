import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Task } from '../model/TaskModel';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [
    { id: '1', name: 'Go', duration: 1 },
    { id: '2', name: 'Went', duration: 2 },
    { id: '3', name: 'Gone', duration: 3 },
  ];
  constructor() {}

  public GetTaskList(): Task[] {
    return this.tasks;
  }

  public AddNewTask(taskInputForm: FormGroup) {
    let newTask: Task = {
      id: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5),
      name: taskInputForm['value']['name'],
      duration: taskInputForm['value']['duration'],
    };
    this.tasks.push(newTask);
  }

  // public Delete(id: string): Task[] {
  //   this.tasks = this.tasks.filter((x) => x.id !== id);
  //   return this.tasks;
  // }

  public Delete(id: string): void {
    const index = this.tasks.findIndex((t) => t.id == id);
    this.tasks.splice(index, 1);
  }

  public GetDetail(id: string): Task | undefined {
    return this.tasks.find((t) => t.id == id);
  }
}
