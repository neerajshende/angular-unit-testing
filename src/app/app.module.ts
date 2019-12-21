import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './pipes/search.pipe';
import { DomTestingComponent } from './components/dom-testing/dom-testing.component';
import { MockingDependenciesExampleComponent } from './components/mocking-dependencies-example/mocking-dependencies-example.component';
import { InputOutputTestingComponent } from './components/input-output-testing/input-output-testing.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SignupComponent } from './dymmy-data-classes/dummy-components/signup/signup.component';
import { LoginComponent } from './dymmy-data-classes/dummy-components/login/login.component';
import { DashboardComponent } from './dymmy-data-classes/dummy-components/dashboard/dashboard.component';
import { CommonExamplesComponent } from './components/common-examples/common-examples.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SampleStructureComponent } from './components/sample-structure/sample-structure.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    InputOutputTestingComponent,
    DomTestingComponent,
    MockingDependenciesExampleComponent,
    HighlightDirective,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    CommonExamplesComponent,
    SampleStructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
