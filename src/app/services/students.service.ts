import { Injectable } from '@angular/core';
import { Student } from '../students/student';
import { STUDENTS } from '../students/student-mock';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  getStudents(): Student[] {
    return STUDENTS;
  }
}
