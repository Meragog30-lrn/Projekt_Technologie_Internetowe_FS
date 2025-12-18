import { Component, signal } from '@angular/core';

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string; //code of the episode
  characters: string[];
  url: string;
  created: string;
};

@Component({
  selector: 'app-locationCard',
  template: ` <h1>Welcome!</h1> `,
  styles: [],
})
export class LocationCard {}
