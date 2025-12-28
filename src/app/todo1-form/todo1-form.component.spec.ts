import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo1FormComponent } from './todo1-form.component';

describe('Todo1FormComponent', () => {
  let component: Todo1FormComponent;
  let fixture: ComponentFixture<Todo1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo1FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
