import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSiderbarComponent } from './main-siderbar.component';

describe('MainSiderbarComponent', () => {
  let component: MainSiderbarComponent;
  let fixture: ComponentFixture<MainSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSiderbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
