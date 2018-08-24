import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { SkillsComponent } from './skills/skills.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const routs: Routes = [
    {path: '' , redirectTo: 'home' , pathMatch: 'full'},
    {path : 'home' , component: HomeComponent},
    {path : 'addSkill' , component: AddSkillComponent},
    {path : 'login' , component: LoginComponent},
    {path : 'register' , component: RegisterComponent},
    {path : 'mySkill' , component: MySkillComponent},
    {path : 'skills' , component: SkillsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddSkillComponent,
    LoginComponent,
    RegisterComponent,
    MySkillComponent,
    SkillsComponent
  ],
  imports: [
      AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
      RouterModule.forRoot(routs),
      FormsModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
