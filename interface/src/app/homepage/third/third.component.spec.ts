import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdComponent } from './third.component';

describe('ThirdComponent', () => {
  let component: ThirdComponent;
  let fixture: ComponentFixture<ThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*

 symptoms2 = [

    { label : 'Abdominal pain' , isChecked : false  }  ,
    { label : 'Vomiting' , isChecked : false  }  ,
    { label : 'Diarrhea' , isChecked : false  }  ,
    { label : 'Chest pain or pressure' , isChecked : false  }  ,
    { label : 'Muscle pain' , isChecked : false  }  ,
    { label : 'Loss of taste Or smell' , isChecked : false  }  ,
    { label : 'Rash on skin or discoloration of fingers or toes' , isChecked : false  }  ,
    { label : 'Loss of speech or movement' , isChecked : false  }  ,

  ]   ;


*
* */


