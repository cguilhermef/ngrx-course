import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, map, tap } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
  constructor(private courseService: CourseEntityService) {}

  resolve(): Observable<boolean> {
    return this.courseService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.courseService.getAll();
        }
      }),
      filter((loaded) => loaded),
      first()
    );
  }
}
