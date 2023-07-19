import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserIPage } from './user-i.page';

describe('UserIPage', () => {
  let component: UserIPage;
  let fixture: ComponentFixture<UserIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
