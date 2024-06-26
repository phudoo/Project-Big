import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPhimComponent } from './admin-phim.component';

describe('AdminPhimComponent', () => {
  let component: AdminPhimComponent;
  let fixture: ComponentFixture<AdminPhimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPhimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
