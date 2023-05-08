import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedRegistrationComponent } from './completed-registration.component';

describe('CompletedRegistrationComponent', () => {
  let component: CompletedRegistrationComponent;
  let fixture: ComponentFixture<CompletedRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
