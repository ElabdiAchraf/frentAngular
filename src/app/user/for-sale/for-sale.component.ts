import { OrderService } from './../../service/order.service';
import { PhotoService } from './../../service/photoservice';
import { immobilierdetail } from './../../api/immobilierdetail';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContractService } from './../../service/contract.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  buy: boolean = false;
  details: boolean = false;
  id;
  form: FormGroup;
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
  constructor(private orderService:OrderService,private photoService: PhotoService,private route: Router,private Formbuilder:FormBuilder,private contractService : ContractService) { }

  ngOnInit(): void {

    this.contractService.ImmobilierForSale().subscribe((res:any)=>{
      this.Immobiliers = res;
      console.log(res);
    });
    this.form  = this.Formbuilder.group({
        idImmobilier: '',
        price: '',
        buyerAddress: ''
    });
    this.photoService.getImages().then(images => {
          this.images = images;
    });
    
  }
  Order(id) { 
    this.id = id;
    this.buy = true; 
  }
  showDetails(id) { 
    this.contractService.ImmobilierDetails(id).subscribe((res:any) => {
      this.immobilierdetail = res;
      console.log(this.immobilierdetail)
    });
    this.details = true; 
  }
  hideDialog() {
    this.buy = false;
  }
  OrderImmobilier(){
      const data = {
      price: this.form.getRawValue().price,
      idImmobilier: this.id,
      buyerAddress: this.form.getRawValue().buyerAddress
      }
    console.log(data);
    this.orderService.OrderImmobilier(data).subscribe(res => {
      console.log(res);
    });
      this.hideDialog();
     this.form.reset();
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
