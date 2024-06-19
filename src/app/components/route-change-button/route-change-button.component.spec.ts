import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChangeButtonComponent } from './route-change-button.component';

describe('RouteChangeButtonComponent', () => {
  let component: RouteChangeButtonComponent;
  let fixture: ComponentFixture<RouteChangeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteChangeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteChangeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
