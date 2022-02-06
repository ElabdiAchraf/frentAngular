
import { PhotoService } from './../../service/photoservice';
import { immobilierdetail } from './../../api/immobilierdetail';
import { order } from './../../api/orders';
import { myImmobiliers } from './../../api/myImmobiliers';
import { OrderService } from './../../service/order.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContractService } from 'src/app/service/contract.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-my-immobiliers',
  providers: [MessageService, ConfirmationService],
  templateUrl: './my-immobiliers.component.html',
  styleUrls: ['./my-immobiliers.component.scss']
})
export class MyImmobiliersComponent implements OnInit {
    
  Immobiliers : myImmobiliers[];
  orders: [];
  buy: boolean = false;
  displayImages: boolean = false;
  form: FormGroup;
  anOrder : order ;
  expandedRows = {};
  BuyerAddress;
  ImmobilierId;
  imagesImmobilierId
  immobilierPhotos;
  selectedFiles;
  FilesName: string[] = [];
  hasPhotos: boolean;
  isExpanded: boolean = false;
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
  constructor(private route: Router, private photoService :PhotoService,private Formbuilder:FormBuilder,private contractService : ContractService,private orderService : OrderService,private messageService: MessageService, private confirmService: ConfirmationService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getMyImmobilier(); 
    this.form  = this.Formbuilder.group({
        privateKey: '',
        _propId: '',
        _newOwner: ''
    });
  }
    hideDialog() {
    this.buy = false;
  }
  Sell(buyerAddress,ImmoId) { 
    this.BuyerAddress = buyerAddress;
    this.ImmobilierId = ImmoId
    this.buy = true; 
  }
  displayimages(ImmoId) { 
    this.imagesImmobilierId = ImmoId
    this.getImmobilierImages(ImmoId);

  }
  getMyImmobilier() {
    this.contractService.myImmobilier().subscribe((res:any) => {
      this.Immobiliers = res;
      this.Immobiliers.forEach(Immobilier => {
        this.orderService.ImmobilierOrders(Immobilier.id).subscribe((res:any) => {
      Immobilier.orders = res;     
      console.log(Immobilier.orders);
        });
      });
      console.log(this.Immobiliers);
    });
  }
  expandAll() {
        if(!this.isExpanded){
          this.Immobiliers.forEach(immo => this.expandedRows[immo.id] = true);

        } else {
          this.expandedRows={};
        }
        this.isExpanded = !this.isExpanded;
  }
   getImmobilierImages(ImmobilierId){
 this.photoService.getPhotosByAnncId(ImmobilierId).subscribe((res:any) => {
   this.immobilierPhotos = res;
   if (this.immobilierPhotos.length == 0) {
     this.hasPhotos = false;
   } else {
     this.hasPhotos = true;
   }
   
    });
    this.displayImages = true; 
      }

    changeOwnership() {
    const data = {
      privateKey: this.form.getRawValue().privateKey,
      _propId: this.ImmobilierId,
      _newOwner: this.BuyerAddress
    }

     
     
    console.log(data);
    this.contractService.changeOnwership(data).subscribe(res => {
      console.log("Change Ownership : " + res);
      Swal.fire({
        icon: 'success',
        title: 'Immobilier Selled, Wait for approvement',
        showConfirmButton: false,
        timer: 3000
      });
    }, error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
      this.orderService.DeleteImmobilierOrders(this.ImmobilierId).subscribe(res => {
        console.log("Orders deleted " + res);
      });  
    this.hideDialog();
    this.form.reset();

    }
  selectFiles(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    for (let i = 0; i < this.selectedFiles.length; i++){
      console.log(this.selectedFiles[i].name);
      this.FilesName[i] = this.selectedFiles[i].name;
      console.log(this.FilesName[i]);
    }

  }


  saveImages() {
    const formData: FormData = new FormData();
    for (let i = 0; i < this.FilesName.length; i++){
      console.log("frommmmm the save :"+this.selectedFiles[i])
      formData.append('files', this.selectedFiles[i]);
      formData.append('anncId', this.imagesImmobilierId);
      this.photoService.uploadPhoto(formData).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
            this.displayImages = false; 

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
    }
    this.displayImages = false; 
    Swal.fire({
      icon: 'success',
      title: 'Immobilier saved, Wait for approvement',
      showConfirmButton: false,
      timer: 3000
    });
  }


}
