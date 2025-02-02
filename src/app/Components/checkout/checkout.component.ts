import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProductsService } from '../../services/products.service'
import { AuthenticationService } from '../../services/authentication.service'
import { Profile } from '../../models/interfaces/profile'
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  orders:Array<any> = [] ;
  checkout:object = {} 
  editparams: {[k: string]: any} = {}

  myProfile:Profile ={
    username:"",
    first_name :"",
    last_name :"",
    address :"",
    mobile : "" ,
    birth_date : "" , 
    email: "" 
  }

  options = {
    autoClose: true,
    keepAfterRouteChange: true
};

  constructor(private _products:ProductsService,
              private _auth:AuthenticationService,
              private route:Router,protected alertService: AlertService
    ) {

    }

  ngOnInit(): void {
    AOS.init();

    if(!localStorage.getItem('token')){
      this.alertService.warn('Please Login First To Place your Order !!', this.options)
      this.route.navigate(['/login'])
    }

    this._auth.userProfile().subscribe(
      (data:any)=> this.myProfile = data,
      (err)=> console.log(err),
       )
    
    if (localStorage.getItem("orders")){
      this.orders = JSON.parse(localStorage.getItem("orders") || '{}') 
    }else{
      this.route.navigate(['/search'])
    }

    if (localStorage.getItem("checkout")){
      this.checkout = JSON.parse(localStorage.getItem("checkout") || '{}') 
    }

  }

  updateprofile(){
      this.editparams.first_name = this.myProfile.first_name
      this.editparams.last_name = this.myProfile.last_name
      this.editparams.address = this.myProfile.address
      this.editparams.mobile = this.myProfile.mobile
   

    this._auth.editprofile(this.editparams).subscribe(
      (data:any)=>console.log("Ok"),
      (err)=>console.log(err) 
    )
  }

  placeOrder(){
    for(let i =0 ; i < this.orders.length ; i++){
      this._products.order(this.orders[i].product ,  this.orders[i].quantaty ).subscribe(
        (data:any)=>{
          localStorage.removeItem("cart")
          localStorage.removeItem("orders")
          localStorage.removeItem("checkout")
      },

        (err)=> console.log(err)
        )
    }
  }

  orderNow(){
    if(this.myProfile.first_name.length > 2 && this.myProfile.last_name.length > 2 &&  this.myProfile.mobile && this.myProfile.mobile.length == 11 && this.myProfile.address && this.myProfile.address.length > 3){
      this.updateprofile()
      this.placeOrder()

      this.alertService.success('Thanks For using HDYA :)', this.options)          
      this.route.navigate(['/search'])

    }else{
     this.alertService.error('Please Fill a Valid Data !', this.options)    }
  }
}
