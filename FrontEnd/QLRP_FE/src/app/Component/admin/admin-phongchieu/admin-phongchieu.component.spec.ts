import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPhongchieuComponent } from './admin-phongchieu.component';

describe('AdminPhongchieuComponent', () => {
  let component: AdminPhongchieuComponent;
  let fixture: ComponentFixture<AdminPhongchieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPhongchieuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPhongchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
