import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { isLoggedIn } from "./auth.selectors";
import { AuthState } from "./reducers";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AuthState>, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap((isLogged) => {
        if (!isLogged) {
          this.router.navigateByUrl("/login");
        }
      })
    );
  }
}
