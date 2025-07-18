import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response.student;
    });
  }

  createStudent() {
    const newStudent = {
      name: 'Elvis Mutinda',
      email: 'elvismutinda2@gmail.com',
      phone: '0112463368',
    };

    this.studentService.createStudent(newStudent).subscribe(() => {
      this.loadStudents();
    });
  }

  updateStudent(id: number) {
    const updateStudent = {
      name: 'Dominic Kimeu',
      email: 'dom@gmail.com',
      phone: '0796003311',
    };

    this.studentService.updateStudent(id, updateStudent).subscribe(() => {
      this.loadStudents();
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }
}
