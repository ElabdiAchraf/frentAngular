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
        Images:"",
        owner:"",
        _price: 0,
        _ownerAddress:"",
        description:"",
        forSell: false
      });
  }
  addImmobilier() {
    
    console.log(this.form.value);
  }
  onUpload(event) {
        for (const file of event.files) {
          this.uploadedFiles.push(file);
        }
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    console.log("UPLOADED FILES :   "+ this.uploadedFiles.length);
    }

}
