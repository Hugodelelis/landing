import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignedSectionComponent } from './designed-section.component';

describe('DesignedSectionComponent', () => {
  let component: DesignedSectionComponent;
  let fixture: ComponentFixture<DesignedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignedSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
