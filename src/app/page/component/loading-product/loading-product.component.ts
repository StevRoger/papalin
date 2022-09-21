import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-product',
  templateUrl: './loading-product.component.html',
  styleUrls: ['./loading-product.component.scss']
})
export class LoadingProductComponent implements OnInit {

  @Input() isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
