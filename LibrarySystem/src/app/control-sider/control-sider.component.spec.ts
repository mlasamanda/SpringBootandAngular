import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSiderComponent } from './control-sider.component';

describe('ControlSiderComponent', () => {
  let component: ControlSiderComponent;
  let fixture: ComponentFixture<ControlSiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
