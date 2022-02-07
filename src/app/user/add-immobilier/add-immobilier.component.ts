import { PayementService } from 'src/app/service/payement.service';
import { ContractService } from './../../service/contract.service';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-immobilier',
  templateUrl: './add-immobilier.component.html',
  styleUrls: ['./add-immobilier.component.scss'],
  providers: [MessageService]
})
export class AddImmobilierComponent implements OnInit {

  form: FormGroup;
  valRadio: string;

  constructor(private Formbuilder: FormBuilder,private payementService : PayementService,private contractService:ContractService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.form = this.Formbuilder.group({
        privateKey :"",
        localisation:"",
      category: "",
        owner:"",
        _price: 0,
        _ownerAddress:"",
        description:"",
        forSell: false
      });
  }




  addImmobilier() {
    const privateKey = this.form.getRawValue().privateKey;
    const data = {
      privateKey: this.form.getRawValue().privateKey,
      localisation: this.form.getRawValue().localisation,
      category: this.form.getRawValue().category,
      owner: this.form.getRawValue().owner,
      _price: this.form.getRawValue()._price,
      _ownerAddress: this.form.getRawValue()._ownerAddress,
      description: this.form.getRawValue().description,
      forSell: this.form.getRawValue().forSell
    }

    console.log(data);
    this.contractService.addImmobilier(data).subscribe(res => {
      console.log(res);
      const data2 = {
        value: 5,
        privateKey: privateKey
      }
      console.log(data2);
      this.payementService.taxe(data2).subscribe(res => { console.log(res);  }, err => {console.log(err) });
      Swal.fire({
        icon: 'success',
        title: 'Immobilier saved, Wait for approvement',
        showConfirmButton: false,
        timer: 3000
      })
    }, err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    });
    
    this.form.reset();
  }

}
