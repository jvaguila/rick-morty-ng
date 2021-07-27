import { Component, OnInit } from '@angular/core';
import { IRickMorty } from '../../models/rickMorty.interface';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Rick y Morty';
  page = 1;
  name = ' ';
  dataReady = false;
  data: IRickMorty[] = [];

  constructor(private _rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.getDataRickMorty();
  }

  getDataRickMorty() {
    this._rickMortyService.getData(this.name, this.page).subscribe(
      (res) => {
        this.data = res.results;
        this.dataReady = true;
        console.log(this.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  handleSearch(event: string) {
    this.name = event;
    this.getDataRickMorty();
  }

  handlePage(value: number) {
    this.page += value;
    console.log(this.page);
    this.getDataRickMorty();
  }
}
