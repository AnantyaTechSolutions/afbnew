import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlinksComponent } from './footerlinks.component';

describe('FooterlinksComponent', () => {
  let component: FooterlinksComponent;
  let fixture: ComponentFixture<FooterlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
