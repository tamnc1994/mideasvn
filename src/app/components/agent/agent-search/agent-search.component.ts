import { Component, OnInit } from '@angular/core';
import {AgentService} from "../../../services/agent/agent.service";
import {Agent} from "../../../objects/agent";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http/http";

@Component({
  selector: 'app-agent-search',
  templateUrl: './agent-search.component.html',
  styleUrls: ['./agent-search.component.css'],
  providers: [AgentService]
})

export class AgentSearchComponent implements OnInit {
  title = 'AGENT | View all agents';
  errorMessage: string;
  agents: Agent[];
  mode = 'Observable';
  
  constructor(private agentService: AgentService) { 
    
  }

  ngOnInit() {
    this.getAgents();
  }
  
  // Get list agents
  getAgents() {
    this.agentService.getListAgent()
        .subscribe(
            agents => this.agents = agents,
            error =>  this.errorMessage = <any>error);
  }

}
