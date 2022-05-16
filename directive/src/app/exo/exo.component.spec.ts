import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoComponent } from './exo.component';

describe('ExoComponent', () => {
  let component: ExoComponent;
  let fixture: ComponentFixture<ExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
