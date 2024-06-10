import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhimComponent } from './list-phim.component';

describe('ListPhimComponent', () => {
  let component: ListPhimComponent;
  let fixture: ComponentFixture<ListPhimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPhimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
