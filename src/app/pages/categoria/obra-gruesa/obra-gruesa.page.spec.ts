import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObraGruesaPage } from './obra-gruesa.page';

describe('ObraGruesaPage', () => {
  let component: ObraGruesaPage;
  let fixture: ComponentFixture<ObraGruesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraGruesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
