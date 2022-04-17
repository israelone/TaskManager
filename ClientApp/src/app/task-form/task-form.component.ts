import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BackendServicesService } from "../backend-services.service";
import { Task } from "../interface/task";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"],
})
export class TaskFormComponent implements OnInit {
  task: Task;

  taskForm = this.fb.group({
    taskName: ["", Validators.required],
    dateCreated: ["", Validators.required],
    dueDate: ["", Validators.required],
    status: ["", Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    http: HttpClient,
    private backendservices: BackendServicesService
  ) {}

  ngOnInit() {}

  submitTask() {
    // this.task=this.taskForm.
    // this.backendservices.addTask();
  }
}
