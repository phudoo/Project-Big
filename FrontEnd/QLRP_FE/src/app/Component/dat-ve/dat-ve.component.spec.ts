import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeComponent } from './dat-ve.component';

describe('DatVeComponent', () => {
  let component: DatVeComponent;
  let fixture: ComponentFixture<DatVeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatVeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
