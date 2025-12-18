import { Routes } from '@angular/router';
import { CharactersList } from './RickAndMorty/charactersList';
import { EpisodesList } from './RickAndMorty/episodesList';
import { LocationsList } from './RickAndMorty/locationsList';

export const routes: Routes = [
  {
    path: 'characters-list',
    component: CharactersList,
  },
  {
    path: 'episodes-list',
    component: EpisodesList,
  },
  {
    path: 'locations-list',
    component: LocationsList,
  },
  {
    path: '**',
    redirectTo: 'app-root',
  },
];
