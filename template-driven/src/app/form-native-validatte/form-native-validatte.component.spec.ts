import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNativeValidatteComponent } from './form-native-validatte.component';

describe('FormNativeValidatteComponent', () => {
  let component: FormNativeValidatteComponent;
  let fixture: ComponentFixture<FormNativeValidatteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNativeValidatteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNativeValidatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
