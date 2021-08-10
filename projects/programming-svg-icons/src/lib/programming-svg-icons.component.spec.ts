import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingSvgIconsComponent } from './programming-svg-icons.component';

describe('ProgrammingSvgIconsComponent', () => {
  let component: ProgrammingSvgIconsComponent;
  let fixture: ComponentFixture<ProgrammingSvgIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingSvgIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingSvgIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
