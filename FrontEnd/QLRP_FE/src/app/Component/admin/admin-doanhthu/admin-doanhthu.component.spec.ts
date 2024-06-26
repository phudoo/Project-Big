import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoanhthuComponent } from './admin-doanhthu.component';

describe('AdminDoanhthuComponent', () => {
  let component: AdminDoanhthuComponent;
  let fixture: ComponentFixture<AdminDoanhthuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDoanhthuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDoanhthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
