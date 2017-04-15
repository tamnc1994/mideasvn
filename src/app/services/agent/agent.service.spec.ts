import { TestBed, inject } from '@angular/core/testing';

import { AgentService } from './agent.service';

describe('AgentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentService]
    });
  });

  it('should ...', inject([AgentService], (service: AgentService) => {
    expect(service).toBeTruthy();
  }));
});
