import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogLPage } from './blog-l.page';

describe('BlogLPage', () => {
  let component: BlogLPage;
  let fixture: ComponentFixture<BlogLPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlogLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
