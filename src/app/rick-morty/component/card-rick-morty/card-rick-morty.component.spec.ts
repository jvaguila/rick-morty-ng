import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRickMortyComponent } from './card-rick-morty.component';

describe('CardRickMortyComponent', () => {
  let component: CardRickMortyComponent;
  let fixture: ComponentFixture<CardRickMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRickMortyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
