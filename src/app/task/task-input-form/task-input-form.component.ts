import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input-form',
  templateUrl: './task-input-form.component.html',
  styleUrls: ['./task-input-form.component.css']
})
export class TaskInputFormComponent {
  form = new FormGroup({
    name: new FormControl(""),
    duration: new FormControl("")
  })

  /**
   * Constructor
   */
  constructor(private taskService: TaskService) { }

  /**
   * Submit form to create new task
   *
   * @return {void}
   */
  save(): void {
    console.log('this.taskInputForm.value', this.form.value)
    this.taskService.create(this.form.value);
    this.form.reset()
  }
}
