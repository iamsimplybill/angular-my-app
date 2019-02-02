import { Injectable } from '@angular/core';
import { Student } from '../students/student';
import { STUDENTS } from '../students/student-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  getStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }
}
