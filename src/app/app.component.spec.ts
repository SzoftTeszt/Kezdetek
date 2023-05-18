import { fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule
      ],
      declarations: [
        AppComponent
      
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Üdvözlés ellenőrzése',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements= fixture.nativeElement;
    const h1 = appElements.querySelector('h1');
    expect(h1.textContent).toContain('Szevasz');
  });


  it('Username ellenőrzés',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements= fixture.nativeElement;
    
    const h2= appElements.querySelector('h2');
    app.userName="Cica";
    fixture.detectChanges();
    expect(h2.textContent).toContain(app.userName);

  });

  it('Template=>Controller Bind',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements= fixture.nativeElement;
  
    const adatInput = appElements.querySelector('#adat');
    adatInput.value="kreativítás";
    fixture.detectChanges();
    adatInput.dispatchEvent(new Event('input'));
    expect(adatInput.value).toEqual(app.adat);

  })

  it('Controller=>Template Bind',fakeAsync(
    ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements= fixture.nativeElement;

    const adatInput = appElements.querySelector('#adat');
    app.adat="nyuszika";
    fixture.detectChanges();
    fixture.whenStable().then( ()=>
      {
        expect(app.adat).toEqual(adatInput.value);
      }
    )
    }))
  

  it('Empty',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements= fixture.nativeElement;
  
  })


  // it(`should have as title 'Kezdetek'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Kezdetek');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Kezdetek app is running!');
  // });
});
