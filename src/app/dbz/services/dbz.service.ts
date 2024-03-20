import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interfase';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] =[
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 999999
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 80000
    }
  ];
  onNewCharacter( character: Character): void{
    const newCharacter: Character = {
      id: uuid(), ...character
    }
    this.characters.push(newCharacter);
  }

  deleteCharacterById( id: string): void{
   this.characters = this.characters.filter(character => character.id !== id);
  }

}