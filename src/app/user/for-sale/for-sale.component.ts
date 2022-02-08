import { PayementService } from 'src/app/service/payement.service';
import { OrderService } from './../../service/order.service';
import { PhotoService } from './../../service/photoservice';
import { immobilierdetail } from './../../api/immobilierdetail';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContractService } from './../../service/contract.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.scss'],
  styles:[`
    :host ::ng-deep .p-carousel-indicators .p-link{
      border-radius:5px !important;
    }
  `]
})
export class ForSaleComponent implements OnInit {
  Immobiliers;
  order: boolean = false;
  buy: boolean = false;
  details: boolean = false;
  id;
  ImmoId;
  OldOwner;
  Value;
  form: FormGroup;
  Buyform: FormGroup;
  immobilierdetail:immobilierdetail ;
  sortField: string;
  images: any[];
  galleriaResponsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '960px',
          numVisible: 4
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  carouselResponsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  constructor(private orderService:OrderService,private payementService : PayementService,private photoService: PhotoService,private route: Router,private Formbuilder:FormBuilder,private contractService : ContractService) { }

  ngOnInit(): void {

        if (!localStorage.getItem('foo')) { 
            localStorage.setItem('foo', 'no reload') 
            location.reload() 
        } else {
            localStorage.removeItem('foo') 
        }


    this.contractService.ImmobilierForSale().subscribe((res:any)=>{
      this.Immobiliers = res;
      this.Immobiliers.forEach(Immobilier => {
        this.photoService.getPhotosByAnncId(Immobilier.id).subscribe((res:any) => {
      Immobilier.photos = res;     
      console.log(Immobilier.photos);
        });
      });
      console.log(res);
    });
    this.form  = this.Formbuilder.group({
        idImmobilier: '',
        price: '',
        buyerAddress: ''
    });
    this.Buyform  = this.Formbuilder.group({
        _newOwner: '',
        privateKey: ''
    });
    this.photoService.getImages().then(images => {
          this.images = images;
    });
    
  }
  Order(id) {
    if (localStorage.getItem('token')) {
      this.id = id;
      this.order = true;
    }  else {
      this.route.navigateByUrl('/public/login')
    }
  }
  showDetails(id) { 
    this.contractService.ImmobilierDetails(id).subscribe((res:any) => {
      this.immobilierdetail = res;
      console.log(this.immobilierdetail)
    });
    this.details = true; 
  }
  hideDialog() {
    this.order = false;
  }

  displayBuyModel(id, Owner, price) {
    if (localStorage.getItem('token')) {
      this.buy = true;
      this.ImmoId = id;
      this.OldOwner = Owner;
      this.Value = price;
    }    else {
      this.route.navigateByUrl('/public/login')
    }
  }

  BuyImmobilier() {
    if (localStorage.getItem('token')) {
      const data = {
        _newOwner: this.Buyform.getRawValue()._newOwner,
        paymentInput: {
          value: this.Value,
          privateKey: this.Buyform.getRawValue().privateKey,
          from: this.OldOwner,
        immoId : this.ImmoId}
      }
      this.payementService.buy(data).subscribe(res => {
        console.log(res);
        this.buy = false;
        Swal.fire({
        icon: 'success',
        title: 'Wait for payement approvement',
        showConfirmButton: false,
        timer: 3000
      })
      }, err => {
        console.log(err);
        this.buy = false;
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
        
      });
      
      console.log(data);
    }
    else {
      this.route.navigateByUrl('/public/login')
    }
  }


  OrderImmobilier() {
    if (localStorage.getItem('token')) { 
      const data = {
      price: this.form.getRawValue().price,
      idImmobilier: this.id,
      buyerAddress: this.form.getRawValue().buyerAddress
      }
    console.log(data);
    this.orderService.OrderImmobilier(data).subscribe(res => {
      console.log(res);
      this.hideDialog();
     this.form.reset();
      Swal.fire({
        icon: 'success',
        title: 'Immobilier ordered',
        showConfirmButton: false,
        timer: 3000
      })
    }, err => {
      console.log(err);
      this.hideDialog();
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
        
      });
      
    } else {
      this.route.navigateByUrl('/public/login')
    }
    }
  onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortField = value;
        }
    }

}
