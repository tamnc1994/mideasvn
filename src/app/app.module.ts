import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

// Import Component
import { AppComponent } from './app.component';
import {SidebarComponent} from "./components/container/sidebar/sidebar.component";
import {NavbarComponent} from "./components/container/navbar/navbar.component";
import {DashboardComponent} from "./components/container/dashboard/dashboard.component";
import {FooterComponent} from "./components/container/footer/footer.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChatComponent } from './components/chat/chat.component';
import {AgentMgrComponent} from "./components/agent/agent-mgr/agent-mgr.component";
import {AgentSearchComponent} from "./components/agent/agent-search/agent-search.component";

// Import service
import {AgentService} from "./services/agent/agent.service";

// Routers Config
const appRoutes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'agent-mgr', component: AgentMgrComponent },
  { path: 'agent-search', component: AgentSearchComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    PageNotFoundComponent,
    ChatComponent,
    AgentMgrComponent,
    AgentSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AgentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
