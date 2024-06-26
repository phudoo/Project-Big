import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGheComponent } from './admin-ghe.component';

describe('AdminGheComponent', () => {
  let component: AdminGheComponent;
  let fixture: ComponentFixture<AdminGheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
