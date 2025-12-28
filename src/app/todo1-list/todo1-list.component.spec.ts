import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo1ListComponent } from './todo1-list.component';

describe('Todo1ListComponent', () => {
  let component: Todo1ListComponent;
  let fixture: ComponentFixture<Todo1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
