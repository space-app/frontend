import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { PrognosisComponent } from './components/prognosis/prognosis.component';
import { AdvicesComponent } from './components/advices/advices.component';

const routes: Routes = [
  { path: 'prognosis', component: PrognosisComponent },
  { path: 'advices', component: AdvicesComponent },
  { path: 'user', component: UserInputComponent },
  { path: '', redirectTo: 'prognosis', pathMatch: 'full' },
  { path: '**', redirectTo: 'prognosis', pathMatch: 'full' },

];
@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    PrognosisComponent,
    AdvicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
