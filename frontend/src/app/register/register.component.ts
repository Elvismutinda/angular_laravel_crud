import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DxButtonComponent, DxFormModule } from 'devextreme-angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, DxFormModule, DxButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: any = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.registerUser(this.user).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => alert(err.error.message || 'Registration failed'),
    });
  }
}
