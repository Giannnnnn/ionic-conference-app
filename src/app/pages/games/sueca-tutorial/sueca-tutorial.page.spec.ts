import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuecaTutorialPage } from './sueca-tutorial.page';

describe('SuecaTutorialPage', () => {
  let component: SuecaTutorialPage;
  let fixture: ComponentFixture<SuecaTutorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuecaTutorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuecaTutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
