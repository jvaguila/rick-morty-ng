import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RickMortyService {
  static URL = environment.base_url;

  constructor(private http: HttpClient) {}

  getData(name = '', page = 1): Observable<any> {
    return this.http.get<any>(
      `${RickMortyService.URL}/?name=${name}&page=${page}`
    );
  }
}
