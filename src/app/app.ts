import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  template: `
    <h1>Welcome to {{ title() }}!</h1>

    <nav>
      <a routerLink="/characters-list">List of characters</a><br />
      <a routerLink="/episodes-list">List of episodes</a><br />
      <a routerLink="/locations-list">List of locations</a><br />
    </nav>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ProjektFS');
}
