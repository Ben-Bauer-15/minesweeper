import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenbauerComponent } from './benbauer.component';

describe('BenbauerComponent', () => {
  let component: BenbauerComponent;
  let fixture: ComponentFixture<BenbauerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenbauerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenbauerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
