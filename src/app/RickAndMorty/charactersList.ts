import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  template: `<h1>Characters list</h1>`,
  styles: [],
  imports: [RouterLink],
})
export class CharactersList {}
