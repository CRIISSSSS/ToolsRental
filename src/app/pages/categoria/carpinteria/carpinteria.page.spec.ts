import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarpinteriaPage } from './carpinteria.page';

describe('CarpinteriaPage', () => {
  let component: CarpinteriaPage;
  let fixture: ComponentFixture<CarpinteriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpinteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
