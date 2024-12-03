import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.page.html',
})
export class DetailComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  // Cara Setup id di params, dan supaya bisa di ambil di halaman HTML nya
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
