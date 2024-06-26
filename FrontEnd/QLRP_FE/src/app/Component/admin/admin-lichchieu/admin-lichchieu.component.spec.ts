import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLichchieuComponent } from './admin-lichchieu.component';

describe('AdminLichchieuComponent', () => {
  let component: AdminLichchieuComponent;
  let fixture: ComponentFixture<AdminLichchieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLichchieuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLichchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
