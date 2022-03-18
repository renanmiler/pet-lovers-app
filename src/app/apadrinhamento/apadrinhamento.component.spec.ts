import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinhamentoComponent } from './apadrinhamento.component';

describe('ApadrinhamentoComponent', () => {
  let component: ApadrinhamentoComponent;
  let fixture: ComponentFixture<ApadrinhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApadrinhamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApadrinhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
