import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-locations-list',
  template: `<h1>Locations list</h1>`,
  styles: [],
  imports: [RouterLink],
})
export class LocationsList {}
