import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSectionComponent } from './power-section.component';

describe('PowerSectionComponent', () => {
  let component: PowerSectionComponent;
  let fixture: ComponentFixture<PowerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
