import { Component, signal } from '@angular/core';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string[];
  location: string[];
  image: string;
  episode: string[];
  url: string;
  created: string;
};

@Component({
  selector: 'app-characterCard',
  template: ` <h1>Welcome!</h1> `,
  styles: [],
})
export class CharacterCard {}
