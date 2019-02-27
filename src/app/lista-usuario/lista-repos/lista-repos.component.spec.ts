import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReposComponent } from './lista-repos.component';

describe('ListaReposComponent', () => {
  let component: ListaReposComponent;
  let fixture: ComponentFixture<ListaReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
