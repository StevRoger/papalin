import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() onClickBuy: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(value: string): void {
    this.onClickBuy.emit(value);
  }

}
