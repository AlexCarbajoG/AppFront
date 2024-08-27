import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']  // Asegúrate de usar 'styleUrls' en plural
})
export class AuthComponent {
  codigo: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.codigo === 'sm46477810' && this.password === '10081990') {
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
