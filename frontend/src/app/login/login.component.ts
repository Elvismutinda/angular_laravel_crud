import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DxButtonComponent, DxFormModule } from 'devextreme-angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, DxFormModule, DxButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: any = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.loginUser(this.user).subscribe({
      next: () => this.router.navigate(['/student']),
      error: (err) => alert(err.error.message || 'Login failed'),
    });
  }
}
