import { PhotoService } from './../../service/photoservice';
import { ContractService } from 'src/app/service/contract.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approve-change-ownership',
  templateUrl: './approve-change-ownership.component.html',
  styleUrls: ['./approve-change-ownership.component.scss']
})
export class ApproveChangeOwnershipComponent implements OnInit {

  Immobiliers;
  loading:boolean = true;
  constructor(private contractService:ContractService,private photoService :PhotoService) { }

  ngOnInit(): void {
    this.contractService.waitingChangeImmobiliers().subscribe(res => { 
      this.Immobiliers = res;
      console.log(this.Immobiliers)
      this.loading = false;
    });
  }
  approveChangeOwnership(id) {
    const data = {
      propId : id
    }
    this.contractService.approveChangeOwnership(data).subscribe(res=>{
      console.log(res);
      Swal.fire({
      icon: 'success',
      title: 'Ownership changement Approved',
      showConfirmButton: false,
      timer: 3000
    });
    }, err => {
      console.log(err);
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
    });
  }


}
