import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    email: string;
    password: string;
    constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
  }
    myRegister() {
        this.fireAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                this.router.navigate(['login']);
            }).catch(error => {
            console.error(error);
        });
    }
}
