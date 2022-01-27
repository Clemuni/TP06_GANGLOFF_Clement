import { Product } from '../../ts/types';

export class AddProduct {
  static readonly type = '[Product] Add';

  constructor(public payload: Product) {}
}
