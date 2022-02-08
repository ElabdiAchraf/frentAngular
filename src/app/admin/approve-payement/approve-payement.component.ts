import { PayementService } from 'src/app/service/payement.service';
import { ContractService } from './../../service/contract.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approve-payement',
  templateUrl: './approve-payement.component.html',
  styleUrls: ['./approve-payement.component.scss']
})
export class ApprovePayementComponent implements OnInit {

  Immobiliers;
  constructor(private contractService:ContractService,private paymentService:PayementService) { }

  ngOnInit(): void {
    this.contractService.Immobiliers().subscribe(res => {
            this.Immobiliers = res;
            console.log(res);            
        });
  }
  accept(id) {
    const data = {
      propId : id
    }
    this.paymentService.acceptChange(data).subscribe(res => {
      console.log(res);
      Swal.fire({
      icon: 'success',
      title: 'Ownership changement Approved',
      showConfirmButton: false,
      timer: 3000
      });
      this.ngOnInit();
    }, err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      this.ngOnInit();
    });
    
  }
  refuse(id) {
     const data = {
      propId : id
    }
    this.paymentService.refuseChange(data).subscribe(res => {
      console.log(res);
      Swal.fire({
      icon: 'success',
      title: 'Ownership changement Refused',
      showConfirmButton: false,
      timer: 3000
      });
      this.ngOnInit();
    }, err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      this.ngOnInit();
    });
  }

}
