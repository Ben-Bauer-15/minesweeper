import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperFooterComponent } from './minesweeper-footer.component';

describe('MinesweeperFooterComponent', () => {
  let component: MinesweeperFooterComponent;
  let fixture: ComponentFixture<MinesweeperFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinesweeperFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesweeperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
