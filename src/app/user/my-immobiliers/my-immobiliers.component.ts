import { immobilierdetail } from './../../api/immobilierdetail';
import { order } from './../../api/orders';
import { myImmobiliers } from './../../api/myImmobiliers';
import { OrderService } from './../../service/order.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContractService } from 'src/app/service/contract.service';

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
  form: FormGroup;
  anOrder : order ;
  expandedRows = {};
  BuyerAddress;
  ImmobilierId;
  isExpanded: boolean = false;
  constructor(private route: Router,private Formbuilder:FormBuilder,private contractService : ContractService,private orderService : OrderService,private messageService: MessageService, private confirmService: ConfirmationService, private cd: ChangeDetectorRef) { }

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

    changeOwnership() {
    const data = {
      privateKey: this.form.getRawValue().privateKey,
      _propId: this.ImmobilierId,
      _newOwner: this.BuyerAddress
    }


    console.log(data);
    this.contractService.changeOnwership(data).subscribe(res => {
      console.log("Change Ownership : " + res);
    });
      this.orderService.DeleteImmobilierOrders(this.ImmobilierId).subscribe(res => {
        console.log("Orders deleted " + res);
      });  
    this.hideDialog();
    this.form.reset();

  }


}
