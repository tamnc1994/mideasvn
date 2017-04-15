import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMgrComponent } from './agent-mgr.component';

describe('AgentMgrComponent', () => {
  let component: AgentMgrComponent;
  let fixture: ComponentFixture<AgentMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
