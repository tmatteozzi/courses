import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationComponent } from './equation.component';

describe('EquationComponent', () => {
  let component: EquationComponent;
  let fixture: ComponentFixture<EquationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
