import { Injectable } from '@angular/core';

import { Task } from '../model/TaskModel';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { id: '1', name: 'Go', duration: 1 },
    { id: '2', name: 'Went', duration: 2 },
    { id: '3', name: 'Gone', duration: 3 },
  ];

  /**
   * Get all tasks
   *
   * @return {Task[]} The tasks list
   */
  getAll(): Task[] {
    return this.tasks;
  }

  /**
   * Get task by id
   *
   * @param  {string} id  The task id
   * @return {Task}       The found task
   */
  get(id: string): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  /**
   * Add new task
   *
   * @param  {Task} task  The task info
   * @return {void}
   */
  create(task: Task): void {
    this.tasks = [...this.tasks, task];
  }

  /**
   * Save a task
   *
   * @param  {Task} task  The task
   * @return {void}
   */
  update(task: Task): void {
    const index = this.tasks.findIndex((t) => t.id === t.id);

    this.tasks[index] = task;
  }

  /**
 * Delete a task
 *
 * @param  {string} id  The task id
 * @return {void}
 */
  delete(id: string): void {
    this.tasks = this.tasks.filter(x => x.id !== id);
  }
}
