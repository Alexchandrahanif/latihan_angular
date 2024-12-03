import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
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
  goToDetails(id: number) {
    this.router.navigate(['/detail', id]); // Navigasi ke '/details/:id'
  }
}
