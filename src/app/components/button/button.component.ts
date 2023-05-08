import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() text: string = '';
  @Input() type: string = 'button';

  @Output() emmitClick: EventEmitter<MouseEvent> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(event: MouseEvent) {
    this.emmitClick.emit(event);
  }
}
