import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  public states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  constructor(private httpService: HttpClient) {}

  getAddressByCep(postalCode: string) {
    return this.httpService.get(`https://viacep.com.br/ws/${postalCode}/json/`);
  }
  getAddress(state: string, city: string, road: string) {
    const formatRoad = road.replace(' ', '+');
    return this.httpService.get<{ logradouro: string }[]>(
      `https://viacep.com.br/ws/${state}/${city}/${formatRoad}/json`
    );
  }
}
