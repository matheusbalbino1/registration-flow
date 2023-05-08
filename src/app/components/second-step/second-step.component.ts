import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InfoUserService } from 'src/app/services/info-user.service';
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, Subject, merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
} from 'rxjs/operators';

import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ViaCepService } from 'src/app/services/via-cep.service';
import { GetCityApiService } from 'src/app/services/get-city-api.service';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css'],
})
export class SecondStepComponent implements OnInit {
  public valueInput = '';
  public icon = 'bi bi-geo-alt';
  public states: string[];
  public roads: string[] = [];
  public valueSelectState = '';
  public valueSelectCity = '';
  public citys: string[] = [];
  public searchSubject = new Subject<string>();
  public infoUser: IUser;

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
  public focus$ = new Subject<string>();
  public click$ = new Subject<string>();

  constructor(
    private infoUserService: InfoUserService,
    private routeService: Router,
    private viaCepService: ViaCepService,
    private getCityApiService: GetCityApiService
  ) {
    this.infoUser = this.infoUserService.getInfoUser();
    if (this.infoUser.state) {
      this.getCityApiService.getCityApi(this.infoUser.state).subscribe({
        next: (data) => {
          this.citys = data.map((city) => city.nome);
          this.valueSelectCity = this.infoUser.city;
        },
      });
    }
    this.valueSelectState = this.infoUser.state;
    this.valueInput = this.infoUser.address;
    this.states = viaCepService.states;
    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe((searchTerm: string) => {
        this.viaCepService
          .getAddress(this.valueSelectState, this.valueSelectCity, searchTerm)
          .subscribe({
            next: (data) => {
              this.roads = data.map((road) => road.logradouro);
            },
          });
      });
  }

  ngOnInit(): void {}

  onBack() {
    this.routeService.navigate(['/home']);
  }

  onSubmit() {
    this.infoUserService.setInfoUser({
      ...this.infoUser,
      address: this.valueInput,
      city: this.valueSelectCity,
      state: this.valueSelectState,
    });
    this.routeService.navigate(['/confirm']);
  }

  onChange(event: any) {
    if (typeof event !== 'string' || event.length < 4) return;
    this.searchSubject.next(event);
  }

  onChangeState(event: any) {
    if (typeof event !== 'string') return;
    this.getCityApiService.getCityApi(event).subscribe({
      next: (data) => {
        this.citys = data.map((city) => city.nome);
      },
    });
  }

  onChangeCity(event: any) {}

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ''
          ? this.roads
          : this.roads.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };
}
