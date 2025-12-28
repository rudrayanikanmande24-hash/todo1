import { TestBed } from '@angular/core/testing';

import { Todo1Service } from './todo1.service';

describe('Todo1Service', () => {
  let service: Todo1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todo1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
