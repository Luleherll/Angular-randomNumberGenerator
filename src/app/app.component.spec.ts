import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent
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
    const el = fixture.debugElement.nativeElement.querySelector('.generator');
    expect(component.numberList.size).toEqual(0);
    el.dispatchEvent(new Event('click'));
    expect(component.numberList.size).toBeGreaterThan(0);
  });

  it('should sort numbers in ascending order', () => {
    const el = fixture.debugElement.nativeElement.querySelector('.generator');
    el.dispatchEvent(new Event('click'));
    component.sortNumbers('ASC');
    const arr = Array.from(component.numberList);
    expect(arr[0]).toBe(component.minimumNumber);
  });

  it('should sort numbers in descending order', () => {
    const el = fixture.debugElement.nativeElement.querySelector('.generator');
    el.dispatchEvent(new Event('click'));
    component.sortNumbers('DESC');
    const arr = Array.from(component.numberList);
    expect(arr[0]).toBe(component.maximumNumber);
  });

  it('should download phone numbers file', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.generator').dispatchEvent(new Event('click'));
    const btn = compiled.querySelector('#download-btn');
    btn.dispatchEvent(new Event('click'));
  });
});
