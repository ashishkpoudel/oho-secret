import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private httpClient: HttpClient,
  ){}

  get(path: string, params = new HttpParams()): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(error => ApiService.handleErrors(error)));
  }

  post(path: string, body: object): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}`, body)
      .pipe(catchError(error => ApiService.handleErrors(error)));
  }

  private static handleErrors(error: HttpErrorResponse) {
    return throwError(error);
  }
}
