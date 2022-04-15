import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html",
})
export class FetchDataComponent {
  public tasks: Task[];

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<Task[]>(baseUrl + "weatherforecast").subscribe(
      (result) => {
        this.tasks = result;
      },
      (error) => console.error(error)
    );
  }
}

interface Task {
  id: number;
  name: string;
  dateCreated: string;
  dueDate: string;
  status: string;
}
