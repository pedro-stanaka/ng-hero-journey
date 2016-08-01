import {Component} from "@angular/core";
import {Hero} from "./models/hero";
import {HeroDetailComponent} from "./hero-detail.component"

@Component({
    selector: 'my-app',
    template: `
<h1>{{title}}</h1>

<ul class="heroes">
    <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> <span>{{hero.name}}</span>
    </li>
</ul>

<my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `
})

export class AppComponent {
    title = 'Tour of Heroes';
    selectedHero:Hero;
    public heroes = HEROES;
    directives: [HeroDetailComponent];

    onSelect(hero:Hero) {
        this.selectedHero = hero
    }
}

const HEROES:Hero[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];
