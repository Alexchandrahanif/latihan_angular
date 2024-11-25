import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); // Pindah ke halaman login
  }
  goToRegister() {
    this.router.navigate(['/register']); // Pindah ke halaman register
  }
}
