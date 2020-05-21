import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuecaPage } from './sueca.page';

describe('SuecaPage', () => {
  let component: SuecaPage;
  let fixture: ComponentFixture<SuecaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuecaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
