/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main_barComponent } from './main_bar.component';

describe('Main_barComponent', () => {
  let component: Main_barComponent;
  let fixture: ComponentFixture<Main_barComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main_barComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main_barComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
