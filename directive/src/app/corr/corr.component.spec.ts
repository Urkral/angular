import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrComponent } from './corr.component';

describe('CorrComponent', () => {
  let component: CorrComponent;
  let fixture: ComponentFixture<CorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
