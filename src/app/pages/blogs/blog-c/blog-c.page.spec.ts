import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogCPage } from './blog-c.page';

describe('BlogCPage', () => {
  let component: BlogCPage;
  let fixture: ComponentFixture<BlogCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlogCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
