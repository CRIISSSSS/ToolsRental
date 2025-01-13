import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinturaPage } from './pintura.page';

describe('PinturaPage', () => {
  let component: PinturaPage;
  let fixture: ComponentFixture<PinturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
