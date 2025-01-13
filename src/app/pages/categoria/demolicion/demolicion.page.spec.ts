import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemolicionPage } from './demolicion.page';

describe('DemolicionPage', () => {
  let component: DemolicionPage;
  let fixture: ComponentFixture<DemolicionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DemolicionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
