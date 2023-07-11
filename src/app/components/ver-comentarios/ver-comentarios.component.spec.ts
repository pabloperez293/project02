import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComentariosComponent } from './ver-comentarios.component';

describe('VerComentariosComponent', () => {
  let component: VerComentariosComponent;
  let fixture: ComponentFixture<VerComentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerComentariosComponent]
    });
    fixture = TestBed.createComponent(VerComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
