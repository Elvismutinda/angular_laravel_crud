import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { DxDataGridModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, DxDataGridModule],
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

  // createStudent() {
  //   const newStudent = {
  //     name: 'Elvis Mutinda',
  //     email: 'elvismutinda2@gmail.com',
  //     phone: '0112463368',
  //   };

  //   this.studentService.createStudent(newStudent).subscribe(() => {
  //     this.loadStudents();
  //   });
  // }

  // updateStudent(id: number) {
  //   const updateStudent = {
  //     name: 'Dominic Kimeu',
  //     email: 'dom@gmail.com',
  //     phone: '0796003311',
  //   };

  //   this.studentService.updateStudent(id, updateStudent).subscribe(() => {
  //     this.loadStudents();
  //   });
  // }

  // deleteStudent(id: number) {
  //   this.studentService.deleteStudent(id).subscribe(() => {
  //     this.loadStudents();
  //   });
  // }

  // onEditStudent = (e: any) => {
  //   const studentId = e.row.data.id;
  //   this.updateStudent(studentId);
  // };

  // onDeleteStudent = (e: any) => {
  //   const studentId = e.row.data.id;
  //   this.deleteStudent(studentId);
  // };

  onRowInserted(e: any) {
  this.studentService.createStudent(e.data).subscribe(() => {
    this.loadStudents();
  });
}

onRowUpdated(e: any) {
  this.studentService.updateStudent(e.data.id, e.data).subscribe(() => {
    this.loadStudents();
  });
}

onRowRemoved(e: any) {
  this.studentService.deleteStudent(e.data.id).subscribe(() => {
    this.loadStudents();
  });
}
}
