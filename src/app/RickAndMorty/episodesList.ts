import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-episodes-list',
  template: ` <h1>Episodes list</h1> `,
  styles: [],
  imports: [RouterLink],
})
export class EpisodesList {}
