import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLPage } from './user-l.page';

describe('UserLPage', () => {
  let component: UserLPage;
  let fixture: ComponentFixture<UserLPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
