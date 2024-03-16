import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interfase';

@Component({
  selector: 'app-dbz-add-caracter',
  templateUrl: './add-caracter.component.html',
  styleUrl: './add-caracter.component.css'
})
export class AddCaracterComponent {
  public character: Character= {
    name: '',
    power: 0
  };

  emitCharacter () {
    console.log(this.character);
  }
}
