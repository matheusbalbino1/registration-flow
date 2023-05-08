import { Component, EventEmitter, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { InfoUserService } from 'src/app/services/info-user.service';

interface IForm {
  name: FormControl;
  email: FormControl;
  phone: FormControl;
}

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css'],
})
export class FirstStepComponent implements OnInit {
  infoUser: IUser;
  form: FormGroup<IForm>;
  constructor(
    private infoUserService: InfoUserService,
    private routerService: Router
  ) {
    this.infoUser = this.infoUserService.getInfoUser();
    this.form = new FormGroup({
      name: new FormControl(this.infoUser.name, [Validators.required]),
      email: new FormControl(this.infoUser.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.infoUser.phone, [
        Validators.required,
        Validators.minLength(12),
        Validators.pattern('[0-9]{2} [0-9]{5}-[0-9]{4}'),
      ]),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.infoUserService.setInfoUser({ ...this.infoUser, ...this.form.value });
    this.routerService.navigate(['/address']);
  }
}
