import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    duration: new FormControl("")
  })

  /**
   * Constructor
   */
  constructor(private router: ActivatedRoute, private taskService: TaskService) { }

  /**
   * Prepare form when component init
   *
   * @return {void}
   */
  ngOnInit(): void {
    const id: string = this.router.snapshot.params["id"];
    const task = this.taskService.get(id);

    this.form.setValue({
      id,
      name: String(task?.name),
      duration: Number(task?.duration)
    })
  }

  /**
   * Save task
   *
   * @return {void}
   */
  save(): void {
    console.log('this.form.value', this.form.value)

    this.taskService.update(this.form.value);
    alert("Saved successfully");
  }
}
