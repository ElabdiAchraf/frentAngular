import { AppMainComponent } from 'src/app/app.main.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(public appMain: AppMainComponent) { }

  ngOnInit(): void {
  }

}
