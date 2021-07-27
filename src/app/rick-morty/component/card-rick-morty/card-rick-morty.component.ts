import { Component, Input, OnInit } from '@angular/core';
import { IRickMorty } from '../../models/rickMorty.interface';

@Component({
  selector: 'app-card-rick-morty',
  templateUrl: './card-rick-morty.component.html',
  styleUrls: ['./card-rick-morty.component.scss'],
})
export class CardRickMortyComponent implements OnInit {
  @Input() data!: IRickMorty;

  constructor() {}

  ngOnInit(): void {}
}
