import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutenticacionPage } from './autenticacion.page';

describe('AutenticacionPage', () => {
  let component: AutenticacionPage;
  let fixture: ComponentFixture<AutenticacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutenticacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
