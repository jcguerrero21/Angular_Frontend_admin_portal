/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddNuevoLibroComponent } from './add-nuevo-libro.component';

describe('AddNuevoLibroComponent', () => {
  let component: AddNuevoLibroComponent;
  let fixture: ComponentFixture<AddNuevoLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNuevoLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNuevoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
