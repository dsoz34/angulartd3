import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreComponentComponent } from './livre-component.component';

describe('LivreComponentComponent', () => {
  let component: LivreComponentComponent;
  let fixture: ComponentFixture<LivreComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivreComponentComponent]
    });
    fixture = TestBed.createComponent(LivreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
