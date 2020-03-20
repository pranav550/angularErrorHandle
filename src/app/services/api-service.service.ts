import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Constant } from "../constant";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  // url = "https://api.github.com/users"
  constructor(private http: HttpClient

  ) { }
  getData(): Observable<any> {
    return this.http.get<any>(Constant.URL)
      .pipe(catchError(this.handleError))
  }

  handleError(error) {
    return throwError(error.message)
  }

}
