import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() type!: string;
  @Input() icon!: string;
  @Input() defaultValue!: string;
  valueInput = '';
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.valueInput = this.defaultValue;
  }

  ngOnInit(): void {}

  onChange(event: Event) {
    this.change.emit(event);
  }
}
