import { PhotoService } from './../../service/photoservice';
import { SelectItem } from 'primeng/api';
import { ContractService } from './../../service/contract.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approve-immobilier',
  templateUrl: './approve-immobilier.component.html',
  styleUrls: ['./approve-immobilier.component.scss']
})
export class ApproveImmobilierComponent implements OnInit {

  Immobiliers;
  sortOptions: SelectItem[];

    sortOrder: number;

  sortField: string;
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
          breakpoint: '200px',
          numVisible: 1,
          numScroll: 1
      }
  ];
          
  constructor(private contractService:ContractService,private photoService :PhotoService) { }

  ngOnInit(): void {
    this.contractService.waitingImmobiliers().subscribe(res => {
      this.Immobiliers = res;
      this.Immobiliers.forEach(Immobilier => {
        this.photoService.getPhotosByAnncId(Immobilier.id).subscribe((res:any) => {
          Immobilier.photos = res;     
          if (Immobilier.photos.length == 0) {
            Immobilier.hasPhotos = false;
          } else {
            Immobilier.hasPhotos = true;
          }
      
        });
      });

console.log(this.Immobiliers);




    });
    this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];
  }
    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
  approuveImmobilier(id) {
    const data = {
      propId : id
    }
    this.contractService.approveImmobilier(data).subscribe(res => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Immobilier Approved',
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
    
  }

}
