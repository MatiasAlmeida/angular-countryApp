import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  searchCapital(queryString: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${queryString}`)
      .pipe(
        // tap( countries => console.log('Paso por el tap', countries)),
        // tap( countries => console.log('Tap 1')),
        // map( countries => [] ),
        // tap( countries => console.log('Tap 2'))
        // los operadores del pipe se procesan secuencialmente
        catchError( () => of([]) )
      );
  }

  searchCountry(queryString: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${queryString}`)
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchRegion(region: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(
        catchError( () => of([]) )
      );
  }

}
