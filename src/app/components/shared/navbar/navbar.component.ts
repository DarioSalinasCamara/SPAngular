import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  heroes: Heroe [] = [];


  constructor(private _heroesService: HeroesService,
              private router: Router
               ){
    // console.log( "contructor" );

  }

  ngOnInit() {

  }

  buscarHeroe( param: string ){
    this.router.navigate( ['/buscarHeroe', param] );
  }

}
