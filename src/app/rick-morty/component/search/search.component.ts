import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.handleSearch('Morty');
  }

  handleSearch(value: string) {
    if (value.length > 2) {
      this.onSearch.emit(value);
    }
  }
}
