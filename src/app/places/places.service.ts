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
      129.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
    ),
    new Place(
      'p2',
      'Timberline - Unit 1C',
      'Walk to downtown',
      'http://lorempixel.com/400/200/city/?v=2',
      150,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
    ),
    new Place(
      'p3',
      '201 Mill Ave',
      '3 bedroom cabin',
      'http://lorempixel.com/400/200/city/?v=3',
      189.50,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
    ),
    new Place(
      'p4',
      'Village - Room 225',
      'Next to The Gondola',
      'http://lorempixel.com/400/200/city/?v=4',
      199.90,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
    ),
    new Place(
      'p5',
      '1023 Elk Ranch Road',
      'Amazing views',
      'http://lorempixel.com/400/200/city/?v=5',
      160,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
    ),
    new Place(
      'p6',
      '111 Main St',
      'One bedroom',
      'http://lorempixel.com/400/200/city/?v=6  ',
      111,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
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
