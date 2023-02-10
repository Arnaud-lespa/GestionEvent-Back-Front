import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEventsComponent } from './mes-events.component';

describe('MesEventsComponent', () => {
  let component: MesEventsComponent;
  let fixture: ComponentFixture<MesEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
