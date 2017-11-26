import { Component, OnInit } from '@angular/core';

export interface Unit {
  title: string;
}

export interface Ingredient {
  title: string;
  amount: number;
  unit: Unit;
  isDeleted: boolean;
}

@Component({
  selector: 'pk-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss']
})
export class PantryComponent implements OnInit {

units: Unit[] = [
{title: 'ounce'},
{title: 'gallon'},
{title: 'pound'},
{title: 'gram'},
{title: 'cups'},
{title:'tsp'},
{title: 'large'},
{title: 'mL'},
{title: 'large'}
]

ingredients : Ingredient[] = [

  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'onion', amount: 2, unit:this.units[8], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'carrot', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'pasta', amount: 600, unit:this.units[3], isDeleted: false},
  {title:'mushroom', amount: 200, unit:this.units[3], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'salt', amount: 1, unit:this.units[5], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'pasta', amount: 600, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'salt', amount: 1, unit:this.units[5], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'onion', amount: 2, unit:this.units[8], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'carrot', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'pasta', amount: 600, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'salt', amount: 1, unit:this.units[5], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'onion', amount: 2, unit:this.units[8], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'carrot', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'pasta', amount: 600, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'salt', amount: 1, unit:this.units[5], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'onion', amount: 2, unit:this.units[8], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'carrot', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'pasta', amount: 600, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'salt', amount: 1, unit:this.units[5], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'onion', amount: 2, unit:this.units[8], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'carrot', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'pasta', amount: 600, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'salt', amount: 1, unit:this.units[5], isDeleted: false},
  {title:'tomato', amount: 4, unit:this.units[6], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'asperagus', amount: 400, unit:this.units[3], isDeleted: false},
  {title:'egg', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'spinach', amount: 800, unit:this.units[8], isDeleted: false},
  {title:'onion', amount: 2, unit:this.units[8], isDeleted: false},
  {title:'chickpea', amount: 960, unit:this.units[7], isDeleted: false},
  {title:'carrot', amount: 1, unit:this.units[6], isDeleted: false},
  {title:'chilli', amount: 4, unit:this.units[6], isDeleted: false}
]


dogs: Object[] = [
  { name: 'Porter', human: 'Kara' },
  { name: 'Mal', human: 'Jeremy' },
  { name: 'Koby', human: 'Igor' },
  { name: 'Razzle', human: 'Ward' },
  { name: 'Molly', human: 'Rob' },
  { name: 'Husi', human: 'Matias' },
  { name: 'Porter', human: 'Kara' },
  { name: 'Mal', human: 'Jeremy' },
  { name: 'Koby', human: 'Igor' },
  { name: 'Razzle', human: 'Ward' },
  { name: 'Molly', human: 'Rob' },
  { name: 'Husi', human: 'Matias' },
  { name: 'Porter', human: 'Kara' },
  { name: 'Mal', human: 'Jeremy' },
  { name: 'Koby', human: 'Igor' },
  { name: 'Razzle', human: 'Ward' },
  { name: 'Molly', human: 'Rob' },
  { name: 'Husi', human: 'Matias' },
  { name: 'Porter', human: 'Kara' },
  { name: 'Mal', human: 'Jeremy' },
  { name: 'Koby', human: 'Igor' },
  { name: 'Razzle', human: 'Ward' },
  { name: 'Molly', human: 'Rob' },
  { name: 'Husi', human: 'Matias' },
  { name: 'Mal', human: 'Jeremy' },
  { name: 'Koby', human: 'Igor' },
  { name: 'Razzle', human: 'Ward' },
  { name: 'Molly', human: 'Rob' },
  { name: 'Husi', human: 'Matias' },
  { name: 'Porter', human: 'Kara' },
  { name: 'Mal', human: 'Jeremy' },
  { name: 'Koby', human: 'Igor' },
  { name: 'Razzle', human: 'Ward' },
  { name: 'Molly', human: 'Rob' },
  { name: 'Husi', human: 'Matias' },
  { name: 'Mal', human: 'Jeremy' },
  { name: 'Koby', human: 'Igor' },
  { name: 'Razzle', human: 'Ward' },
  { name: 'Molly', human: 'Rob' },
  { name: 'Husi', human: 'Matias' },
  { name: 'Porter', human: 'Kara' },
  { name: 'Mal', human: 'Jeremy' },
  { name: 'Koby', human: 'Igor' },
  { name: 'Razzle', human: 'Ward' },
  { name: 'Molly', human: 'Rob' },
  { name: 'Husi', human: 'Matias' }
];

pokemonGroups = [
  {
    name: 'Grass',
    pokemon: [
      { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
      { value: 'oddish-1', viewValue: 'Oddish' },
      { value: 'bellsprout-2', viewValue: 'Bellsprout' }
    ]
  },
  {
    name: 'Water',
    pokemon: [
      { value: 'squirtle-3', viewValue: 'Squirtle' },
      { value: 'psyduck-4', viewValue: 'Psyduck' },
      { value: 'horsea-5', viewValue: 'Horsea' }
    ]
  },
  {
    name: 'Fire',
    disabled: true,
    pokemon: [
      { value: 'charmander-6', viewValue: 'Charmander' },
      { value: 'vulpix-7', viewValue: 'Vulpix' },
      { value: 'flareon-8', viewValue: 'Flareon' }
    ]
  },
  {
    name: 'Psychic',
    pokemon: [
      { value: 'mew-9', viewValue: 'Mew' },
      { value: 'mewtwo-10', viewValue: 'Mewtwo' },
    ]
  }
];
  constructor() { }

  ngOnInit() {
  }

}
