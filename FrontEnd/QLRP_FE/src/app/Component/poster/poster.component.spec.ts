import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
