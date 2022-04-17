import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "../interface/task";

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html",
})
export class FetchDataComponent {
  public tasks: Task[];
  public showForm: boolean = false;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<Task[]>(baseUrl + "weatherforecast").subscribe(
      (result) => {
        this.tasks = result;
      },
      (error) => console.error(error)
    );
  }

  toggleForm() {
    console.log("hello");
    this.showForm = !this.showForm;
  }
}
