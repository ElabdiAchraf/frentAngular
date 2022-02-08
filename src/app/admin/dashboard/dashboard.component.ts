import { PhotoService } from './../../service/photoservice';
import { ContractService } from 'src/app/service/contract.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/productservice';
 
@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    items: MenuItem[];

    products: Product[];
    Immobiliers
    chartData:any;

    constructor(private productService: ProductService,private contractService:ContractService,private photoService :PhotoService) {}

    ngOnInit() {
         if (!localStorage.getItem('foo')) { 
            localStorage.setItem('foo', 'no reload') 
            location.reload() 
        } else {
            localStorage.removeItem('foo') 
        }

        this.contractService.Immobiliers().subscribe(res => {
            this.Immobiliers = res;
            console.log(res);
            this.Immobiliers.forEach(Immobilier => {
                this.photoService.getPhotosByAnncId(Immobilier.id).subscribe((res: any) => {
                    Immobilier.photos = res;
                    if (Immobilier.photos.length == 0) {
                        Immobilier.hasPhotos = false;
                    } else {
                        Immobilier.hasPhotos = true;
                    }
      
                });
            });
        });
        this.productService.getProductsSmall().then(data => this.products = data);
          
        this.items = [
            {label: 'Add New', icon: 'pi pi-fw pi-plus'},
            {label: 'Remove', icon: 'pi pi-fw pi-minus'}
        ];

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#2f4860',
                    borderColor: '#2f4860',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#00bb7e',
                    borderColor: '#00bb7e',
                    tension: .4
                }
            ]
        };
    }
}
