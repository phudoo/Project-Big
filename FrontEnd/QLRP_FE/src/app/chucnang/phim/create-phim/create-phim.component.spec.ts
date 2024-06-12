import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhimComponent } from './create-phim.component';

describe('CreatePhimComponent', () => {
  let component: CreatePhimComponent;
  let fixture: ComponentFixture<CreatePhimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePhimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
