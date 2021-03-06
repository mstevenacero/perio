import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrativoPage } from './administrativo.page';

describe('AdministrativoPage', () => {
  let component: AdministrativoPage;
  let fixture: ComponentFixture<AdministrativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
