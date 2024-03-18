import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuePrefieresComponent } from './que-prefieres.component';

describe('QuePrefieresComponent', () => {
  let component: QuePrefieresComponent;
  let fixture: ComponentFixture<QuePrefieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuePrefieresComponent]
    });
    fixture = TestBed.createComponent(QuePrefieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
