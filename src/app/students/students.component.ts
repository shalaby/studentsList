import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}
