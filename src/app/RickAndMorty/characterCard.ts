import { Component, signal } from '@angular/core';

export type Character = {
  id: number;
  name: string;
  status: string;
};

@Component({
  selector: 'app-characterCard',
  template: ` <h1>Welcome!</h1> `,
  styles: [],
})
export class CharacterCard {}
