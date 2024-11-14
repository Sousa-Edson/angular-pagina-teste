import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  constructor(private router: Router) { }
  navegarParaOutraPagina() { this.router.navigate(['']); }
}
