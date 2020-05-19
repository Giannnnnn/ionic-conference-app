import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuecaComponent } from './sueca.component';

describe('SuecaComponent', () => {
  let component: SuecaComponent;
  let fixture: ComponentFixture<SuecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuecaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
