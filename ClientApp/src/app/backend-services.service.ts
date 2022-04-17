import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError as observableThrowError } from "rxjs";
import { Task } from "./interface/task";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BackendServicesService {
  private taskUrl = "weatherforecast";

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {}

  // getTasks()<Observable> {
  //   http.get<Task[]>(baseUrl + "weatherforecast").subscribe(
  //     (result) => {
  //       this.tasks = result;
  //     },
  //     (error) => console.error(error)
  //   );
  // }

  addTask(task: Task): Observable<Task> {
    return this.http
      .post<Task>(this.taskUrl, task)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || "Server error");
  }
}
