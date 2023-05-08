import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoUserService } from 'src/app/services/info-user.service';

interface IData {
  value: string;
  icon: string;
}

@Component({
  selector: 'app-confirm-step',
  templateUrl: './confirm-step.component.html',
  styleUrls: ['./confirm-step.component.css'],
})
export class ConfirmStepComponent implements OnInit {
  data: IData[];
  constructor(
    private routerService: Router,
    private infoUserService: InfoUserService
  ) {
    const infoUser = this.infoUserService.getInfoUser();

    this.data = [
      { value: infoUser.name, icon: 'bi bi-person' },
      { value: infoUser.email, icon: 'bi bi-envelope' },
      { value: infoUser.phone, icon: 'bi bi-telephone' },
      { value: infoUser.state, icon: 'bi bi-geo-alt' },
      { value: infoUser.city, icon: 'bi bi-geo-alt' },
      { value: infoUser.address, icon: 'bi bi-geo-alt' },
    ];
  }

  ngOnInit(): void {}

  onBack() {
    this.routerService.navigate(['/address']);
  }

  onSubmit() {
    this.routerService.navigate(['/completed']);
  }
}
