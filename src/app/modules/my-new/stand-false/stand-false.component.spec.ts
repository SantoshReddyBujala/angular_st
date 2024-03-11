import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandFalseComponent } from './stand-false.component';

describe('StandFalseComponent', () => {
  let component: StandFalseComponent;
  let fixture: ComponentFixture<StandFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandFalseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
