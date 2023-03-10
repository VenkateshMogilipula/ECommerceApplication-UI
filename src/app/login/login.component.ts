import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  loginForm: UntypedFormGroup;
  post:any='';
  constructor(
    private formBuilder:UntypedFormBuilder,
    private api:ApiService,
    private _router:Router,
    private toast:ToastrService
    ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.loginForm=this.formBuilder.group({
      'userid':['',Validators.required],
      'pwd':['',Validators.required],
    })
  }

  validate(values:any){
    this.submitted=true;
    //console.log(this.fg.valid)
    if(this.loginForm.valid){
      console.log(values)
      this.api.validate(values).subscribe({
        next:resp=>{
        console.log(resp)
        this.toast.success('Welcome '+resp.data.name,"Login Successful")
        sessionStorage.setItem("id",resp.data.id)
        sessionStorage.setItem("userid",resp.data.userid)
        sessionStorage.setItem("uname",resp.data.name)
        sessionStorage.setItem("role","U")
          this._router.navigate([''])
        },
      error:err=>{
        console.log(err)
        this.toast.error('Invalid userid or password',"Login Failed")
      }
    })
  }
  }

  
}
