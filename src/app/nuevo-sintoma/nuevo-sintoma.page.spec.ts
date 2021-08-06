import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoSintomaPage } from './nuevo-sintoma.page';

describe('NuevoSintomaPage', () => {
  let component: NuevoSintomaPage;
  let fixture: ComponentFixture<NuevoSintomaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoSintomaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoSintomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
