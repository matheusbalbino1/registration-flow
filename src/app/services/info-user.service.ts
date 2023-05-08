import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class InfoUserService {
  private infoUser: IUser = {
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    address: '',
    city: '',
    state: '',
  };

  constructor() {
    const previousData = localStorage.getItem('infoUser');
    if (previousData) {
      this.infoUser = JSON.parse(previousData);
    }
  }

  setInfoUser(infoUser: IUser) {
    this.infoUser = infoUser;
    localStorage.setItem('infoUser', JSON.stringify(infoUser));
  }
  getInfoUser() {
    return this.infoUser;
  }
}
