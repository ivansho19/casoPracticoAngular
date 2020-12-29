import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './commons/services/http/login.service';
import { ILoginObject } from './commons/services/model/login.model';
import { IRequestLogin } from './commons/services/model/request_login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public registerForm: FormGroup;
  public req : IRequestLogin;
  errorAuth: string;
  errorLogin: boolean;
  
  constructor(private formBuilder: FormBuilder, private serviceLogin: LoginService, private router:Router) { 
    this.registerForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
  }

  ngOnInit() {
    localStorage.removeItem('user');
    this.errorLogin = false;
  }


  register(){
    this.req = {
      usuario : this.registerForm.value.email,
      contrasena : this.registerForm.value.password,
    }
    this.errorLogin = false;
    this.serviceLogin.getInfoLogin(this.req).subscribe((res:ILoginObject)=>{
      this.redirectUser(res);
      localStorage.setItem('user', JSON.stringify(res));
    }, err =>{
      console.log("ocurrio un error!" , err);
      this.errorLogin = true;
    });
  }

  redirectUser(result:ILoginObject){
    if(result.Code === 1){
      this.errorLogin = false;
      this.router.navigate(['/home']);
    }else{
      this.errorLogin = true;
      this.errorAuth = 'Correo o contraseña incorrecto, intente nuevamente...';
    }
  }

}
