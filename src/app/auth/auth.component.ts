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
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  Usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  Ingreso() {
    const validUsuario = 'sm46477810';
    const validPassword = '10081990';

    if (this.Usuario.toLowerCase() === validUsuario && this.password === validPassword) {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña Incorrecta');
    }
  }

}
