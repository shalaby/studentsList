import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student!: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.student = this.studentService.getStudentById(id);
  }

}
