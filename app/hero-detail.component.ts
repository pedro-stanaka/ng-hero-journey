import {Component, Input} from "@angular/core";
import {Hero} from "./models/hero";

@Component({
    selector: 'my-hero-detail',
    template: `
<div class="details" *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details</h2>
    <div><label>id: </label> {{selectedHero.id}}</div>
    <form action="#" class="form-horizontal">
        <div class="form-group">
            <label>Name: </label>
            <input [(ngModel)]="selectedHero.name" placeholder="Name" class="form-control"/>
        </div>
    </form>
</div>
`
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}