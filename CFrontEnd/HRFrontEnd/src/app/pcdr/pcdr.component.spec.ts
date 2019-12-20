import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCDRComponent } from './pcdr.component';

describe('PCDRComponent', () => {
  let component: PCDRComponent;
  let fixture: ComponentFixture<PCDRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCDRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
