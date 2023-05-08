import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetCityApiService {
  constructor(private httpService: HttpClient) {}

  public getCityApi(state: string) {
    return this.httpService.get<{ nome: string }[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
    );
  }
}
