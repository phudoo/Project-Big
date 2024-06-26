import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVeComponent } from './admin-ve.component';

describe('AdminVeComponent', () => {
  let component: AdminVeComponent;
  let fixture: ComponentFixture<AdminVeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
