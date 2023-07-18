import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEPage } from './user-e.page';

describe('UserEPage', () => {
  let component: UserEPage;
  let fixture: ComponentFixture<UserEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
