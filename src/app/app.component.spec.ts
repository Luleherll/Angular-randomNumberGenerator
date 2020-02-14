import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SidecardComponent } from './sidecard/sidecard.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent,
        SidecardComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should generate numbers', () => {
    const sidecardFixture = fixture.debugElement.query(By.css('app-sidecard'));
    const el = sidecardFixture.query(By.css('button'));
    expect(component.numberList).toBeUndefined();
    el.nativeElement.dispatchEvent(new Event('click'));
    expect(component.numberList.length).toBeGreaterThan(0);
  });

  it('should download phone numbers file', () => {
    const spyObj = jasmine.createSpyObj('a', ['click']);
    spyOn(document, 'createElement').and.returnValue(spyObj);
    const generateNumbers = fixture.debugElement.query(By.css('app-sidecard')).query(By.css('.generator'));
    const btn = fixture.debugElement.query(By.css('#download-btn'));

    generateNumbers.nativeElement.dispatchEvent(new Event('click'));
    btn.nativeElement.dispatchEvent(new Event('click'));

    expect(document.createElement).toHaveBeenCalledTimes(1);
    expect(document.createElement).toHaveBeenCalledWith('a');

    expect(spyObj.download).toBe('phone-numbers.txt');
    expect(spyObj.click).toHaveBeenCalledTimes(1);
    expect(spyObj.click).toHaveBeenCalledWith();

  });
});
