import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogEPage } from './blog-e.page';

describe('BlogEPage', () => {
  let component: BlogEPage;
  let fixture: ComponentFixture<BlogEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlogEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
