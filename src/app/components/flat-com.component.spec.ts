import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatComComponent } from './flat-com.component';

describe('FlatComComponent', () => {
  let component: FlatComComponent;
  let fixture: ComponentFixture<FlatComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatComComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlatComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
