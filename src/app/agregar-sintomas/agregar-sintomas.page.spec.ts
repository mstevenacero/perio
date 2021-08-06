import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarSintomasPage } from './agregar-sintomas.page';

describe('AgregarSintomasPage', () => {
  let component: AgregarSintomasPage;
  let fixture: ComponentFixture<AgregarSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
