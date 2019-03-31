import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Fraser Meadows - Unit 111',
      'Cozy place near bus route',
      'http://lorempixel.com/400/200/city/?v=1',
      129.99
    ),
    new Place(
      'p2',
      'Timberline - Unit 1C',
      'Walk to downtown',
      'http://lorempixel.com/400/200/city/?v=2',
      150
    ),
    new Place(
      'p3',
      '201 Mill Ave',
      '3 bedroom cabin',
      'http://lorempixel.com/400/200/city/?v=3',
      189.50
    )
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
