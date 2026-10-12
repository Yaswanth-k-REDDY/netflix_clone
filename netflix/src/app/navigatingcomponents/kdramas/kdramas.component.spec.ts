import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdramasComponent } from './kdramas.component';

describe('KdramasComponent', () => {
  let component: KdramasComponent;
  let fixture: ComponentFixture<KdramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KdramasComponent]
    });
    fixture = TestBed.createComponent(KdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
