import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage } from "./home";
import { IonicModule, NavController } from "ionic-angular/index";
import { API } from './../../providers';

describe('HomePage', function () {
  let title: DebugElement;
  let button: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        NavController,
        API
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    title = fixture.debugElement.query(By.css('ion-title'));
    button = fixture.debugElement.query(By.css('button'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h3> text', () => {
    fixture.detectChanges();
    let ionTitle = title.nativeElement;
    expect(ionTitle.innerText).toMatch(/Home/i, 'title should display home.');
  });

  // it('should have expected <button> text', () => {
  //   fixture.detectChanges();
  //   let btn = button.nativeElement;
  //   expect(btn.innerText).toMatch(/Get Pet/i, 'should say "Get Pet"');
  // });
});
