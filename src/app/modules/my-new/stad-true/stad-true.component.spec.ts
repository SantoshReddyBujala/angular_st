import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadTrueComponent } from './stad-true.component';

describe('StadTrueComponent', () => {
  let component: StadTrueComponent;
  let fixture: ComponentFixture<StadTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StadTrueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StadTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
