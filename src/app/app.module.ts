import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { PrognosisComponent } from './components/prognosis/prognosis.component';

const routes: Routes = [
  { path: 'prognosis', component: PrognosisComponent },
  { path: 'user', component: UserInputComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', redirectTo: 'user', pathMatch: 'full' },

];
@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    PrognosisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
