import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesperioPage } from './detallesperio.page';

describe('DetallesperioPage', () => {
  let component: DetallesperioPage;
  let fixture: ComponentFixture<DetallesperioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesperioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesperioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
