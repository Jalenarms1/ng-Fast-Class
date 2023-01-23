import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPathComponent } from './demo-path.component';

describe('DemoPathComponent', () => {
  let component: DemoPathComponent;
  let fixture: ComponentFixture<DemoPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
