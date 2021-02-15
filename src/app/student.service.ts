import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents() {
    return [
      {id: 1, name: 'Negm'},
      {id: 2, name: 'Mustafa'},
      {id: 3, name: 'Shehab'},
      {id: 4, name: 'Ahmad'},
    ];
  }

  getStudentById(id) {
    return this.getStudents().find(function(student) {
      return student.id == id;
    });
  }
}
