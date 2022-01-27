import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../ts/types';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productsCount: Observable<number>;

  constructor(private store: Store) {
    this.productsCount = this.store.select(
      (state) => state.cartProduct.products.length
    );
  }

  ngOnInit(): void {}
}
