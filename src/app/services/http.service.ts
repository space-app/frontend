import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = "" ;

  constructor(
    private http: HttpClient,
  ) { }
  get_symptoms():Observable<any>{
    return this.http.get(this.url+ 'diagnosis');
  } 
  send_symptoms(symptoms): Observable<any> {
    return this.http.post(this.url + 'diagnosis/create', symptoms).pipe(
      map((res) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        return of(err);
      })
    );
  }
}
