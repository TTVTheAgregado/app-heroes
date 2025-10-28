import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero!: Hero;
  
}
