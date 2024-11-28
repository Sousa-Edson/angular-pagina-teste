import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../pokemon.service';

export interface Pokemon { id: number; name: string; }

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnInit {
  firePokemons: Pokemon[] = [];
  constructor(private router: Router, private pokemonService: PokemonService) { }
  ngOnInit(): void {
    this.firePokemons = this.pokemonService.getFirePokemons();
  }
  navegarParaOutraPagina() { this.router.navigate(['']); }
}
