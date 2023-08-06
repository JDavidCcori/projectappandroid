import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogDPage } from './blog-d.page';

describe('BlogDPage', () => {
  let component: BlogDPage;
  let fixture: ComponentFixture<BlogDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlogDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
