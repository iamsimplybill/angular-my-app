import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavmenuComponent } from './header-navmenu.component';

describe('HeaderNavmenuComponent', () => {
  let component: HeaderNavmenuComponent;
  let fixture: ComponentFixture<HeaderNavmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
