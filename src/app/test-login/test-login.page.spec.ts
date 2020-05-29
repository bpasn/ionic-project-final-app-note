import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestLoginPage } from './test-login.page';

describe('TestLoginPage', () => {
  let component: TestLoginPage;
  let fixture: ComponentFixture<TestLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
