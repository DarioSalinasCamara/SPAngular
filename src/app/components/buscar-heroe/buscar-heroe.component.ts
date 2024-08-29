import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: ``
})
export class BuscarHeroeComponent {

  heroes: Heroe [] = [];
  param: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router:Router
  ){

    this.activatedRoute.params.subscribe( params =>{
      this.param = params['param'];
      this.heroes = this._heroesService.buscarHeroe( params['param']);
      
    })

  }

  verHeroe( idx: number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
