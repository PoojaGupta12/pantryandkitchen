import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pk-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

recipes: Object[] =
    [
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},
        {title: 'Apple Crisp', rating: '2', cookTime: '40' , prepTime: '30'},

    ]

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

}
