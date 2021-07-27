import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render morty', () => {
    const debugElement: DebugElement = fixture.debugElement.query(
      By.css('#search')
    );
    const element: HTMLInputElement = debugElement.nativeElement;
    console.log(element.value);
    expect(element.value).toEqual('Rick');
  });
});
