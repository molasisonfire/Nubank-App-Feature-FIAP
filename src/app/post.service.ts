import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

//classe da definicao da url e retorno do JSON de analise de credito

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

//url da API de analise de credito deve ser usado aqui
const apiUrl = "https://randomuser.me/api/?results=10";
@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
//metodo definido aqui sera chamado para ter o resultado da API
  getDataUser(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
}
