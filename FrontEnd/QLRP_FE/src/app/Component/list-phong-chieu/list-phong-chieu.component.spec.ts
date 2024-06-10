import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhongChieuComponent } from './list-phong-chieu.component';

describe('ListPhongChieuComponent', () => {
  let component: ListPhongChieuComponent;
  let fixture: ComponentFixture<ListPhongChieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPhongChieuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPhongChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
