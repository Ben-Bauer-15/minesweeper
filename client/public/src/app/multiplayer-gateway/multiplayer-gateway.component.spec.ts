import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerGatewayComponent } from './multiplayer-gateway.component';

describe('MultiplayerGatewayComponent', () => {
  let component: MultiplayerGatewayComponent;
  let fixture: ComponentFixture<MultiplayerGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplayerGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplayerGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
