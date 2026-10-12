import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiantvcomediesComponent } from './indiantvcomedies.component';

describe('IndiantvcomediesComponent', () => {
  let component: IndiantvcomediesComponent;
  let fixture: ComponentFixture<IndiantvcomediesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiantvcomediesComponent]
    });
    fixture = TestBed.createComponent(IndiantvcomediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
