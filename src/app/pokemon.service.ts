import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getFirePokemons() {
    return [{ id: 1, name: 'Charmander' }, { id: 2, name: 'Charmeleon' }, { id: 3, name: 'Charizard' }, { id: 4, name: 'Vulpix' }, { id: 5, name: 'Ninetales' }, { id: 6, name: 'Growlithe' }, { id: 7, name: 'Arcanine' }, { id: 8, name: 'Ponyta' }, { id: 9, name: 'Rapidash' }, { id: 10, name: 'Magmar' }, { id: 11, name: 'Flareon' }, { id: 12, name: 'Moltres' }, { id: 13, name: 'Cyndaquil' }, { id: 14, name: 'Quilava' }, { id: 15, name: 'Typhlosion' }, { id: 16, name: 'Slugma' }, { id: 17, name: 'Magcargo' }, { id: 18, name: 'Houndour' }, { id: 19, name: 'Houndoom' }, { id: 20, name: 'Magby' }, { id: 21, name: 'Torchic' }, { id: 22, name: 'Combusken' }, { id: 23, name: 'Blaziken' }, { id: 24, name: 'Numel' }, { id: 25, name: 'Camerupt' }, { id: 26, name: 'Torkoal' }, { id: 27, name: 'Sunny Castform' }, { id: 28, name: 'Shiny Torchic' }, { id: 29, name: 'Charizard Mega X' }, { id: 30, name: 'Charizard Mega Y' }, { id: 31, name: 'Ninetales Alola' }, { id: 32, name: 'Rotom Heat' }, { id: 33, name: 'Tepig' }, { id: 34, name: 'Pignite' }, { id: 35, name: 'Emboar' }, { id: 36, name: 'Pansear' }, { id: 37, name: 'Simisear' }, { id: 38, name: 'Darumaka' }, { id: 39, name: 'Darmanitan' }, { id: 40, name: 'Litwick' }, { id: 41, name: 'Lampent' }, { id: 42, name: 'Chandelure' }, { id: 43, name: 'Heatmor' }, { id: 44, name: 'Fennekin' }, { id: 45, name: 'Braixen' }, { id: 46, name: 'Delphox' }, { id: 47, name: 'Litleo' }, { id: 48, name: 'Pyroar' }, { id: 49, name: 'Volcanion' }, { id: 50, name: 'Scorbunny' },];
  }
}
