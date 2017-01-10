/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WatchesComponent } from './watches.component';

describe('WatchesComponent', () => {
  let component: WatchesComponent;
  let fixture: ComponentFixture<WatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
