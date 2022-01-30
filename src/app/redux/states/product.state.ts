import { AddProduct } from '../actions/product.action';
import { CartProduct, Product } from '../../ts/types';
import { Action, Selector, State, StateContext } from '@ngxs/store';

@State<CartProduct>({
  name: 'cartProduct',
  defaults: {
    products: [],
  },
})
export class ProductState {
  @Selector()
  static getProducts(state: CartProduct): Product[] {
    return state.products;
  }

  @Selector()
  static getProductCount(state: CartProduct): number {
    return state.products.reduce(
      (productCount: number, product: Product) =>
        productCount + product.quantity,
      0
    );
  }

  private alreadyExist(state: CartProduct, label: string): boolean {
    return state.products.find((product: Product) => product.label === label)
      ? true
      : false;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<CartProduct>,
    { payload }: AddProduct
  ) {
    const state = getState();
    let newProductsState: Product[] = [];
    if (this.alreadyExist(state, payload.label))
      newProductsState = state.products.map((product: Product) =>
        product.label !== payload.label
          ? product
          : { ...product, quantity: product.quantity + 1 }
      );
    else newProductsState = [...state.products, payload];
    patchState({
      products: newProductsState,
    });
  }
}
