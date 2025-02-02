import { PopupComponent } from './../popup/popup.component';
import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
declare var jQuery: any;
import * as AOS from 'aos';
import { ProductsService } from '../../services/products.service'
import { Product } from '../../models/interfaces/product'
import { Occassion } from '../../models/interfaces/occassion'
import { RelationShip } from '../../models/interfaces/relation-ship'
import { ActivatedRoute, Router } from '@angular/router';
// import {  Review } from '../../models/interfaces/review'
import { AddToCartService } from '../../services/add-to-cart.service'
import { AuthenticationService } from '../../services/authentication.service'
// import { stringify } from '@angular/compiler/src/util';
// import {  Report } from '../../models/interfaces/report';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
// import { pid } from 'process';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  onSale:boolean = false
  is_Owner = false
  myID:number = 0
  orders:Array<any> = []
  occassionList:Array<any> = [];
  filterdoccassionList:Occassion[] = [];
  relList:Array<any> = [];
  filterdrelList:RelationShip[] = [];
  reviewList:Array<any>=[]
  productPopUp:any = {} ; 
  countOfReviews:number=0;
  avrOfReviews:number=0
  productList:Product[] = [] ;
  filteredList:Product[]=[] ;
  reatValue:number = 0
  avrOfReviewsList:Array<any> = []
  halfStar:boolean = false
  productdetails:Product = {id : 0 ,
                        name : "" ,
                        price: 0,
                        details: "" , 
                        age_from : 0 ,
                        age_to:0 ,
                        gender : "", 
                        occassions: [] , 
                        category: 0 ,
                        relationships: [] ,
                        is_featured: false ,
                        created_at: "" ,
                        updated_at: "" ,
                        images:[],
                        user : 0 
                      };
                      //owlcarosel
                      title = 'angularowlslider';
                      customOptions: any = {
                        loop: true,
                        mouseDrag: false,
                        touchDrag: false,
                        pullDrag: false,
                        dots: false,
                        navSpeed: 700,
                        navText: ['', ''],
                        responsive: {
                          0: {
                            items: 1
                          },
                          400: {
                            items: 2
                          },
                          740: {
                            items: 3
                          },
                          940: {
                            items: 4
                          }
                        },
                        nav: true
                      }
                           
  reportProduct:Array<any>=[]
                    
  constructor(private _products:ProductsService ,
              private activerouter:ActivatedRoute,
              private _addCart:AddToCartService,
              private _auth:AuthenticationService,
              private route:Router,
              public dialog:MatDialog
            
      ) { }

  ngOnInit(): void {
    jQuery('.owl-carousel').owlCarousel(); 
    AOS.init();
    let id = this.activerouter.snapshot.params['id']

    this._auth.userProfile().subscribe(
      (data:any)=>{
        this.myID = data.id
        // console.log(this.myID);
        
      },
      (err)=>console.log(err)
      
    )

    this._products.showoccassions().subscribe(
      (data:any)=>this.occassionList=data,
      (err)=>this.occassionList=err
    )
      
    this._products.showrelations().subscribe(
      (data:any)=>this.relList=data,
      (err)=>console.log(err)
    )
    

    this._products.viewProductById(id).subscribe(
      (data:any)=>{
        this.productdetails=data
        if(this.productdetails.category == 5){
          this.onSale = true
        }

        if(this.productdetails.user == this.myID){
          this.is_Owner = true
        }

        if(this.productdetails.gender == 'f'){
          this.productdetails.gender = "Female"
        }else if(this.productdetails.gender == 'm'){
          this.productdetails.gender = "Male"
        }else if(this.productdetails.gender == 'b'){
          this.productdetails.gender = "Both"
        }

        for (let i =0; i < this.productdetails.occassions.length ; i++){
          this.filterdoccassionList.push(this.occassionList.find((occ)=>occ.id == this.productdetails.occassions[i]));
          
        }
        for (let i =0; i < this.productdetails.relationships.length ; i++){
          this.filterdrelList.push(this.relList.find((rel)=>rel.id == this.productdetails.relationships[i]));
          
        }
      },
      (err)=> console.log(err) 
    ) 
   

    this._products.viewProducts().subscribe(
      (data:any)=> {
        this.productList=data

      },
      (err)=> console.log(err),
    )
    this._products.showreviews(id).subscribe(
      (data:any)=> {
        this.reviewList = data
        this.countOfReviews = this.reviewList.length
        let onlyReviews:any = []
        for(let i=0 ; i<this.reviewList.length ; i++){
          onlyReviews.push(this.reviewList[i].rate)
        } 
        var sum = onlyReviews.reduce(function(a: any, b: any){
          return a + b;
        }, 0);
        if (sum!=0){
          this.avrOfReviews = sum / onlyReviews.length;
         
          for (let i=0 ; i < Math.floor(this.avrOfReviews) ; i++){
            this.avrOfReviewsList.push(i)
          }

          if (this.avrOfReviewsList.length < this.avrOfReviews){
            this.halfStar = true
          }

        }
      },
      (err)=> console.log(err),
       )
      
      this._products.showorders().subscribe(
        (data:any)=> this.orders = data,
        (err)=>console.log(err)
      )


      this._products.showReports().subscribe(
        (data:any)=> this.reportProduct = data,
        (err)=>console.log(err)
      )

      


        

  }
  popUpProduct(product_id:number){
    this.productPopUp =  this.productList.find((product)=>{ 
      return product.id == product_id
      })

    console.log(this.productPopUp);
  }
  reload(){
    location.reload()
  }

  reviewFun(body:string  ){
    let id = this.activerouter.snapshot.params['id']
    let found = false
    for(let i in this.orders ){
      if(this.orders[i].product == id){
        found = true
        break;
      }
    }

    if (found == true){
      if (this.reviewList.length == 0){
        this._products.ReviewProduct(body , this.reatValue ,this.productdetails.id!).subscribe(
          (data:any)=> {
            alert('Thanks for your review ')
             location.reload()
           },
          (err) => console.log(err)
        )
      }else{
        let userFound = false
        for(let i in this.reviewList){
          if(this.reviewList[i].user == this.myID){
            userFound = true
            break;
          }
        }
        
        if (userFound == false){
          this._products.ReviewProduct(body , this.reatValue ,this.productdetails.id!).subscribe(
            (data:any)=>  {
              alert('Thanks for your review ')
               location.reload()
             },
            (err) => console.log(err)
          )
        }else{
          alert("you can't review again")
        }
       
      }
      
    }
    else{
      alert("You Can't Review Product You didn't Try ")
    }
  }

  reportproduct(body:string){

    let id = this.activerouter.snapshot.params['id']
    let found = false 
    let myreports:any = []
    let reportfound = false


    for (let i in this.orders){
      if(this.orders[i].product == id){
        found = true
        break;
      }
    }
    if (found == true){
      for (let i in this.reportProduct){
        if(this.reportProduct[i].user == this.myID){
          myreports.push(this.reportProduct[i])
        }
      }
  
      for (let i in myreports){
        if (myreports[i].product == id){
          reportfound = true
        }
      }

      if (reportfound == false){
        this.openDialog()
      }else{
        alert("You can't report again")
      }

    }else{
      alert("You Can't Report Product You didn't Try")
    }
  }

  
ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
  this.filteredList = this.productList.filter((product)=> product.category == this.productdetails.category)
} 

addToCart(qntty:number){
  let id = this.activerouter.snapshot.params['id']
  if (qntty > 0){
    this._addCart.addCart(id , qntty)
  }else{
    this._addCart.addCart(id)
  }
}

editPrd(prd_id:number){
  localStorage.setItem('editprd',JSON.stringify(prd_id))
  this.route.navigate(['/product/createproduct'])
}

openDialog(){
  let id = this.activerouter.snapshot.params['id']

  this.dialog.open(PopupComponent , {
    // width: '330px',
    // height: '400px',
    data: {
      id: id , 
      myID:this.myID
    }})
    
}


  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: true,
  //   navSpeed: 600,
  //   navText: ['&#8249', '&#8250;'],
  //   responsive: {
  //     0: {
  //       items: 1 
  //     },
  //     400: {
  //       items: 2
  //     },
  //     760: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 1
  //     }
  //   },
  //   nav: true
  // }
}
