import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {throwError, Observable, map} from "rxjs";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'api/users/';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  connection(user: string, pwd: string): Observable<boolean> {
    console.log(user +"  "+ pwd);
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    ).pipe(
      map(users => {
        let valid = false;
        users.forEach(u => {
          console.log(u);
          if (u.name === user && u.pwd === pwd) {
            valid = true;
          }
        })
        if (valid){
          this.snackBar.open("Vous êtes bien connecté", "Fermer");
          return true;
        } else {
          this.snackBar.open("Un problème a eu lieu lors de la connection", "Fermer");
          return false;
        }
      })
    );
  }
}
