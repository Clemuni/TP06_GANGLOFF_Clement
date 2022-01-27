import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MonService } from '../../../services/mon-service.service';
import { Product, FormInputChangeEventValues } from '../../../ts/types';
import { Store } from '@ngxs/store';
import { AddProduct } from '../../../redux/actions/product.action';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  catalog: Product[] = [];
  filterText: string = '';

  getCatalogSubscription: Subscription | null = null;

  constructor(private monService: MonService, private store: Store) {}

  ngOnInit(): void {
    this.getCatalogSubscription = this.monService
      .getCatalog()
      .subscribe((catalog: Product[]) => (this.catalog = catalog));
  }

  handleFilterEvent(parameters: FormInputChangeEventValues): void {
    this.getCatalogSubscription = this.monService
      .getCatalog()
      .subscribe(
        (catalog: Product[]) =>
          (this.catalog = catalog.filter((product) =>
            product.label.toLowerCase().includes(parameters.value.toLowerCase())
          ))
      );
  }

  addProduct(product: Product): void {
    this.store.dispatch(new AddProduct(product));
  }

  ngOnDestroy(): void {
    this.getCatalogSubscription?.unsubscribe();
  }
}
