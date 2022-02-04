import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-immobilier',
  templateUrl: './add-immobilier.component.html',
  styleUrls: ['./add-immobilier.component.scss'],
  providers: [MessageService]
})
export class AddImmobilierComponent implements OnInit {

  form: FormGroup;
  valRadio: string;
  uploadedFiles: any[] = [];

  constructor(private Formbuilder:FormBuilder,private messageService: MessageService) { }

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
  }
  onUpload(event) {
        for (const file of event.target.files) {
          this.uploadedFiles.push(file);
          console.log(this.uploadedFiles);
        }
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

}
