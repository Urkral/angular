import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapPnaelComponent } from './boostrap-pnael.component';

describe('BoostrapPnaelComponent', () => {
  let component: BoostrapPnaelComponent;
  let fixture: ComponentFixture<BoostrapPnaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostrapPnaelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapPnaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
